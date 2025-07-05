import { useEffect, useState } from "react";
import { fetchCharacters } from "../../api/gameAPI";
import Loader from "../Loader";
import NoDataAvailable from "../NoDataAvailable";

const CharactersTab = ({ slug }) => {
  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const characterLoader = async () => {
      try {
        const res = await fetchCharacters(slug);
        setCharacters(res.data.data);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoader(false);
      }
    };
    characterLoader();
  }, [slug]);

  if (loader) {
    return <Loader />;
  }

  if (!loader && characters.length <= 0) {
    return <NoDataAvailable label="Characters" />;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {characters.map((character) => (
        <div
          key={character.id}
          className="backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 rounded p-3 text-center transition-all duration-300"
        >
          <img
            src={character.imageUrl}
            alt={character.name}
            className="object-contain mx-auto mb-2 drop-shadow-md"
          />
          <h3 className="text-sm sm:text-base font-medium text-white">
            {character.name}
          </h3>
          <p className="text-xs text-gray-400">{character.role}</p>
          <span
            className={`inline-block mt-1 px-2 py-0.5 text-xs font-bold rounded-full ${
              character.tier === "S"
                ? "bg-yellow-400/90 text-black"
                : character.tier === "A"
                ? "bg-blue-500/90 text-white"
                : "bg-gray-500/90 text-white"
            }`}
          >
            Tier {character.tier}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CharactersTab;
