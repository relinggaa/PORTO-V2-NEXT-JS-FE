"use client";

import React from "react";
import { motion } from "motion/react";
import { Mail, ArrowUpRight } from "lucide-react";
import { useNav } from "@/app/hook/NavbarLanding/Usenav";

export default function Footer() {
    const { user, menuItems } = useNav();
    const name = "Relingga Aditya";

    return (
        <footer className="relative w-full bg-black text-white pt-24 pb-12 overflow-hidden border-t border-white/5" id="contact">
            {/* Main Content Container */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 pb-24 border-b border-white/10">
                    {/* Left Side: Contact CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div>
                            <h2 className="text-6xl md:text-8xl font-medium tracking-tight leading-none mb-6">
                                Say <span className="italic font-light opacity-50 text-white">Hello</span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-md font-light">
                                Have a project in mind? Let's talk about it and build something remarkable together.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 font-bold">Get In Touch</h3>
                            <a
                                href={`mailto:${user.emails[0]}`}
                                className="block text-2xl md:text-4xl font-normal hover:text-gray-400 transition-colors duration-300 break-all"
                            >
                                {user.emails[0]}
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Side: Links */}
                    <div className="grid grid-cols-2 gap-12 lg:pt-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 font-bold">Socials</h3>
                            <ul className="space-y-4">
                                {user.social.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className="group flex items-center gap-2 text-lg text-gray-300 hover:text-white transition-all duration-300 w-fit"
                                        >
                                            <span className="relative">
                                                {item.name}
                                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                                            </span>
                                            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 font-bold">Explore</h3>
                            <ul className="space-y-4">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className="group flex items-center gap-2 text-lg text-gray-300 hover:text-white transition-all duration-300 w-fit"
                                        >
                                            <span className="relative">
                                                {item.label}
                                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                                            </span>
                                            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Marquee Text - Full Width Edge-to-Edge with Seamless Animation */}
            <div className="relative w-full py-16 md:py-24 select-none pointer-events-none overflow-hidden flex opacity-10">
                <motion.div
                    animate={{ x: ["0%", "-15%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex whitespace-nowrap"
                >
                    <h1 className="text-[20vw] md:text-[15vw] font-black leading-none tracking-tighter uppercase pr-20">
                        {name} • {name} • {name} • {name} •
                    </h1>
                    <h1 className="text-[20vw] md:text-[15vw] font-black leading-none tracking-tighter uppercase pr-20">
                        {name} • {name} • {name} • {name} •
                    </h1>
                </motion.div>
            </div>

            {/* Bottom Info Section */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm font-light uppercase tracking-widest pt-8 border-t border-white/5">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        © 2026 <span className="text-white font-medium">Relingga Aditya</span>. All rights reserved.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-8"
                    >
                        <span className="flex items-center gap-2 font-medium bg-white/5 px-3 py-1 rounded-full border border-white/10">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Bandung, west java, Indonesia
                        </span>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="text-white hover:text-gray-400 transition-colors cursor-pointer underline underline-offset-4 decoration-white/20 hover:decoration-white"
                        >
                            Back to Top
                        </button>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}