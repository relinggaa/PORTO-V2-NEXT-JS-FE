"use client";
import { motion, useTransform, useSpring } from "motion/react";

interface FloatingParticlesProps {
  opacity: ReturnType<typeof useSpring>;
}

export const FloatingParticles = ({ opacity }: FloatingParticlesProps) => {
  const particleOpacity = useTransform(opacity, (v: number) => v * 0.3);

  return (
    <>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${(i * 5) % 100}%`,
            top: `${(i * 7) % 100}%`,
            opacity: particleOpacity,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, (i % 2 === 0 ? 1 : -1) * 10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </>
  );
};

