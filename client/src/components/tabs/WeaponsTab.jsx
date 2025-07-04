const weapons = [
  {
    id: "w1",
    name: "Hollow Mirage",
    imageUrl: "https://images6.alphacoders.com/133/thumb-1920-1330233.jpeg",
    type: "Broadblade",
    tier: "S",
    gameSlug: "wuthering-waves",
  },
  {
    id: "w2",
    name: "Static Mist",
    imageUrl: "https://images6.alphacoders.com/133/thumb-1920-1330233.jpeg",
    type: "Pistols",
    tier: "A",
    gameSlug: "wuthering-waves",
  },
  {
    id: "w3",
    name: "Lunar Cutter",
    imageUrl: "https://images6.alphacoders.com/133/thumb-1920-1330233.jpeg",
    type: "Sword",
    tier: "S",
    gameSlug: "wuthering-waves",
  },
  {
    id: "w4",
    name: "Comet Flare",
    imageUrl: "https://images6.alphacoders.com/133/thumb-1920-1330233.jpeg",
    type: "Gauntlets",
    tier: "B",
    gameSlug: "wuthering-waves",
  },
  {
    id: "w5",
    name: "Void Thunder",
    imageUrl: "https://images6.alphacoders.com/133/thumb-1920-1330233.jpeg",
    type: "Rectifier",
    tier: "A",
    gameSlug: "wuthering-waves",
  },
];

const WeaponsTab = ({ slug }) => {
  const filtered = weapons.filter((w) => w.gameSlug === slug);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {filtered.map((weapon) => (
        <div
          key={weapon.id}
          className="backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 rounded p-3 text-center transition-all duration-300"
        >
          <img
            src={weapon.imageUrl}
            alt={weapon.name}
            className="object-contain mx-auto mb-2 drop-shadow-md"
          />
          <h3 className="text-sm sm:text-base font-medium text-white">
            {weapon.name}
          </h3>
          <p className="text-xs text-gray-400">{weapon.type}</p>
          <span
            className={`inline-block mt-1 px-2 py-0.5 text-xs font-bold rounded-full ${
              weapon.tier === "S"
                ? "bg-yellow-400/90 text-black"
                : weapon.tier === "A"
                ? "bg-blue-500/90 text-white"
                : "bg-gray-500/90 text-white"
            }`}
          >
            Tier {weapon.tier}
          </span>
        </div>
      ))}
    </div>
  );
};

export default WeaponsTab;
