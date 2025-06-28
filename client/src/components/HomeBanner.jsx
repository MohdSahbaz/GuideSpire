import { useEffect, useState } from "react";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 3000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {bannerImages.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={image.alt}
            className="w-full min-w-full h-[300px] object-contain rounded"
          />
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {bannerImages.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-500"
            } transition-all`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
