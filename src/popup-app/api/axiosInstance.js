import axios from "axios";
import { BASE_URL } from "./config";

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  // timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "ngrok-skip-browser-warning": "true",
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("authToken");
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      console.error(
        "API Error:",
        error.response.data.message || error.response.statusText
      );
    } else {
      console.error("Network Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
