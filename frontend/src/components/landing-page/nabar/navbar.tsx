"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [show, setShow] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
          setShow(false);
        } else {
          setShow(true);
        }
        setLastScrollY(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY, show]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        top: show ? "0" : "-100px",
        transition: "top 0.6s ease-in-out",
      }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 ">
          <Link
            href="/"
            className="text-2xl font-oswald text-red-500 font-bold"
          >
            UFC LEGENDS
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-zinc-300 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="#cards"
              className="text-zinc-300 hover:text-white transition-colors"
            >
              Cards
            </Link>
            <Link
              href="#battle-pass"
              className="text-zinc-300 hover:text-white transition-colors"
            >
              Battle Pass
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/signup">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-600 transition-all duration-300 hover:scale-105 ">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-600 transition-all duration-300 hover:scale-105">
                Start collecting
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
