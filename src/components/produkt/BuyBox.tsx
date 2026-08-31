"use client";

import { useState } from "react";
import Button from "@/components/Button";
import { useCart } from "@/context/CartContext";
import { formatPriceEUR, type Product } from "@/data/products";
import styles from "./BuyBox.module.css";

/**
 * Size selection, quantity, and "In den Korb" — adds a real line to the
 * client-side cart (`useCart`). There's still no backend order system (see
 * README → "Backend & Inventar"), so the cart itself only lives in this
 * browser; swap the context's localStorage persistence for a `/api/cart`
 * call once one exists, without touching this component.
 */
export default function BuyBox({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [sizeIndex, setSizeIndex] = useState(() => {
    if (!product.sizes) return -1;
    const preselected = product.sizes.findIndex((s) => s.priceCents === product.priceCents);
    return preselected >= 0 ? preselected : 0;
  });
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const selectedPriceCents = product.sizes && sizeIndex >= 0 ? product.sizes[sizeIndex].priceCents : product.priceCents;

  function handleAddToCart() {
    if (product.soldOut) return;
    const size = product.sizes && sizeIndex >= 0 ? product.sizes[sizeIndex] : null;
    addItem(
      {
        id: `product:${product.slug}:${size?.label ?? "standard"}`,
        kind: "product",
        slug: product.slug,
        name: product.name,
        priceCents: selectedPriceCents,
        image: product.image,
        meta: size ? `Größe ${size.label.toLowerCase()}` : undefined,
      },
      quantity
    );
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div>
      <div className={styles.statusRow}>
        {product.soldOut ? (
          <span className={styles.soldOutBadge}>Heute ausverkauft</span>
        ) : (
          <span className={styles.availableBadge}>{product.deliveryUrgent ? "Morgen lieferbar" : "Heute lieferbar"}</span>
        )}
        <span className={styles.cutoff}>Bestellschluss 14 Uhr</span>
      </div>

      <h1 className={styles.name}>{product.name}</h1>
      <p className={styles.price}>{formatPriceEUR(selectedPriceCents)}</p>
      <p className={styles.description}>{product.description}</p>

      {product.sizes && (
        <div className={styles.sizeRow} role="group" aria-label="Größe">
          {product.sizes.map((size, i) => (
            <button
              key={size.label}
              type="button"
              className={i === sizeIndex ? `${styles.sizeButton} ${styles.sizeButtonActive}` : styles.sizeButton}
              onClick={() => setSizeIndex(i)}
              aria-pressed={i === sizeIndex}
            >
              {size.label}
              <span className={styles.sizePrice}>{formatPriceEUR(size.priceCents)}</span>
            </button>
          ))}
        </div>
      )}

      <div className={styles.purchaseRow}>
        <div className={styles.stepper} role="group" aria-label="Menge">
          <button
            type="button"
            className={styles.stepButton}
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            aria-label="Menge verringern"
          >
            −
          </button>
          <span className={styles.stepValue}>{quantity}</span>
          <button
            type="button"
            className={styles.stepButton}
            onClick={() => setQuantity((q) => Math.min(9, q + 1))}
            aria-label="Menge erhöhen"
          >
            +
          </button>
        </div>
        <Button
          variant="primary"
          className={styles.addButton}
          disabled={product.soldOut}
          onClick={handleAddToCart}
        >
          {product.soldOut ? "Ausverkauft" : added ? "Hinzugefügt ✓" : "In den Korb"}
        </Button>
      </div>

      <p className={styles.reassurance}>
        Eigene Fahrer, kein Paketdienst. Sieben Tage Frischegarantie — meldet sich der Strauß früher ab, ersetzen wir ihn.
      </p>
    </div>
  );
}
