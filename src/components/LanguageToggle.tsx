"use client";

import { useLang } from "@/i18n/LanguageProvider";
import styles from "./LanguageToggle.module.css";

/**
 * Compact DE / UA language switch. Inherits `currentColor`, so it sits
 * correctly on both the dark header and the mobile menu overlay. The active
 * language is emphasised; the other is dimmed and clickable.
 */
export default function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang, t } = useLang();

  return (
    <div
      className={[styles.group, className].filter(Boolean).join(" ")}
      role="group"
      aria-label={t("Sprache wählen")}
    >
      <button
        type="button"
        className={lang === "de" ? `${styles.option} ${styles.active}` : styles.option}
        onClick={() => setLang("de")}
        aria-pressed={lang === "de"}
        lang="de"
      >
        DE
      </button>
      <span className={styles.divider} aria-hidden="true">
        /
      </span>
      <button
        type="button"
        className={lang === "uk" ? `${styles.option} ${styles.active}` : styles.option}
        onClick={() => setLang("uk")}
        aria-pressed={lang === "uk"}
        lang="uk"
      >
        UA
      </button>
    </div>
  );
}
