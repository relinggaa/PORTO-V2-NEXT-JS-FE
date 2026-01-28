"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useTransform, useScroll } from "motion/react";
import { useSkillsParallax } from "@/app/hook/SkillsSection/UseSkillsParallax";
import { skillCategories, getTechLogoUrl } from "@/lib/utils/skills";
import { SkillsCategoryCard } from "@/components/skills/SkillsCategoryCard";
import LogoLoop, { LogoItem } from "@/components/ui/LogoLoop";
import { Sparkles, Terminal, Cpu, Database, Layout } from "lucide-react";

const LogoImageItem = ({ item }: { item: LogoItem }) => {
  const [imgSrc] = useState('src' in item ? item.src : '');

  if (!('src' in item)) return null;

  const needsFilter = !imgSrc.includes('simpleicons.org') &&
    !imgSrc.includes('inertiajs.com') &&
    !imgSrc.includes('vitejs.dev');

  return (
    <motion.div
      className="flex items-center justify-center px-8"
      whileHover={{ scale: 1.2, rotate: 5 }}
      transition={{ duration: 0.3, type: "spring" }}
    >
      <div className="relative group">
        <div className="absolute -inset-4 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <Image
          src={imgSrc}
          alt={item.alt || item.title || ''}
          title={item.title}
          width={60}
          height={60}
          className={`h-[60px] w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 ${needsFilter ? 'filter brightness-0 invert' : ''
            }`}
          unoptimized
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
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

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

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
        ref={containerRef}
        id="skills"
        onMouseMove={handleMouseMove}
        className="relative min-h-screen bg-black text-white pt-24 pb-48 px-6 md:px-12 lg:px-24 overflow-visible border-b border-white/5"
      >
        {/* Decorative Background Container - Handles clipping for background elements ONLY */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">


          {/* Floating Background Typography */}
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
            className="absolute top-40 left-[5%] opacity-[0.02] select-none"
          >
            <h2 className="text-[25vw] font-black leading-none">TECH</h2>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
          {/* Harmonized Header */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-px w-12 bg-white/50" />
              <span className="text-sm uppercase tracking-[0.4em] font-medium text-white/50">Stack & Expertise</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-5xl md:text-8xl font-bold tracking-tighter leading-none"
            >
              CRAFTING EXPERIENCE<br />
              <span className="text-neutral-500 italic font-light">THROUGH TECHNOLOGY.</span>
            </motion.h2>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <SkillsCategoryCard
                key={index}
                category={category}
                categoryIndex={index}
                translateY={translateY}
                translateYReverse={translateYReverse}
                opacity={opacity}
                rotateX={rotateX}
                borderRotation={borderRotation}
              />
            ))}
          </div>
        </div>


      </section>

      {/* Modernized Logo Marquee */}
      <div className="relative py-24 overflow-hidden bg-neutral-950/20 border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-black z-10 pointer-events-none" />

        <div className="space-y-12">
          {/* Technical sub-header for marquee */}
          <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between opacity-60 uppercase tracking-[0.3em] text-[10px]">
            <span>Supported Ecosystem</span>
            <div className="h-px flex-1 mx-8 bg-white/20" />
            <span>Continuous Learning</span>
          </div>

          <LogoLoop
            logos={logoItems}
            speed={40}
            direction="left"
            logoHeight={60}
            gap={100}
            hoverSpeed={0}
            scaleOnHover
            fadeOut={false}
            className="py-4"
            renderItem={(item) => ('src' in item ? <LogoImageItem item={item} /> : null)}
          />

          <LogoLoop
            logos={[...logoItems].reverse()}
            speed={45}
            direction="right"
            logoHeight={60}
            gap={100}
            hoverSpeed={0}
            scaleOnHover
            fadeOut={false}
            className="py-4"
            renderItem={(item) => ('src' in item ? <LogoImageItem item={item} /> : null)}
          />
        </div>
      </div>
    </>
  );
};

const BackgroundIcon = ({ Icon, top, left, delay }: { Icon: React.ElementType; top: string; left: string; delay: number }) => (
  <motion.div
    style={{ top, left }}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{
      opacity: [0.05, 0.1, 0.05],
      y: [0, -20, 0],
      rotate: [0, 10, 0]
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
    className="absolute text-white"
  >
    <Icon size={120} strokeWidth={0.5} />
  </motion.div>
);

export default SkillsSection;
