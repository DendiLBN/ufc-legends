"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center border-b bg-black text-white relative overflow-hidden min-h-[100vh]">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold text-center z-10 px-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="flex flex-col w-full items-center justify-center  bg-black elative overflow-hidden text-white">
          Welcome to UFC collection cards
        </p>
      </motion.h1>

      <Image
        src="/spider-hero.jpg"
        alt="UFC background"
        objectFit="cover"
        priority
        width={1920}
        height={1080}
        style={{
          width: "auto",
          height: "auto",
        }}
      />
    </div>
  );
};
