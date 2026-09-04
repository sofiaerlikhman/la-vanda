"use client";

import { useEffect, useState } from "react";
import { getDeliveryDayOptions, type DeliveryDayOption } from "@/data/delivery";
import { useT } from "@/i18n/LanguageProvider";
import styles from "./LiveDeliveryWindows.module.css";

const DAYS_SHOWN = 5;

/**
 * Live "which windows are open right now" board — built directly on
 * getDeliveryDayOptions() (src/data/delivery.ts), the same real cutoff
 * logic behind Checkout's delivery-window picker (9 Uhr cutoff for the
 * 11–14 window, 14 Uhr for 17–20, Saturday morning-only, Sunday closed).
 * Ticks once a minute so today's windows flip to "Nicht mehr heute" the
 * instant their cutoff passes, no reload needed. `days` starts null so the
 * server-rendered markup doesn't guess at wall-clock time before the client
 * takes over (same pattern as OrderCountdown).
 */
export default function LiveDeliveryWindows() {
  const t = useT();
  const [days, setDays] = useState<DeliveryDayOption[] | null>(null);

  useEffect(() => {
    setDays(getDeliveryDayOptions(new Date(), DAYS_SHOWN));
    const id = window.setInterval(() => {
      setDays(getDeliveryDayOptions(new Date(), DAYS_SHOWN));
    }, 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (days === null) {
    return <p className={styles.loading}>{t("Termine werden geladen …")}</p>;
  }

  return (
    <div className={styles.board} role="table" aria-label={t("Verfügbare Liefertermine")}>
      {days.map((day) => (
        <div key={day.offsetDays} className={styles.row} role="row">
          <div className={styles.dayCell} role="rowheader">
            <p className={styles.dayLabel}>{t(day.dayLabel)}</p>
            <p className={styles.dateLabel}>{day.dateLabel}</p>
          </div>
          <div className={styles.windows} role="cell">
            {day.windows.length === 0 && <span className={styles.closed}>{t("Kein Liefertag")}</span>}
            {day.windows.map((w) => (
              <div key={w.id} className={styles.windowChip}>
                <span className={w.available ? styles.dotOk : styles.dotClosed} aria-hidden="true" />
                <span className={styles.windowLabel}>{t(w.label)}</span>
                {w.statusLabel && (
                  <span className={w.available ? styles.statusOpen : styles.statusClosed}>{t(w.statusLabel)}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
