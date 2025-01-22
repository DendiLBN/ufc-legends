"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The most authentic UFC gaming experience I've ever had. The card collection aspect adds a whole new dimension!",
    name: "Mike Johnson",
    title: "Pro Player"
  },
  {
    quote: "Amazing graphics and gameplay mechanics. The trading system makes it truly engaging!",
    name: "Sarah Chen",
    title: "Tournament Champion"
  }
];

export default function TestimonialsSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative mb-20"
    >
      <h2 className="text-5xl font-oswald text-center mb-12">Player Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.name} className="bg-zinc-800 p-8 rounded-xl hover:bg-zinc-800/80 transition-all duration-300">
            <p className="text-zinc-300 mb-6 text-lg">{testimonial.quote}</p>
            <div className="flex items-center">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-700 rounded-full mr-4"></div>
              <div>
                <p className="font-bold text-lg">{testimonial.name}</p>
                <p className="text-red-500">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
} 