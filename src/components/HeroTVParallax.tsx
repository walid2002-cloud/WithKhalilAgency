"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function HeroTVParallax() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Background huge text moves down fast
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-4"
        >
            {/* Background huge typography */}
            <motion.div
                style={{ y: yBg }}
                className="absolute w-full top-[10%] flex flex-col items-center justify-center select-none -translate-y-4"
            >
                <div className="opacity-[0.07] w-[80vw] max-w-[600px] aspect-[3/1] relative -translate-y-8 blur-[2px]">
                    <Image src="/logo-with-khalil.png" alt="" fill className="object-contain object-center" />
                </div>
                <h1 className="text-[12vw] font-black tracking-tighter text-transparent uppercase leading-none text-center font-outfit" style={{ WebkitTextStroke: "2px rgba(255,51,102,0.1)" }}>
                    DIGITAL AGENCY
                </h1>
            </motion.div>

            {/* Center content */}
            <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-center mb-12"
                >
                    <span className="text-neon-blue font-semibold tracking-widest text-sm uppercase mb-6 block">
                        Video Production & Marketing
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-outfit leading-tight mb-6 max-w-4xl mx-auto">
                    <span>Personal Branding & Growth pour profs, écoles</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-red to-neon-blue">et projets éducatifs.</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                    Stratégie, contenu, acquisition et organisation d’événements pour les acteurs de l’éducation au Maroc..
                    </p>
                </motion.div>
            </div>

        </div>
    );
}
