import { Link } from "react-router-dom";

const GameNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-145px)] text-white p-6">
      <h1 className="text-4xl font-bold mb-4 text-red-500 flex justify-center items-center">
        <img src="/sadDog.svg" alt="GuideSpire Logo" className="w-16 h-16" />
        Game Not Found
      </h1>
      <p className="text-gray-300 mb-6 text-center max-w-md">
        Sorry, the game you're looking for doesn't exist or has been removed
        from our database.
      </p>
      <Link
        to="/games"
        className="px-5 py-2 bg-cyan-600 hover:bg-cyan-700 transition-all rounded text-white font-medium"
      >
        Back to Games
      </Link>
    </div>
  );
};

export default GameNotFound;
