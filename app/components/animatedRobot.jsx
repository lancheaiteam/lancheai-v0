'use client';
import Image from "next/image";
import { motion } from "framer-motion";

const AnimatedRobot = ({ imageSrc }) => {
  return (
    <motion.div
      className="z-10"
      animate={{
        y: [0, -60, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Image 
        src={imageSrc} 
        alt='robot' 
        width={400} 
        height={400} 
        className="w-fit h-[500px] object-contain opacity-90"
      />
    </motion.div>
  );
};

export default AnimatedRobot;