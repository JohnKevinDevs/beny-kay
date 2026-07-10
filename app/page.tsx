import { Topbar } from "@/components/layout/Topbar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { About } from "@/components/sections/About";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { GiftBanner } from "@/components/sections/GiftBanner";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Topbar />
      <Nav />
      <main id="top">
        <Hero />
        <Marquee />
        <CategoryGrid />
        <About />
        <ProductGrid />
        <HowItWorks />
        <GiftBanner />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
