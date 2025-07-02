import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_baseURL || "http://localhost:8080/api",
});

export const fetchAllGames = (slug) =>
  API.get("/game/summary", { params: { slug } });

export const fetchGame = (slug) => API.get(`/game/${slug}`);
