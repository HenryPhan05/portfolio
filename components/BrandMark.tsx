"use client";

import { motion } from "motion/react";

const signaturePath =
  "M8 27C4 23 6 9 12 5C15 3 17 5 16 9C15 14 11 19 7 22C12 19 18 16 23 11C21 16 19 22 21 26C23 30 28 27 30 22";

const BrandMark = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    whileHover={{ scale: 1.06 }}
    className="group flex items-center"
  >
    <span className="relative grid h-10 w-12 place-items-center lg:h-11 lg:w-14">
      <svg
        viewBox="0 0 36 34"
        role="img"
        aria-label="Henry logo"
        className="h-9 w-11 overflow-visible drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] lg:h-10 lg:w-13"
      >
        <defs>
          <linearGradient id="henry-logo-gradient" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#c084fc" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <motion.path
          d={signaturePath}
          fill="none"
          stroke="url(#henry-logo-gradient)"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 1,
              transition: {
                pathLength: {
                  duration: 1.75,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 1.25,
                },
                opacity: { duration: 0.15 },
              },
            },
          }}
        />
      </svg>
    </span>
  </motion.div>
);

export default BrandMark;
