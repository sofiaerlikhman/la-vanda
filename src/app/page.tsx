import CutoffBanner from "@/components/CutoffBanner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Hero from "@/components/home/Hero";
import TodaysPicksSection from "@/components/home/TodaysPicksSection";
import AtelierSection from "@/components/home/AtelierSection";
import SubscriptionSection from "@/components/home/SubscriptionSection";
import OccasionsSection from "@/components/home/OccasionsSection";
import InquiryBand from "@/components/home/InquiryBand";
import DeliverySection from "@/components/home/DeliverySection";
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
      <SubscriptionSection />
      <OccasionsSection />
      <InquiryBand />
      <DeliverySection />
      <SiteFooter />
    </div>
  );
}
