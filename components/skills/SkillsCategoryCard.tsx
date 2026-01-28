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
      className="relative group h-full"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 1,
        delay: categoryIndex * 0.1,
        type: "spring",
        stiffness: 70,
        damping: 15,
      }}
    >
      <div className="relative h-full border border-white/10 bg-white/1 backdrop-blur-3xl rounded-[2rem] p-6 md:p-10 hover:border-white/20 transition-all duration-700 overflow-hidden shadow-2xl">
        {/* Animated Accent Line (Top) */}
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

        {/* Glowing Background Spotlight (follows group hover) */}
        <motion.div
          className="absolute -inset-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: useMotionTemplate`radial-gradient(400px circle at 50% 50%, rgba(255,255,255,0.03), transparent 70%)`,
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-1 font-bold">Category {String(categoryIndex + 1).padStart(2, '0')}</span>
                <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic">
                  {category.title}
                </h3>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                <div className="w-1 h-1 rounded-full bg-white animate-pulse" />
              </div>
            </div>
            <p className="text-neutral-500 text-sm md:text-base font-light leading-relaxed max-w-sm">
              {category.description || "Expertise in technical implementation and architectural design."}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-4">
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

      </div>
    </motion.div>
  );
};
