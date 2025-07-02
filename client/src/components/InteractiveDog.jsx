import { useState } from "react";

const InteractiveDog = () => {
  const [barkMessage, setBarkMessage] = useState("");
  const [isBallThrown, setIsBallThrown] = useState(false);

  const handleBallClick = () => {
    if (isBallThrown) return;
    setIsBallThrown(true);
    setBarkMessage("Yay! 🎾");

    setTimeout(() => {
      setIsBallThrown(false);
      setBarkMessage("");
    }, 1800); // Reset after animation
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Dog */}
      <div
        className={`group cursor-pointer transition-transform duration-300 ${
          isBallThrown
            ? "animate-bounce"
            : "group-hover:rotate-6 group-hover:scale-105"
        }`}
      >
        <img src="/sadDog.svg" alt="GuideSpire Dog" className="w-20 h-20" />
        {barkMessage && (
          <div className="absolute -top-6 left-24 bg-white text-black px-3 py-1 rounded-lg shadow text-sm animate-bounce">
            {barkMessage}
          </div>
        )}
      </div>

      {/* Circle Ball */}
      <div
        onMouseEnter={handleBallClick}
        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-700 ${
          isBallThrown
            ? "translate-y-[-120px] translate-x-[50px] opacity-0"
            : "opacity-100"
        }`}
      >
        <div className="w-10 h-10 bg-yellow-400 rounded-full shadow-md hover:scale-110 transition-transform" />
      </div>
    </div>
  );
};

export default InteractiveDog;
