"use client";
import { motion, MotionValue } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

interface SkillsHeaderProps {
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
  translateY: MotionValue<number>;
}

export const SkillsHeader = ({
  opacity,
  scale,
  translateY,
}: SkillsHeaderProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={headerRef}
      style={{ opacity, scale, translateY }}
      className="text-center mb-12 sm:mb-16 md:mb-24"
    >
      {/* Main Title with enhanced typography */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-b from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent tracking-tight leading-tight"
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-block"
        >
          SKILLS
        </motion.span>
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
          className="mx-3 md:mx-6 text-white/60"
        >
          &
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="inline-block"
        >
          TECH
        </motion.span>
      </motion.h2>

      {/* Animated divider with enhanced effects */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={isInView ? { opacity: 1, width: "200px" } : {}}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto relative overflow-hidden rounded-full"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Subtitle with better typography */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
        className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed px-2"
      >
        Technologies and tools I use to bring ideas to life
      </motion.p>

      {/* Decorative dots */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex justify-center gap-2 mt-6"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-white/40"
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};
