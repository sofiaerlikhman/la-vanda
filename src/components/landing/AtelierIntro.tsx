"use client";

import ImagePlaceholder from "@/components/ImagePlaceholder";
import { useT } from "@/i18n/LanguageProvider";
import styles from "./AtelierIntro.module.css";

/**
 * Where the studio half of this page begins — the two pages this branch
 * merges meet here. Straight information about how the shop works; the
 * "Atelier ansehen" button that used to sit at the bottom is gone,
 * because the atelier page it pointed at is now the rest of this one.
 *
 * No backend involved: this is fixed editorial copy.
 */
export default function AtelierIntro() {
  const t = useT();

  return (
    <section id="atelier" className={styles.section}>
      <div className={styles.grid} data-reveal>
        <div className={styles.imageWrap}>
          <ImagePlaceholder label={t("Werkstatt, Hände, 4:3")} />
        </div>
        <div>
          <p className={styles.eyebrow}>{t("Das Atelier")}</p>
          <h2 className={styles.title}>{t("Wie wir arbeiten")}</h2>
          <p className={styles.lead}>
            {t(
              "Wir kaufen dreimal in der Woche selbst ein und binden jeden Strauß am Tag der Lieferung. Was nicht rausgeht, steht im Laden.",
            )}
          </p>
          <p className={styles.detail}>
            {t("Marktstraße 12, Wiesbaden. Montag bis Freitag 9–18:30 Uhr, Samstag 9–14 Uhr.")}
          </p>
        </div>
      </div>
    </section>
  );
}
