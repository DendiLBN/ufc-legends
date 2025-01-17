import { Hero } from "@/components/landing-page/hero/hero";
import { InfoCards } from "@/components/landing-page/info-cards/info-cards";

import { OpeningCards } from "@/components/landing-page/opening-card/opening-card";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <InfoCards />

      <OpeningCards />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-20 sm:pt-32 pb-12 sm:pb-20"></div>
    </div>
  );
}
