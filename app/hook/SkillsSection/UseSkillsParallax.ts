import { useRef } from "react";
import { useScroll, useTransform, useSpring, MotionValue } from "motion/react";

export const useSkillsParallax = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
    springConfig
  );

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [150, -100]),
    springConfig
  );

  const translateYReverse = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [-100, 150]),
    springConfig
  );

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]),
    springConfig
  );

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [5, -5]),
    springConfig
  );

  const borderRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return {
    ref,
    scrollYProgress,
    opacity,
    translateY,
    translateYReverse,
    scale,
    rotateX,
    borderRotation,
  };
};

