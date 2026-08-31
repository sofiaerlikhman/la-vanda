"use client";

import { useEffect, useState } from "react";
import { formatDuration, secondsUntilBerlinCutoff } from "@/data/delivery";
import styles from "./OrderCountdown.module.css";

const CUTOFF_HOUR = 14;

/**
 * "Bestellschluss in X h Y min" — the handoff calls this live data. Ticks
 * once a minute; server-rendered fallback text avoids a hydration flash of
 * "0 min" before the client takes over. Cutoff math lives in
 * src/data/delivery.ts, shared with the Checkout delivery-window logic.
 */
export default function OrderCountdown() {
  const [seconds, setSeconds] = useState<number | null>(null);

  useEffect(() => {
    setSeconds(secondsUntilBerlinCutoff(new Date(), CUTOFF_HOUR));
    const id = window.setInterval(() => {
      setSeconds(secondsUntilBerlinCutoff(new Date(), CUTOFF_HOUR));
    }, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className={styles.box}>
      <p className={styles.label}>Bestellschluss</p>
      <p className={styles.time}>{seconds === null ? "…" : `in ${formatDuration(seconds)}`}</p>
      <p className={styles.note}>Danach nächstes Fenster: morgen 11–14 Uhr.</p>
    </div>
  );
}
