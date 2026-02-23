"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle, MessageCircle } from "lucide-react";
import Link from "next/link";

const SANS_NOUS = [
    "Posts aléatoires, sans véritable stratégie",
    "Faible portée, pas de confiance, zéro inscription",
    "Vidéos amateurs, branding faible ou inexistant",
    "Budget gaspillé sur des publicités non rentables",
    "Aucun suivi, aucune optimisation possible",
];

const AVEC_NOUS = [
    "Stratégie millimétrée avec des scripts qui convertissent",
    "Tournage studio, montage pro et image de marque forte",
    "Plan de contenu régulier (Reels, Posts, Stories)",
    "Meta Ads optimisées pour maximiser les leads",
    "Résultats mesurables : Leads, messages WhatsApp, ventes",
];

export default function SansVsAvec() {
    return (
        <section className="py-32 bg-background relative overflow-hidden px-4 border-y border-white/5">
            {/* Visual backgrounds */}
            <div className="absolute left-[10%] top-[20%] w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute right-[10%] bottom-[10%] w-[40vw] h-[40vw] min-w-[400px] min-h-[400px] bg-green-500/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-black font-outfit uppercase tracking-tight">
                    Faites le bon <span className="text-gold">choix</span>
                </h2>
                <p className="text-gray-400 mt-6 text-xl max-w-2xl mx-auto">La différence entre stagner et exploser vos inscriptions tient à la qualité de votre image digitale.</p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative z-10">

                {/* SANS NOUS */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="bg-charcoal/50 border border-white/10 rounded-3xl p-8 lg:p-12 hover:border-red-500/30 transition-colors backdrop-blur-xl"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <h3 className="text-3xl font-black font-outfit uppercase tracking-wider text-gray-500">Sans Nous</h3>
                    </div>
                    <ul className="space-y-6">
                        {SANS_NOUS.map((item, idx) => (
                            <li key={idx} className="flex gap-4 items-start text-gray-400 text-lg">
                                <XCircle className="w-6 h-6 shrink-0 text-red-500/70 translate-y-1" />
                                <span className="leading-tight">{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* AVEC NOUS */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-br from-[#111] to-[#041a1a] border border-green-500/20 rounded-3xl p-8 lg:p-12 shadow-[0_0_50px_rgba(34,197,94,0.1)] hover:border-green-500/50 transition-colors backdrop-blur-xl relative overflow-hidden"
                >
                    {/* subtle glow overlay inside */}
                    <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 to-transparent pointer-events-none" />

                    <div className="flex items-center gap-4 mb-8 relative z-10">
                        <h3 className="text-3xl font-black font-outfit uppercase tracking-wider text-white">Avec Nous</h3>
                    </div>
                    <ul className="space-y-6 relative z-10">
                        {AVEC_NOUS.map((item, idx) => (
                            <li key={idx} className="flex gap-4 items-start text-gray-200 text-lg font-medium">
                                <CheckCircle className="w-6 h-6 shrink-0 text-green-400 translate-y-1 shadow-[0_0_15px_rgba(34,197,94,0.5)] rounded-full" />
                                <span className="leading-tight">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-12 relative z-10">
                        <Link
                            href="https://wa.me/212642638022"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full bg-green-500 text-white font-bold py-4 rounded-full text-lg hover:bg-green-400 transition-colors group shadow-[0_10px_30px_rgba(34,197,94,0.3)] hover:shadow-[0_10px_40px_rgba(34,197,94,0.5)] uppercase font-outfit tracking-wide"
                        >
                            <MessageCircle className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                            Réserver Un Appel
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
