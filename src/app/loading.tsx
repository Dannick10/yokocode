"use client"
import { motion } from "framer-motion";

const CircularText = () => {
  const radius:number = 60;
  const text:string = "yokocode";

  return (
    <div className="min-h-screen flex justify-center items-center bg-zinc-950 text-white relative">
      <motion.div
        className="flex gap-4 relative"
        animate={{ rotate: 360 }} 
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear", 
        }}
        style={{ width: radius * 2, height: radius * 2, position: "relative" }}
      >
        {text.split("").map((letter: string, index: number) => {
          const angle = (index / text.length) * 2 * Math.PI; 
          const x = radius + radius * Math.cos(angle) - 10; 
          const y = radius + radius * Math.sin(angle) - 10; 

          return (
            <motion.p
              key={index}
              className="text-2xl font-bold absolute"
              style={{
                left: `${x}px`,
                top: `${y}px`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 0.2, 
                duration: 1,
              }}
            >
              {letter}
            </motion.p>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CircularText;
