"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const photos = [
  "/premium1.png",
  "/premium2.png",
  "/premium3.png",
  "/premium4.png",
  "/premium5.png",
  "/premium6.png",
  "/premium7.png",
];

const baseCol1 = [photos[0], photos[1], photos[2]];
const baseCol2 = [photos[3], photos[4], photos[5]];
const baseCol3 = [photos[6], photos[0], photos[1]];

const Column = ({ images, duration }: { images: string[]; duration: string }) => {
  return (
    <div className="relative h-[600px] md:h-[800px] w-full min-w-[260px] md:min-w-[320px] overflow-hidden mask-y">
      <div
        className="flex flex-col gap-6 w-full animate-vertical-train"
        style={{ "--duration": duration } as React.CSSProperties}
      >
        {[...images, ...images].map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative w-full h-[350px] md:h-[450px] rounded-[3rem] overflow-hidden group shrink-0
                            shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_1px_rgba(255,255,255,0.05)]
                            ring-1 ring-white/[0.04]"
          >
            <Image
              src={src}
              alt={`Esthétique premium ${i + 1}`}
              fill
              className="object-cover brightness-[0.92] group-hover:brightness-100 group-hover:scale-110 transition-all duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]"
              sizes="(max-width: 768px) 300px, 400px"
              loading="lazy"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 group-hover:from-black/30 group-hover:to-black/10 transition-colors duration-700 pointer-events-none"
              aria-hidden
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function PhotosTrain() {
  const { t } = useLanguage();
  const photosT = t.photos as { titleSuffix?: string };

  return (
    <section className="py-24 overflow-hidden bg-background relative flex flex-col items-center border-y border-white/5">
      <div className="mb-16 text-center z-20 relative px-4">
        <h2 className="text-3xl md:text-5xl font-bold font-outfit uppercase tracking-wider mb-4 text-foreground">
          {t.photos.title} <span className="text-gold">{t.photos.titleHighlight}</span>
          {photosT.titleSuffix ?? ""}
        </h2>
        <p className="text-muted max-w-2xl mx-auto text-lg md:text-xl">
          {t.photos.subtitle}
        </p>
      </div>

      <div className="w-full flex justify-center gap-6 px-4 md:px-8 max-h-[70vh] md:max-h-[85vh] overflow-hidden relative">
        <Column images={baseCol1} duration="30s" />
        <Column images={baseCol2} duration="42s" />
        <Column images={baseCol3} duration="35s" />

        <div className="absolute top-0 left-0 w-full h-24 md:h-40 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-24 md:h-40 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
