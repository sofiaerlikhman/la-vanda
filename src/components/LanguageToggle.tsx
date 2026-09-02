"use client";

import { Fragment } from "react";
import { useLang, type Lang } from "@/i18n/LanguageProvider";
import styles from "./LanguageToggle.module.css";

const OPTIONS: { code: Lang; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "uk", label: "UA" },
  { code: "en", label: "EN" },
];

/**
 * Compact DE / UA / EN language switch. Inherits `currentColor`, so it sits
 * correctly on both the dark header and the mobile menu overlay. The active
 * language is emphasised; the others are dimmed and clickable.
 */
export default function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang, t } = useLang();

  return (
    <div
      className={[styles.group, className].filter(Boolean).join(" ")}
      role="group"
      aria-label={t("Sprache wählen")}
    >
      {OPTIONS.map((option, i) => (
        <Fragment key={option.code}>
          {i > 0 && (
            <span className={styles.divider} aria-hidden="true">
              /
            </span>
          )}
          <button
            type="button"
            className={lang === option.code ? `${styles.option} ${styles.active}` : styles.option}
            onClick={() => setLang(option.code)}
            aria-pressed={lang === option.code}
            lang={option.code}
          >
            {option.label}
          </button>
        </Fragment>
      ))}
    </div>
  );
}
