import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0F1A24] text-white px-6 text-center">
      <h1 className="text-7xl font-extrabold mb-4 flex justify-center items-center">
        <img src="/sadDog.svg" alt="GuideSpire Logo" className="w-16 h-16" />{" "}
        404
      </h1>
      <h2 className="text-2xl font-semibold mb-2">Lost in the Spire...</h2>
      <p className="mb-6 text-gray-300 max-w-md">
        The page you’re looking for doesn’t exist or still under construction.
        <br></br> You can return home and continue exploring the world of games!
      </p>

      <Link
        to="/"
        className="px-5 py-2 bg-cyan-600 hover:bg-cyan-700 transition-all rounded text-white font-medium"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
