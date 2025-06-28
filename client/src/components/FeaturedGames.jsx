import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchFeaturedGames } from "../api/homeAPI";

const FeaturedGames = () => {
  const naviagte = useNavigate();
  const [featuredGames, setFeaturedGames] = useState([]);

  useEffect(() => {
    const featuredGamesLoader = async () => {
      try {
        const res = await fetchFeaturedGames();
        setFeaturedGames(res.data.data);
      } catch (error) {
        console.log("Error while loading featured games:", error);
      }
    };
    featuredGamesLoader();
  }, []);

  return (
    <section className="py-12 bg-[#0F1A24] text-white">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">Featured Games</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {featuredGames.map((game) => (
          <div
            key={game.id}
            onClick={() => naviagte(`/game/${game.slug}`)}
            className="flex-1 min-w-[285px] flex flex-col bg-[#1A232C] rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 w-full cursor-pointer"
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
