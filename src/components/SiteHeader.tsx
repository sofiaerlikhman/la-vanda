"use client";

import Link from "next/link";
import CartLink from "./CartLink";
import { useMobileChrome } from "@/context/MobileChromeContext";
import { NAV_ITEMS } from "@/data/nav";
import styles from "./SiteHeader.module.css";

/**
 * Client component (needs useMobileChrome for the search/hamburger
 * icons) — the nav content itself is still static, so this stays as
 * cheap as the previous server component in practice.
 */
export default function SiteHeader() {
  const { openSearch, toggleMenu } = useMobileChrome();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.wordmark}>
        la Vanda
      </Link>
      <nav className={styles.nav} aria-label="Hauptnavigation">
        {NAV_ITEMS.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className={styles.actions}>
        <button type="button" aria-label="Suche" className={styles.iconButton} onClick={openSearch}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4">
            <circle cx="8.75" cy="8.75" r="5.75" />
            <line x1="12.9" y1="12.9" x2="17.5" y2="17.5" />
          </svg>
        </button>
        <Link href="/konto" aria-label="Konto" className={`${styles.iconButton} ${styles.desktopOnly}`}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4">
            <circle cx="10" cy="6.75" r="3.75" />
            <path d="M3.25 17.25c0-3.31 3.02-6 6.75-6s6.75 2.69 6.75 6" />
          </svg>
        </Link>
        <div className={styles.desktopOnly}>
          <CartLink />
        </div>
        <button
          type="button"
          aria-label="Menü"
          className={`${styles.iconButton} ${styles.hamburgerButton}`}
          onClick={toggleMenu}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4">
            <line x1="3" y1="6" x2="17" y2="6" />
            <line x1="3" y1="10" x2="17" y2="10" />
            <line x1="3" y1="14" x2="17" y2="14" />
          </svg>
        </button>
      </div>
    </header>
  );
}
