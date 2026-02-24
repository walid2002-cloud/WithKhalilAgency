import HeroTVParallax from "@/components/HeroTVParallax";
import HeroMarqueeVertical from "@/components/HeroMarqueeVertical";
import ClientsMarquee from "@/components/ClientsMarquee";
import PhotosTrain from "@/components/PhotosTrain";
import StackedSteps from "@/components/StackedSteps";
import SansVsAvec from "@/components/SansVsAvec";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-hidden">
      <HeroTVParallax />
      <HeroMarqueeVertical />
      <ClientsMarquee />
      <SansVsAvec />
      <StackedSteps />
      <PhotosTrain />
      <Portfolio />
      <Testimonials />
      <Contact />
      <WhatsAppButton />
    </main>
  );
}
