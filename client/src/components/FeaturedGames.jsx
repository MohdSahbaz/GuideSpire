import React from "react";

const featuredGames = [
  {
    id: 1,
    title: "Wuthering Waves",
    description:
      "A new open-world RPG with stunning visuals and dynamic combat.",
    image: "https://howlongtobeat.com/games/138060_Wuthering_Waves.jpg", // Replace with actual image
  },
  {
    id: 2,
    title: "Teyvat Impact",
    description: "Explore the vast world of Teyvat in this popular action RPG.",
    image: "https://cdn.wccftech.com/wp-content/uploads/2023/08/genshin-impact-4-scaled.jpg", // Replace with actual image
  },
  {
    id: 3,
    title: "Star Rail Galaxy",
    description: "Embark on an intergalactic journey in this turn-based RPG.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/2084970/capsule_616x353.jpg?t=1689652164", // Replace with actual image
  },
];

const FeaturedGames = () => {
  return (
    <section className="py-12 bg-[#0F1A24] text-white">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">Featured Games</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {featuredGames.map((game) => (
          <div
            key={game.id}
            className="flex-1 min-w-[285px] flex flex-col bg-[#1A232C] rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 w-full"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <h3 className="text-lg font-semibold mb-1">{game.title}</h3>
              <p className="text-gray-300 text-sm">{game.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedGames;
