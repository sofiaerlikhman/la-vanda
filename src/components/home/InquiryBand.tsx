"use client";

import ImagePlaceholder from "@/components/ImagePlaceholder";
import Button from "@/components/Button";
import { useT } from "@/i18n/LanguageProvider";
import styles from "./InquiryBand.module.css";

export default function InquiryBand() {
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
          <Button href="/anfrage" variant="secondary" size={48} className={styles.cta}>
            {t("Anfrage schreiben")}
          </Button>
        </div>
      </div>
    </section>
  );
}
