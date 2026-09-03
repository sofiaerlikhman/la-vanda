"use client";

import ImagePlaceholder from "@/components/ImagePlaceholder";
import Button from "@/components/Button";
import { useT } from "@/i18n/LanguageProvider";
import styles from "./AnfrageBand.module.css";

/**
 * Custom work — installations, weddings, funeral flowers.
 *
 * BACKEND — the request form. /anfrage had a multi-step form with no
 * endpoint behind it; it confirmed locally and sent nothing. The invite
 * to get in touch is real, so it stays — but it points at the phone
 * number and email address further down rather than at a form that
 * would silently drop what someone typed into it.
 */
export default function AnfrageBand() {
  const t = useT();

  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <ImagePlaceholder label={t("Installation, Vollbreite")} className={styles.image} />
        <div className={styles.panel} data-reveal>
          <p className={styles.eyebrow}>{t("Auf Anfrage")}</p>
          <h2 className={styles.title}>{t("Floristik nach Maß")}</h2>
          <p className={styles.lead}>
            {t(
              "Installationen für Laden und Restaurant, Hochzeiten, Trauerbinderei. Schreib uns Ort, Datum und Budget — wir antworten innerhalb von zwei Werktagen.",
            )}
          </p>
          <Button href="#kontakt" variant="secondary" size={48} className={styles.cta}>
            {t("So erreichst du uns")}
          </Button>
        </div>
      </div>
    </section>
  );
}
