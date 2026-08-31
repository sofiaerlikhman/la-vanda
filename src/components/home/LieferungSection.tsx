"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { checkDeliveryZone, type DeliveryCheckResult } from "@/data/delivery";
import styles from "./LieferungSection.module.css";

export default function LieferungSection() {
  const [plz, setPlz] = useState("");
  const [result, setResult] = useState<DeliveryCheckResult | null>(null);
  const [checking, setChecking] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setChecking(true);
    const outcome = await checkDeliveryZone(plz);
    setResult(outcome);
    setChecking(false);
  }

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div>
          <h2 className={styles.title}>Liefern wir zu dir?</h2>
          <p className={styles.lead}>Eigene Fahrer, kein Paketdienst. Zwei Zeitfenster am Tag, samstags eines.</p>
        </div>
        <div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              inputMode="numeric"
              placeholder="Postleitzahl"
              value={plz}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPlz(e.target.value)}
              className={styles.input}
              aria-label="Postleitzahl"
            />
            <button type="submit" className={styles.button} disabled={checking}>
              Prüfen
            </button>
          </form>
          {result && (
            <p className={result.deliverable ? styles.resultOk : styles.resultWarn} role="status">
              {result.message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
