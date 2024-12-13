import { getChromeStorage, parseToJSON } from "../utils";
import axiosInstance from "./axiosInstance";

// GET REQUEST DEMO
// export const fetchProductList = async () => {
//   try {
//     const data = await axiosInstance.get("/endpoint");
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return error;
//   }
// };

// POST REQUEST DEMO
export const fetchProductList = async () => {
  try {
    // Make the POST request
    getChromeStorage(["webCookie"], async ({ webCookie }) => {
      const data = await axiosInstance.post("/bol", {
        cookies: parseToJSON(webCookie),
      });
      return data;
    });
  } catch (error) {
    console.error("Error posting data:", error);
    return error;
  }
};
