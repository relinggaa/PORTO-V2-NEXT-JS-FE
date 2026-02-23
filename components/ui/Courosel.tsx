"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface CarouselItem {
    image: string;
    link: string;
    title: string;
    description: string;
}

interface CouroselProps {
    items: CarouselItem[];
}

const Courosel = ({ items }: CouroselProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Triplicate items for infinite loop illusion
    const extendedItems = [...items, ...items, ...items];
    const originalLength = items.length;

    const checkScroll = () => {
        if (!containerRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        const itemWidth = scrollWidth / 3;

        // Infinite loop logic: Jump back to middle section when reaching boundaries
        if (scrollLeft < 10) {
            containerRef.current.scrollLeft = itemWidth;
        } else if (scrollLeft > scrollWidth - clientWidth - 10) {
            containerRef.current.scrollLeft = scrollWidth - clientWidth - itemWidth;
        }

        setCanScrollLeft(true); // Always true in infinite mode
        setCanScrollRight(true);
    };

    useEffect(() => {
        // Initial scroll to middle section to center the first item of the second group
        if (containerRef.current) {
            const { scrollWidth } = containerRef.current;
            containerRef.current.scrollLeft = scrollWidth / 3;
        }

        const timer = setTimeout(checkScroll, 100);
        window.addEventListener('resize', checkScroll);
        return () => {
            window.removeEventListener('resize', checkScroll);
            clearTimeout(timer);
        };
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (containerRef.current) {
            const { clientWidth } = containerRef.current;
            const scrollAmount = direction === 'left' ? -clientWidth * 0.8 : clientWidth * 0.8;
            containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative w-full h-full group/carousel flex items-center">
            {/* Scroll Container */}
            <motion.div
                ref={containerRef}
                onScroll={checkScroll}
                className="flex h-full gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-[20vw] md:px-[35vw] py-10 items-center"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {extendedItems.map((item, index) => (
                    <CarouselCard key={index} item={item} index={index % originalLength} />
                ))}
            </motion.div>

            {/* Navigation Buttons */}
            <AnimatePresence>
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => scroll('left')}
                    className="absolute left-6 top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all hover:bg-white hover:text-black shadow-2xl"
                >
                    <ChevronLeft className="w-6 h-6" />
                </motion.button>
            </AnimatePresence>

            <AnimatePresence>
                <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => scroll('right')}
                    className="absolute right-6 top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all hover:bg-white hover:text-black shadow-2xl"
                >
                    <ChevronRight className="w-6 h-6" />
                </motion.button>
            </AnimatePresence>

            {/* Premium Navigation Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-30">
                {items.map((_, index) => (
                    <div
                        key={index}
                        className="w-16 h-1 bg-white/5 rounded-full overflow-hidden"
                    >
                        <motion.div
                            className="h-full bg-white/40 group-hover/carousel:bg-white transition-colors"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                        />
                    </div>
                ))}
            </div>

            {/* Side Masks for better focus */}
            <div className="absolute inset-y-0 left-0 w-[30%] bg-linear-to-r from-black via-black/40 to-transparent pointer-events-none z-10 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-y-0 right-0 w-[30%] bg-linear-to-l from-black via-black/40 to-transparent pointer-events-none z-10 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-700" />
        </div>
    );
};

const CarouselCard = ({ item, index }: { item: CarouselItem; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.215, 0.61, 0.355, 1]
            }}
            viewport={{ once: true }}
            className="relative min-w-[320px] md:min-w-[900px] h-[95%] rounded-3xl overflow-hidden group snap-center bg-neutral-900/20"
        >
            {/* Background Image - Clean view by default */}
            <div className="absolute inset-0 z-0 transition-transform duration-1000 ease-out group-hover:scale-105">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover md:object-contain transition-all duration-700 opacity-90 group-hover:opacity-40"
                    sizes="(max-width: 768px) 320px, 900px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
            </div>

            {/* Content Container - Reveals on Hover */}
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-12 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out backdrop-blur-xs group-hover:backdrop-blur-md bg-black/0 group-hover:bg-black/40">
                <motion.div className="max-w-3xl">
                    <div className="mb-4 flex items-center gap-3">
                        <span className="h-px w-8 bg-white/60" />
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/80 font-medium">Achievement {index + 1}</span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tighter leading-tight">
                        {item.title}
                    </h3>
                    <p className="text-neutral-200 text-sm md:text-lg line-clamp-3 mb-10 leading-relaxed font-light">
                        {item.description}
                    </p>
                </motion.div>


            </div>

            {/* Info Badge (Visible when not hovered) */}
            <div className="absolute bottom-6 left-6 z-20 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 group-hover:opacity-0 transition-opacity duration-300">
                <p className="text-[10px] text-white/90 font-medium uppercase tracking-widest">{item.title}</p>
            </div>

            {/* Glass Border Effect */}
            <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none group-hover:border-white/30 transition-colors duration-700" />

            {/* Subtle Glow Overlay */}
            <div className="absolute -inset-px bg-linear-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none" />
        </motion.div>

    );
};

export default Courosel;

