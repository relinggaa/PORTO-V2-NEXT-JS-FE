"use client";
import { motion, useMotionTemplate, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { SkillCard } from "./SkillCard";
import { MotionValue } from "motion/react";
import { SkillCategory } from "@/lib/utils/skills";

interface SkillsCategoryCardProps {
  category: SkillCategory;
  categoryIndex: number;
  translateY: MotionValue<number>;
  translateYReverse: MotionValue<number>;
  opacity: MotionValue<number>;
  rotateX: MotionValue<number>;
  borderRotation: MotionValue<number>;
}

export const SkillsCategoryCard = ({
  category,
  categoryIndex,
  translateY,
  translateYReverse,
  opacity,
  rotateX,
  borderRotation,
}: SkillsCategoryCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      style={{
        translateY: isMobile ? 0 : (categoryIndex % 2 === 0 ? translateY : translateYReverse),
        opacity,
        rotateX: isMobile ? 0 : rotateX,
      }}
      className="relative group"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: categoryIndex * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
      {/* Category Card with enhanced styling */}
      <div className="relative border border-white/10 bg-gradient-to-br from-neutral-900/80 via-black/60 to-neutral-900/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 hover:border-white/25 transition-all duration-700 overflow-visible sm:overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_0_rgba(255,255,255,0.1)] mb-12 sm:mb-0">
        {/* Animated border gradient */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`linear-gradient(${borderRotation}deg, transparent, rgba(255,255,255,0.08), transparent)`,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1px",
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
            transform: "translateX(-100%)",
          }}
          animate={{
            transform: ["translateX(-100%)", "translateX(100%)"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "linear",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Category Header with enhanced typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: categoryIndex * 0.15 + 0.2 }}
            className="mb-6 sm:mb-8 relative"
          >
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                {category.title}
              </h3>
              <motion.div
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/60" />
              </motion.div>
            </div>
            
            {/* Animated underline */}
            <motion.div
              className="h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.15 + 0.4 }}
            />

            {/* Category description */}
            {category.description && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.15 + 0.5 }}
                className="mt-3 text-sm text-white/50 font-medium"
              >
                {category.description}
              </motion.p>
            )}
          </motion.div>

          {/* Skills Grid with improved spacing */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {category.skills.map((skill, skillIndex) => (
              <SkillCard
                key={skillIndex}
                skill={skill}
                categoryIndex={categoryIndex}
                skillIndex={skillIndex}
              />
            ))}
          </div>
        </div>

        {/* Decorative corner elements with enhanced animation */}
        <motion.div
          className="absolute top-0 right-0 w-40 h-40 border-t border-r border-white/5 rounded-bl-full"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: categoryIndex * 0.5,
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-40 h-40 border-b border-l border-white/5 rounded-tr-full"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: categoryIndex * 0.5 + 2,
          }}
        />

        {/* Gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/5 group-hover:via-white/0 group-hover:to-white/5 transition-all duration-700 pointer-events-none"
        />
      </div>
    </motion.div>
  );
};
