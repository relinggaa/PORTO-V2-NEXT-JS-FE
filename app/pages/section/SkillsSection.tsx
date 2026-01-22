"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useSkillsParallax } from "@/app/hook/SkillsSection/UseSkillsParallax";
import { skillCategories, getTechLogoUrl } from "@/lib/utils/skills";
import { FloatingParticles } from "@/components/ui/FloatingParticles";

import { SkillsHeader } from "@/components/skills/SkillsHeader";
import { SkillsCategoryCard } from "@/components/skills/SkillsCategoryCard";
import LogoLoop, { LogoItem } from "@/components/ui/LogoLoop";

const LogoImageItem = ({ item }: { item: LogoItem }) => {
  const [imgSrc, setImgSrc] = useState('src' in item ? item.src : '');
  const [hasError, setHasError] = useState(false);

  if (!('src' in item)) return null;

  const needsFilter = !imgSrc.includes('simpleicons.org') && 
                     !imgSrc.includes('inertiajs.com') &&
                     !imgSrc.includes('vitejs.dev');

 

  return (
    <motion.div
      className="flex items-center justify-center px-4"
      whileHover={{ scale: 1.1, y: -5 }}
      transition={{ duration: 0.2, type: "spring" }}
    >
      <Image
        src={imgSrc}
        alt={item.alt || item.title || ''}
        title={item.title}
        width={50}
        height={50}
        className={`h-[50px] w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 ${
          needsFilter ? 'filter brightness-0 invert' : ''
        }`}
        unoptimized
      
      />
    </motion.div>
  );
};

const SkillsSection = () => {
  const {
    ref,
    scrollYProgress,
    opacity,
    translateY,
    translateYReverse,
    scale,
    rotateX,
    borderRotation,
  } = useSkillsParallax();

  const prepareLogoItems = (): LogoItem[] => {
    const allSkills = skillCategories.flatMap((category) => 
      category.skills.map(skill => skill.name)
    );
    const uniqueSkills = Array.from(new Set(allSkills));
    
    return uniqueSkills.map((skill) => ({
      src: getTechLogoUrl(skill),
      alt: skill,
      title: skill,
    }));
  };

  const logoItems = prepareLogoItems();

  return (
    <>
      <section
        ref={ref}
        className="overflow-y-hidden relative min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black text-white overflow-x-hidden"
        id="skills"
      >
        {/* Enhanced background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950/50 to-black z-0" />
    

        <FloatingParticles opacity={opacity} />

        {/* Main content container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-24 md:py-32 lg:py-40 pb-24 sm:pb-24 md:pb-32 lg:pb-40">
          <SkillsHeader 
            opacity={opacity} 
            scale={scale} 
            translateY={translateY} 
          />

          {/* Skills Categories Grid with enhanced spacing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-10 xl:gap-12"
          >
            {skillCategories.map((category, categoryIndex) => (
              <SkillsCategoryCard
                key={categoryIndex}
                category={category}
                categoryIndex={categoryIndex}
                translateY={translateY}
                translateYReverse={translateYReverse}
                opacity={opacity}
                rotateX={rotateX}
                borderRotation={borderRotation}
              />
            ))}
          </motion.div>
        </div>

        {/* Decorative gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 4,
            ease: "easeInOut",
          }}
        />
      </section>
    
      {/* Logo Loop Section with enhanced styling */}
      <div className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-black via-neutral-950 to-black">
        <div className="relative z-10 space-y-12 md:space-y-16">
          {/* Logo Loop - Left Direction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <LogoLoop
              logos={logoItems}
              speed={50}
              direction="left"
              logoHeight={50}
              gap={80}
              hoverSpeed={0}
              scaleOnHover
              fadeOut={false}
              ariaLabel="Technologies and tools"
              className="py-8"
              renderItem={(item) => {
                if ('src' in item) {
                  return <LogoImageItem item={item} />;
                }
                return null;
              }}
            />
          </motion.div>
          
          {/* Logo Loop - Right Direction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <LogoLoop
              logos={logoItems}
              speed={50}
              direction="right"
              logoHeight={50}
              gap={80}
              hoverSpeed={0}
              scaleOnHover
              fadeOut={false}
              ariaLabel="Technologies and tools"
              className="py-8"
              renderItem={(item) => {
                if ('src' in item) {
                  return <LogoImageItem item={item} />;
                }
                return null;
              }}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SkillsSection;
