"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative text-center pb-12">
      <button className="group bg-red-500 text-white px-12 py-6 rounded-xl font-bold text-2xl hover:bg-red-600 transition-all duration-300 hover:scale-105 mb-8">
        Download UFC Legends Now
        <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
      </button>
      <p className="text-zinc-400 text-lg">Available on iOS and Android</p>
    </footer>
  );
} 