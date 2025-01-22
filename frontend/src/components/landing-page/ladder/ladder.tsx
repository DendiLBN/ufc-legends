"use client";

import React from "react";
import { motion } from "framer-motion";

export const Leaderboard = () => {
  const mockTestUsers = [
    { id: 1, username: "UFCMaster99", points: 150 },
    { id: 2, username: "CardHunter", points: 120 },
    { id: 3, username: "FightCollector", points: 100 },
    { id: 4, username: "ChampionPro", points: 90 },
    { id: 5, username: "KnockoutKing", points: 80 },
  ];

  return (
    <div className="py-12 px-6 bg-gradient-to-t from-black to-zinc-900 mt-20">
      <motion.h2
        className="text-4xl font-bold text-white text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        Collector Leaderboard
      </motion.h2>
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <table className="w-full bg-gradient-to-b from-black to-zinc-900 text-white rounded-lg shadow-lg overflow-hidden">
          <thead className="bg-red-800">
            <tr>
              <th className="py-3 px-4 text-left">Rank</th>
              <th className="py-3 px-4 text-left">Username</th>
              <th className="py-3 px-4 text-left">Points</th>
            </tr>
          </thead>
          <tbody>
            {mockTestUsers.map((user, index) => (
              <motion.tr
                key={user.id}
                className={`${
                  index % 2 === 0 ? "bg-zinc-900" : "bg-black"
                } hover:bg-gray-600`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.9 }}
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4 font-medium">{user.username}</td>
                <td className="py-3 px-4">{user.points}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};
