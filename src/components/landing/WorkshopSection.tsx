"use client";

import { useT } from "@/i18n/LanguageProvider";
import type { Workshop } from "@/data/atelier";
import styles from "./WorkshopSection.module.css";

/**
 * Workshops, as an announcement rather than a booking form.
 *
 * BACKEND — the whole block, twice over.
 *
 *   1. Booking. The shop branch put a "58,00 € buchen" button on each
 *      row, which added a line to the client-side cart — a seat that was
 *      never actually reserved anywhere. There is no booking or
 *      seat-inventory service, so this page doesn't pretend: no button,
 *      and it says outright that signing up online isn't possible yet.
 *
 *   2. The dates. WORKSHOPS is a fixed list frozen at build time, so a
 *      date that has passed keeps showing until someone edits the file
 *      and redeploys. Seat counts ("3 Plätze", "Ausgebucht") are left
 *      off entirely for the same reason — a stale seat count reads as
 *      live availability. The bracketed note below marks the list as
 *      unconfirmed, per the project's placeholder convention.
 */
export default function WorkshopSection({ workshops }: { workshops: Workshop[] }) {
  const t = useT();

  return (
    <section id="workshops" className={styles.section}>
      <div className={styles.wrap}>
        <div data-reveal>
          <p className={styles.eyebrow}>{t("Workshops")}</p>
          <h2 className={styles.title}>
            {t("Zwei Stunden")}
            <br />
            {t("an der Werkbank")}
          </h2>
          <p className={styles.lead}>
            {t("Maximal acht Plätze. Material, Werkzeug und ein Glas Wein sind dabei, das Gebundene nimmst du mit.")}
          </p>
          <p className={styles.note}>
            {t("Für Gruppen ab sechs Personen machen wir eigene Termine — auch außerhalb der Öffnungszeiten.")}
          </p>
        </div>

        <div>
          <div className={styles.list} data-reveal-group>
            {workshops.map((workshop) => (
              <div key={workshop.id} className={styles.row}>
                <span className={styles.date}>{t(workshop.date)}</span>
                <span className={styles.name}>{t(workshop.title)}</span>
              </div>
            ))}
          </div>
          <p className={styles.status}>{t("Anmeldung online noch nicht möglich.")}</p>
          <p className={styles.placeholder}>{t("[Termine und freie Plätze werden vor Veröffentlichung bestätigt]")}</p>
        </div>
      </div>
    </section>
  );
}
