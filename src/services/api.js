import axios from "axios";

const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
});

export default api;
