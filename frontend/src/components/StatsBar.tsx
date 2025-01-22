"use client";

import { motion } from "framer-motion";

export default function StatsBar() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className="absolute bottom-12 left-0 right-0 flex justify-center"
    >
      <div className="flex space-x-16 bg-zinc-800/50 backdrop-blur-sm px-12 py-6 rounded-2xl">
        <div className="text-center">
          <div className="text-3xl font-bold text-red-500">1M+</div>
          <div className="text-zinc-400">Players</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-red-500">4.8</div>
          <div className="text-zinc-400">App Rating</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-red-500">24/7</div>
          <div className="text-zinc-400">Tournaments</div>
        </div>
      </div>
    </motion.div>
  );
} 