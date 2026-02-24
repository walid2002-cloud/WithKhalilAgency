"use client";

import { motion, Variants } from "framer-motion";
import { Quote } from "lucide-react";

const REVIEWS = [
    {
        text: "Avant de travailler avec With Khalil, j’avais du mal à me démarquer malgré mon expérience. Grâce à leur stratégie et à la qualité des contenus, mon image est devenue beaucoup plus professionnelle. Aujourd’hui, mes classes sont complètes et je reçois des demandes chaque semaine sans effort..",
        author: "MAÎTRE MOHSSINE",
        role: "Professeur de Français",
    },
    {
        text: "قبل، كنت أقدم دروسي بشكل عادي ولم أكن أصل إلى عدد كبير من التلاميذ. مع الوقت، تطورت طريقتي في العمل وأصبحت صورتي أكثر احترافية، مما ساعدني على الوصول إلى تلاميذ أكثر اهتمامًا. اليوم، أقسامي ممتلئة وأتوصل بطلبات تسجيل بشكل مستمر.",
        author: "عثمان جبري",
        role: "أستاذ اللغة العربية",
    },
    {
        text: "Je ne pensais pas que le digital pouvait autant impacter mon activité. En quelques semaines, With Khalil a transformé mon image et optimisé ma présence en ligne. Aujourd’hui, je suis perçu comme une référence dans mon domaine.",
        author: "REDA EL BOUKHARI.",
        role: "Professeur de SVT",
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // use stagger for cards (one by one)
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" as const }
    }
};

export default function Testimonials() {
    return (
        <section className="py-32 bg-background relative px-4 border-y border-white/5">
            {/* Decorative gradient orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-neon-blue/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-black font-outfit uppercase tracking-tight">
                        L'<span className="text-neon-blue">Impact</span> Parfait
                    </h2>
                    <p className="text-gray-400 mt-6 text-xl max-w-2xl mx-auto">
                        Les formateurs qui travaillent avec nous deviennent les leaders de leur thématique.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
                >
                    {REVIEWS.map((review, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="bg-charcoal/80 p-10 rounded-3xl border border-white/5 hover:border-neon-blue/20 transition-colors backdrop-blur-sm"
                        >
                            <Quote className="w-10 h-10 text-white/10 mb-6" />
                            <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                                "{review.text}"
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-white/5 rounded-full mr-4 flex items-center justify-center font-bold text-white uppercase text-sm border border-white/10">
                                    {review.author[0]}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold font-outfit uppercase">{review.author}</h4>
                                    <p className="text-neon-blue text-sm">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
