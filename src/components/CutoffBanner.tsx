"use client";

import { useT } from "@/i18n/LanguageProvider";
import styles from "./CutoffBanner.module.css";

const BERLIN_TZ = "Europe/Berlin";
const CUTOFF_HOUR = 14;

/**
 * The spec (DESIGN-SYSTEM-RULES / handoff README) calls this "live data":
 * it must reflect the next open delivery window and flip to the following
 * day's window once the 14:00 cut-off passes. Business days / holidays
 * aren't specified anywhere in the handoff, so this only implements the
 * before/after-14:00 flip described — swap `getCutoffCopy` for a real
 * delivery-calendar lookup once the backend has one (see README).
 */
function getCutoffCopy(now: Date) {
  const berlinHour = Number(
    new Intl.DateTimeFormat("de-DE", { hour: "numeric", hour12: false, timeZone: BERLIN_TZ }).format(now)
  );

  if (berlinHour < CUTOFF_HOUR) {
    return "Heute bis 14 Uhr bestellt — 17–20 Uhr bei dir";
  }
  return "Ab 14 Uhr bestellt — morgen 17–20 Uhr bei dir";
}

export default function CutoffBanner() {
  const t = useT();
  const text = getCutoffCopy(new Date());

  return (
    <div className={styles.banner}>
      <span>{t(text)}</span>
      <span className={styles.dot}>·</span>
      <span className={styles.area}>{t("Wiesbaden und Umgebung")}</span>
    </div>
  );
}
