"use client";
import React from "react";
import { motion } from "framer-motion";

const ScrollingTicker = () => {
  const items = [
    "Innovation",
    "Strategy",
    "Branding",
    "UI/UX",
    "Development",
    "Growth",
  ];

  const duplicatedItems = [...items, ...items];

  return (
    <div className="  w-full bg-[#1B1B1B] border-t border-b border-white/5 py-4 overflow-hidden flex relative ">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="text-white text-2xl md:text-4xl font-semibold mx-8 uppercase tracking-wider opacity-70">
              {item}
            </span>
            <span className="text-gray-600 text-xl opacity-50">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingTicker;
