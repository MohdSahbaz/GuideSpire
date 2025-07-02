import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameNotFound from "../components/GameNotFound";
import GameTabs from "../components/GameTabs";
import Loader from "@components/Loader";
import { fetchGame } from "../api/gameAPI";

const Game = () => {
  const [game, setGame] = useState([]);
  const [loader, setLoader] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    const gameLoader = async () => {
      try {
        const res = await fetchGame(slug);
        setGame(res.data.data);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoader(false);
      }
    };
    gameLoader();
  }, [slug]);

  if (!game || (Object.keys(game).length === 0 && !loader)) {
    return <GameNotFound />;
  }

  return (
    <div className="text-white min-h-[calc(100vh-145px)] p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-2">
        <span className="hover:underline cursor-pointer text-blue-400">
          Games
        </span>{" "}
        / <span className="text-white">{game.title || slug}</span>
      </div>

      {loader && <Loader />}

      {Object.keys(game).length > 0 && (
        <>
          {/* Banner and Info Side-by-Side */}
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {/* Banner */}
            <div className="w-full md:w-1/2 rounded-md overflow-hidden">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover rounded"
              />
            </div>

            {/* Info */}
            <div className="w-full md:w-1/2 grid grid-cols-1 gap-4 text-sm text-gray-300">
              <div>
                <p className="text-gray-500">Developer</p>
                <p>{game.developer || "N/A"}</p>
              </div>
              <div>
                <p className="text-gray-500">Release Date</p>
                <p>{game.releaseDate || "N/A"}</p>
              </div>
              <div>
                <p className="text-gray-500">Genres</p>
                <p>
                  {game?.genres?.join
                    ? game.genres.join(", ")
                    : game.genres || "N/A"}
                </p>
              </div>
              <div>
                <p className="text-gray-500">Platforms</p>
                <p>
                  {game?.platforms?.join
                    ? game.platforms.join(", ")
                    : game.platforms || "N/A"}
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 max-w-4xl mb-8">{game.description}</p>
        </>
      )}
      {/* <GameTabs /> */}
    </div>
  );
};

export default Game;
