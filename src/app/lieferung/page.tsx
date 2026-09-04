import type { Metadata } from "next";
import CutoffBanner from "@/components/CutoffBanner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import FaqAccordion from "@/components/product/FaqAccordion";
import DeliveryZoneCheck from "@/components/delivery/DeliveryZoneCheck";
import LiveDeliveryWindows from "@/components/delivery/LiveDeliveryWindows";
import type { ProductFaqEntry } from "@/data/products";
import { T } from "@/i18n/T";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Lieferung — la Vanda",
  description:
    "Eigene Fahrer, zwei Zeitfenster täglich. Liefergebiet, Preise und was passiert, wenn niemand zu Hause ist.",
};

const WINDOWS = [
  { eyebrow: "Fenster A", title: "11–14 Uhr", note: "Bestellschluss 9 Uhr am selben Tag" },
  { eyebrow: "Fenster B", title: "17–20 Uhr", note: "Bestellschluss 14 Uhr am selben Tag" },
  { eyebrow: "Samstag", title: "11–14 Uhr", note: "Bestellschluss Freitag 17 Uhr" },
  { eyebrow: "Abholung", title: "Ab 2 Std.", note: "Marktstraße 12, ohne Aufpreis" },
];

const ZONES: { area: string; fee: string; free?: boolean }[] = [
  { area: "Wiesbaden Innenstadt, Nordost, Westend", fee: "5,90 €" },
  { area: "Biebrich, Sonnenberg, Bierstadt", fee: "7,90 €" },
  { area: "Mainz-Kastel, Kostheim, Amöneburg", fee: "9,90 €" },
  { area: "Ab 90 € Warenwert", fee: "ohne Kosten", free: true },
];

const SERVICE_ITEMS = [
  {
    title: "Wenn niemand da ist",
    body: "Du legst im Checkout fest, was dann passiert: Nachbarn, vor der Tür oder zurück ins Atelier. Wir schreiben dir in jedem Fall eine SMS.",
  },
  {
    title: "Anonym verschicken",
    body: "Auf Wunsch bleiben Karte und Lieferschein ohne Absender. Die Option steht in Schritt 2 des Checkouts.",
  },
  {
    title: "Frischegarantie",
    body: "Sieben Tage Haltbarkeit. Hält der Strauß nicht, binden wir neu oder erstatten — ohne Rücksendung, ein Foto genügt.",
  },
];

const FAQ: ProductFaqEntry[] = [
  {
    question: "Wie transportiert ihr die Blumen?",
    answer: "In Wassergel und Papierhülle, aufrecht in Transportkisten. Im Sommer fahren wir mit Kühlung.",
  },
  {
    question: "Kann ich ein genaueres Zeitfenster bekommen?",
    answer: "Am Liefertag bekommst du zwanzig Minuten vor Ankunft eine SMS mit Namen des Fahrers.",
  },
  {
    question: "Liefert ihr an Sonntagen?",
    answer: "Nein. Für Trauerfälle und Hochzeiten machen wir Ausnahmen — ruf an, dann finden wir eine Lösung.",
  },
  {
    question: "Wie pflege ich den Strauß?",
    answer: "Stiele schräg anschneiden, Wasser alle zwei Tage wechseln, nicht neben Obst oder Heizung stellen.",
  },
  {
    question: "Wo finde ich meine Bestellung ohne Konto?",
    answer:
      "Mit Bestellnummer und Postleitzahl auf der Bestellstatus-Seite — die eigenständige Such-Seite dafür ist noch nicht angebunden [wird ergänzt]. Ruf in der Zwischenzeit gern an.",
  },
];

/**
 * Full delivery-info page. The home page keeps its own short teaser
 * (src/components/home/DeliverySection.tsx) — this is the richer,
 * dedicated version linked from the header nav and footer.
 */
export default function LieferungPage() {
  return (
    <div>
      <CutoffBanner />
      <SiteHeader />

      <div className={styles.page}>
        <Breadcrumb items={[{ label: "Start", href: "/" }, { label: "Lieferung" }]} />

        <div className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>
              <T de="Lieferung & Service" />
            </p>
            <h1 className={styles.title}>
              <T de="Eigene Fahrer," />
              <br />
              <T de="zwei Fenster" />
            </h1>
            <p className={styles.lead}>
              <T de="Kein Paketdienst. Der Strauß verlässt das Atelier am Bestelltag und kommt im Wasser transportiert bei dir an." />
            </p>
          </div>
          <DeliveryZoneCheck />
        </div>

        <div className={styles.windowGrid}>
          {WINDOWS.map((w) => (
            <div key={w.eyebrow} className={styles.windowCard}>
              <p className={styles.windowEyebrow}>
                <T de={w.eyebrow} />
              </p>
              <p className={styles.windowTitle}>
                <T de={w.title} />
              </p>
              <p className={styles.windowNote}>
                <T de={w.note} />
              </p>
            </div>
          ))}
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <T de="Nächste Liefertermine" />
          </h2>
          <p className={styles.sectionLead}>
            <T de="Live berechnet aus dem Bestellschluss von oben — schau nach 9 Uhr oder nach 14 Uhr noch einmal vorbei." />
          </p>
          <LiveDeliveryWindows />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <T de="Liefergebiet" />
          </h2>
          <div className={styles.zoneLayout}>
            <div className={styles.mapWrap}>
              <ImagePlaceholder label="Karte Wiesbaden mit Liefergebiet" />
            </div>
            <div>
              <div className={styles.zoneList}>
                {ZONES.map((z) => (
                  <div key={z.area} className={styles.zoneRow}>
                    <span>
                      <T de={z.area} />
                    </span>
                    <span className={z.free ? styles.zoneFeeFree : styles.zoneFee}>
                      <T de={z.fee} />
                    </span>
                  </div>
                ))}
              </div>
              <p className={styles.zoneNote}>
                <T de="Außerhalb dieser Orte fahren wir auf Absprache. Ruf an, wir sagen dir sofort, ob es passt." />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.stripSection}>
        <div className={styles.stripInner}>
          {SERVICE_ITEMS.map((item) => (
            <div key={item.title}>
              <h3 className={styles.stripTitle}>
                <T de={item.title} />
              </h3>
              <p className={styles.stripBody}>
                <T de={item.body} />
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.page}>
        <div className={styles.faqLayout}>
          <div>
            <h2 className={styles.faqTitle}>
              <T de="Fragen &" />
              <br />
              <T de="Antworten" />
            </h2>
            <p className={styles.faqNote}>
              <T de="Nichts gefunden? 0611 000 000, Mo–Fr 9–18:30 Uhr." />
            </p>
          </div>
          <FaqAccordion entries={FAQ} />
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
