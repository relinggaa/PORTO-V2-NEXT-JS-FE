"use client"

import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react"
import { motion, MotionValue, useScroll, useTransform, useSpring } from "motion/react"

import { cn } from "@/lib/utils"

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  })

  const words = children.split(" ")

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[300vh]", className)}>
      <div className="sticky top-0 mx-auto flex h-screen max-w-5xl items-center justify-center bg-transparent px-[1rem]">
        <p className="flex flex-wrap items-center justify-center p-5 text-2xl font-bold text-white/10 md:p-8 md:text-4xl lg:p-10 lg:text-5xl xl:text-6xl tracking-tighter leading-[1.2] text-center">
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + 1 / words.length
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            )
          })}
        </p>
      </div>
    </div>
  )
}

interface WordProps {
  children: string
  progress: MotionValue<number>
  range: [number, number]
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])
  const blur = useTransform(progress, range, [10, 0])
  const translate = useTransform(progress, range, [20, 0])


  const springConfig = { stiffness: 100, damping: 20, mass: 0.5 }
  const smoothOpacity = useSpring(opacity, springConfig)
  const smoothBlur = useSpring(blur, springConfig)
  const smoothTranslate = useSpring(translate, springConfig)


  const characters = children.split("");

  return (
    <span className="relative mx-[0.15em] mb-4">

      <span className="absolute inset-0 opacity-[0.03] blur-sm select-none" aria-hidden="true">
        {children}
      </span>

      <motion.span
        style={{
          opacity: smoothOpacity,
          filter: useTransform(smoothBlur, (v) => `blur(${v}px)`),
          y: smoothTranslate,
        }}
        className="inline-flex text-white"
      >
        {characters.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.02 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </span>
  )
}
