const path = require("path");
const copyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  entry: {
    popup: path.resolve(__dirname, "src/popup/popup.jsx"),
    options: path.resolve(__dirname, "src/options/options.jsx"),
    background: path.resolve(__dirname, "src/background/background.js"),
    contentScript: path.resolve(
      __dirname,
      "src/contentScript/contentScript.jsx"
    ),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Handles .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                ident: "postcss",
                plugins: [tailwindcss, autoprefixer],
              },
            },
          },
        ],
        test: /\.css$/i,
      },
      {
        type: "asset/resource",
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf)$/i,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new copyPlugin({
      patterns: [
        {
          from: "src/static",
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),

    ...getHTMLPlugins(["popup", "options"]),
  ],
  resolve: {
    extensions: [".jsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      chunks(chunk) {
        return chunk.name !== "contentScript";
      },
    },
  },
};

function getHTMLPlugins(chunks) {
  return chunks.map(
    (chunk) =>
      new HtmlWebpackPlugin({
        title: "Read It Extension",
        filename: `${chunk}.html`,
        chunks: [chunk],
      })
  );
}
