import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0F1A24] text-white px-6 text-center">
      <h1 className="text-7xl font-extrabold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Lost in the Spire...</h2>
      <p className="mb-6 text-gray-300 max-w-md">
        The page you’re looking for doesn’t exist or still under construction.
        <br></br> You can return home and continue exploring the world of games!
      </p>

      <Link
        to="/"
        className="px-6 py-3 font-semibold text-[#0F1A24] bg-white rounded-full shadow-md hover:bg-opacity-90 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-white/30 active:scale-95 transition-all duration-200 ease-in-out"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
