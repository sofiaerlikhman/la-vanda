"use client";

import ImagePlaceholder from "@/components/ImagePlaceholder";
import { useCart } from "@/context/CartContext";
import { useT } from "@/i18n/LanguageProvider";
import type { Accessory } from "@/data/accessories";
import { formatPriceEUR } from "@/data/products";
import styles from "./AccessoryGrid.module.css";

/**
 * "Passt dazu" cross-sell strip. Plain cards, not <ProductCard> — accessories
 * have no delivery window or detail page yet, so there's no link, just an
 * "In den Korb" action wired to the real cart.
 */
export default function AccessoryGrid({ accessories }: { accessories: Accessory[] }) {
  const { addItem } = useCart();
  const t = useT();

  return (
    <div className={styles.grid}>
      {accessories.map((accessory) => (
        <div key={accessory.id} className={styles.card}>
          <div className={styles.imageWrap}>
            <ImagePlaceholder label={t(accessory.image)} className={styles.image} />
          </div>
          <p className={styles.name}>{t(accessory.name)}</p>
          <div className={styles.row}>
            <p className={styles.price}>{formatPriceEUR(accessory.priceCents)}</p>
            <button
              type="button"
              className={styles.addButton}
              onClick={() =>
                addItem({
                  id: `accessory:${accessory.id}`,
                  kind: "accessory",
                  name: accessory.name,
                  priceCents: accessory.priceCents,
                  image: accessory.image,
                })
              }
            >
              {t("+ Korb")}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
