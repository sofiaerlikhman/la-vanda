import type { Metadata } from "next";
import CutoffBanner from "@/components/CutoffBanner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import KontoView from "@/components/konto/KontoView";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Konto — la Vanda",
  description: "Anmelden, registrieren und ein Blick auf den künftigen Kontobereich — Bestellungen, Abo, Adressen und Daten an einem Ort.",
};

export default function KontoPage() {
  return (
    <div>
      <CutoffBanner />
      <SiteHeader />

      <div className={styles.page}>
        <Breadcrumb items={[{ label: "Start", href: "/" }, { label: "Konto" }]} />
        <KontoView />
      </div>

      <SiteFooter />
    </div>
  );
}
