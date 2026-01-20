"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Menu, Mail } from "lucide-react";
import logo from "../../public/img/logo-relingga.png";
import Image from "next/image";
import { useNav } from "@/app/hook/NavbarLanding/Usenav";

const NavbarLanding = () => {
  const { isOpen, menuItems, user, toggleMenu, closeMenu } = useNav();

  return (
    <>
      {/* Header Navbar */}
      <nav className="fixed z-50 bg-transparent w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="shrink-0 flex items-center"
            >
              <Image 
                src={logo} 
                alt="logo" 
                width={150} 
                height={100}
                className="h-28 sm:h-24 md:h-28 lg:h-32 xl:h-36 w-auto mt-5"
                priority
              />
            </motion.div>

            {/* Menu Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onClick={toggleMenu}
              className="relative flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <span className="text-xs sm:text-sm font-medium uppercase tracking-wide hidden sm:inline">
                MENU
              </span>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#ffff] flex items-center justify-center">
                <Menu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
              </div>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-100"
              onClick={closeMenu}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-101 bg-black text-white overflow-hidden"
            >
              <div className="relative h-full w-full">
                {/* Close Button */}
                <motion.button
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  onClick={closeMenu}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 z-10"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                </motion.button>

                {/* Logo Top Left */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-20"
                >
                  <Image 
                    src={logo} 
                    alt="logo" 
                    width={300} 
                    height={100}
                    className="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 w-auto max-w-[90vw] sm:max-w-none"
                    priority
                  />
                </motion.div>

                {/* Main Content Grid */}
                <div className="h-full w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-6 md:p-12 lg:p-16 overflow-y-auto">
                  {/* Left Side - Menu Items */}
                  <div className="flex flex-col justify-center items-start space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 mt-12 sm:mt-16 md:mt-20 lg:mt-5">
                    {menuItems.map((item, index) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.3 + index * 0.1,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                        onClick={closeMenu}
                        className="group relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light uppercase tracking-wide hover:text-gray-300 transition-all duration-300 cursor-pointer"
                      >
                        <span className="relative z-10">{item.label}</span>
                        <motion.span
                          className="absolute left-0 bottom-0 h-0.5 bg-white origin-left"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.a>
                    ))}
                  </div>

                  {/* Right Side - Contact Info */}
                  <div className="flex flex-col justify-center items-start lg:items-end space-y-6 sm:space-y-8 md:space-y-10 pt-6 sm:pt-8 lg:pt-0">
                    {/* Location Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="space-y-3"
                    >
                
                
                    </motion.div>

                    {/* Email Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="space-y-3 w-full lg:w-auto"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        <h3 className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                          Email
                        </h3>
                      </div>
                      <div className="space-y-2">
                        {user.emails.map((email, index) => (
                          <a
                            key={index}
                            href={`mailto:${email.toLowerCase()}`}
                            className="block text-sm sm:text-base md:text-lg hover:text-gray-300 transition-colors duration-200 group break-all"
                          >
                            <span className="group-hover:underline">{email}</span>
                          </a>
                        ))}
                      </div>
                    </motion.div>

                    {/* Social Media */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="space-y-3 w-full lg:w-auto"
                    >
                      <h3 className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-3 sm:mb-4">
                        Follow Me
                      </h3>
                      <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:justify-end">
                        {user.social.map((platform, index) => {
                          const IconComponent = platform.icon;
                          return (
                            <motion.a
                              key={index}
                              href={platform.href}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-700 hover:border-white hover:bg-white/10 transition-all duration-300 group"
                            >
                              <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-white transition-colors" />
                              <span className="text-xs sm:text-sm uppercase tracking-wide text-gray-300 group-hover:text-white transition-colors">
                                {platform.name}
                              </span>
                            </motion.a>
                          );
                        })}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Decorative Large Text Bottom Right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute bottom-0 right-0 pointer-events-none overflow-hidden"
                >
                  <h1 className="text-[12vw] sm:text-[15vw] md:text-[12vw] lg:text-[10vw] xl:text-[8vw] font-bold uppercase tracking-tight leading-none select-none pr-2 sm:pr-4">
                  {user.name}
                  </h1>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarLanding;

