import axios from "axios";

const api = axios.create({
  baseURL: "https://kenzieshop.herokuapp.com",
});

export default api;
