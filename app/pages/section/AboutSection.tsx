"use client";
import React from "react";
import { motion } from "motion/react";

const AboutSection = () => {
  return (
    <section
      className="relative min-h-screen bg-black text-white overflow-hidden"
      id="about"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-24 md:py-32 lg:py-40">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-b from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent tracking-tight"
          >
            ABOUT ME
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"
          />
        </div>

        {/* Main Content - Centered Single Column */}
        <div className="max-w-3xl mx-auto space-y-12">
          {/* About Text Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-10 md:p-12 hover:border-white/20 transition-all duration-500 shadow-[0_8px_32px_0_rgba(255,255,255,0.05)] hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.15)]"
          >
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-white/10 rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-white/10 rounded-tr-full" />

            <div className="relative z-10 space-y-6">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent"
              >
                Crafting Digital Experiences
              </motion.h3>
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-base sm:text-lg text-white/70 leading-relaxed"
                >
                  I&apos;m a passionate Full Stack Developer with a love for
                  creating clean, efficient, and user-friendly applications. My
                  journey in web development has been driven by curiosity and a
                  desire to solve complex problems through elegant solutions.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-base sm:text-lg text-white/70 leading-relaxed"
                >
                  I specialize in building scalable applications that not only
                  look great but also perform exceptionally. From frontend
                  interfaces to backend systems, I bring ideas to life with
                  attention to detail and modern best practices.
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
          >
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "3+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="group relative border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-6 rounded-xl hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-transparent"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-xs sm:text-sm text-white/60 leading-tight">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

