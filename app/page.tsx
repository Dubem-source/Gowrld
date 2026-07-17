import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { StatsBar } from "@/components/stats-bar";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { CollabsMarquee } from "@/components/collabs-marquee";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Pricing } from "@/components/pricing";
import { FooterSection } from "@/components/footer-section";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <CollabsMarquee />
      <TestimonialsSection />
      <Pricing />
      <FooterSection />
    </main>
  );
}
