"use client";

import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import { useT } from "@/i18n/LanguageProvider";
import type { Product } from "@/data/products";
import styles from "./TodaysPicksSection.module.css";

export default function TodaysPicksSection({ products }: { products: Product[] }) {
  const t = useT();

  return (
    <section className={styles.section}>
      <div className={styles.head} data-reveal>
        <div>
          <p className={styles.eyebrow}>{t("Heute gebunden")}</p>
          <h2 className={styles.title}>{t("Was heute noch geht")}</h2>
        </div>
        <Link href="/sortiment" className={styles.allLink}>
          {t("Alle Blumen")}
        </Link>
      </div>
      <ProductGrid products={products} />
    </section>
  );
}
