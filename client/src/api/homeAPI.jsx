import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_baseURL || "http://localhost:8080/api",
});

export const fetchHomeBanners = () => API.get("/game/banner-games");
export const fetchFeaturedGames = () => API.get("/game/featured-games");
export const fetchLatestGuides = () => API.get("/home/latest-guides");
