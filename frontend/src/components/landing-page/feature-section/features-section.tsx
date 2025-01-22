"use client";

import { motion } from "framer-motion";
import { LegendaryCard } from "@/components/landing-page/legendary-cards/legendary-cards";

export const FeaturesSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative grid md:grid-cols-2 pt-44 gap-12 items-center mb-20"
    >
      <div className="mt-10">
        <h2 className="text-5xl font-oswald mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
          Build Your Ultimate Fighter Collection
        </h2>
        <p className="text-xl text-zinc-300 mb-8">
          Collect digital cards featuring legendary UFC fighters from past and
          present. Train them, upgrade their skills, and create the most
          powerful roster in the game.
        </p>
        <button className="group bg-red-500 text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-red-600 transition-all duration-300 hover:scale-105">
          Download Now
          <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">
            →
          </span>
        </button>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-20">
        <LegendaryCard
          name="Islam Makhachev"
          image="/islam.jpg"
          className="mt-10"
          
        />
        <LegendaryCard
          name="Conor McGregor"
          image="/conor.jpg"
          className="mt-10"
        />
      </div>
    </motion.section>
  );
};
