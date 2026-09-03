"use client";

import { useT } from "@/i18n/LanguageProvider";
import { CONTACT, type OpeningHoursRow } from "@/data/atelier";
import styles from "./ContactSection.module.css";

/**
 * Contact details, and no form.
 *
 * BACKEND — the form that isn't here. /atelier and /anfrage both carried
 * forms that validated input, showed a success state and sent nothing:
 * there is no mail service or API endpoint behind this site. Rather than
 * ship a third one, this block gives the two channels that work without
 * any backend at all — a tel: link and a mailto: link, both handled by
 * the visitor's own device.
 *
 * The phone number and address come from the handoff and are very likely
 * stand-ins (the Impressum still reads "[E-Mail-Adresse wird ergänzt]"
 * for this same shop). They're rendered with a visible bracketed note so
 * nobody publishes an unreachable number by accident — CLAUDE.md §8.
 */
export default function ContactSection({ hours }: { hours: OpeningHoursRow[] }) {
  const t = useT();

  return (
    <section id="kontakt" className={styles.section}>
      <div className={styles.grid} data-reveal>
        <div>
          <h2 className={styles.title}>{t("So erreichst du uns")}</h2>
          <p className={styles.lead}>{t("Ein Kontaktformular gibt es auf dieser Seite noch nicht.")}</p>
        </div>

        <dl className={styles.details}>
          <div className={styles.row}>
            <dt className={styles.label}>{t("Adresse")}</dt>
            <dd className={styles.value}>
              {CONTACT.street}
              <br />
              {CONTACT.city}
            </dd>
          </div>

          <div className={styles.row}>
            <dt className={styles.label}>{t("Telefon")}</dt>
            <dd className={styles.value}>
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            </dd>
          </div>

          <div className={styles.row}>
            <dt className={styles.label}>{t("E-Mail")}</dt>
            <dd className={styles.value}>
              <a href={CONTACT.emailHref}>{CONTACT.email}</a>
            </dd>
          </div>

          <div className={styles.row}>
            <dt className={styles.label}>{t("Öffnungszeiten")}</dt>
            <dd className={styles.value}>
              {hours.map((row) => (
                <span key={row.days} className={styles.hoursLine}>
                  {t(row.days)}: {t(row.hours)}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </div>

      <p className={styles.placeholder}>{t("[Telefon und E-Mail vor Veröffentlichung bestätigen]")}</p>
    </section>
  );
}
