"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Code2,
  Cpu,
  Globe,
  Sparkles,
  User,
  GraduationCap,
  Zap,
  Target
} from "lucide-react";

export default function AboutSection() {

  return (
    <section
      id="about"
      className="relative min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-b border-white/5"
    >
      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-20 right-[10%] opacity-10 pointer-events-none"
      >
        <h2 className="text-[20vw] font-black outline-text text-transparent border-white/20 select-none leading-none" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
          ABOUT
        </h2>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center">
        {/* Section Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-white/50" />
            <span className="text-sm uppercase tracking-[0.4em] font-medium text-white/50">Who I am</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.8 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter leading-none"
          >
            A BRAIN FOR CODE,<br />
            <span className="text-neutral-500 italic font-light">HEART FOR DESIGN.</span>
          </motion.h2>
        </div>

        {/* Modern Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">

          {/* Bio Card - Large */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="md:col-span-8 md:row-span-2 relative p-8 md:p-12 border border-white/10 bg-white/2 backdrop-blur-xl rounded-3xl group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-20">
              <Sparkles className="w-12 h-12" />
            </div>
            <div className="relative z-10 space-y-8">
              <h3 className="text-3xl font-medium flex items-center gap-3">
                <User className="w-6 h-6 text-white" />
                Biography
              </h3>
              <div className="space-y-6 text-xl text-neutral-400 font-light leading-relaxed">
                <p>
                  I am a <span className="text-white font-normal underline decoration-white/20 underline-offset-8">Full Stack Developer</span> and software engineering student at Telkom University who thrives on turning complex ideas into digital realities.
                </p>
                <p>
                  My approach combines technical rigor with a deep appreciation for aesthetics. I don't just write code; I craft systems that feel intuitive and look exceptional.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                {['Performance', 'Scalability', 'Intuitive UI', 'Clean Architecture'].map((pill) => (
                  <span key={pill} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-neutral-500">
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Card - Small */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="md:col-span-4 relative p-8 border border-white/10 bg-white/2 backdrop-blur-xl rounded-3xl group overflow-hidden flex flex-col justify-between"
          >
            <GraduationCap className="w-8 h-8 opacity-50 mb-4" />
            <div>
              <h4 className="text-lg font-bold mb-2 uppercase tracking-wider">Education</h4>
              <p className="text-neutral-400 text-sm">Telkom University Student</p>
              <p className="text-neutral-500 text-xs mt-2">Software Engineering</p>
            </div>
          </motion.div>

          {/* Vision Card - Small */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="md:col-span-4 relative p-8 border border-white/10 bg-white/2 backdrop-blur-xl rounded-3xl group overflow-hidden flex flex-col justify-between"
          >
            <Target className="w-8 h-8 opacity-50 mb-4 text-white" />
            <div>
              <h4 className="text-lg font-bold mb-2 uppercase tracking-wider">Vision</h4>
              <p className="text-neutral-400 text-sm italic">"Simplifying complexity through elegant software."</p>
            </div>
          </motion.div>

          {/* Stats Bar - Wide */}
          <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {[
              { number: "50+", label: "Projects Completed", icon: Code2 },
              { number: "2+", label: "Academic Years", icon: Zap },
              { number: "100%", label: "System Uptime", icon: Globe },
              { number: "24/7", label: "Always Available", icon: Cpu },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="p-8 border border-white/10 bg-white/1 rounded-3xl hover:bg-white/4 transition-colors"
              >
                <stat.icon className="w-5 h-5 mb-4 text-neutral-600" />
                <div className="text-4xl font-bold tracking-tighter mb-1">{stat.number}</div>
                <div className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
