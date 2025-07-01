import { useState } from "react";

const GameTabs = () => {
  const tabs = [
    // "Characters",
    // "Weapons",
    // "Tier List",
    // "Bosses",
    // "Builds",
    // "Guides",
  ];

  const [activeTab, setActiveTab] = useState("Overview");

  return (
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
  );
};

export default GameTabs;
