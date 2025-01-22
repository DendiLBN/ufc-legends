"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-oswald text-red-500 font-bold">
            UFC LEGENDS
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-zinc-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#cards" className="text-zinc-300 hover:text-white transition-colors">
              Cards
            </Link>
            <Link href="#battle-pass" className="text-zinc-300 hover:text-white transition-colors">
              Battle Pass
            </Link>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-600 transition-all duration-300 hover:scale-105">
              Download Now
            </button>
          </div>
          
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
} 