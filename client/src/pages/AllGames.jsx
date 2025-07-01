import { useEffect, useState } from "react";
import { fetchAllGames } from "../api/gameAPI";
import { useNavigate } from "react-router-dom";

const AllGames = () => {
  const [games, setGames] = useState([]);
  const naviagte = useNavigate();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const allGamesLoader = async () => {
      try {
        const res = await fetchAllGames();
        setGames(res.data.data);
      } catch (error) {
        console.log("Errors: " + error);
      } finally {
        setLoader(false);
      }
    };
    allGamesLoader();
  }, []);

  return (
    <div className="text-white min-h-screen p-6">
      {/* Search & Filters */}
      <div className="max-w-6xl mx-auto">
        <input
          type="text"
          placeholder="Search for games"
          className="w-full bg-[#1e293b] text-white px-4 py-2 rounded-lg mb-6 focus:outline-none"
        />

        {/* Games Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <div
              key={index}
              onClick={() => naviagte(`/game/${game.slug}`)}
              className="bg-[#1e293b] hover:bg-[#334155] transition p-3 rounded-lg shadow-md cursor-pointer"
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold">{game.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{game.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllGames;
