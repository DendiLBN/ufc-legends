"use client";

import { RedBar } from "@/components/landing-page/red-bar/red-bar";

export const InfoCards = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-black text-white relative overflow-hidden min-h-[50vh]">
      <div className="relative">
        <div className="absolute  bg-gradient-to-b from-red-900 to-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-800 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative p-8 bg-black rounded-lg">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-red-600/10 rounded-xl"></div>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-4">
                  Cards
                </h3>
                <p className="text-gray-400 text-center">
                  Build your collection with cards from all UFC fighters. From
                  common cards to legendary moments. Build your collection with
                  cards from all UFC fighters. From common cards to legendary
                  moments. Build your collection with cards from all UFC
                  fighters. From common cards to legendary moments.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-800 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative p-8 bg-black rounded-lg">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-red-600/10 rounded-xl"></div>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-4">
                  Market
                </h3>
                <p className="text-gray-400 text-center">
                  Exchange cards with collectors worldwide. Build your perfect
                  UFC collection. Exchange cards with collectors worldwide.
                  Build your perfect UFC collection. Exchange cards with
                  collectors worldwide. Build your perfect UFC collection.
                  Exchange cards with collectors worldwide. Build your perfect
                  UFC collection.
                </p>
              </div>
            </div>

            <div className="group relative">
              {/* red bar */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-800 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative p-8 bg-black rounded-lg">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-red-600/10 rounded-xl "></div>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-4">
                  Trade
                </h3>
                <p className="text-gray-400 text-center">
                  Join tournaments and climb the leaderboard. Prove yourself as
                  the ultimate UFC collector. Join tournaments and climb the
                  leaderboard. Prove yourself as the ultimate UFC collector.
                  Join tournaments and climb the leaderboard. Prove yourself as
                  the ultimate UFC collector. Ufc collectors
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RedBar />
    </div>
  );
};
