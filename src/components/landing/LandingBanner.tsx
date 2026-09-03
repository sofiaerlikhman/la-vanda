"use client";

import { useT } from "@/i18n/LanguageProvider";
import styles from "./LandingBanner.module.css";

/**
 * Top strip. On the shop branch this was the live cut-off banner
 * ("Heute bis 14 Uhr bestellt — 17–20 Uhr bei dir"), computed from the
 * Berlin wall clock. There is nothing to order here, so a cut-off would
 * be a promise the page can't keep: the strip states the page's actual
 * status instead, in the first place a visitor looks.
 *
 * No backend involved — this is a fixed statement about the site, not
 * about stock, hours or delivery.
 */
export default function LandingBanner() {
  const t = useT();

  return (
    <div className={styles.banner}>
      <span className={styles.status}>{t("Vorschau")}</span>
      <span className={styles.dot}>·</span>
      <span>{t("Bestellung und Reservierung noch nicht möglich")}</span>
    </div>
  );
}
