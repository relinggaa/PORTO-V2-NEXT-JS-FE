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
  const [isHovered, setIsHovered] = useState(false);
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

  const rotateX = useTransform(mouseY, [0, 100], [3, -3]);
  const rotateY = useTransform(mouseX, [0, 100], [-3, 3]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        delay: categoryIndex * 0.1 + skillIndex * 0.05,
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(50);
        mouseY.set(50);
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        scale: 1.05,
        z: 50,
      }}
      className="relative perspective-1000"
    >
      <div className="relative border border-white/10 bg-gradient-to-br from-black/80 via-neutral-900/50 to-black/80 backdrop-blur-sm p-5 rounded-2xl hover:border-white/30 transition-all duration-500 cursor-pointer group/skill overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-white/10">
        {/* Animated gradient border on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover/skill:opacity-100"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 70%)`,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover/skill:opacity-100 bg-gradient-to-br from-white/10 via-transparent to-transparent blur-xl transition-opacity duration-500"
        />

        {/* Shimmer line */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover/skill:opacity-100"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
            transform: "translateX(-100%)",
          }}
          animate={isHovered ? {
            transform: ["translateX(-100%)", "translateX(100%)"],
          } : {}}
          transition={{
            duration: 1,
            repeat: isHovered ? Infinity : 0,
            repeatDelay: 2,
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-3">
          {/* Icon with enhanced animation */}
          <motion.div
            whileHover={{
              rotate: [0, -5, 5, -5, 0],
              scale: 1.15,
            }}
            transition={{ 
              duration: 0.5, 
              type: "tween",
              ease: "easeInOut"
            }}
            className="relative w-14 h-14 flex items-center justify-center"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover/skill:opacity-100"
              animate={isHovered ? {
                scale: [1, 1.5, 1],
                opacity: [0, 0.5, 0],
              } : {}}
              transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
            />
            <Image
              src={getTechLogoUrl(skill.name)}
              alt={skill.name}
              width={56}
              height={56}
              className="w-14 h-14 object-contain filter brightness-0 invert opacity-80 group-hover/skill:opacity-100 transition-opacity duration-300"
              unoptimized
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                const fallbackName = skill.name.toLowerCase().replace(/\s+/g, "").replace("js", "");
                target.src = `https://cdn.simpleicons.org/${fallbackName}/white`;
              }}
            />
          </motion.div>

          {/* Skill name with better typography */}
          <motion.span
            className="text-sm font-semibold text-white/90 group-hover/skill:text-white transition-colors text-center"
            whileHover={{ scale: 1.05 }}
          >
            {skill.name}
          </motion.span>
        </div>

        {/* Corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/5 rounded-bl-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500"
        />
        <motion.div
          className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-white/5 rounded-tr-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500"
        />
      </div>
    </motion.div>
  );
};
