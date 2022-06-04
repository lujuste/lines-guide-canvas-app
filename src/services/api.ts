import axios from "axios";

const api = axios.create({
  // baseURL: "http://3.83.127.244"
  baseURL: process.env.REACT_APP_CURRENT_API
});

export default api;
