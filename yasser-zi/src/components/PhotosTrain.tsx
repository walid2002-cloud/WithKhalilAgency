"use client";

import Image from "next/image";

const photos = [
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1522869635100-9f4c5e86fee3?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1521943890253-066ae5b1caee?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1518105570075-8ea5d086f68c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1601506521937-0121a7fc5317?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1533750516457-a7eb68d30e38?auto=format&fit=crop&q=80&w=800",
];

// Distribution into columns
const baseCol1 = [photos[0], photos[1], photos[2]];
const baseCol2 = [photos[3], photos[4], photos[5]];
const baseCol3 = [photos[6], photos[0], photos[1]];

const Column = ({ images, duration }: { images: string[], duration: string }) => {
    return (
        <div className="relative h-[600px] md:h-[800px] w-full min-w-[260px] md:min-w-[320px] overflow-hidden mask-y">
            <div
                className="flex flex-col gap-6 w-full animate-vertical-train"
                style={{ '--duration': duration } as React.CSSProperties}
            >
                {/* We duplicate the array to allow for a seamless 50% translation loop without jumps */}
                {[...images, ...images].map((src, i) => (
                    <div
                        key={i}
                        className="relative w-full h-[350px] md:h-[450px] rounded-[3rem] overflow-hidden group shadow-[0_20px_40px_rgba(0,0,0,0.5)] shrink-0"
                    >
                        <Image
                            src={src}
                            alt={`Studio setup ${i}`}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                            sizes="(max-width: 768px) 300px, 400px"
                            unoptimized // avoids potential next image layout shift/lag in continuous CSS marquee animation
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function PhotosTrain() {
    return (
        <section className="py-24 overflow-hidden bg-background relative flex flex-col items-center border-y border-white/5">

            <div className="mb-16 text-center z-20 relative px-4">
                <h2 className="text-3xl md:text-5xl font-bold font-outfit uppercase tracking-wider mb-4">
                    Une Esthétique <span className="text-gold">Premium</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
                    L'excellence visuelle au service de votre autorité.
                </p>
            </div>

            <div className="w-full flex justify-center gap-6 px-4 md:px-8 max-h-[70vh] md:max-h-[85vh] overflow-hidden relative">
                <Column images={baseCol1} duration="30s" />
                <Column images={baseCol2} duration="42s" />
                <Column images={baseCol3} duration="35s" />

                {/* Gradients blending top & bottom with background */}
                <div className="absolute top-0 left-0 w-full h-24 md:h-40 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-24 md:h-40 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
            </div>

        </section >
    );
}
