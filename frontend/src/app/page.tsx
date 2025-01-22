import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import FeaturesSection from "@/components/FeaturesSection";
import GameplayFeatures from "@/components/GameplayFeatures";
import BattlePassSection from "@/components/BattlePassSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative bg-zinc-900 text-white">
      <Navbar />
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturesSection />
        <GameplayFeatures />
        <BattlePassSection />
        <TestimonialsSection />
        <Footer />
      </div>
    </div>
  );
}