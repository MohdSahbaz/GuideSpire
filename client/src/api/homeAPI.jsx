import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_baseURL || "http://localhost:8080/api",
});

export const fetchFeaturedGames = () => API.get("/home/featured-games");
export const fetchLatestGuides = () => API.get("/home/latest-guides");
export const fetchHomeBanners = () => API.get("/home/banners");
