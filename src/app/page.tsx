import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SponsorsSection from "@/components/SponsorsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-space-gradient overflow-x-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 flex justify-center pointer-events-none" aria-hidden="true">
        <img src="/mountain.svg" alt="" className="w-full max-w-[1500px] h-auto" />
      </div>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SponsorsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
