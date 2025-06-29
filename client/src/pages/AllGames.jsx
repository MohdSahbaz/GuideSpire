import { useEffect, useState } from "react";

// Dummy Data – Replace with API later
const dummyGames = [
  {
    title: "Wuthering Echoes",
    desc: "A new action RPG with stunning visuals and deep combat.",
    img: "https://via.placeholder.com/300x400?text=Wuthering+Echoes",
  },
  {
    title: "Glimmering Impact",
    desc: "An open-world adventure with a rich story and diverse characters.",
    img: "https://via.placeholder.com/300x400?text=Glimmering+Impact",
  },
  {
    title: "Honkai: Star Rail",
    desc: "A turn-based RPG set in a sci-fi universe with strategic battles.",
    img: "https://via.placeholder.com/300x400?text=Honkai+Star+Rail",
  },
  {
    title: "Zenless Zone Zero",
    desc: "An urban fantasy action RPG with stylish graphics and fast-paced gameplay.",
    img: "https://via.placeholder.com/300x400?text=Zenless+Zone+Zero",
  },
  {
    title: "Arknights",
    desc: "A strategic tower defense game with a compelling narrative.",
    img: "https://via.placeholder.com/300x400?text=Arknights",
  },
  {
    title: "Reverse: 1999",
    desc: "A time-traveling RPG with unique characters and a captivating story.",
    img: "https://via.placeholder.com/300x400?text=Reverse+1999",
  },
  {
    title: "Punishing: Gray Raven",
    desc: "A dark and stylish action RPG with intense combat.",
    img: "https://via.placeholder.com/300x400?text=PGR",
  },
  {
    title: "Tower of Fantasy",
    desc: "An open-world RPG with a vast world to explore and customize.",
    img: "https://via.placeholder.com/300x400?text=Tower+of+Fantasy",
  },
];

const AllGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Simulate API loading
    setTimeout(() => {
      setGames(dummyGames);
    }, 500);
  }, []);

  return (
    <div className="text-white min-h-screen p-6">
      {/* Search & Filters */}
      <div className="max-w-6xl mx-auto">
        <input
          type="text"
          placeholder="Search for games"
          className="w-full bg-[#1e293b] text-white px-4 py-2 rounded-lg mb-6 focus:outline-none"
        />
        <div className="flex gap-3 mb-8">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
            All
          </button>
          <button className="bg-[#1e293b] hover:bg-blue-700 px-4 py-2 rounded-lg">
            Action
          </button>
          <button className="bg-[#1e293b] hover:bg-blue-700 px-4 py-2 rounded-lg">
            RPG
          </button>
        </div>

        {/* Games Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-[#1e293b] hover:bg-[#334155] transition p-3 rounded-lg shadow-md cursor-pointer"
            >
              <img
                src={game.img}
                alt={game.title}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold">{game.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{game.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllGames;
