"use client";

import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";
import { useT } from "@/i18n/LanguageProvider";
import { formatPriceEUR, type Product } from "@/data/products";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }: { product: Product }) {
  const t = useT();

  return (
    <Link href={`/produkt/${product.slug}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <ImagePlaceholder label={t(product.image)} className={styles.image} />
        {product.badge && !product.soldOut && <span className={styles.badge}>{t(product.badge)}</span>}
        {product.soldOut && (
          <div className={styles.soldOutOverlay}>
            <span className={styles.soldOutBadge}>{t("Heute ausverkauft")}</span>
          </div>
        )}
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{t(product.name)}</h3>
        <p className={styles.price}>{formatPriceEUR(product.priceCents)}</p>
        <p className={product.deliveryUrgent ? styles.deliveryWarn : styles.delivery}>{t(product.deliveryLabel)}</p>
      </div>
    </Link>
  );
}
