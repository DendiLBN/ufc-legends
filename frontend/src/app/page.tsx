import { HeroSection } from "@/components/landing-page/hero-section/hero-section";
import { Navbar } from "@/components/landing-page/nabar/navbar";
import { FeaturesSection } from "@/components/landing-page/feature-section/features-section";
import { GameplayFeatures } from "@/components/landing-page/game-play-features/game-play-features";
import { BattlePassSection } from "@/components/landing-page/battle-pass-section/battle-pass-section";
import { TestimonialsSection } from "@/components/landing-page/testimonial-section/testimonial-section";

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
      </div>
    </div>
  );
}
