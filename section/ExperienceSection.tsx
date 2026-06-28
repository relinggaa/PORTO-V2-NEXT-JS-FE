"use client";

import React from "react";
import { motion } from "motion/react";
import InfiniteMenu from '@/components/ui/InfiniteMenu'
import interium from '@/public/img/interium.jpg'
import intelecta from '@/public/img/intelecta.png'
import hacksphere from '@/public/img/hacksphere.jpg'
import chevalier from '@/public/img/chevalier.png'
import { MoveRight } from "lucide-react";
import Courosel from "@/components/ui/Courosel";

const items = [
  {
    image: interium.src,
    link: 'https://google.com/',
    title: '3rd place WEB DESIGN Competition',
    description: 'I’m proud of my team and our achievement—Edukids won 3rd place in the Interium Fest Web Design Competition. This success reflects our hard work and strong collaboration, and we hope Edukids will make a positive impact on children and education.'
  },
  {
    image: intelecta.src,
    link: 'https://google.com/',
    title: 'FINALIST INTELECTA INNOVATION SYSTEM',
    description: 'My team and I became finalists at Intelecta by developing FixYou, a web-based mental health platform that integrates AI features, mood tracking, journaling, gamification, and access to professional psychologists into one adaptive ecosystem.'
  },
  {
    image: hacksphere.src,
    link: 'https://google.com/',
    title: 'HACKSPHERE 2025',
    description: 'I participated in a hackathon competition called Hacksphere, which was held at President University. The event was supported by KAI, and the competition focused on developing applications for KAI Access.This is pretty cool, right?'
  },
  {
    image: chevalier.src,
    link: 'https://google.com/',
    title: 'HACKSPHERE 2025',
    description: 'I was a member of the Chevalier Study Group at Telkom University, specifically in the Front-End division.'
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D562DAQHM1ShII_YqUw/profile-treasury-image-shrink_800_800/B56ZZwHByxGkAY-/0/1745637614008?e=1772416800&v=beta&t=rmYSx36EqrSo8M5rLxJFFWo-d_E7DExd4ohZpps7-oM",
    link: 'https://google.com/',
    title: 'Full Stack Developer',
    description: 'The Bookkeeping Management System (BMS) is a university-based system for managing finance, inventory, and administration, designed to improve efficiency in learning and laboratory operations.'
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative min-h-screen bg-black py-24 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-white/5">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Consistent with About section */}
        <div className="mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-white/50" />
            <span className="text-sm uppercase tracking-[0.4em] font-medium text-white/50">My Journey</span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-5xl md:text-8xl font-bold tracking-tighter leading-none"
            >
              EXPERIENCE & <br />
              <span className="text-neutral-500 italic font-light">ACHIEVEMENTS.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-neutral-500 text-sm uppercase tracking-widest bg-white/5 px-6 py-3 rounded-full border border-white/10 mb-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Drag to explore
              <MoveRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>

        {/* Infinite Menu Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full h-[600px] md:h-[650px] rounded-3xl overflow-hidden border border-white/10 bg-linear-to-b from-white/2 to-transparent cursor-grab active:cursor-grabbing shadow-2xl"
        >
          {/* Subtle overlay corners */}
          <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-white/20 rounded-tl-xl pointer-events-none z-20" />
          <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-white/20 rounded-tr-xl pointer-events-none z-20" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-white/20 rounded-bl-xl pointer-events-none z-20" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-white/20 rounded-br-xl pointer-events-none z-20" />

          <Courosel items={items} />
        </motion.div>
      </div>
    </section>
  );
}