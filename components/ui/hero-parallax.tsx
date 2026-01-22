"use client";
import React from "react";
import Image from "next/image";
import ProfileCard from "@/components/ui/ProfileCard";
import avatarImg from "../../public/img/relinggaa.png";
import { ScrollVelocity } from "./ScrollVelocity";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import TextType from "./TextType";



export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    description: string;
    link: string;
    thumbnail: string;

  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);

  const [hasScrolled, setHasScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !hasScrolled) {
        setHasScrolled(true);
      } else if (window.scrollY === 0 && hasScrolled) {
        setHasScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[330vh] overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="relative z-0"
      >
        {hasScrolled && (
          <div className="mb-8 px-4 sm:px-6 md:px-8">
            <ScrollVelocity
              texts={["LET'S CHECK MY PROJECT"]}
              scrollerStyle={{ color: "black", WebkitTextStroke: "1px rgba(255,255,255,255)" }}
              velocity={100}
              damping={50}
              stiffness={400}
              numCopies={6}
            />
            <ScrollVelocity
              className="mt-10"
              scrollerStyle={{ color: "black", WebkitTextStroke: "1px rgba(255,255,255,255)" }}
              texts={["THESE ARE THE PROJECTS I'VE WORKED ON"]}
            
              velocity={-100}
              damping={50}
              stiffness={400}
              numCopies={6}
            />
    
       
          </div>
        )}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
         
          {firstRow.map((product) => (
            
            <ProductCard
            
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        
      </motion.div>
        
    </div>  
  );
};

export const Header = () => {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-7xl items-start md:items-center px-4 sm:px-6 pt-28 pb-24 md:px-8 md:pt-32 md:pb-40 overflow-x-hidden">
      {/* radial glow belakang hero - grayscale */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full blur-3xl" />
        <div className="absolute left-1/2 top-40 h-72 w-72 -translate-x-1/2 rounded-full bg-neutral-300/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full " />
      </div>

      <div className="mt-10 flex flex-col gap-32 xl:flex-row xl:items-center xl:gap-28 w-full">
        {/* Left content */}
        <div className="w-full min-w-0 max-w-full md:max-w-xl space-y-8">
          <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] sm:text-xs font-medium uppercase tracking-[0.18em] text-white/70 whitespace-normal">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            Available for freelance & collaborations
          </div>

          <TextType
            text={["WELCOME TO MY PORTOFOLIO", "LET'S EXPLORE MY WORLD"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
          />

        <p className="w-full min-w-0 max-w-full md:max-w-xl text-sm md:text-base lg:text-lg text-white/70 break-words" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
          I&apos;m a <span className="font-semibold text-white">Full Stack Developer</span> who
          loves crafting clean interfaces, smooth animations, and scalable backends. Let&apos;s
          build memorable digital experiences together.
        </p>


          <div className="flex flex-wrap  items-center gap-4 pt-2">
            <button
        
              type="button"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-[0_18px_60px_rgba(15,23,42,0.8)] transition hover:-translate-y-0.5 hover:bg-neutral-100"
            >
              View Projects
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/80 backdrop-blur-md transition hover:border-white/40 hover:bg-white/10"
            >
              Contact Me
              <span className="text-lg leading-none">↗</span>
            </button>
          </div>
        </div>

        {/* Right: profile card */}
        <div className="mt-10 flex flex-1 justify-center xl:justify-end">
          <ProfileCard
            name="Relingga Aditya"
            title="Full Stack Developer"
            handle="relinggaa"
            status="Online"
            contactText="Contact Me"
            avatarUrl={avatarImg.src}
            miniAvatarUrl={avatarImg.src}
            showUserInfo={true}
            className="landing-compact max-w-sm md:max-w-md"
            enableTilt={true}
            enableMobileTilt={false}
          />
        </div>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >

      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl relative h-full w-full"
      >
        <Image
          src={product.thumbnail}
          fill
          className="object-cover object-left-top"
          alt={product.title}
          unoptimized
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>

      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white mt-2">
        {product.title}
      </h2>
      
    </motion.div>
  );
};
