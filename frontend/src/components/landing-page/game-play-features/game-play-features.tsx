"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Card Battles",
    description:
      "Strategic PvP battles using your fighter cards with unique abilities and stats.",
  },
  {
    title: "Trading System",
    description:
      "Trade cards with other players to complete your collection and build your dream roster.",
  },
  {
    title: "Tournaments",
    description:
      "Compete in daily and weekly tournaments for exclusive rewards and glory.",
  },
];

export const GameplayFeatures = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative grid md:grid-cols-3 gap-8 items-center mb-20"
    >
      {features.map((feature) => (
        <div
          key={feature.title}
          className="group bg-zinc-800 p-8 rounded-xl hover:bg-zinc-800/80 transition-all duration-300 hover:-translate-y-2"
        >
          <h3 className="text-2xl font-oswald mb-4 text-red-500">
            {feature.title}
          </h3>
          <p className="text-zinc-300">{feature.description}</p>
        </div>
      ))}
    </motion.section>
  );
};
