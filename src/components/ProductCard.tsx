import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";
import { formatPriceEUR, type Product } from "@/data/products";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/produkt/${product.slug}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <ImagePlaceholder label={product.image} className={styles.image} />
        {product.badge && !product.soldOut && <span className={styles.badge}>{product.badge}</span>}
        {product.soldOut && (
          <div className={styles.soldOutOverlay}>
            <span className={styles.soldOutBadge}>Heute ausverkauft</span>
          </div>
        )}
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>{formatPriceEUR(product.priceCents)}</p>
        <p className={product.deliveryUrgent ? styles.deliveryWarn : styles.delivery}>{product.deliveryLabel}</p>
      </div>
    </Link>
  );
}
