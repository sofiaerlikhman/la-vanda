"use client";

import { useT } from "@/i18n/LanguageProvider";
import type { OccasionSummary } from "@/data/occasions";
import styles from "./OccasionsSection.module.css";

/**
 * What the shop takes on, and roughly what it costs.
 *
 * Each row was a link to its own occasion page on the shop branch. Those
 * pages don't exist here, so the rows are plain text — no "Ansehen",
 * no hover arrow, nothing that behaves like a link and isn't one.
 *
 * BACKEND — the prices. "ab 28,00 €" and friends are build-time
 * constants; a real catalog drives them.
 */
export default function OccasionsSection({ occasions }: { occasions: OccasionSummary[] }) {
  const t = useT();

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div data-reveal>
          <p className={styles.eyebrow}>{t("Anlässe")}</p>
          <h2 className={styles.title}>
            {t("Wofür sind")}
            <br />
            {t("die Blumen?")}
          </h2>
          <p className={styles.lead}>
            {t("Zu jedem Anlass eine kuratierte Auswahl, drei Preisstufen, dasselbe Zeitfenster.")}
          </p>
        </div>

        <dl className={styles.list} data-reveal-group>
          {occasions.map((occasion) => (
            <div key={occasion.name} className={styles.row}>
              <dt className={styles.name}>{t(occasion.name)}</dt>
              <dd className={styles.price}>{t(occasion.priceLabel)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
