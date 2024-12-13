import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...input) => {
  return twMerge(clsx(...input));
};

export const getChromeStorage = (key, callback) => {
  chrome.storage.local.get(key, (result) => {
    callback(result);
  });
};

export const setChromeStorage = (key, value) => {
  chrome.storage.local.set({ [key]: value });
};

export const clearChromeStorage = () => {
  chrome.storage.local.clear();
};

export function parseToJSON(input) {
  const result = {};

  const pairs = input.split("; ");

  pairs.forEach((pair) => {
    const [key, value] = pair.split("=");
    result[key] = value;
  });

  return result;
}
