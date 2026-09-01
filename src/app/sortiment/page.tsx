import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import CutoffBanner from "@/components/CutoffBanner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import OrderCountdown from "@/components/sortiment/OrderCountdown";
import SortimentBrowser from "@/components/sortiment/SortimentBrowser";
import { T } from "@/i18n/T";
import { getCatalog } from "@/data/products";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sträuße — la Vanda",
  description: "Am Bestelltag gebunden. Was heute in der Werkstatt steht, siehst du hier — Restmenge inklusive.",
};

const SERVICE_ITEMS = [
  {
    title: "Zeitfenster",
    body: "Zwei feste Fenster täglich: 11–14 Uhr und 17–20 Uhr. Samstags nur vormittags.",
  },
  {
    title: "Abholung",
    body: "Im Laden in der Marktstraße, ohne Aufpreis — einfach bei der Bestellung auswählen.",
  },
  {
    title: "Frische",
    body: "Sieben Tage Frischegarantie. Meldet sich ein Strauß früher ab, ersetzen wir ihn.",
  },
];

export default async function SortimentPage() {
  const products = await getCatalog("straeusse");

  return (
    <div>
      <CutoffBanner />
      <SiteHeader />

      <div className={styles.page}>
        <Breadcrumb items={[{ label: "Start", href: "/" }, { label: "Sträuße" }]} />

        <div className={styles.head}>
          <div>
            <h1 className={styles.title}>
              <T de="Sträuße" />
            </h1>
            <p className={styles.lead}>
              <T de="Am Bestelltag gebunden. Was du hier siehst, steht heute in der Werkstatt — Restmenge inklusive." />
            </p>
            <Link href="/konfigurator" className={styles.configuratorLink}>
              <T de="Lieber selbst zusammenstellen? Strauß-Konfigurator" />
            </Link>
          </div>
          <OrderCountdown />
        </div>

        {/* useSearchParams (for ?q= from the mobile/header search) needs a
            Suspense boundary so this stays server-rendered rather than
            forcing the whole route to opt out of static optimization. */}
        <Suspense fallback={null}>
          <SortimentBrowser products={products} />
        </Suspense>

        <div className={styles.serviceStrip}>
          {SERVICE_ITEMS.map((item) => (
            <div key={item.title} className={styles.serviceItem}>
              <p className={styles.serviceTitle}>
                <T de={item.title} />
              </p>
              <p className={styles.serviceBody}>
                <T de={item.body} />
              </p>
            </div>
          ))}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
