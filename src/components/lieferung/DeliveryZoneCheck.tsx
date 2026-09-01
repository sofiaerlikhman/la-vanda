"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { checkDeliveryZone, type DeliveryCheckResult } from "@/data/delivery";
import { useT } from "@/i18n/LanguageProvider";
import styles from "./DeliveryZoneCheck.module.css";

/**
 * Hero postcode check for the dedicated Lieferung page. Uses the same
 * checkDeliveryZone() as the home-page teaser
 * (src/components/home/LieferungSection.tsx) — just laid out as a bordered
 * side panel instead of a full-width section. See checkDeliveryZone's own
 * doc comment for the placeholder-zone caveat.
 */
export default function DeliveryZoneCheck() {
  const t = useT();
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
    <div className={styles.panel}>
      <p className={styles.label}>{t("Liefern wir zu dir?")}</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          inputMode="numeric"
          placeholder={t("Postleitzahl")}
          value={plz}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setPlz(event.target.value)}
          className={styles.input}
          aria-label={t("Postleitzahl")}
        />
        <button type="submit" className={styles.button} disabled={checking}>
          {t("Prüfen")}
        </button>
      </form>
      {result && (
        <div className={styles.resultRow} role="status">
          <span className={result.deliverable ? styles.dotOk : styles.dotWarn} aria-hidden="true" />
          <span className={result.deliverable ? styles.resultOk : styles.resultWarn}>{t(result.message)}</span>
        </div>
      )}
    </div>
  );
}
