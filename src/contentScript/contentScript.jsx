chrome.runtime.sendMessage("From the content script", (response) => {
  console.log(response);
});

import React, { useEffect } from "react";
import ReactDom from "react-dom/client";
import { setChromeStorage } from "../popup-app/utils";

const App = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (document.cookie) {
        setChromeStorage("webCookie", document.cookie);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div id="content-script"></div>;
};

// create root and append to body
const root = document.createElement("div");
document.body.appendChild(root);
// add class to root
root.classList.add("root");

const rootElement = document.querySelector(".root");

ReactDom.createRoot(rootElement).render(<App />);
