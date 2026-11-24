import React from "react";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "../data/portfolioData";

const ORB_POSITIONS = {
  home: { x1: "12%", y1: "-8%", x2: "74%", y2: "56%" },
  about: { x1: "64%", y1: "-10%", x2: "10%", y2: "62%" },
  projects: { x1: "26%", y1: "-12%", x2: "78%", y2: "46%" },
  experience: { x1: "72%", y1: "4%", x2: "16%", y2: "58%" },
  contact: { x1: "42%", y1: "-6%", x2: "68%", y2: "66%" },
};

export default function AmbientBackground({ activeMenu }) {
  const current = NAV_ITEMS.find((item) => item.id === activeMenu) || NAV_ITEMS[0];
  const pos = ORB_POSITIONS[activeMenu] || ORB_POSITIONS.home;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden z-0"
    >
      {/* Subtle Architectural Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-70" />

      {/* Dynamic Morphing Primary Glow */}
      <motion.div
        animate={{
          left: pos.x1,
          top: pos.y1,
          backgroundColor: current.accent.primary,
        }}
        transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        className="absolute h-[520px] w-[520px] rounded-full blur-[130px] -translate-x-1/4"
      />

      {/* Dynamic Morphing Secondary Glow */}
      <motion.div
        animate={{
          left: pos.x2,
          top: pos.y2,
          backgroundColor: current.accent.secondary,
        }}
        transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
        className="absolute h-[460px] w-[460px] rounded-full blur-[130px] -translate-x-1/3"
      />

      {/* Micro texture */}
      <div className="absolute inset-0 noise-overlay opacity-[0.16]" />

      {/* Top vignette for contrast */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#09090b] to-transparent" />
    </div>
  );
}
