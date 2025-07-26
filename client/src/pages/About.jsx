import React from "react";

export default function About() {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/10">
        <h1 className="text-4xl font-bold text-white mb-4">
          About <span className="text-indigo-400">GuideSpire</span>
        </h1>
        <p className="text-gray-300 text-lg mb-4 leading-relaxed">
          <strong>GuideSpire</strong> is a game discovery and detail platform
          built for players who want to explore everything about their favorite
          titles — from gameplay mechanics and storylines to genres, reviews,
          and more.
        </p>
        <p className="text-gray-400 text-base leading-relaxed">
          Whether you're browsing for your next adventure or diving deeper into
          a game you love, GuideSpire offers an immersive and stylish experience
          tailored for gamers. With up-to-date information, engaging visuals,
          and a sleek interface, we make game exploration fun and intuitive.
        </p>
        <p className="text-gray-400 text-base leading-relaxed mt-4">
          Discover. Learn. Play. That’s the spirit of GuideSpire.
        </p>
      </div>
    </div>
  );
}
