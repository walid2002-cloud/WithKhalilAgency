"use client";

import { motion } from "framer-motion";

const words = [
    "STRATÉGIE",
    "IMPACT",
    "TOURNAGE",
    "MONTAGE",
    "BRANDING",
    "META ADS",
    "CONVERSION",
    "STRATÉGIE", // Repeated for seamless loop
    "IMPACT",
    "TOURNAGE",
    "MONTAGE",
    "BRANDING",
];

export default function HeroMarqueeVertical() {
    return (
        <div className="w-full flex justify-center overflow-hidden bg-background border-y border-white/5 py-12">
            <div className="relative h-[250px] overflow-hidden flex items-center max-w-7xl mx-auto w-full px-4 mask-vertical">
                {/* Decorative elements */}
                <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

                <div className="w-full flex gap-12 justify-center items-center">
                    <div className="h-[300px] overflow-hidden relative w-full flex space-x-24 px-8 items-center text-center mask-edges">

                        <motion.div
                            animate={{ y: [0, -1000] }}
                            transition={{
                                repeat: Infinity,
                                duration: 25,
                                ease: "linear",
                            }}
                            className="flex flex-col gap-8 text-[4rem] md:text-[6rem] font-bold tracking-tighter text-white/5 uppercase leading-none font-outfit"
                        >
                            {[...words, ...words].map((word, idx) => (
                                <span key={`col1-${idx}`} className="block">
                                    {word}
                                </span>
                            ))}
                        </motion.div>

                        <motion.div
                            animate={{ y: [-1000, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 35,
                                ease: "linear",
                            }}
                            className="flex flex-col gap-8 text-[4rem] md:text-[6rem] font-bold tracking-tighter text-neon-blue/20 uppercase leading-none font-outfit"
                        >
                            {[...words, ...words].map((word, idx) => (
                                <span key={`col2-${idx}`} className="block">
                                    {word}
                                </span>
                            ))}
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -1000] }}
                            transition={{
                                repeat: Infinity,
                                duration: 20,
                                ease: "linear",
                            }}
                            className="hidden lg:flex flex-col gap-8 text-[4rem] md:text-[6rem] font-bold tracking-tighter text-neon-red/10 uppercase leading-none font-outfit"
                        >
                            {[...words, ...words].map((word, idx) => (
                                <span key={`col3-${idx}`} className="block">
                                    {word}
                                </span>
                            ))}
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
}
