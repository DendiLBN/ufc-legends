"use client";

import { motion } from "framer-motion";

export const BattlePassSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative mb-20"
    >
      <h2 className="text-5xl font-oswald text-center mb-12">
        Battle Pass & Rewards
      </h2>
      <div className="bg-gradient-to-r from-red-500 to-red-700 p-12 rounded-2xl text-center transform hover:scale-[1.02] transition-transform duration-300">
        <h3 className="text-3xl font-bold mb-4">
          Season 1 Battle Pass Available Now
        </h3>
        <p className="text-xl mb-8">
          Unlock exclusive fighter cards, cosmetics, and in-game currency
        </p>
        <button className="bg-white text-red-500 px-10 py-4 rounded-lg font-bold text-xl hover:bg-zinc-100 transition-all duration-300 hover:scale-105">
          Get Battle Pass
        </button>
      </div>
    </motion.section>
  );
};
