"use client";

import { useT } from "@/i18n/LanguageProvider";
import type { DeliveryFact } from "@/data/delivery";
import styles from "./DeliverySection.module.css";

/**
 * How delivery works, stated flatly.
 *
 * BACKEND — everything that used to be interactive here.
 * The shop home page had a postcode field that answered "wir liefern
 * heute 17–20 Uhr" from a hardcoded Wiesbaden range, and /lieferung had
 * a live cut-off countdown and a day/window picker. All three implied an
 * order could follow. The real zone lookup ("postcode → zone + fee +
 * windows") was always listed as backend work, so what's shown here is
 * the part that's true regardless of day, postcode and time.
 */
export default function DeliverySection({ facts }: { facts: DeliveryFact[] }) {
  const t = useT();

  return (
    <section id="lieferung" className={styles.section}>
      <div className={styles.grid} data-reveal>
        <div>
          <h2 className={styles.title}>{t("Wie wir liefern")}</h2>
          <p className={styles.lead}>
            {t("Eigene Fahrer, kein Paketdienst. Zwei Zeitfenster am Tag, samstags eines.")}
          </p>
        </div>

        <dl className={styles.facts}>
          {facts.map((fact) => (
            <div key={fact.label} className={styles.fact}>
              <dt className={styles.factLabel}>{t(fact.label)}</dt>
              <dd className={styles.factValue}>{t(fact.value)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
