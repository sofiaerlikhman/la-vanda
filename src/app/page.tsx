import LandingBanner from "@/components/landing/LandingBanner";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingHero from "@/components/landing/LandingHero";
import PreviewNotice from "@/components/landing/PreviewNotice";
import BouquetShowcase from "@/components/landing/BouquetShowcase";
import OccasionsSection from "@/components/landing/OccasionsSection";
import AtelierIntro from "@/components/landing/AtelierIntro";
import HoursSection from "@/components/landing/HoursSection";
import TeamSection from "@/components/landing/TeamSection";
import WorkshopSection from "@/components/landing/WorkshopSection";
import SubscriptionSection from "@/components/landing/SubscriptionSection";
import InquiryBand from "@/components/landing/InquiryBand";
import DeliverySection from "@/components/landing/DeliverySection";
import ContactSection from "@/components/landing/ContactSection";
import LandingFooter from "@/components/landing/LandingFooter";
import { getShowcaseBouquets } from "@/data/products";
import { getOccasions } from "@/data/occasions";
import { getOpeningHours, getTeam, getWorkshops } from "@/data/atelier";
import { getDeliveryFacts } from "@/data/delivery";

/**
 * The landing page — the shop's home page and its atelier page merged
 * into one, and stripped of everything a customer can't actually do yet.
 *
 * What this branch is for: a temporary public page that says what la
 * Vanda is, shows some of the work, and gives the address, hours and
 * contact details — with no way to order, reserve, book or subscribe,
 * because there is no backend behind any of those. Every place where
 * that decision bites is commented in the component that owns it, and
 * BACKEND.md collects them in one list.
 *
 * Data still comes through the async accessors in src/data (CLAUDE.md
 * §9), even though every one of them returns a static array today —
 * that's the seam a real backend slots into, and it keeps this page
 * honest about which values are frozen at build time.
 */
export default async function LandingPage() {
  const [bouquets, occasions, hours, team, workshops, deliveryFacts] = await Promise.all([
    getShowcaseBouquets(),
    getOccasions(),
    getOpeningHours(),
    getTeam(),
    getWorkshops(),
    getDeliveryFacts(),
  ]);

  return (
    <div>
      <LandingBanner />
      <LandingHeader />

      <main id="inhalt">
        <LandingHero />
        <PreviewNotice />

        {/* What we sell */}
        <BouquetShowcase products={bouquets} />
        <OccasionsSection occasions={occasions} />

        {/* Who we are — the former /atelier page */}
        <AtelierIntro />
        <HoursSection hours={hours} />
        <TeamSection team={team} />
        <WorkshopSection workshops={workshops} />

        {/* What else we do */}
        <SubscriptionSection />
        <InquiryBand />

        {/* How to reach us */}
        <DeliverySection facts={deliveryFacts} />
        <ContactSection hours={hours} />
      </main>

      <LandingFooter />
    </div>
  );
}
