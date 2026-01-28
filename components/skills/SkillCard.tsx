"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useTransform, useMotionValue, useInView } from "motion/react";
import { getTechLogoUrl, Skill } from "@/lib/utils/skills";

interface SkillCardProps {
  skill: Skill;
  categoryIndex: number;
  skillIndex: number;
}

export const SkillCard = ({
  skill,
  categoryIndex,
  skillIndex,
}: SkillCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
    setMousePosition({ x, y });
  };

  const rotateX = useTransform(mouseY, [0, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 100], [-10, 10]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: categoryIndex * 0.1 + skillIndex * 0.05,
        type: "spring",
        stiffness: 100,
      }}
      onMouseMove={handleMouseMove}
      className="relative group/skill"
    >
      <motion.div
        style={{ rotateX, rotateY, perspective: 1000 }}
        whileHover={{ scale: 1.1, y: -5 }}
        className="relative border border-white/5 bg-white/5 backdrop-blur-xl p-4 rounded-2xl transition-colors duration-500 group-hover/skill:border-white/20 overflow-hidden"
      >
        {/* Hover Highlight */}
        <div
          className="absolute inset-0 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(100px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 70%)`
          }}
        />

        <div className="flex flex-col items-center gap-3 relative z-10">
          {/* Logo Container */}
          <div className="relative w-12 h-12 flex items-center justify-center">
            <Image
              src={getTechLogoUrl(skill.name)}
              alt={skill.name}
              width={40}
              height={40}
              className="w-10 h-10 object-contain filter brightness-0 invert opacity-40 group-hover/skill:opacity-100 transition-all duration-300 group-hover/skill:scale-110"
              unoptimized
            />
          </div>

          {/* Skill Name */}
          <div className="flex flex-col items-center">
            <span className="text-[11px] font-bold text-white/70 group-hover/skill:text-white transition-colors text-center truncate w-full">
              {skill.name}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
