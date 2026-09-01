"use client";

import Link from "next/link";
import { useMobileChrome } from "@/context/MobileChromeContext";
import { useT } from "@/i18n/LanguageProvider";
import LanguageToggle from "@/components/LanguageToggle";
import toggleStyles from "@/components/LanguageToggle.module.css";
import { NAV_ITEMS, MOBILE_SECONDARY_NAV } from "@/data/nav";
import styles from "./MobileMenuOverlay.module.css";

/**
 * Full-screen ink-colored nav overlay opened from the header's hamburger
 * icon (mobile only) — per "la Vanda Wireframes Mobile" screen 1b.
 * Desktop keeps its always-visible inline nav; this is the mobile
 * replacement, so it's mounted once in the root layout regardless of
 * which page is active.
 */
export default function MobileMenuOverlay() {
  const { menuOpen, closeMenu } = useMobileChrome();
  const t = useT();

  if (!menuOpen) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label={t("Menü")}>
      <div className={styles.head}>
        <span className={styles.wordmark}>la Vanda</span>
        <button type="button" className={styles.closeButton} onClick={closeMenu} aria-label={t("Menü schließen")}>
          ✕
        </button>
      </div>

      <nav className={styles.primaryNav} aria-label={t("Hauptnavigation")}>
        {NAV_ITEMS.map((item) => (
          <Link key={item.href} href={item.href} onClick={closeMenu} className={styles.primaryLink}>
            {t(item.label)}
          </Link>
        ))}
      </nav>

      <div className={styles.divider} />

      <nav className={styles.secondaryNav} aria-label={t("Weitere Seiten")}>
        {MOBILE_SECONDARY_NAV.map((item) => (
          <Link key={item.label} href={item.href} onClick={closeMenu} className={styles.secondaryLink}>
            {t(item.label)}
          </Link>
        ))}
      </nav>

      <div className={styles.divider} />

      <LanguageToggle className={toggleStyles.mobile} />
    </div>
  );
}
