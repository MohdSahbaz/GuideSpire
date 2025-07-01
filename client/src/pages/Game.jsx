import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameNotFound from "../components/GameNotFound";
import GameTabs from "../components/GameTabs";
import { fetchGame } from "../api/gameAPI";

const games = [
  {
    slug: "wuthering-waves",
    title: "Wuthering Waves",
    developer: "Kuro Games",
    releaseDate: "May 22, 2024",
    genres: "Action RPG",
    platforms: "PC, iOS, Android",
    description:
      "Wuthering Waves is an action role-playing game developed by Kuro Games. Set in a post-apocalyptic world, players explore vast landscapes, engage in combat with unique characters, and uncover the mysteries of a world recovering from a cataclysmic event.",
    bannerUrl: "/assets/wuthering-waves-banner.png",
  },
  {
    slug: "genshin-impact",
    title: "Genshin Impact",
    developer: "HoYoverse",
    releaseDate: "September 28, 2020",
    genres: "Action RPG, Open World",
    platforms: "PC, PS4, PS5, iOS, Android",
    description:
      "Genshin Impact is an open-world action RPG where players explore the land of Teyvat, unravel mysteries, and harness the powers of elemental gods.",
    bannerUrl: "/assets/genshin-impact-banner.png",
  },
];

const Game = () => {
  const [game, setGame] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    const gameLoader = async () => {
      try {
        const res = await fetchGame(slug);
        setGame(res.data.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    gameLoader();
  }, [slug]);

  if (!game) {
    return <GameNotFound />;
  }

  return (
    <div className="text-white min-h-[calc(100vh-145px)] p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-2">
        <span className="hover:underline cursor-pointer text-blue-400">
          Games
        </span>{" "}
        / <span className="text-white">{game.title}</span>
      </div>

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

      {/* <GameTabs /> */}
    </div>
  );
};

export default Game;
