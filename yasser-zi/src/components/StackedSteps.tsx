"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

type StepT = {
    title: string;
    description: string;
    colorBg: string; // fallback if needed
    colorBorder: string;
    num: string;
};

const STEPS: StepT[] = [
    {
        num: "01",
        title: "Stratégie d'Acquisition",
        description: "Avant de filmer, nous analysons votre audience et vos concurrents. Nous écrivons des scripts percutants conçus pour maximiser l'attention et générer du désir pour votre formation ou coaching.",
        colorBg: "bg-[#0d0d0d]",
        colorBorder: "border-gray-800",
    },
    {
        num: "02",
        title: "Tournage Haute Définition",
        description: "Studio professionnel, éclairage cinéma et caméras 4K. Nous capturons l'essence de votre marque dans une ambiance 'Netflix' qui impose immédiatement l'autorité de votre image.",
        colorBg: "bg-[#111111]",
        colorBorder: "border-neon-blue/30",
    },
    {
        num: "03",
        title: "Montage & Motion Design",
        description: "Montage dynamique avec des animations premium, des sous-titres captivants et un sound design immersif. Vos vidéos se démarquent du bruit ambiant des réseaux.",
        colorBg: "bg-[#141414]",
        colorBorder: "border-gray-800",
    },
    {
        num: "04",
        title: "Meta Ads & Scaling",
        description: "On ne s'arrête pas à la vidéo. Nous lançons vos campagnes Meta Ads avec un funnel optimisé pour convertir directement en leads qualifiés ou en inscriptions sur WhatsApp.",
        colorBg: "bg-[#090b0d]",
        colorBorder: "border-neon-red/30",
    },
];

const StackCard = ({ step, i, targetScale, progress }: { step: StepT, i: number, targetScale: number, progress: any }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // As we scroll past, scale the underlying card slightly down
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
    // Subtle opacity decrease for deeper cards
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

    return (
        <div
            ref={containerRef}
            className={`h-screen flex items-center justify-center sticky top-0`}
        >
            <motion.div
                style={{ scale, opacity, top: `calc(-5vh + ${i * 20}px)` }}
                className={`relative ${step.colorBg} border ${step.colorBorder} rounded-[40px] px-8 py-12 md:px-16 md:py-20 max-w-5xl w-full shadow-[0_-10px_50px_rgba(0,0,0,0.5)]`}
            >
                <div className="absolute top-0 right-12 md:right-24 transform -translate-y-1/2 text-8xl md:text-[150px] font-black font-outfit text-white/5 select-none pointer-events-none">
                    {step.num}
                </div>

                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                    <div className="flex-1">
                        <h3 className="text-3xl md:text-5xl font-bold font-outfit mb-6 text-white uppercase tracking-wide">
                            {step.title}
                        </h3>
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                            {step.description}
                        </p>
                    </div>
                    {/* Decorative graphic side */}
                    <div className="md:w-1/3 flex justify-center scale-75 md:scale-100 relative">
                        {/* Premium Glow effect behind logo */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-56 h-56 bg-neon-blue/20 blur-[80px] rounded-full animate-pulse" />
                        </div>
                        <div className="relative w-40 h-40 md:w-56 md:h-56">
                            <Image src="/logo.png" alt="Logo Zainab Khalil TYB" fill className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" priority />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default function StackedSteps() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="bg-charcoal pt-32 pb-48 px-4 relative">
            <div className="max-w-6xl mx-auto mb-20 text-center">
                <h2 className="text-4xl md:text-6xl font-black font-outfit uppercase">Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-white">Méthode</span></h2>
                <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">4 étapes pour transformer complètement l'image de votre activité et scaler vos revenus.</p>
            </div>

            <div className="relative">
                {STEPS.map((step, i) => {
                    const targetScale = 1 - ((STEPS.length - i) * 0.05);
                    return (
                        <StackCard
                            key={i}
                            step={step}
                            i={i}
                            progress={scrollYProgress}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
        </section>
    );
}
