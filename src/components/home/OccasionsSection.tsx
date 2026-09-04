"use client";

import Link from "next/link";
import { useT } from "@/i18n/LanguageProvider";
import { OCCASIONS } from "@/data/occasions";
import styles from "./OccasionsSection.module.css";

export default function OccasionsSection() {
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
          <p className={styles.lead}>{t("Zu jedem Anlass eine kuratierte Auswahl, drei Preisstufen, dasselbe Zeitfenster.")}</p>
        </div>
        <div className={styles.list} data-reveal-group>
          {OCCASIONS.map((occasion) => (
            <Link key={occasion.href} href={occasion.href} className={styles.row}>
              <span className={styles.name}>{t(occasion.name)}</span>
              <span className={styles.price}>{t(occasion.priceLabel)}</span>
              <span className={styles.view}>{t("Ansehen")}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
