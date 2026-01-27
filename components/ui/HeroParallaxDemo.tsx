"use client";
import React from "react";

import { HeroParallax } from "./hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "FixYou",
    description: "FixYou is a web-based mental health platform developed by the Beyond Zero team, aimed at providing an adaptive, accessible, and AI-integrated mental health support solution. The application combines AI Voice Command, AI Chatbot (Gemini), Mood Tracker, interactive Journaling, Gamification, and access to professional psychologists into one unified ecosystem. FixYou is developed using Laravel for the backend, ReactJS and InertiaJS for the frontend, and TailwindCSS for styling.",
    link: "https://fixyou.my.id/",
    thumbnail:
      "/img/fixyou.png",
  },
  {
    title: "Sagara Daily Checkup",
    description: "Ariq Hisyam Nabil and I developed a web-based application for our major Web Design and Programming assignment titled Sagara Daily CheckUp. It is an integrated platform that facilitates real-time, secure, and data-driven fleet management, supported by Artificial Intelligence (LLM – Gemini API). If you need login access, please DM me on Instagram @relinggaa. Tech Stack used - Frontend: React.js, Vite.js, Tailwind CSS, Inertia.js (UI Libraries: React bits, shadcn/ui, component land). Backend: Laravel (MVC Architecture). Database: MySQL. AI Integration: Gemini API (LLM).",
    link: "https://sagaradailycheckup.my.id",
    thumbnail:
      "img/sagaradailycheckup.png",
  },
  {
    title: "Edukids",
    description: "My team (SFRZ) and I are excited to share our educational project, Edukids – a creative educational platform for children. Born from our passion to create a fun, interactive, and educational learning experience, we utilized modern technologies like React.js, Tailwind CSS, Magic UI, and Shadcn UI to deliver an attractive and responsive design. We focused on using gradient colors to create a cheerful atmosphere that children love, making the learning process more enjoyable for them.",
    link: "https://edukids-interium.vercel.app/",
    thumbnail:
      "img/edukids.png",
  },

  {
    title: "Bookkeeping Management System (BMS)",
    description: "This project was developed by the SFRZ Development team for Tanjungpura University, specifically for the Civil Engineering study program. The application is designed for use in the university's Civil Engineering laboratory to support testing and practical activities. Developed using the Laravel framework for the backend and Vanilla JS for the frontend, it ensures stability, flexibility, and ease of maintenance.",
    link: "/",
    thumbnail:
      "img/bmsuntan.png",
  },
  {
    title: "CASAZ-CO",
    description: "I'm thrilled to share my latest freelance project—building the official website for Casaz Co, a perfume company. 🚀✨ Utilizing modern web technologies like ReactJS, Tailwind CSS, and ViteJS, I created a fast, responsive, and visually appealing company profile. ReactJS enabled a dynamic UI, while Tailwind CSS facilitated an elegant design aligning with Casaz Co's brand. ViteJS ensured fast builds and optimal performance.",
    link: "https://casaz-co.vercel.app/",
    thumbnail:
      "img/casaz.png",
  },
  {
    title: "Website Travel GerbangEast With React js and Talwind css",
    description: "I am excited to share my latest freelance project—building the official website for GerbangEast, a company focused on innovative tech solutions. 🚀✨ I implemented modern technologies like ReactJS, Tailwind CSS, and ViteJS to deliver an elegant, modern, and responsive company profile. ReactJS allowed for an interactive interface, while Tailwind CSS provided flexibility for a minimalist design. ViteJS ensured fast load times and optimal performance for a smooth browsing experience.",
    link: "https://gerbang-east.vercel.app/",
    thumbnail:
      "img/gerbangeast.png",
  },


];
