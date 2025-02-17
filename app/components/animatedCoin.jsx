'use client'
import React from 'react';
import { motion } from "framer-motion";

const AvaxCoin = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 254 254"
    width="50"  // Reduced size
    height="50" // Reduced size
    xmlSpace="preserve"
  >
    <defs>
      {/* Coin Gradient */}
      <linearGradient id="coinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#ff5656' }} />
        <stop offset="100%" style={{ stopColor: '#E84142' }} />
      </linearGradient>

      {/* Glossy Highlight */}
      <radialGradient id="highlight" cx="50%" cy="20%" r="60%">
        <stop offset="0%" style={{ stopColor: "rgba(255,255,255,0.6)", stopOpacity: "0.9" }} />
        <stop offset="100%" style={{ stopColor: "rgba(255,255,255,0)", stopOpacity: "0" }} />
      </radialGradient>

      {/* Shadow for Depth */}
      <filter id="shadow">
        <feDropShadow dx="0" dy="3" stdDeviation="4" floodOpacity="0.4" />
      </filter>
    </defs>

    <g filter="url(#shadow)">
      {/* Background Coin Shape */}
      <circle fill="url(#coinGradient)" cx="127" cy="127" r="127" />

      {/* White AVAX Logo */}
      <path
        fill="#FFFFFF"
        d="M171.8,130.3c4.4-7.6,11.5-7.6,15.9,0l27.4,48.1c4.4,7.6,0.8,13.8-8,13.8h-55.2c-8.7,0-12.3-6.2-8-13.8
        L171.8,130.3z M118.8,37.7c4.4-7.6,11.4-7.6,15.8,0l6.1,11L155.1,74c3.5,7.2,3.5,15.7,0,22.9l-48.3,83.7
        c-4.4,6.8-11.7,11.1-19.8,11.6H46.9c-8.8,0-12.4-6.1-8-13.8L118.8,37.7z"
      />

      {/* Light Reflection for Realism */}
      <circle fill="url(#highlight)" cx="127" cy="100" r="70" opacity="0.4" />
    </g>
  </svg>
);

const AnimatedCoin = () => {
  return (
    <div className="relative mt-16 lg:mt-0 z-10">
      <div className="absolute top-1 left-6" style={{ perspective: "400px" }}>
        <motion.div
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "visible"
          }}
          animate={{
            rotateY: [0, 360],
            scale: [1, 1.02, 1],
          }}
          transition={{
            rotateY: {
              duration: 2.5,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }
          }}
          className="drop-shadow-lg"
        >
          <motion.div
            animate={{
              y: [0, -10, 0], // Smaller bounce effect
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <AvaxCoin />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedCoin;
