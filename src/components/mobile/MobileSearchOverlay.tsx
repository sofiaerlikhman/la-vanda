"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useMobileChrome } from "@/context/MobileChromeContext";
import { useT } from "@/i18n/LanguageProvider";
import styles from "./MobileSearchOverlay.module.css";

/**
 * Full-screen mobile search view — per "la Vanda Wireframes Mobile":
 * search is its own view rather than a header dropdown. Submitting
 * routes to /sortiment?q=… where SortimentBrowser does a real
 * (client-side, name/description substring) filter — the same honesty
 * rule as everywhere else in this project: no fabricated results, and
 * this also turns the desktop header's search icon from a no-op into a
 * working search, since both open this same overlay.
 */
export default function MobileSearchOverlay() {
  const { searchOpen, closeSearch } = useMobileChrome();
  const router = useRouter();
  const t = useT();
  const [value, setValue] = useState("");

  if (!searchOpen) return null;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const term = value.trim();
    closeSearch();
    setValue("");
    router.push(term ? `/sortiment?q=${encodeURIComponent(term)}` : "/sortiment");
  }

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label={t("Suche")}>
      <form className={styles.head} onSubmit={handleSubmit}>
        <input
          type="search"
          autoFocus
          value={value}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
          placeholder={t("Sträuße, Pflanzen, Anlässe …")}
          className={styles.input}
          aria-label={t("Suchbegriff")}
        />
        <button type="button" className={styles.closeButton} onClick={closeSearch} aria-label={t("Suche schließen")}>
          ✕
        </button>
      </form>
      <div className={styles.body}>
        <p className={styles.hint}>{t("Suchbegriff eingeben und Enter drücken — Ergebnisse erscheinen im Sortiment.")}</p>
      </div>
    </div>
  );
}
