import type { Metadata } from "next";
import CutoffBanner from "@/components/CutoffBanner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import FaqAccordion from "@/components/produkt/FaqAccordion";
import type { ProductFaqEntry } from "@/data/products";
import AboConfigurator from "@/components/abo/AboConfigurator";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Abo — la Vanda",
  description: "Blumenabo mit freier Wahl von Rhythmus, Größe und Wochentag. Wir binden am Morgen, liefern am Abend.",
};

const STEPS = [
  {
    index: "01",
    title: "Wir kaufen ein",
    body: "Dreimal pro Woche am Großmarkt. Was gut ist, kommt ins Abo.",
  },
  {
    index: "02",
    title: "Am Morgen gebunden",
    body: "Kein Lagerstrauß. Jede Woche eine andere Handschrift.",
  },
  {
    index: "03",
    title: "Abends geliefert",
    body: "Eigene Fahrer, dein Fenster. SMS zwanzig Minuten vorher.",
  },
  {
    index: "04",
    title: "Du steuerst",
    body: "Pausieren, verschieben, kündigen — im Konto, ohne Anruf.",
  },
];

const ABO_FAQ: ProductFaqEntry[] = [
  {
    question: "Was, wenn ich verreise?",
    answer: "Pausieren bis 18 Uhr am Vortag im Konto. Die Lieferung fällt aus, berechnet wird nichts.",
  },
  {
    question: "Kann ich Blumen ausschließen?",
    answer: "Ja. Notiere Allergien oder Abneigungen im Konto, wir hinterlegen sie am Bindeplatz.",
  },
  {
    question: "Wie lange läuft das Abo?",
    answer: "Unbefristet, kündbar bis 18 Uhr am Vortag der nächsten Lieferung.",
  },
  {
    question: "Abo als Geschenk?",
    answer: "Wähle im Checkout drei, sechs oder zwölf Lieferungen. Danach endet es von selbst.",
  },
];

/**
 * The source design's "Büro-Abo" block is a static cross-sell (no
 * Privat/Büro toggle in the handoff) pointing at a future Firmenkunden page
 * that doesn't exist in this codebase yet — linked the same way the rest of
 * the site already links to not-yet-built routes like /atelier, /anfrage,
 * /agb and /widerruf.
 */
export default function AboPage() {
  return (
    <div>
      <CutoffBanner />
      <SiteHeader />

      <div className={styles.page}>
        <Breadcrumb items={[{ label: "Start", href: "/" }, { label: "Abo" }]} />

        <section className={styles.hero}>
          <div className={styles.heroImage}>
            <ImagePlaceholder label="Abo-Strauß auf Werkbank, Hochformat 3:4" />
          </div>
          <div>
            <p className={styles.eyebrow}>Blumenabo</p>
            <h1 className={styles.title}>
              Jede Woche
              <br />
              frisch gebunden
            </h1>
            <p className={styles.lead}>
              Du wählst Rhythmus, Größe und Wochentag. Wir binden am Morgen und liefern am Abend. Pausieren geht bis
              18 Uhr am Vortag, kündigen jederzeit.
            </p>

            <AboConfigurator />
          </div>
        </section>
      </div>

      <section className={styles.stepsBand}>
        <div className={styles.stepsInner}>
          <h2 className={styles.stepsTitle}>So läuft das Abo</h2>
          <div className={styles.stepsGrid}>
            {STEPS.map((step) => (
              <div key={step.index} className={styles.step}>
                <p className={styles.stepIndex}>{step.index}</p>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.officeWrap}>
        <section className={styles.officeSection}>
          <div>
            <p className={styles.eyebrow}>Büro-Abo</p>
            <h2 className={styles.officeTitle}>
              Für Empfang
              <br />
              und Besprechung
            </h2>
            <p className={styles.officeBody}>
              Ab drei Vasen im Haus rechnen wir monatlich auf Rechnung ab. Vasen stellen wir, Wasserwechsel machen
              wir mit.
            </p>
            <Button variant="secondary" href="/firmenkunden" className={styles.officeCta}>
              Firmenkunden ansehen
            </Button>
          </div>
          <div>
            <FaqAccordion entries={ABO_FAQ} />
          </div>
        </section>
      </div>

      <SiteFooter />
    </div>
  );
}
