import type { Metadata } from "next";
import Link from "next/link";
import CutoffBanner from "@/components/CutoffBanner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Button from "@/components/Button";
import FaqAccordion from "@/components/produkt/FaqAccordion";
import type { ProductFaqEntry } from "@/data/products";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Trauerfloristik — la Vanda",
  description: "Lieferung direkt zur Trauerhalle oder ans Grab, pünktlich zur Aussegnung. Auf Anfrage.",
};

/**
 * Real line-up from "la Vanda Trauer.dc.html" — a separate, fixed set for
 * bereavement flowers, not part of the general catalog (src/data/products.ts)
 * since these are quoted individually rather than added to a cart.
 */
const TRAUER_ITEMS: { name: string; price: string; lead: string }[] = [
  { name: "Trauerstrauß klassisch", price: "58,00 €", lead: "Heute lieferbar" },
  { name: "Trauerstrauß weiß", price: "72,00 €", lead: "Heute lieferbar" },
  { name: "Bindegebinde", price: "96,00 €", lead: "Heute lieferbar" },
  { name: "Kranz 50 cm", price: "140,00 €", lead: "Ein Werktag Vorlauf" },
  { name: "Kranz 70 cm", price: "210,00 €", lead: "Ein Werktag Vorlauf" },
  { name: "Sargschmuck", price: "260,00 €", lead: "Ein Werktag Vorlauf" },
  { name: "Urnengebinde", price: "120,00 €", lead: "Ein Werktag Vorlauf" },
  { name: "Grabgesteck", price: "68,00 €", lead: "Heute lieferbar" },
];

const TRAUER_FAQ: ProductFaqEntry[] = [
  {
    question: "Was kostet ein Kranz?",
    answer:
      "Ab 140 € für 50 cm Durchmesser. Größere Kränze und Sargschmuck rechnen wir nach Aufwand, wir nennen den Preis vorher.",
  },
  {
    question: "Wie lang darf der Schleifentext sein?",
    answer: "Zwei Zeilen mit je 30 Zeichen passen gut. Mehr geht auf breiterem Band, das bestellen wir am Vortag.",
  },
  {
    question: "Können wir die Blumen vorher sehen?",
    answer: "Ja. Wir schicken ein Foto, sobald das Gebinde fertig ist — vor der Lieferung, per Nachricht.",
  },
  {
    question: "Rechnung an das Bestattungshaus?",
    answer: "Möglich. Nenne uns das Haus, wir klären die Abrechnung direkt dort.",
  },
];

const FRIEDHOEFE = ["Hauptfriedhof", "Nordfriedhof", "Südfriedhof", "Biebrich", "Sonnenberg"];

export default function TrauerPage() {
  return (
    <div>
      <CutoffBanner />
      <SiteHeader />

      <div className={styles.page}>
        <Breadcrumb items={[{ label: "Start", href: "/" }, { label: "Anlässe", href: "/anlaesse" }, { label: "Trauer" }]} />

        <section className={styles.hero}>
          <div>
            <h1 className={styles.title}>Trauerfloristik</h1>
            <p className={styles.intro}>
              Wir liefern direkt zur Trauerhalle oder ans Grab, pünktlich zur Aussegnung. Sag uns Datum, Uhrzeit und
              Ort — den Rest übernehmen wir.
            </p>
            <p className={styles.phone}>
              Wenn es schnell gehen muss: 0611 000 000. Wir gehen auch außerhalb der Öffnungszeiten ans Telefon.
            </p>
          </div>
          <div className={styles.shortNoticeCard}>
            <p className={styles.eyebrow}>Kurzfristig</p>
            <p className={styles.shortNoticeTitle}>Bis 10 Uhr bestellt, am Folgetag an der Halle</p>
            <p className={styles.shortNoticeBody}>
              Kränze und Sargschmuck brauchen einen Werktag Vorlauf. Bindegebinde und Trauersträuße gehen am selben
              Tag.
            </p>
          </div>
        </section>

        <section className={styles.productsSection}>
          <div className={styles.productGrid}>
            {TRAUER_ITEMS.map((item) => (
              <article key={item.name} className={styles.productCard}>
                <div className={styles.productImageWrap}>
                  <ImagePlaceholder label={`${item.name}, quadratisch`} className={styles.productImage} />
                </div>
                <div className={styles.productBody}>
                  <h3 className={styles.productName}>{item.name}</h3>
                  <p className={styles.productPrice}>{item.price}</p>
                  <p className={styles.productLead}>{item.lead}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.deliverySection}>
          <div className={styles.deliveryGrid}>
            <div>
              <h2 className={styles.deliveryTitle}>
                Lieferung zur
                <br />
                Trauerhalle
              </h2>
              <p className={styles.deliveryBody}>
                Wir kennen die Friedhöfe in Wiesbaden und fahren dreißig Minuten vor Beginn vor. Die Schleife
                beschriften wir von Hand.
              </p>
              <div className={styles.deliveryZones}>
                <p className={styles.eyebrow}>Ohne Aufpreis</p>
                <p className={styles.deliveryZonesList}>{FRIEDHOEFE.join(" · ")}</p>
              </div>
            </div>
            <div className={styles.requestCard}>
              <p className={styles.eyebrow}>Angaben zur Trauerfeier</p>
              <p className={styles.requestLead}>
                Nenne uns Name, Datum, Uhrzeit und Ort der Trauerfeier sowie den gewünschten Schleifentext — wir
                melden uns mit einem Vorschlag und dem Preis.
              </p>
              <ul className={styles.requestList}>
                <li>Name der Verstorbenen oder des Verstorbenen</li>
                <li>Datum, Uhrzeit und Ort (Friedhof oder Halle)</li>
                <li>Schleifentext, wir schreiben von Hand</li>
              </ul>
              <Button href="/anfrage" variant="primary" size={48} className={styles.requestButton}>
                Angaben zur Trauerfeier senden
              </Button>
              <p className={styles.requestReassurance}>Wir rufen zur Bestätigung zurück, meist innerhalb einer Stunde.</p>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.faqGrid}>
            <h2 className={styles.faqTitle}>
              Häufige
              <br />
              Fragen
            </h2>
            <FaqAccordion entries={TRAUER_FAQ} />
          </div>
        </section>

        <section className={styles.moreSection}>
          <Link href="/anlaesse" className={styles.moreLink}>
            Weitere Anlässe
          </Link>
        </section>
      </div>

      <SiteFooter />
    </div>
  );
}
