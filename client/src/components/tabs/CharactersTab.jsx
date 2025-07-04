const characters = [
  {
    id: "build1",
    name: "Rover",
    imageUrl: "https://images6.alphacoders.com/133/thumb-1920-1330233.jpeg",
    role: "Main DPS",
    tier: "A",
    gameSlug: "wuthering-waves",
  },
  {
    id: "build2",
    name: "Yangyang",
    imageUrl: "https://images6.alphacoders.com/133/thumb-1920-1330233.jpeg",
    role: "Support",
    tier: "S",
    gameSlug: "wuthering-waves",
  },
  {
    id: "build3",
    name: "Verina",
    imageUrl: "https://images6.alphacoders.com/133/thumb-1920-1330233.jpeg",
    role: "Healer",
    tier: "S",
    gameSlug: "wuthering-waves",
  },
  {
    id: "build4",
    name: "Mortefi",
    imageUrl: "https://images6.alphacoders.com/133/thumb-1920-1330233.jpeg",
    role: "Sub DPS",
    tier: "A",
    gameSlug: "wuthering-waves",
  },
  {
    id: "build5",
    name: "Jianxin",
    imageUrl: "https://images6.alphacoders.com/133/thumb-1920-1330233.jpeg",
    role: "Crowd Control",
    tier: "B",
    gameSlug: "wuthering-waves",
  },
];

const CharactersTab = ({ slug }) => {
  const filtered = characters.filter((c) => c.gameSlug === slug);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {filtered.map((character) => (
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
