"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";

const PROJECTS = [
    {
        type: "photo",
        src: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=800",
        title: "Campagne de Lancement",
        category: "Coaching Pro"
    },
    {
        type: "video",
        src: "https://images.unsplash.com/photo-1579383615410-6ed63b15ad08?auto=format&fit=crop&q=80&w=800",
        title: "Masterclass Immobilière",
        category: "Vente & Conversion"
    },
    {
        type: "photo",
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
        title: "Branding Portrait",
        category: "Images de Marques"
    },
    {
        type: "video",
        src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
        title: "Webinaire Live",
        category: "Ads & Scaling"
    },
];

const staggerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: "easeOut" as const
        }
    })
};

export default function Portfolio() {
    return (
        <section className="py-32 bg-background relative px-4">
            <div className="max-w-7xl mx-auto mb-16 px-4 md:px-0 flex flex-col items-center text-center">
                <h2 className="text-4xl md:text-6xl font-black font-outfit uppercase tracking-tight mb-4">
                    Nos <span className="text-neon-blue">Réalisations</span>
                </h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
                    L'esthétique de haute qualité que vous méritez. Des formats courts dynamiques aux formats longs éducatifs.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 px-4 md:px-0">
                {PROJECTS.map((proj, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerVariants}
                        className="relative group rounded-3xl overflow-hidden aspect-[4/3] bg-charcoal ring-1 ring-white/5 shadow-2xl"
                    >
                        {/* Hover subtle glow wrapping wrapper */}
                        <div className="absolute inset-0 bg-transparent group-hover:bg-neon-blue/20 transition-colors duration-500 z-10 pointer-events-none mix-blend-overlay" />

                        {/* Main image with zoom scale 1 to 1.05 */}
                        <div className="w-full h-full relative overflow-hidden">
                            <Image
                                src={proj.src}
                                alt={proj.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
                        </div>

                        {/* Center play icon for Videos */}
                        {proj.type === "video" && (
                            <div className="absolute inset-0 flex items-center justify-center z-20 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500">
                                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                    <Play className="w-8 h-8 text-white ml-2" />
                                </div>
                            </div>
                        )}

                        {/* Text Fade In Overlay */}
                        <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <span className="text-xs font-bold uppercase tracking-widest text-gold mb-2">{proj.category}</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white font-outfit uppercase">{proj.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
