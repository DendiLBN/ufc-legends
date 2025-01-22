"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LegendaryCardProps {
  name: string;
  image: string;
  className?: string;
}

export const LegendaryCard = ({
  name,
  image,
  className = "",
}: LegendaryCardProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 20px rgba(245, 158, 11, 0.3)",
      }}
      animate={{
        boxShadow: [
          "0 0 0px rgba(245, 158, 11, 0)",
          "0 0 10px rgba(245, 158, 11, 0.2)",
          "0 0 0px rgba(245, 158, 11, 0)",
        ],
      }}
      transition={{
        scale: { type: "spring", stiffness: 300 },
        boxShadow: { duration: 2, repeat: Infinity },
      }}
      className={`bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-700 p-[1px] rounded-xl shadow-lg relative group ${className}`}
    >
      <motion.div className="absolute -inset-[1px] bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-700 rounded-xl opacity-75 group-hover:opacity-100 blur-lg transition-opacity" />
      <div className="bg-gradient-to-br from-amber-600 to-yellow-500 p-4 rounded-xl relative mb-5 py-10 ">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-amber-600 to-yellow-500 rounded-b-lg">
          <span className="text-white text-xs font-bold ">LEGENDARY</span>
        </div>
        <div className="aspect-[2/3] rounded-lg mb-2 overflow-hidden ring-2 ring-amber-500/50 relative ">
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/10 to-yellow-500/10" />
          <Image
            src={image}
            width={400}
            height={400}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500"
          />
        </div>
        <div className="space-y-1">
          <p className="font-oswald text-lg bg-gradient-to-r text-white bg-clip-text text-transparent">
            {name}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
