"use client";

import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Marquee horizontal : 2 lignes en défilement infini.
 * Ligne 1 : gauche → droite (contenu défile vers la droite).
 * Ligne 2 : droite → gauche (contenu défile vers la gauche).
 * Loop parfait grâce à 2 copies du contenu par ligne.
 */
export default function HeroMarqueeVertical() {
  const { t } = useLanguage();
  const words = t.marquee.words;

  const renderWords = (keyPrefix: string) =>
    words.map((word, idx) => (
      <span key={`${keyPrefix}-${idx}`} className="marqueeWord">
        {word}
      </span>
    ));

  return (
    <div className="marqueeSection w-full overflow-hidden bg-background section-alt border-y border-white/5 py-8 md:py-12 pointer-events-none">
      <div className="marqueeContainer flex flex-col gap-6 md:gap-8">
        {/* Ligne 1 : défilement gauche → droite */}
        <div className="marqueeRow overflow-hidden">
          <div className="marqueeTrack marqueeTrackRight">
            <div className="marqueeTrackInner">{renderWords("r1-a")}</div>
            <div className="marqueeTrackInner" aria-hidden="true">
              {renderWords("r1-b")}
            </div>
          </div>
        </div>

        {/* Ligne 2 : défilement droite → gauche */}
        <div className="marqueeRow overflow-hidden">
          <div className="marqueeTrack marqueeTrackLeft">
            <div className="marqueeTrackInner">{renderWords("r2-a")}</div>
            <div className="marqueeTrackInner" aria-hidden="true">
              {renderWords("r2-b")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
