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

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

    return (
        <div
            ref={containerRef}
            className={`min-h-0 flex items-center justify-center sticky top-0 py-1 ${i > 0 ? "-mt-6" : ""}`}
        >
            <motion.div
                style={{ scale, opacity, top: `calc(-5vh + ${i * 20}px)` }}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`relative overflow-hidden ${step.colorBg} border ${step.colorBorder} rounded-[40px] px-6 py-8 md:px-12 md:py-10 max-w-5xl w-full shadow-[0_-10px_50px_rgba(0,0,0,0.5)] group`}
            >
                {/* Numéro à l'intérieur de la carte — coin supérieur gauche */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="absolute top-6 right-6 md:top-8 md:right-10 inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 border border-white/10 text-2xl md:text-3xl font-black font-outfit text-neon-blue tabular-nums"
                >
                    {step.num}
                </motion.div>

                <div className="relative z-10 flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center pr-20 md:pr-24">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                            className="flex items-center gap-3 mb-4"
                        >
                            <span className="text-neon-blue font-bold text-lg opacity-80">{step.num}</span>
                            <h3 className="text-2xl md:text-4xl font-bold font-outfit text-white uppercase tracking-wide">
                                {step.title}
                            </h3>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                            className="text-gray-300 text-base md:text-lg leading-relaxed"
                        >
                            {step.description}
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                        className="md:w-1/3 flex justify-center scale-75 md:scale-100 relative"
                    >
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-56 h-56 bg-neon-blue/20 blur-[80px] rounded-full animate-pulse" />
                        </div>
                        <div className="relative w-40 h-40 md:w-56 md:h-56">
                            <Image src="/logo-with-khalil.png" alt="Logo With Khalil" fill className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" priority />
                        </div>
                    </motion.div>
                </div>

                {/* Ligne d'accent animée au survol */}
                <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-neon-blue to-transparent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                />
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
        <section ref={containerRef} id="methode" className="bg-charcoal pt-32 pb-48 px-4 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-6xl mx-auto mb-8 text-center"
            >
                <h2 className="text-4xl md:text-6xl font-black font-outfit uppercase">Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-white">Méthode</span></h2>
                <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">4 étapes pour transformer complètement l'image de votre activité et scaler vos revenus.</p>
            </motion.div>

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
