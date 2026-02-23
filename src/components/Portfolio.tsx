"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Play, X } from "lucide-react";

export type RealisationCategory = "event" | "personal_branding";

export type Realisation = {
  id: string;
  title: string;
  category: RealisationCategory;
  videoSrc: string;
  /** Chemin vers l'image d'aperçu (ex: /thumbs/event1.jpg) */
  thumbnailSrc: string;
};

const REALISATIONS: Realisation[] = [
  {
    id: "1",
    title: "Maître Mohssine",
    category: "event",
    videoSrc: "/realisations/maitre-mouhcine.mp4",
    thumbnailSrc: "/thumbs/maitre-mouhcine.jpg",
  },
  {
    id: "2",
    title: "Événement de fin d'année",
    category: "event",
    videoSrc: "/realisations/c0202-1.mp4",
    thumbnailSrc: "/thumbs/c0202-1.jpg",
  },
  {
    id: "3",
    title: "Reda ElBoukhari",
    category: "event",
    videoSrc: "/realisations/img-2517.mov",
    thumbnailSrc: "/thumbs/img-2517.jpg",
  },
  {
    id: "4",
    title: "Avant l'examen régional",
    category: "event",
    videoSrc: "/realisations/c0107-2.mp4",
    thumbnailSrc: "/thumbs/c0107-2.jpg",
  },
  // PERSONAL BRANDING
  {
    id: "5",
    title: "Zak Eco",
    category: "personal_branding",
    videoSrc: "/realisations/zak-eco.mp4",
    thumbnailSrc: "/thumbs/zak-eco.jpg",
  },
  {
    id: "6",
    title: "Prof Essakhi",
    category: "personal_branding",
    videoSrc: "/realisations/prof-essakhi.mov",
    thumbnailSrc: "/thumbs/prof-essakhi.jpg",
  },
  {
    id: "7",
    title: "Maître Mohssine",
    category: "personal_branding",
    videoSrc: "/realisations/maitre-mouhcine-pb.mov",
    thumbnailSrc: "/thumbs/maitre-mouhcine-pb.jpg",
  },
  {
    id: "8",
    title: "Othmane Jabri",
    category: "personal_branding",
    videoSrc: "/realisations/othmane-jabri.mov",
    thumbnailSrc: "/thumbs/othmane-jabri.jpg",
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
      ease: "easeOut",
    },
  }),
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const PLACEHOLDER_THUMBS = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
];

function VideoCard({
  realisation,
  index,
  onClick,
}: {
  realisation: Realisation;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerVariants}
      onClick={onClick}
      className="group relative w-full rounded-3xl overflow-hidden aspect-[4/3] bg-charcoal text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:ring-offset-2 focus:ring-offset-background
        ring-1 ring-white/[0.06] shadow-[0_0_0_1px_rgba(0,229,255,0.05),0_20px_50px_rgba(0,0,0,0.5)]
        hover:shadow-[0_0_0_1px_rgba(0,229,255,0.2),0_0_30px_rgba(0,229,255,0.08),0_20px_50px_rgba(0,0,0,0.6)] hover:ring-neon-blue/25
        transition-all duration-500"
    >
      {/* Thumbnail - vidéo chargée uniquement au clic (modal) */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <img
          src={realisation.thumbnailSrc}
          alt=""
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = PLACEHOLDER_THUMBS[index % PLACEHOLDER_THUMBS.length];
          }}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Overlay sombre pour lisibilité du titre */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/60 group-hover:via-black/15 transition-colors duration-500" />
      </div>

      {/* Title at top */}
      <div className="absolute top-0 left-0 right-0 p-6 z-10">
        <h3 className="text-lg md:text-xl font-bold text-white font-outfit uppercase drop-shadow-lg">
          {realisation.title}
        </h3>
      </div>

      {/* Play button center */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-500 shadow-xl">
          <Play className="w-8 h-8 text-white ml-2 fill-white" strokeWidth={2} />
        </div>
      </div>
    </motion.button>
  );
}

function VideoModal({
  realisation,
  isOpen,
  onClose,
}: {
  realisation: Realisation | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClose = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [isOpen, handleClose]);

  return (
    <AnimatePresence>
      {isOpen && realisation && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl cursor-pointer"
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-black/60 backdrop-blur flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </button>
            <video
              ref={videoRef}
              src={realisation.videoSrc}
              autoPlay
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-contain bg-black"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<RealisationCategory>("event");
  const [selectedVideo, setSelectedVideo] = useState<Realisation | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredRealisations = REALISATIONS.filter((r) => r.category === activeTab);

  const openModal = useCallback((realisation: Realisation) => {
    setSelectedVideo(realisation);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedVideo(null);
    }, 300);
  }, []);

  return (
    <section id="portfolio" className="py-32 bg-background relative px-4">
      <div className="max-w-7xl mx-auto mb-12 px-4 md:px-0 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl font-black font-outfit uppercase tracking-tight mb-4">
          Nos <span className="text-neon-blue">Réalisations</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10">
          L&apos;esthétique de haute qualité que vous méritez.
        </p>

        {/* Tabs */}
        <div className="flex rounded-full bg-white/[0.04] p-1 ring-1 ring-white/[0.06]">
          <button
            type="button"
            onClick={() => setActiveTab("event")}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
              activeTab === "event"
                ? "bg-neon-blue/20 text-neon-blue ring-1 ring-neon-blue/30"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Event
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("personal_branding")}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
              activeTab === "personal_branding"
                ? "bg-neon-blue/20 text-neon-blue ring-1 ring-neon-blue/30"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Personal Branding
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 px-4 md:px-0">
        {filteredRealisations.length > 0 ? (
          filteredRealisations.map((r, i) => (
            <VideoCard
              key={r.id}
              realisation={r}
              index={i}
              onClick={() => openModal(r)}
            />
          ))
        ) : (
          <div className="col-span-2 py-24 text-center text-gray-500">
            <p className="text-lg">Aucune réalisation dans cette catégorie pour le moment.</p>
            <p className="text-sm mt-2 opacity-80">Les vidéos Personal Branding seront bientôt disponibles.</p>
          </div>
        )}
      </div>

      <VideoModal
        realisation={selectedVideo}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
