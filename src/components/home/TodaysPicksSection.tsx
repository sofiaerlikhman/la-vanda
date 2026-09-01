import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import type { Product } from "@/data/products";
import styles from "./TodaysPicksSection.module.css";

export default function TodaysPicksSection({ products }: { products: Product[] }) {
  return (
    <section className={styles.section}>
      <div className={styles.head} data-reveal>
        <div>
          <p className={styles.eyebrow}>Heute gebunden</p>
          <h2 className={styles.title}>Was heute noch geht</h2>
        </div>
        <Link href="/sortiment" className={styles.allLink}>
          Alle Blumen
        </Link>
      </div>
      <ProductGrid products={products} />
    </section>
  );
}
