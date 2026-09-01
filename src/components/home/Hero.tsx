"use client";

import ImagePlaceholder from "@/components/ImagePlaceholder";
import Button from "@/components/Button";
import { useT } from "@/i18n/LanguageProvider";
import styles from "./Hero.module.css";

export default function Hero() {
  const t = useT();

  return (
    <section className={styles.hero}>
      <ImagePlaceholder label={t("Werkstatt, Querformat — Hände beim Binden")} className={styles.image} />
      <div className={styles.panel} data-reveal>
        <p className={styles.eyebrow}>{t("Blumenatelier · Wiesbaden")}</p>
        <h1 className={styles.headline}>
          {t("Heute gebunden,")}
          <br />
          {t("heute bei dir")}
        </h1>
        <p className={styles.lead}>
          {t("Ein Laden, der liefert. Bestell bis 14 Uhr, wir sind zwischen 17 und 20 Uhr an der Tür.")}
        </p>
        <div className={styles.actions}>
          <Button href="/sortiment" variant="primary" size={48}>
            {t("Heute liefern")}
          </Button>
          <Button href="/abo" variant="secondary" size={48}>
            {t("Abo ansehen")}
          </Button>
        </div>
      </div>
    </section>
  );
}
