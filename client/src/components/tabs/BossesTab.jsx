const bosses = [
  {
    id: "b1",
    name: "Crownless",
    imageUrl: "https://images6.alphacoders.com/133/thumb-1920-1330233.jpeg",
    element: "Fusion",
    tier: "S",
    gameSlug: "wuthering-waves",
  },
  {
    id: "b2",
    name: "Tempest Mephis",
    imageUrl: "https://images6.alphacoders.com/133/thumb-1920-1330233.jpeg",
    element: "Aero",
    tier: "A",
    gameSlug: "wuthering-waves",
  },
  {
    id: "b3",
    name: "Impermanence Heron",
    imageUrl: "https://images6.alphacoders.com/133/thumb-1920-1330233.jpeg",
    element: "Havoc",
    tier: "S",
    gameSlug: "wuthering-waves",
  },
  {
    id: "b4",
    name: "Thundering Mephis",
    imageUrl: "https://images6.alphacoders.com/133/thumb-1920-1330233.jpeg",
    element: "Electro",
    tier: "A",
    gameSlug: "wuthering-waves",
  },
  {
    id: "b5",
    name: "Bell-Borne Geochelone",
    imageUrl: "https://images6.alphacoders.com/133/thumb-1920-1330233.jpeg",
    element: "Glacio",
    tier: "B",
    gameSlug: "wuthering-waves",
  },
];

const BossesTab = ({ slug }) => {
  const filtered = bosses.filter((b) => b.gameSlug === slug);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {filtered.map((boss) => (
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
