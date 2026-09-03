"use client";

import ImagePlaceholder from "@/components/ImagePlaceholder";
import Button from "@/components/Button";
import { useT } from "@/i18n/LanguageProvider";
import type { OpeningHoursRow } from "@/data/atelier";
import styles from "./HoursSection.module.css";

/**
 * Opening hours and how to get there — the single most useful block on a
 * page that can't take an order. The shop version offered "Abholung
 * reservieren" here; reserving a pickup needs a backend, so the only
 * action left points at the contact details further down.
 *
 * BACKEND — the hours themselves.
 * They are frozen into the HTML at build time (see OPENING_HOURS in
 * src/data/atelier.ts). Holiday closures and one-off changes can't show
 * up here without a real opening-hours source, so the page states the
 * regular week and nothing more.
 *
 * BACKEND — the map.
 * A live map needs a maps provider (embed or tiles + key). Until then
 * the directions note carries the actual information and the map slot is
 * a placeholder.
 */
export default function HoursSection({ hours }: { hours: OpeningHoursRow[] }) {
  const t = useT();

  return (
    <section className={styles.section}>
      <div className={styles.grid} data-reveal>
        <div>
          <h2 className={styles.title}>
            {t("Öffnungszeiten")}
            <br />
            {t("& Anfahrt")}
          </h2>

          <div className={styles.table}>
            {hours.map((row) => (
              <div key={row.days} className={styles.row}>
                <span>{t(row.days)}</span>
                <span className={styles.value}>{t(row.hours)}</span>
              </div>
            ))}
          </div>

          <p className={styles.note}>
            {t(
              "Zwei Minuten von der Haltestelle Luisenplatz. Parkhaus Marktstraße direkt gegenüber, erste halbe Stunde frei.",
            )}
          </p>

          <div className={styles.actions}>
            <Button href="#kontakt" variant="secondary" size={48}>
              {t("Kontakt")}
            </Button>
          </div>
        </div>

        <div className={styles.mapWrap}>
          <ImagePlaceholder label={t("Karte, Marktstraße 12")} />
        </div>
      </div>
    </section>
  );
}
