"use client";

import { useT } from "@/i18n/LanguageProvider";
import { CONTACT } from "@/data/atelier";
import styles from "./PreviewNotice.module.css";

/**
 * Says plainly what this page is and isn't, directly under the hero.
 *
 * This is the honest-UI rule from CLAUDE.md §8 applied to the whole
 * site: where there's no backend, show a clear "not connected yet"
 * state rather than a shop front that quietly does nothing. The banner
 * at the very top says it in one line; this says it in full, and points
 * at the two things that do work — the address and the phone number.
 *
 * No backend involved.
 */
export default function PreviewNotice() {
  const t = useT();

  return (
    <section className={styles.section}>
      <div className={styles.panel} data-reveal>
        <p className={styles.eyebrow}>{t("Vorschau")}</p>
        <h2 className={styles.title}>{t("Noch kein Online-Shop")}</h2>
        <p className={styles.lead}>
          {t(
            "Diese Seite zeigt, was wir machen und wo du uns findest. Bestellen und reservieren kannst du hier noch nicht — im Laden an der Marktstraße 12 sind wir zu den Öffnungszeiten da.",
          )}
        </p>
        <p className={styles.contactLine}>
          <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
          <span className={styles.separator} aria-hidden="true">
            ·
          </span>
          <a href={CONTACT.emailHref}>{CONTACT.email}</a>
        </p>
      </div>
    </section>
  );
}
