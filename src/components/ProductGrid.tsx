import ProductCard from "./ProductCard";
import type { Product } from "@/data/products";
import styles from "./ProductGrid.module.css";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className={styles.grid} data-reveal-group>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
