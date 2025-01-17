"use client";
import React from "react";

export const OpeningCards = () => {
  const cardsArray = ["Legendary", "Epic", "Rare", "Uncommon", "Common"];

  return (
    <div className="bg-gradient-to-l from-gray-900 to-black text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-4 text-center">
        Build your UFC collection today!
      </h1>
      <p className="text-lg text-gray-300 mb-8 text-center max-w-xl">
        Open your free packages every day and acquire unique UFC fighter cards.
      </p>
      <button
        className="bg-red-600 hover:bg-black px-6 py-3 rounded-lg text-lg font-medium transition-all"
        onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
      >
        Start today opening cards!
      </button>

      <div className="mt-16 flex space-x-4">
        {cardsArray.map((card) => (
          <div
            key={card}
            className="w-40 h-60 bg-black border-2 border-red-600 rounded-lg shadow-lg transform hover:scale-110 transition-transform"
          >
            <p className="text-center text-white mt-24">Card: {card}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
