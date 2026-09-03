"use client";

import { useEffect } from "react";
import Link from "next/link";
import LanguageToggle from "@/components/LanguageToggle";
import SectionLink from "./SectionLink";
import toggleStyles from "@/components/LanguageToggle.module.css";
import { useT } from "@/i18n/LanguageProvider";
import { SECTION_NAV, LEGAL_NAV } from "@/data/nav";
import styles from "./LandingMenuOverlay.module.css";

/**
 * Full-screen nav overlay behind the header's hamburger — the mobile
 * counterpart to the desktop header's inline section list.
 *
 * Section links are plain anchors (they scroll, then close the overlay);
 * the legal pages are real routes and go through next/link so they pick
 * up the basePath (CLAUDE.md §7).
 */
export default function LandingMenuOverlay({ onClose }: { onClose: () => void }) {
  const t = useT();

  // Escape closes it — the overlay covers everything, so there has to be a
  // keyboard way out that isn't "hunt for the ✕".
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label={t("Menü")}>
      <div className={styles.head}>
        <span className={styles.wordmark}>la Vanda</span>
        <button type="button" className={styles.closeButton} onClick={onClose} aria-label={t("Menü schließen")}>
          ✕
        </button>
      </div>

      <nav className={styles.primaryNav} aria-label={t("Hauptnavigation")}>
        {SECTION_NAV.map((item) => (
          <SectionLink key={item.href} hash={item.href} onClick={onClose} className={styles.primaryLink}>
            {t(item.label)}
          </SectionLink>
        ))}
      </nav>

      <div className={styles.divider} />

      <nav className={styles.secondaryNav} aria-label={t("Rechtliches")}>
        {LEGAL_NAV.map((item) => (
          <Link key={item.href} href={item.href} onClick={onClose} className={styles.secondaryLink}>
            {t(item.label)}
          </Link>
        ))}
      </nav>

      <div className={styles.divider} />

      <LanguageToggle className={toggleStyles.mobile} />
    </div>
  );
}
