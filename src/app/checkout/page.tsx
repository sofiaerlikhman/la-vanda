import type { Metadata } from "next";
import CutoffBanner from "@/components/CutoffBanner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CheckoutFlow from "@/components/checkout/CheckoutFlow";

export const metadata: Metadata = {
  title: "Kasse — la Vanda",
  description: "Korb, Lieferung, Karte, Zahlung — in wenigen Schritten bestellt.",
};

export default function CheckoutPage() {
  return (
    <div>
      <CutoffBanner />
      <SiteHeader />
      <CheckoutFlow />
      <SiteFooter />
    </div>
  );
}
