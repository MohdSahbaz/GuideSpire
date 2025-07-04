import { lazy, Suspense, useState } from "react";
import Loader from "./Loader";

const CharactersTab = lazy(() => import("./tabs/CharactersTab"));
const WeaponsTab = lazy(() => import("./tabs/WeaponsTab"));
const BossesTab = lazy(() => import("./tabs/BossesTab"));

const GameTabs = ({ slug }) => {
  const tabs = ["Characters", "Weapons", "Bosses"];

  const [activeTab, setActiveTab] = useState("Characters");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Characters":
        return <CharactersTab slug={slug} />;
      case "Weapons":
        return <WeaponsTab slug={slug} />;
      case "Bosses":
        return <BossesTab slug={slug} />;
        x;
      default:
        return <div>Unknown Tab</div>;
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-4 border-b border-gray-700 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm font-medium transition-all cursor-pointer ${
              activeTab === tab
                ? "text-white border-b-2 border-cyan-500"
                : "text-gray-300 border-b-2 border-transparent hover:text-white hover:border-cyan-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="min-h-[200px]">
        <Suspense fallback={<Loader />}>{renderTabContent()}</Suspense>
      </div>
    </>
  );
};

export default GameTabs;
