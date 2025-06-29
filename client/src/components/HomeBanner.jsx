import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchHomeBanners } from "../api/homeAPI";

const HomeBanner = () => {
  const [bannerImages, setBannerImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadBanners = async () => {
      try {
        const res = await fetchHomeBanners();
        setBannerImages(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.error("Failed to fetch banner image:", error);
      }
    };
    loadBanners();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setCurrent((prev) => (prev + 1) % bannerImages.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [paused, bannerImages.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? bannerImages.length - 1 : prev - 1));
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-md"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {bannerImages.map((image) => (
          <div
            key={image.slug}
            onClick={() => navigate(`game/${image.slug}`)}
            className="relative w-full min-w-full h-[180px] sm:h-[260px] md:h-[300px] lg:h-[400px] cursor-pointer"
          >
            {/* Image */}
            <img
              src={image.image}
              alt={image.name}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/[.1] bg-opacity-40 flex items-end z-20">
              <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold p-4">
                {image.name}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {bannerImages.map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full text-sm sm:text-base z-40"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full text-sm sm:text-base z-40"
      >
        ›
      </button>
    </div>
  );
};

export default HomeBanner;
