"use client";

import React from "react";
import { motion } from "motion/react";
import { IconBriefcase, IconCode, IconCertificate, IconArrowRight, IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";
import { DashboardPageHeader } from "@/components/ui/DashboardPageHeader";
import { Button } from "@/components/ui/Forms";

const stats = [
  {
    title: "Projects",
    value: "12",
    icon: IconBriefcase,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    href: "/dashboard/createProject",
  },
  {
    title: "Skills",
    value: "24",
    icon: IconCode,
    color: "text-green-400",
    bg: "bg-green-400/10",
    href: "/dashboard/createSkills",
  },
  {
    title: "Certificates",
    value: "8",
    icon: IconCertificate,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    href: "/dashboard/createCerti",
  },
];

export default function DashboardHome() {
  return (
    <div className="p-6 md:p-10 min-h-screen">
      <DashboardPageHeader
        title="Welcome Back!"
        subtitle="Here is an overview of your portfolio content and statistics."
        actionButton={
          <Button variant="secondary" className="gap-2" onClick={() => window.open('/', '_blank')}>
            View Live Site
            <IconExternalLink className="w-4 h-4" />
          </Button>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="group relative bg-white/5 border border-white/10 rounded-3xl p-6 overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col"
          >
            {/* Background Glow */}
            <div className={`absolute -right-6 -top-6 w-24 h-24 ${stat.bg} rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>

            <div className="mt-auto">
              <h2 className="text-5xl font-bold text-white mb-2">{stat.value}</h2>
              <p className="text-white/50 text-sm tracking-widest uppercase font-medium">{stat.title}</p>
            </div>

            <Link href={stat.href} className="absolute inset-0 z-10" aria-label={`Go to ${stat.title}`} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden"
      >
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/3" />
        
        <div className="relative z-10 max-w-2xl">
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs tracking-widest uppercase mb-6">
            Quick Action
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Keep your portfolio fresh.
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            Regularly updating your projects and skills increases your chances of standing out to potential clients or employers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/dashboard/createProject"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-colors"
            >
              Add New Project
              <IconArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/dashboard/createSkills"
              className="inline-flex items-center gap-2 bg-white/5 text-white border border-white/10 px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Update Skills
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
