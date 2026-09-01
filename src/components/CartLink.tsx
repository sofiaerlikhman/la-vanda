"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useT } from "@/i18n/LanguageProvider";
import styles from "./SiteHeader.module.css";

/** The header's cart icon + live item-count badge — split out as its own
 * client component so the rest of SiteHeader can stay a plain server component. */
export default function CartLink() {
  const { totalQuantity } = useCart();
  const t = useT();

  return (
    <Link href="/checkout" aria-label={`${t("Korb")}, ${totalQuantity} ${t("Artikel")}`} className={styles.iconButton}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M3.5 6.25h13l-1.1 10.25a1 1 0 0 1-1 .9H5.6a1 1 0 0 1-1-.9L3.5 6.25Z" />
        <path d="M7.25 6.25V4.5a2.75 2.75 0 0 1 5.5 0v1.75" />
      </svg>
      <span className={styles.badge}>{totalQuantity}</span>
    </Link>
  );
}
