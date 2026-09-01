import type { Metadata } from "next";
import Link from "next/link";
import CutoffBanner from "@/components/CutoffBanner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import AnfrageForm from "@/components/anfrage/AnfrageForm";
import { T } from "@/i18n/T";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Auf Anfrage — la Vanda",
  description:
    "Installationen für Laden, Restaurant und Hotel. Hochzeit und Event. Trauerbinderei. Antwort innerhalb von zwei Werktagen.",
};

const SERVICES = [
  {
    title: "Installationen & Deko",
    image: "Ladeninstallation, 4:5",
    lead: "Wöchentlich oder saisonal, für Schaufenster, Empfang und Gastraum. Wir stellen Gefäße, wechseln Wasser und räumen ab.",
    price: "ab 180 € je Termin",
  },
  {
    title: "Hochzeit & Event",
    image: "Hochzeitsfloristik, 4:5",
    lead: "Brautstrauß, Anstecker, Tischläufer, Bogen. Aufbau vor Ort, Abbau am Folgetag. Ein Termin im Atelier gehört dazu.",
    price: "ab 900 € Gesamtbudget",
  },
  {
    title: "Trauerbinderei",
    image: "Trauerbinderei, 4:5",
    lead: "Kränze, Sargschmuck, Urnengebinde mit Schleifenband. Lieferung direkt zur Trauerhalle, pünktlich zur Aussegnung.",
    price: "ab 140 €",
    linkLabel: "Zur Trauerstrecke",
    linkHref: "/trauer",
  },
];

const REFERENCE_IMAGES = ["Referenz Hotel", "Referenz Restaurant", "Referenz Laden", "Referenz Event"];

/**
 * Full port of `la Vanda Anfrage.dc.html` — the custom-request page for
 * installations/deco, weddings & events, and Trauerbinderei, i.e. bespoke
 * work that doesn't go through the normal cart. The form (AnfrageForm) only
 * confirms locally; see its file for the backend note.
 */
export default function AnfragePage() {
  return (
    <div>
      <CutoffBanner />
      <SiteHeader />

      <section className={styles.hero}>
        <ImagePlaceholder label="Installation im Restaurant, Querformat" className={styles.heroImage} />
        <div className={styles.heroPanel}>
          <p className={styles.eyebrow}>
            <T de="Auf Anfrage" />
          </p>
          <h1 className={styles.heroTitle}>
            <T de="Floristik" />
            <br />
            <T de="nach Maß" />
          </h1>
          <p className={styles.heroLead}>
            <T de="Installationen für Laden, Restaurant und Hotel. Hochzeit und Event. Trauerbinderei. Wir antworten innerhalb von zwei Werktagen mit Vorschlag und Preis." />
          </p>
        </div>
      </section>

      <div className={styles.breadcrumbWrap}>
        <Breadcrumb items={[{ label: "Start", href: "/" }, { label: "Auf Anfrage" }]} />
      </div>

      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          {SERVICES.map((service) => (
            <article key={service.title} className={styles.serviceCard}>
              <div className={styles.serviceImageWrap}>
                <ImagePlaceholder label={service.image} className={styles.serviceImage} />
              </div>
              <div className={styles.serviceBody}>
                <h2 className={styles.serviceTitle}>
                  <T de={service.title} />
                </h2>
                <p className={styles.serviceLead}>
                  <T de={service.lead} />
                </p>
                <p className={styles.servicePrice}>
                  <T de={service.price} />
                </p>
                {service.linkHref && service.linkLabel && (
                  <Link href={service.linkHref} className={styles.serviceLink}>
                    <T de={service.linkLabel} />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.referenceSection}>
        <div className={styles.referenceGrid}>
          <div>
            <p className={styles.eyebrow}>
              <T de="Referenzen" />
            </p>
            <h2 className={styles.sectionTitleS}>
              <T de="Wo wir" />
              <br />
              <T de="schon stehen" />
            </h2>
            <p className={styles.referenceLead}>
              <T de="Zwölf Häuser in Wiesbaden und Mainz, wöchentlich betreut. Auf Wunsch nennen wir Ansprechpartner." />
            </p>
          </div>
          <div className={styles.referenceImages}>
            {REFERENCE_IMAGES.map((label) => (
              <div key={label} className={styles.referenceImageWrap}>
                <ImagePlaceholder label={label} className={styles.referenceImage} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="formular" className={styles.formSection}>
        <div className={styles.formWrap}>
          <div>
            <h2 className={styles.sectionTitleL}>
              <T de="Anfrage" />
              <br />
              <T de="schreiben" />
            </h2>
            <p className={styles.formLead}>
              <T de="Ort, Datum und Budget genügen für den ersten Vorschlag. Fotos helfen, sind aber kein Muss." />
            </p>
            <div className={styles.directContact}>
              <p className={styles.directLabel}>
                <T de="Direkt" />
              </p>
              <p>
                0611 000 000
                <br />
                anfrage@lavanda-wiesbaden.de
              </p>
            </div>
          </div>
          <AnfrageForm />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
