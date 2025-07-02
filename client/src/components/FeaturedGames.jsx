import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchFeaturedGames } from "../api/homeAPI";
import Loader from "./Loader";
import InteractiveDog from "./InteractiveDog";

const FeaturedGames = () => {
  const naviagte = useNavigate();
  const [featuredGames, setFeaturedGames] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const featuredGamesLoader = async () => {
      try {
        setLoader(true);
        const res = await fetchFeaturedGames();
        setFeaturedGames(res.data.data);
      } catch (error) {
        console.log("Error while loading featured games:", error);
      } finally {
        setLoader(false);
      }
    };
    featuredGamesLoader();
  }, []);

  return (
    <section className="py-12 bg-[#0F1A24] text-white">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">Featured Games</h2>
      {loader && <Loader />}
      {featuredGames.length <= 0 && !loader && (
        <div className="text-center text-gray-400 py-12">
          <div className="text-5xl mb-4 flex justify-center items-center">
            <InteractiveDog width={8} height={8} />
          </div>
          <h2 className="text-xl font-semibold mb-2">
            No featured games available
          </h2>
          <p className="text-sm text-gray-500">
            Check back later to see featured games.
          </p>
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-6">
        {featuredGames.map((game) => (
          <div
            key={game.slug}
            onClick={() => naviagte(`/game/${game.slug}`)}
            className="flex-1 min-w-[285px] flex flex-col bg-[#1A232C] hover:bg-[#334155] rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 w-full cursor-pointer"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-48 object-cover p-1 rounded-se-xl rounded-ss-xl"
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
