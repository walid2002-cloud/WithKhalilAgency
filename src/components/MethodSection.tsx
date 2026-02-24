"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

const steps = [
  { id: "01", title: "STRATÉGIE D’ACQUISITION" },
  { id: "02", title: "TOURNAGE HAUTE DÉFINITION" },
  { id: "03", title: "MONTAGE & MOTION DESIGN" },
  { id: "04", title: "META ADS & SCALING" },
];

/** Minimal Premium Navbar included as requested */
const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 w-full backdrop-blur-lg bg-black/40 border-b border-white/[0.05]"
    >
      <a href="#" className="text-white font-bold text-xl tracking-widest uppercase">
        With Khalil
      </a>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
        <a href="#services" className="hover:text-white transition-colors duration-300">Services</a>
        <a href="#methode" className="hover:text-white transition-colors duration-300 text-white">Notre Méthode</a>
        <a href="#portfolio" className="hover:text-white transition-colors duration-300">Portfolio</a>
      </div>
      <a href="#contact" className="px-5 py-2 text-xs md:text-sm font-semibold bg-white text-black rounded-full hover:scale-[1.02] transition-transform duration-300">
        Démarrer
      </a>
    </motion.nav>
  );
};

const Card = ({ step, index }: { step: { id: string; title: string }; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring to make the parallax light effect very smooth
  const springX = useSpring(mouseX, { stiffness: 500, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 50 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.06] p-4 md:p-5 backdrop-blur-md cursor-pointer transition-colors duration-500 hover:bg-white/[0.05]"
    >
      {/* Dynamic Parallax Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-screen"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${springX}px ${springY}px,
              rgba(255,255,255,0.06),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* CSS-based Shine Effect on hover */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-[200%] z-20 pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col h-full min-h-[5rem] justify-center md:min-h-[6rem]">
        <h3 className="text-sm md:text-base lg:text-lg font-bold text-white max-w-[75%] tracking-wide leading-tight group-hover:text-white/90 transition-colors duration-300 drop-shadow-sm">
          {step.title}
        </h3>
      </div>

      {/* Watermark Number */}
      <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-6 text-[4.5rem] md:text-[5.5rem] font-bold text-white/[0.02] transition-opacity duration-500 group-hover:text-white/[0.05] select-none pointer-events-none">
        {step.id}
      </div>
    </motion.div>
  );
};

export default function MethodSection() {
  return (
    <div className="relative w-full bg-[#030303] selection:bg-white/20 font-sans">
      {/* Integration de la navbar pour le rendu complet */}
      <Navbar />

      <section 
        id="methode" 
        // Padding réduit: py-12 à py-16 + margin top pour la navbar
        className="relative flex flex-col items-center justify-center pt-28 pb-12 md:py-16 px-4 md:px-6 w-full max-w-4xl mx-auto overflow-hidden"
      >
        {/* Subtle background radial gradient for the section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

        {/* Title & Subtitle */}
        <div className="relative z-10 w-full flex flex-col items-center mb-4 md:mb-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/70 text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
            Notre Méthode
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3 drop-shadow-md"
          >
            Élevez votre acquisition.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-base text-white/50 max-w-lg mx-auto leading-relaxed"
          >
            Un workflow premium regroupé en 4 étapes clés. Pas de dispersion, que de la performance brute.
          </motion.p>
        </div>

        {/* 4 Cards Grid - Compact Layout */}
        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2">
          {steps.map((step, index) => (
            <Card key={step.id} step={step} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
