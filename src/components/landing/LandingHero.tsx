"use client";

import ImagePlaceholder from "@/components/ImagePlaceholder";
import Button from "@/components/Button";
import { useT } from "@/i18n/LanguageProvider";
import styles from "./LandingHero.module.css";

/**
 * Opening panel. The shop hero led with the delivery promise ("Bestell
 * bis 14 Uhr, wir sind zwischen 17 und 20 Uhr an der Tür") — a sentence
 * that only makes sense where an order can be placed. This one leads
 * with what the place is instead, and its two CTAs scroll rather than
 * navigate: there is nowhere else to go.
 *
 * BACKEND — the photo. Every image on this page is an ImagePlaceholder
 * describing the shot that belongs there; real photography (or a CMS to
 * hold it) is the one thing this page most obviously still needs.
 */
export default function LandingHero() {
  const t = useT();

  return (
    <section id="top" className={styles.hero}>
      <ImagePlaceholder label={t("Werkstatt, Querformat — Hände beim Binden")} className={styles.image} />
      <div className={styles.panel} data-reveal>
        <p className={styles.eyebrow}>{t("Blumenatelier · Wiesbaden")}</p>
        <h1 className={styles.headline}>
          {t("Gebunden an der")}
          <br />
          Marktstraße
        </h1>
        <p className={styles.lead}>
          {t("Ein Laden mit Werkstatt dahinter. Vorne kannst du kaufen, hinten binden wir. Beides gehört zusammen.")}
        </p>
        <div className={styles.actions}>
          <Button href="#blumen" variant="primary" size={48}>
            {t("Blumen ansehen")}
          </Button>
          <Button href="#kontakt" variant="secondary" size={48}>
            {t("Atelier & Kontakt")}
          </Button>
        </div>
      </div>
    </section>
  );
}
