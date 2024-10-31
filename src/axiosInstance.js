import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Update with your server's base URL
});

// Attach JWT token to every request if available
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
