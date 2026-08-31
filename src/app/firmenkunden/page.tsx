import type { Metadata } from "next";
import CutoffBanner from "@/components/CutoffBanner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import FirmenkontoForm from "@/components/firmenkunden/FirmenkontoForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Firmenkunden — la Vanda",
  description: "Ein Ansprechpartner, monatliche Sammelrechnung, feste Preise — Büro-Abo, Sammelbestellung und Deko & Event.",
};

const PRICING = [
  {
    eyebrow: "Wöchentlich",
    title: "Büro-Abo",
    lead: "Frische Vasen im Haus, Wasserwechsel inklusive. Ab drei Standorten mit Wochenplan.",
    price: "ab 44,00 € je Vase und Woche",
  },
  {
    eyebrow: "Einzeln",
    title: "Sammelbestellung",
    lead: "Bis zu fünfzig Adressen in einem Vorgang, jede mit eigener Karte. CSV-Import möglich.",
    price: "ab 28,00 € je Adresse",
  },
  {
    eyebrow: "Saisonal",
    title: "Deko & Event",
    lead: "Schaufenster, Weihnachten, Sommerfest. Aufbau und Abbau durch uns.",
    price: "Angebot nach Termin",
  },
];

const CAPABILITIES = [
  { label: "Zahlung", value: "Sammelrechnung zum Monatsende, 14 Tage netto, auf Wunsch mit Kostenstelle" },
  { label: "Adressen", value: "Adressbuch für Standorte und Mitarbeitende, Import per CSV" },
  { label: "Nutzer", value: "Mehrere Bestellberechtigte, ein Budget, Freigabe durch die Verwaltung" },
  { label: "Wiederholung", value: "Geburtstagsliste einmal hinterlegen, wir erinnern und liefern" },
  { label: "Kontakt", value: "Eine Durchwahl, ein Name — kein Ticketsystem" },
];

/**
 * Full port of `la Vanda Firmenkunden.dc.html` — B2B info (Büro-Abo,
 * Sammelbestellung, Deko & Event) plus the account-application form
 * (FirmenkontoForm), a distinct form from the general custom-request one at
 * /anfrage since this is about opening a billing relationship rather than
 * requesting a one-off job. "Installation anfragen" links out to /anfrage
 * instead of duplicating that form here, matching the source's own link.
 */
export default function FirmenkundenPage() {
  return (
    <div>
      <CutoffBanner />
      <SiteHeader />

      <div className={styles.page}>
        <Breadcrumb items={[{ label: "Start", href: "/" }, { label: "Firmenkunden" }]} />

        <section className={styles.heroSection}>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>Firmenkunden</p>
              <h1 className={styles.heroTitle}>
                Blumen
                <br />
                auf Rechnung
              </h1>
              <p className={styles.heroLead}>
                Ein Ansprechpartner, monatliche Sammelrechnung, feste Preise. Für Empfang, Geburtstage im Team und
                Kundengeschenke.
              </p>
              <div className={styles.heroActions}>
                <Button href="#konto" variant="primary" size={48}>
                  Firmenkonto anlegen
                </Button>
                <Button href="/anfrage" variant="secondary" size={48}>
                  Installation anfragen
                </Button>
              </div>
            </div>
            <div className={styles.heroImageWrap}>
              <ImagePlaceholder label="Empfangstresen mit Vase, 4:3" className={styles.heroImage} />
            </div>
          </div>
        </section>

        <section className={styles.pricingSection}>
          <div className={styles.pricingGrid}>
            {PRICING.map((item) => (
              <div key={item.title} className={styles.pricingCard}>
                <p className={styles.eyebrow}>{item.eyebrow}</p>
                <h2 className={styles.pricingTitle}>{item.title}</h2>
                <p className={styles.pricingLead}>{item.lead}</p>
                <p className={styles.pricingPrice}>{item.price}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.capabilitiesSection}>
          <div className={styles.capabilitiesGrid}>
            <div>
              <h2 className={styles.sectionTitleS}>
                Was ein
                <br />
                Firmenkonto kann
              </h2>
              <p className={styles.capabilitiesNote}>Freigeschaltet innerhalb eines Werktags, nach kurzer Bonitätsprüfung.</p>
            </div>
            <div className={styles.capabilitiesTable}>
              {CAPABILITIES.map((item) => (
                <div key={item.label} className={styles.capabilityRow}>
                  <span className={styles.capabilityLabel}>{item.label}</span>
                  <span className={styles.capabilityValue}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section id="konto" className={styles.formSection}>
        <div className={styles.formWrap}>
          <div>
            <h2 className={styles.sectionTitleL}>
              Firmenkonto
              <br />
              anlegen
            </h2>
            <p className={styles.formLead}>
              Wir melden uns mit den Zahlungsbedingungen und einem Vorschlag für den Wochenplan.
            </p>
          </div>
          <FirmenkontoForm />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
