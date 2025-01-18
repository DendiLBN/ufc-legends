"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setShow(false);
        } else {
          setShow(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`mx-auto px-4 sm:px-6 lg:px-8 fixed top-0  w-full z-50 p-2 backdrop-blur-lg bg-black/50 shadow-md border-b transition-transform duration-500 ${
        show ? "transform-none" : "-translate-y-full "
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link href="#">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={50}
              height={40}
              priority
              style={{
                width: "auto",
                height: "auto",
              }}
            />
          </Link>
        </div>
        <div className="flex items-center  gap-6">
          <Link
            href="/signin"
            className="px-2 py-2 text-white hover:text-red-700 rounded transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/getstarted"
            className="px-2 py-2 bg-gray-600 text-white rounded-full hover:bg-red-700 transition-transform hover:shadow-[0_0_15px_5px_rgba(255,0,0,0.6)] hover:border-red-700"
          >
            Start Collecting
          </Link>
        </div>
      </div>
    </header>
  );
};
