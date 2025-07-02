import { useEffect, useState } from "react";
import { fetchAllGames } from "../api/gameAPI";
import { useNavigate } from "react-router-dom";
import Loader from "@components/Loader";

const AllGames = () => {
  const [games, setGames] = useState([]);
  const naviagte = useNavigate();
  const [loader, setLoader] = useState(true);
  const [slug, setSlug] = useState("");

  useEffect(() => {
    const allGamesLoader = async () => {
      try {
        const res = await fetchAllGames(slug);
        setGames(res.data.data);
      } catch (error) {
        console.log("Errors: " + error);
      } finally {
        setLoader(false);
      }
    };
    allGamesLoader();
  }, [slug]);

  return (
    <div className="text-white min-h-screen p-6">
      {/* Search & Filters */}
      <div className="max-w-6xl mx-auto">
        <input
          type="text"
          onChange={(e) => {
            const userInput = e.target.value;
            const formattedSlug = userInput
              .trim()
              .toLowerCase()
              .replace(/\s+/g, "-");
            setSlug(formattedSlug);
          }}
          placeholder="Search for games"
          className="w-full bg-[#1e293b] text-white px-4 py-2 rounded-lg mb-6 focus:outline-none"
        />
        {loader && <Loader />}
        {slug !== "" && games.length <= 0 && !loader && (
          <div className="text-center text-gray-400 py-12">
            <div className="text-5xl mb-4">
              <img
                src="/sadDog.svg"
                alt="GuideSpire Logo"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">No games found</h2>
            <p className="text-sm text-gray-500">
              Try searching with a different keyword.
            </p>
          </div>
        )}

        {slug === "" && games.length <= 0 && !loader && (
          <div className="text-center text-gray-400 py-12">
            <div className="text-5xl mb-4">
              <img
                src="/sadDog.svg"
                alt="GuideSpire Logo"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">
              No games available right now
            </h2>
            <p className="text-sm text-gray-500">
              Check back later to see newly added games.
            </p>
          </div>
        )}

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
