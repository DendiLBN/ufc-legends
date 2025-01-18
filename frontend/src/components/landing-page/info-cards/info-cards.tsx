"use client";

export const InfoCards = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-black text-white relative overflow-hidden min-h-[50vh]">
      <div className="relative">
        <div className="absolute bg-gradient-to-b from-red-900 to-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-800 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative p-8 bg-black rounded-lg">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-red-600/10 rounded-xl"></div>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-6">
                  Cards
                </h3>
                <p className="text-gray-400 text-center mb-6">
                  Expand your collection with unique UFC fighter cards. From
                  rare editions to iconic moments, each card tells a story.
                  Whether you&apos;re a casual fan or a dedicated collector,
                  find the cards that resonate with you.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-800 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative p-8 bg-black rounded-lg">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-red-600/10 rounded-xl"></div>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-6">
                  Market
                </h3>
                <p className="text-gray-400 text-center mb-12">
                  Connect with collectors around the globe. Trade, buy, and sell
                  cards to build your ultimate UFC collection. Discover rare
                  finds and complete your sets with ease.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-800 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative p-8 bg-black rounded-lg">
                <div className="flex justify-center mb-10">
                  <div className="p-3 bg-red-600/10 rounded-xl"></div>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-6">
                  Tournaments
                </h3>
                <p className="text-gray-400 text-center mb-3">
                  Compete in thrilling tournaments and climb the leaderboard.
                  Showcase your collection and strategy to prove you&apos;re the
                  top UFC collector. Win exclusive rewards and earn your place
                  among the best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
