"use client";

import { useState } from "react";
import LanguageToggle from "@/components/LanguageToggle";
import LandingMenuOverlay from "./LandingMenuOverlay";
import SectionLink from "./SectionLink";
import { useT } from "@/i18n/LanguageProvider";
import { SECTION_NAV } from "@/data/nav";
import styles from "./LandingHeader.module.css";

/**
 * Sticky header for the one-page site.
 *
 * Every link is an in-page anchor — there is no cart, account or search
 * icon, because there is no cart, account or product index behind them.
 * Desktop shows the section list inline; below 768px the same list moves
 * into the full-screen overlay behind the hamburger, so neither viewport
 * is left without a way to reach a section (CLAUDE.md §1).
 *
 * The menu state lives here rather than in a context: on a single page
 * the header is the only thing that opens it.
 */
export default function LandingHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useT();

  return (
    <>
      {/* Long single page — a skip link matters more here than on the
          multi-page shop, where each route started near its own content. */}
      <a href="#inhalt" className={styles.skipLink}>
        {t("Zum Inhalt springen")}
      </a>

      <header className={styles.header}>
        {/* Scrolls to the top on the landing page, routes home from the
            legal pages — see SectionLink. */}
        <SectionLink hash="#top" className={styles.wordmark}>
          la Vanda
        </SectionLink>
        <nav className={styles.nav} aria-label={t("Hauptnavigation")}>
          {SECTION_NAV.map((item) => (
            <SectionLink key={item.href} hash={item.href}>
              {t(item.label)}
            </SectionLink>
          ))}
        </nav>
        <div className={styles.actions}>
          <div className={`${styles.desktopOnly} ${styles.langToggle}`}>
            <LanguageToggle />
          </div>
          <button
            type="button"
            aria-label={t("Menü")}
            aria-expanded={menuOpen}
            className={`${styles.iconButton} ${styles.hamburgerButton}`}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4">
              <line x1="3" y1="6" x2="17" y2="6" />
              <line x1="3" y1="10" x2="17" y2="10" />
              <line x1="3" y1="14" x2="17" y2="14" />
            </svg>
          </button>
        </div>
      </header>

      {menuOpen && <LandingMenuOverlay onClose={() => setMenuOpen(false)} />}
    </>
  );
}
