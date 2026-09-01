"use client";

import ImagePlaceholder from "@/components/ImagePlaceholder";
import Button from "@/components/Button";
import { useT } from "@/i18n/LanguageProvider";
import styles from "./AtelierSection.module.css";

export default function AtelierSection() {
  const t = useT();

  return (
    <section className={styles.section}>
      <div className={styles.grid} data-reveal>
        <div className={styles.imageWrap}>
          <ImagePlaceholder label={t("Werkstatt, Hände, 4:3")} />
        </div>
        <div>
          <p className={styles.eyebrow}>{t("Das Atelier")}</p>
          <h2 className={styles.title}>
            {t("Gebunden an der")}
            <br />
            Marktstraße
          </h2>
          <p className={styles.lead}>
            {t(
              "Wir kaufen dreimal in der Woche selbst ein und binden jeden Strauß am Tag der Lieferung. Was nicht rausgeht, steht im Laden.",
            )}
          </p>
          <p className={styles.detail}>{t("Marktstraße 12, Wiesbaden. Montag bis Freitag 9–18:30 Uhr, Samstag 9–14 Uhr.")}</p>
          <Button href="/atelier" variant="secondary" size={48} className={styles.cta}>
            {t("Atelier ansehen")}
          </Button>
        </div>
      </div>
    </section>
  );
}
