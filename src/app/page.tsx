import CutoffBanner from "@/components/CutoffBanner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Hero from "@/components/home/Hero";
import TodaysPicksSection from "@/components/home/TodaysPicksSection";
import AtelierSection from "@/components/home/AtelierSection";
import AboSection from "@/components/home/AboSection";
import AnlaesseSection from "@/components/home/AnlaesseSection";
import AnfrageBand from "@/components/home/AnfrageBand";
import LieferungSection from "@/components/home/LieferungSection";
import { getTodaysProducts } from "@/data/products";

export default async function HomePage() {
  const products = await getTodaysProducts();

  return (
    <div>
      <CutoffBanner />
      <SiteHeader />
      <Hero />
      <TodaysPicksSection products={products} />
      <AtelierSection />
      <AboSection />
      <AnlaesseSection />
      <AnfrageBand />
      <LieferungSection />
      <SiteFooter />
    </div>
  );
}
