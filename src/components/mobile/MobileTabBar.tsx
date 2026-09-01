"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useMobileChrome } from "@/context/MobileChromeContext";
import { useT } from "@/i18n/LanguageProvider";
import styles from "./MobileTabBar.module.css";

/**
 * Fixed bottom tab bar — mobile only (hidden above 768px via CSS), per
 * "la Vanda Wireframes Mobile": Start/Blumen/Suche/Konto/Korb replace
 * the desktop header's inline nav + account/cart icons on small
 * screens. Mounted once in the root layout so every page gets it for
 * free; body padding-bottom (globals.css) keeps page content clear of it.
 */
export default function MobileTabBar() {
  const pathname = usePathname();
  const { totalQuantity } = useCart();
  const { openSearch, searchOpen, menuOpen } = useMobileChrome();
  const t = useT();

  const isActive = (href: string): boolean => (href === "/" ? pathname === "/" : Boolean(pathname?.startsWith(href)));
  const tabClass = (active: boolean) => (active ? `${styles.tab} ${styles.active}` : styles.tab);

  return (
    <nav className={styles.tabbar} aria-label={t("Mobile Navigation")} aria-hidden={menuOpen || searchOpen}>
      <Link href="/" className={tabClass(isActive("/"))}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M3 9.5 10 3l7 6.5" />
          <path d="M5 8.5V17h10V8.5" />
        </svg>
        <span>{t("Start")}</span>
      </Link>
      <Link href="/sortiment" className={tabClass(isActive("/sortiment"))}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4">
          <circle cx="10" cy="6.5" r="2.6" />
          <circle cx="14.2" cy="10.5" r="2.6" />
          <circle cx="5.8" cy="10.5" r="2.6" />
          <circle cx="10" cy="13.8" r="2.2" />
          <path d="M10 16v1.2" />
        </svg>
        <span>{t("Blumen")}</span>
      </Link>
      <button type="button" className={tabClass(searchOpen)} onClick={openSearch}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4">
          <circle cx="8.75" cy="8.75" r="5.75" />
          <line x1="12.9" y1="12.9" x2="17.5" y2="17.5" />
        </svg>
        <span>{t("Suche")}</span>
      </button>
      <Link href="/konto" className={tabClass(isActive("/konto"))}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4">
          <circle cx="10" cy="6.75" r="3.75" />
          <path d="M3.25 17.25c0-3.31 3.02-6 6.75-6s6.75 2.69 6.75 6" />
        </svg>
        <span>{t("Konto")}</span>
      </Link>
      <Link href="/checkout" className={tabClass(isActive("/checkout"))} aria-label={`${t("Korb")}, ${totalQuantity} ${t("Artikel")}`}>
        <span className={styles.iconWrap}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M3.5 6.25h13l-1.1 10.25a1 1 0 0 1-1 .9H5.6a1 1 0 0 1-1-.9L3.5 6.25Z" />
            <path d="M7.25 6.25V4.5a2.75 2.75 0 0 1 5.5 0v1.75" />
          </svg>
          {totalQuantity > 0 && <span className={styles.badge}>{totalQuantity}</span>}
        </span>
        <span>{t("Korb")}</span>
      </Link>
    </nav>
  );
}
