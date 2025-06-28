import { useEffect, useRef, useState } from "react";

const bannerImages = [
  {
    id: 1,
    url: "https://howlongtobeat.com/games/138060_Wuthering_Waves.jpg",
    alt: "WUWU",
  },
  {
    id: 2,
    url: "https://cdn.akamai.steamstatic.com/steam/apps/2084970/capsule_616x353.jpg?t=1689652164",
    alt: "Etheria Restart",
  },
  {
    id: 3,
    url: "https://cdn.wccftech.com/wp-content/uploads/2023/08/genshin-impact-4-scaled.jpg",
    alt: "Genshin Impact",
  },
];

const HomeBanner = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setCurrent((prev) => (prev + 1) % bannerImages.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [paused]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? bannerImages.length - 1 : prev - 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) nextSlide(); // swipe left
    else if (diff < -50) prevSlide(); // swipe right
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-md"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slide Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {bannerImages.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={image.alt}
            className="w-full min-w-full h-[180px] sm:h-[260px] md:h-[300px] lg:h-[400px] object-cover"
          />
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
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full text-sm sm:text-base z-10"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full text-sm sm:text-base z-10"
      >
        ›
      </button>
    </div>
  );
};

export default HomeBanner;
