"use client";
import React from "react";

export const OpeningCards = () => {
  const cardsArray = ["Legendary", "Epic", "Rare", "Uncommon", "Common"];

  return (
    <div className="relative">
      <div className=" text-white w-full flex flex-col justify-center items-center mb-20 mt-20">
        <h1 className="text-5xl font-bold mb-4 text-center mt-5">
          Build your UFC collection today!
        </h1>
        <p className="text-lg text-gray-300 mb-8 text-center max-w-xl">
          Open your free packages every day and acquire unique UFC fighter cards
          for your collection. reset every 24 hours.
        </p>
        <button
          className="bg-gray-600 hover:bg-red-600 px-6 py-3 mb-10 rounded-lg text-lg font-medium transition-transform hover:shadow-[0_0_5px_5px_rgba(255,0,0,0.6)] hover:border-red-700"
          onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
        >
          Open a package
        </button>

        <div className="flex flex-col justify-center items-center">
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {cardsArray.map((card) => (
              <div
                key={card}
                className="w-40 h-60  bg-black border-2 border-red-600 rounded-lg shadow-lg transform hover:scale-110 transition-transform hover:shadow-[0_0_15px_5px_rgba(255,0,0,0.6)] hover:border-red-700"
              >
                <p className="text-center text-white  mt-24 ">Card: {card}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
