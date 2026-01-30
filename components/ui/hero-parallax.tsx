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
  AnimatePresence,
} from "motion/react";
import TextType from "./TextType";
import { useProjectModal } from "@/app/hook/ProjectModal/useProjectModal";



const ProjectModalItem = ({ project, idx }: { project: any; idx: number }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.05 }}
      className="group block relative"
    >
      <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/5 bg-black group-hover:border-white/20 transition-all duration-500 relative">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-30"
          unoptimized
        />

        {/* Layer Gradasi & Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-100" />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Konten Default (Title & Short Desc) */}
        <div className="absolute bottom-6 left-6 right-6 transform group-hover:-translate-y-2 transition-transform duration-500 z-10">
          <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
          <div className="flex flex-col gap-2">
            <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {project.description}
            </p>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsExpanded(true);
              }}
              className="w-fit text-[10px] font-black tracking-widest text-white/40 hover:text-white uppercase mt-1 opacity-0 group-hover:opacity-100 transition-all duration-500 border-b border-white/0 hover:border-white/40"
            >
              Learn More →
            </button>
          </div>
        </div>

        {/* MODERN DETAIL OVERLAY (Show More View) */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute inset-0 z-30 bg-black/95 backdrop-blur-2xl p-6 flex flex-col justify-between"
            >
              <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 pt-2">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-black italic text-white tracking-tighter">
                    {project.title}
                  </h4>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center w-8 h-8"
                  >
                    <span className="text-white text-xs">✕</span>
                  </button>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold hover:scale-105 transition-transform"
                >
                  VISIT SITE
                </a>
                <span className="text-[10px] text-neutral-600 font-bold tracking-[0.2em] uppercase">Project Detail</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

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
  const getRepeatedProducts = (count: number) => {
    const repeated = [];
    while (repeated.length < count) {
      repeated.push(...products);
    }
    return repeated.slice(0, count);
  };

  const allProducts = getRepeatedProducts(15);
  const firstRow = allProducts.slice(0, 5);
  const secondRow = allProducts.slice(5, 10);
  const thirdRow = allProducts.slice(10, 15);
  const ref = React.useRef(null);
  const { isOpen, openModal, closeModal } = useProjectModal();

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
      className="h-[330vh] overflow-hidden antialiased relative flex flex-col self-auto"
    >
      <Header />
      <div className="flex-1 w-full [perspective:1000px] [transform-style:preserve-3d]">
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
          <motion.div className="hidden md:flex flex-row-reverse space-x-reverse space-x-20 mb-20">

            {firstRow.map((product) => (

              <ProductCard

                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row  mb-20 space-x-20 " >

            {secondRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateXReverse}
                key={product.title}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20" id="projects">
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

      <motion.div

        style={{ opacity: useSpring(useTransform(scrollYProgress, [0, 0.2], [0, 1]), springConfig) }}
        className="absolute bottom-10 left-0 w-full flex justify-center z-50"
      >
        <button

          onClick={openModal}
          className="px-12 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        >
          Show More Projects
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <ProjectModal
            isOpen={isOpen}
            onClose={closeModal}
            products={products}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const ProjectModal = ({
  isOpen,
  onClose,
  products
}: {
  isOpen: boolean;
  onClose: () => void;
  products: any[]
}) => {
  if (!isOpen) return null;

  return (
    <motion.div

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="relative w-full max-w-6xl h-[85vh] bg-black border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.05)] flex flex-col"
      >
        {/* Header */}
        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-zinc-950/50">
          <div>
            <h3 className="text-3xl font-black text-white italic tracking-tighter">ALL PROJECTS</h3>
            <p className="text-neutral-500 text-sm mt-1 uppercase tracking-widest font-medium">Collections of my work</p>
          </div>
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all group"
          >
            <span className="text-2xl group-hover:rotate-90 transition-transform duration-300">✕</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
            {products.map((project, idx) => (
              <ProjectModalItem key={idx} project={project} idx={idx} />
            ))}
          </div>
        </div>

        {/* Footer Area */}
        <div className="p-6 border-t border-white/5 text-center bg-zinc-950/30">
          <p className="text-[10px] text-neutral-600 tracking-[0.3em] uppercase">Developed by Relingga Aditya</p>
        </div>
      </motion.div>
    </motion.div>
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
            <a href="#projects"

              type="button"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-[0_18px_60px_rgba(15,23,42,0.8)] transition hover:-translate-y-0.5 hover:bg-neutral-100"
            >
              View Projects
            </a>
            <a href="#contact"
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/80 backdrop-blur-md transition hover:border-white/40 hover:bg-white/10"
            >
              Contact Me
              <span className="text-lg leading-none">↗</span>
            </a>
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
    description: string;
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
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none transition-opacity duration-300"></div>

      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover/product:opacity-100 text-white transition-opacity duration-300">
        <h2 className="font-bold text-2xl mb-2">
          {product.title}
        </h2>
        <p className="text-sm text-gray-200">
          {product.description}
        </p>
      </div>
    </motion.div>
  );
};
