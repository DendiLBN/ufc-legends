"use client";

import { motion } from "framer-motion";
import LegendaryCard from "./LegendaryCard";
import StatsBar from "./StatsBar";

export default function HeroSection() {
  return (
    <div className="relative">
      <div className="absolute inset-0 h-[120vh] overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/90 to-zinc-900 z-10" 
        />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="/spider-hero.jpg"
          alt="UFC Fight Action"
          className="w-full h-full object-cover object-center opacity-60"
        />
      </div>

      <div className="relative z-20 min-h-[100vh] pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center justify-center h-full pt-20 space-y-16"
          >
            <div className="text-center max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-8xl font-bold font-oswald text-red-500 mb-4 tracking-tight"
              >
                UFC LEGENDS
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-2xl font-roboto text-zinc-300 mb-8"
              >
                Collect. Battle. Dominate the Octagon.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="space-x-4"
              >
                <button className="group bg-red-500 text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-red-600 transition-all duration-300 hover:scale-105">
                  Start Your Journey
                  <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <button className="group bg-zinc-800 text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-zinc-700 transition-all duration-300 hover:scale-105">
                  Watch Trailer
                </button>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="w-full max-w-2xl mx-auto"
            >
              
            </motion.div>

            <StatsBar />
          </motion.div>
        </div>
      </div>
    </div>
  );
} 