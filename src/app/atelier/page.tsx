import type { Metadata } from "next";
import Link from "next/link";
import CutoffBanner from "@/components/CutoffBanner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import WorkshopList from "@/components/atelier/WorkshopList";
import AtelierContactForm from "@/components/atelier/AtelierContactForm";
import { T } from "@/i18n/T";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Atelier — la Vanda",
  description: "Ein Laden mit Werkstatt dahinter. Öffnungszeiten, Team, Workshops und Kontakt zur Marktstraße 12.",
};

const TEAM = [
  { name: "Alina", role: "Inhaberin, Floristmeisterin" },
  { name: "Jonas", role: "Floristik, Einkauf" },
  { name: "Meryem", role: "Installationen, Events" },
  { name: "Tobias", role: "Lieferung" },
];

/**
 * Full port of `la Vanda Atelier.dc.html`: hero, opening hours & directions,
 * team, bookable workshops, and a general contact form. Workshops are the
 * one place on this page with a price and a real cart action (see
 * WorkshopList); the contact form only confirms locally — there's no
 * backend to send it to yet (see AtelierContactForm).
 */
export default function AtelierPage() {
  return (
    <div>
      <CutoffBanner />
      <SiteHeader />

      <section className={styles.hero}>
        <ImagePlaceholder label="Ladenlokal Marktstraße von außen, Querformat" className={styles.heroImage} />
        <div className={styles.heroPanel}>
          <p className={styles.eyebrow}>
            <T de="Atelier & Kontakt" />
          </p>
          <h1 className={styles.heroTitle}>Marktstraße 12</h1>
          <p className={styles.heroLead}>
            <T de="Ein Laden mit Werkstatt dahinter. Vorne kannst du kaufen, hinten binden wir. Beides gehört zusammen." />
          </p>
        </div>
      </section>

      <div className={styles.breadcrumbWrap}>
        <Breadcrumb items={[{ label: "Start", href: "/" }, { label: "Atelier" }]} />
      </div>

      <section className={styles.hoursSection}>
        <div className={styles.hoursGrid}>
          <div>
            <h2 className={styles.sectionTitleM}>
              <T de="Öffnungszeiten" />
              <br />
              <T de="& Anfahrt" />
            </h2>
            <div className={styles.hoursTable}>
              <div className={styles.hoursRow}>
                <span>
                  <T de="Montag bis Freitag" />
                </span>
                <span className={styles.hoursValue}>
                  <T de="9–18:30 Uhr" />
                </span>
              </div>
              <div className={styles.hoursRow}>
                <span>
                  <T de="Samstag" />
                </span>
                <span className={styles.hoursValue}>
                  <T de="9–14 Uhr" />
                </span>
              </div>
              <div className={styles.hoursRow}>
                <span>
                  <T de="Sonntag" />
                </span>
                <span className={styles.hoursValue}>
                  <T de="geschlossen" />
                </span>
              </div>
            </div>
            <p className={styles.hoursNote}>
              <T de="Zwei Minuten von der Haltestelle Luisenplatz. Parkhaus Marktstraße direkt gegenüber, erste halbe Stunde frei." />
            </p>
            <div className={styles.hoursActions}>
              <Button href="/checkout" variant="primary" size={48}>
                <T de="Abholung reservieren" />
              </Button>
              <Button href="#kontakt" variant="secondary" size={48}>
                <T de="Nachricht schreiben" />
              </Button>
            </div>
          </div>
          <div className={styles.mapWrap}>
            <ImagePlaceholder label="Karte, Marktstraße 12" className={styles.mapImage} />
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <h2 className={styles.sectionTitleL}>
          <T de="Wer bindet" />
        </h2>
        <div className={styles.teamGrid}>
          {TEAM.map((member) => (
            <article key={member.name} className={styles.teamCard}>
              <div className={styles.teamImageWrap}>
                <ImagePlaceholder label="Porträt, Hochformat" className={styles.teamImage} />
              </div>
              <div className={styles.teamBody}>
                <h3 className={styles.teamName}>{member.name}</h3>
                <p className={styles.teamRole}>
                  <T de={member.role} />
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="workshops" className={styles.workshopSection}>
        <div className={styles.workshopWrap}>
          <div>
            <p className={styles.eyebrow}>
              <T de="Workshops" />
            </p>
            <h2 className={styles.sectionTitleL}>
              <T de="Zwei Stunden" />
              <br />
              <T de="an der Werkbank" />
            </h2>
            <p className={styles.workshopLead}>
              <T de="Maximal acht Plätze. Material, Werkzeug und ein Glas Wein sind dabei, das Gebundene nimmst du mit." />
            </p>
            <p className={styles.workshopNote}>
              <T de="Für Gruppen ab sechs Personen machen wir eigene Termine — auch außerhalb der Öffnungszeiten." />
            </p>
          </div>
          <WorkshopList />
        </div>
      </section>

      <section id="kontakt" className={styles.contactSection}>
        <div className={styles.contactGrid}>
          <div>
            <h2 className={styles.sectionTitleM}>
              <T de="Nachricht" />
              <br />
              <T de="schreiben" />
            </h2>
            <p className={styles.contactLead}>
              <T de="Für Bestellungen, Reklamationen und alles andere. Für Installationen und Hochzeiten nimm besser das" />{" "}
              <Link href="/anfrage">
                <T de="Anfrageformular" />
              </Link>
              .
            </p>
            <div className={styles.contactInfo}>
              <p>
                0611 000 000
                <br />
                hallo@lavanda-wiesbaden.de
              </p>
            </div>
          </div>
          <AtelierContactForm />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
