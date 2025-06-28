import React from "react";

const guideData = [
  {
    id: 1,
    game: "Wuthering Waves",
    title: "Beginner's Guide to Wuthering Waves",
    description:
      "Learn the basics of Wuthering Waves, including combat, exploration, and character progression.",
    image: "https://howlongtobeat.com/games/138060_Wuthering_Waves.jpg",
  },
  {
    id: 2,
    game: "Teyvat Impact",
    title: "Teyvat Impact Character Tier List",
    description:
      "Check out our updated tier list for all characters in Teyvat Impact.",
    image:
      "https://cdn.wccftech.com/wp-content/uploads/2023/08/genshin-impact-4-scaled.jpg",
  },
  {
    id: 3,
    game: "Star Rail Galaxy",
    title: "Star Rail: Galaxy Team Building Guide",
    description:
      "Build the best teams for Star Rail: Galaxy with our comprehensive guide.",
    image:
      "https://cdn.akamai.steamstatic.com/steam/apps/2084970/capsule_616x353.jpg?t=1689652164",
  },
];

const LatestGuides = () => {
  return (
    <section className="bg-[#0F1A24] text-white py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">Latest Guides</h2>

      <div className="flex flex-col gap-10">
        {guideData.map((guide) => (
          <div
            key={guide.id}
            className="flex flex-col sm:flex-row sm:items-start gap-6"
          >
            {/* Text Content */}
            <div className="flex-1">
              <p className="text-gray-400 text-sm mb-1">{guide.game}</p>
              <h3 className="text-lg sm:text-xl font-semibold">
                {guide.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mt-1">
                {guide.description}
              </p>
            </div>

            {/* Thumbnail */}
            <img
              src={guide.image}
              alt={guide.title}
              className="w-full sm:w-[200px] h-[140px] object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestGuides;
