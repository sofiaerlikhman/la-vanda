import type { Metadata } from "next";
import CutoffBanner from "@/components/CutoffBanner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CorporateAccountForm from "@/components/corporate/CorporateAccountForm";
import { T } from "@/i18n/T";
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
 * (CorporateAccountForm), a distinct form from the general custom-request one at
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
              <p className={styles.eyebrow}>
                <T de="Firmenkunden" />
              </p>
              <h1 className={styles.heroTitle}>
                <T de="Blumen" />
                <br />
                <T de="auf Rechnung" />
              </h1>
              <p className={styles.heroLead}>
                <T de="Ein Ansprechpartner, monatliche Sammelrechnung, feste Preise. Für Empfang, Geburtstage im Team und Kundengeschenke." />
              </p>
              <div className={styles.heroActions}>
                <Button href="#konto" variant="primary" size={48}>
                  <T de="Firmenkonto anlegen" />
                </Button>
                <Button href="/anfrage" variant="secondary" size={48}>
                  <T de="Installation anfragen" />
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
                <p className={styles.eyebrow}>
                  <T de={item.eyebrow} />
                </p>
                <h2 className={styles.pricingTitle}>
                  <T de={item.title} />
                </h2>
                <p className={styles.pricingLead}>
                  <T de={item.lead} />
                </p>
                <p className={styles.pricingPrice}>
                  <T de={item.price} />
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.capabilitiesSection}>
          <div className={styles.capabilitiesGrid}>
            <div>
              <h2 className={styles.sectionTitleS}>
                <T de="Was ein" />
                <br />
                <T de="Firmenkonto kann" />
              </h2>
              <p className={styles.capabilitiesNote}>
                <T de="Freigeschaltet innerhalb eines Werktags, nach kurzer Bonitätsprüfung." />
              </p>
            </div>
            <div className={styles.capabilitiesTable}>
              {CAPABILITIES.map((item) => (
                <div key={item.label} className={styles.capabilityRow}>
                  <span className={styles.capabilityLabel}>
                    <T de={item.label} />
                  </span>
                  <span className={styles.capabilityValue}>
                    <T de={item.value} />
                  </span>
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
              <T de="Firmenkonto" />
              <br />
              <T de="anlegen" />
            </h2>
            <p className={styles.formLead}>
              <T de="Wir melden uns mit den Zahlungsbedingungen und einem Vorschlag für den Wochenplan." />
            </p>
          </div>
          <CorporateAccountForm />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
