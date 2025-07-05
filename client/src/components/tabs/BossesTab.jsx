import { useEffect, useState } from "react";
import { fetchBosses } from "../../api/gameAPI";
import Loader from "../Loader";
import NoDataAvailable from "../NoDataAvailable";

const BossesTab = ({ slug }) => {
  const [bosses, setBosses] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const bossesLoader = async () => {
      try {
        const res = await fetchBosses(slug);
        setBosses(res.data.data);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoader(false);
      }
    };
    bossesLoader();
  }, [slug]);

  if (loader) {
    return <Loader />;
  }

  if (!loader && bosses.length <= 0) {
    return <NoDataAvailable label="Bosses" />;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {bosses.map((boss) => (
        <div
          key={boss.id}
          className="backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 rounded p-3 text-center transition-all duration-300"
        >
          <img
            src={boss.imageUrl}
            alt={boss.name}
            className="object-contain mx-auto mb-2 drop-shadow-md"
          />
          <h3 className="text-sm sm:text-base font-medium text-white">
            {boss.name}
          </h3>
          <p className="text-xs text-gray-400">{boss.element} Element</p>
          <span
            className={`inline-block mt-1 px-2 py-0.5 text-xs font-bold rounded-full ${
              boss.tier === "S"
                ? "bg-yellow-400/90 text-black"
                : boss.tier === "A"
                ? "bg-blue-500/90 text-white"
                : "bg-gray-500/90 text-white"
            }`}
          >
            Tier {boss.tier}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BossesTab;
