import { Link } from "react-router-dom";

const CheckBackSoon = () => {
  return (
    <div className="min-h-[calc(100vh-140px)] flex flex-col items-center justify-center bg-[#0F1A24] text-white px-6 text-center">
      <h1 className="text-5xl font-bold mb-4">WIP 🔧</h1>
      <h2 className="text-2xl font-semibold mb-2">
        This page is still under construction
      </h2>
      <p className="mb-6 text-gray-300">
        We're building something awesome here. Check back soon!
      </p>
    </div>
  );
};

export default CheckBackSoon;
