import axios from "axios";

const api = axios.create({
  baseURL: "https://dihome.herokuapp.com",
});

export default api;
