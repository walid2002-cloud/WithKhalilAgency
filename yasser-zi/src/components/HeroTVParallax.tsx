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
    // TV object moves up slowly
    const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

    return (
        <div
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-4"
        >
            {/* Background huge typography */}
            <motion.div
                style={{ y: yBg }}
                className="absolute w-full top-[15%] flex flex-col items-center justify-center select-none"
            >
                <h1 className="text-[12vw] font-black tracking-tighter text-white/5 uppercase leading-none text-center font-outfit">
                    ZAINAB KHALIL TYB
                </h1>
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
                    <h2 className="text-4xl md:text-7xl font-bold font-outfit leading-tight mb-6">
                    Personal Branding & Growth <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-red to-neon-blue">pour profs, écoles et projets éducatifs. </span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        Stratégie, tournages premium et campagnes publicitaires qui transforment les formateurs en leaders de marché.
                    </p>
                </motion.div>

                {/* Hero TV Object */}
                <motion.div
                    style={{ y: yImage, scale: scaleImage }}
                    className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,51,102,0.15)] ring-1 ring-white/10"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                    {/* Subtle floating effect for depth combined with scroll parallax */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="w-full h-full"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1590845947698-8924d7409b56?auto=format&fit=crop&q=80&w=1200"
                            alt="Studio TV Production"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </motion.div>
            </div>

        </div>
    );
}
