"use client";

import React from "react";
import { motion } from "motion/react";

interface DashboardPageHeaderProps {
  title: string;
  subtitle: string;
  actionButton?: React.ReactNode;
}

export function DashboardPageHeader({ title, subtitle, actionButton }: DashboardPageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10 pb-8 border-b border-white/5 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute left-0 top-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10 pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:16px_16px] [mask-image:linear-gradient(to_bottom,white,transparent)] -z-20 pointer-events-none opacity-50" />
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", staggerChildren: 0.1 }}
        className="relative z-10"
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium tracking-widest uppercase mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Admin Panel
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 mb-3"
        >
          {title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white/50 text-sm md:text-base max-w-lg leading-relaxed font-light"
        >
          {subtitle}
        </motion.p>
      </motion.div>

      {actionButton && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.2, duration: 0.4, type: "spring", stiffness: 200 }}
          className="relative z-10 mt-4 sm:mt-0"
        >
          {actionButton}
        </motion.div>
      )}
    </div>
  );
}
