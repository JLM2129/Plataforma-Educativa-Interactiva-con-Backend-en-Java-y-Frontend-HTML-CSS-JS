import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // Puedes cambiar esto si haces deploy
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
