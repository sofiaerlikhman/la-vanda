import Link from "next/link";
import styles from "./Breadcrumb.module.css";

export type Crumb = {
  label: string;
  href?: string;
};

/** Shared breadcrumb trail — used on Sortiment, Produkt, and future inner pages. */
export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav className={styles.trail} aria-label="Breadcrumb">
      {items.map((item, i) => (
        <span key={`${item.label}-${i}`} className={styles.item}>
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span className={styles.current}>{item.label}</span>}
          {i < items.length - 1 && <span className={styles.sep}>/</span>}
        </span>
      ))}
    </nav>
  );
}
