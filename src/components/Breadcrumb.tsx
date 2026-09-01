"use client";

import Link from "next/link";
import { useT } from "@/i18n/LanguageProvider";
import styles from "./Breadcrumb.module.css";

export type Crumb = {
  label: string;
  href?: string;
};

/** Shared breadcrumb trail — used on Sortiment, Produkt, and future inner pages. */
export default function Breadcrumb({ items }: { items: Crumb[] }) {
  const t = useT();

  return (
    <nav className={styles.trail} aria-label={t("Breadcrumb")}>
      {items.map((item, i) => (
        <span key={`${item.label}-${i}`} className={styles.item}>
          {item.href ? (
            <Link href={item.href}>{t(item.label)}</Link>
          ) : (
            <span className={styles.current}>{t(item.label)}</span>
          )}
          {i < items.length - 1 && <span className={styles.sep}>/</span>}
        </span>
      ))}
    </nav>
  );
}
