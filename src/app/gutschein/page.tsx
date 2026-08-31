import type { Metadata } from "next";
import CutoffBanner from "@/components/CutoffBanner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import FaqAccordion from "@/components/produkt/FaqAccordion";
import VoucherPurchaseForm from "@/components/gutschein/VoucherPurchaseForm";
import VoucherRedeemForm from "@/components/gutschein/VoucherRedeemForm";
import type { ProductFaqEntry } from "@/data/products";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Gutschein — la Vanda",
  description:
    "Ein Betrag, drei Jahre gültig, einlösbar im Laden und online. Als PDF, Karte im Umschlag oder mit einem Strauß geliefert.",
};

// The handoff links each occasion card to its own landing page ("#" in the
// design file, which had no real destination either) — none of those pages
// exist in this codebase yet, so these render as plain info cards rather
// than links to nowhere.
const OCCASIONS = [
  { title: "Weihnachten", note: "Bestellschluss 22. Dezember, 12 Uhr", image: "Weihnachten" },
  { title: "Muttertag", note: "Zusatzfenster am Sonntag, 9–13 Uhr", image: "Muttertag" },
  { title: "Valentinstag", note: "Vorbestellung ab 1. Februar", image: "Valentinstag" },
];

const FAQ: ProductFaqEntry[] = [
  {
    question: "Wie lange ist der Gutschein gültig?",
    answer: "Drei Jahre ab Ausstellung, gerechnet ab Ende des Kaufjahres.",
  },
  {
    question: "Gilt er auch für Workshops?",
    answer: "Ja, für Workshops, Abos und alles im Laden. Nicht für Installationen auf Anfrage.",
  },
  {
    question: "Kann ich ihn zurückgeben?",
    answer: "Innerhalb von 14 Tagen, solange er nicht eingelöst ist. Schreib uns kurz.",
  },
];

export default function GutscheinPage() {
  return (
    <div>
      <CutoffBanner />
      <SiteHeader />

      <div className={styles.page}>
        <Breadcrumb items={[{ label: "Start", href: "/" }, { label: "Gutschein" }]} />

        <div className={styles.hero}>
          <div className={styles.heroImage}>
            <ImagePlaceholder label="Gutscheinkarte auf Werkbank, 4:3" />
          </div>
          <div>
            <h1 className={styles.title}>Gutschein</h1>
            <p className={styles.lead}>
              Ein Betrag, drei Jahre gültig, einlösbar im Laden und online. Als Karte im Umschlag oder als PDF in der
              Sekunde.
            </p>
            <div className={styles.formWrap}>
              <VoucherPurchaseForm />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.stripSection}>
        <div className={styles.stripInner}>
          <h2 className={styles.stripTitle}>Zu den Anlässen</h2>
          <div className={styles.occasionGrid}>
            {OCCASIONS.map((o) => (
              <div key={o.title} className={styles.occasionCard}>
                <div className={styles.occasionImage}>
                  <ImagePlaceholder label={o.image} />
                </div>
                <div className={styles.occasionBody}>
                  <h3 className={styles.occasionTitle}>{o.title}</h3>
                  <p className={styles.occasionNote}>{o.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.page}>
        <div className={styles.redeemLayout}>
          <div>
            <h2 className={styles.redeemTitle}>Gutschein einlösen</h2>
            <p className={styles.redeemLead}>
              Code im Checkout eingeben oder im Laden vorzeigen. Restbeträge bleiben stehen, Teileinlösung ist
              möglich.
            </p>
            <div className={styles.redeemForm}>
              <VoucherRedeemForm />
            </div>
          </div>
          <FaqAccordion entries={FAQ} />
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
