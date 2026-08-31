"use client";

import ImagePlaceholder from "@/components/ImagePlaceholder";
import Button from "@/components/Button";
import { useCart, type CartItem } from "@/context/CartContext";
import { ACCESSORIES } from "@/data/accessories";
import { DELIVERY_FEE_CENTS, formatCents } from "./types";
import styles from "./checkout.module.css";
import cartStyles from "./CartStep.module.css";

export default function CartStep({ onContinue }: { onContinue: () => void }) {
  const { items, setQuantity, removeItem, addItem, subtotalCents } = useCart();

  const crossSell = ACCESSORIES.filter((a) => !items.some((i) => i.id === `accessory:${a.id}`));
  const estimatedTotal = items.length > 0 ? subtotalCents + DELIVERY_FEE_CENTS : 0;

  return (
    <div className={styles.layout}>
      <div>
        <h1 className={styles.title}>Dein Korb</h1>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <p>Dein Korb ist leer.</p>
            <Button variant="secondary" href="/sortiment">
              Sträuße ansehen
            </Button>
          </div>
        ) : (
          <>
            <div className={cartStyles.list}>
              {items.map((item) => (
                <CartLineRow key={item.id} item={item} onSetQuantity={setQuantity} onRemove={removeItem} />
              ))}
            </div>

            {crossSell.length > 0 && (
              <>
                <p className={styles.sectionLabel} style={{ marginTop: 32 }}>
                  Passt dazu
                </p>
                <div className={cartStyles.crossSellGrid}>
                  {crossSell.map((accessory) => (
                    <button
                      key={accessory.id}
                      type="button"
                      className={cartStyles.crossSellCard}
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
                      <div className={cartStyles.crossSellImage}>
                        <ImagePlaceholder label={accessory.image} className={cartStyles.crossSellImageInner} />
                      </div>
                      <span>
                        <span className={cartStyles.crossSellName}>{accessory.name}</span>
                        <span className={cartStyles.crossSellPrice}>{formatCents(accessory.priceCents)}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>

      <aside className={styles.aside}>
        <p className={styles.asideEyebrow}>Zusammenfassung</p>
        <div className={styles.summaryLines}>
          <div className={styles.summaryRow}>
            <span>Zwischensumme</span>
            <span className={styles.summaryRowValue}>{formatCents(subtotalCents)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Lieferung Wiesbaden</span>
            <span className={styles.summaryRowValue}>{items.length > 0 ? formatCents(DELIVERY_FEE_CENTS) : "—"}</span>
          </div>
        </div>
        <div className={styles.totalRow}>
          <span className={styles.totalLabel}>Summe</span>
          <span className={styles.totalValue}>{formatCents(estimatedTotal)}</span>
        </div>
        <Button variant="primary" className={styles.asideCta} disabled={items.length === 0} onClick={onContinue}>
          Zur Lieferung
        </Button>
        <p className={styles.asideNote}>
          Zeitfenster wählst du im nächsten Schritt. Bis 14 Uhr bestellt, heute 17–20 Uhr geliefert.
        </p>
      </aside>
    </div>
  );
}

function CartLineRow({
  item,
  onSetQuantity,
  onRemove,
}: {
  item: CartItem;
  onSetQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}) {
  return (
    <div className={cartStyles.row}>
      <div className={cartStyles.imageWrap}>
        <ImagePlaceholder label={item.image} className={cartStyles.image} />
      </div>
      <div>
        <h3 className={cartStyles.name}>{item.name}</h3>
        {item.meta && <p className={cartStyles.meta}>{item.meta}</p>}
        <div className={cartStyles.controls}>
          <div className={cartStyles.stepper}>
            <button
              type="button"
              aria-label="Menge verringern"
              className={cartStyles.stepButton}
              onClick={() => onSetQuantity(item.id, item.quantity - 1)}
            >
              −
            </button>
            <span className={cartStyles.stepValue}>{item.quantity}</span>
            <button
              type="button"
              aria-label="Menge erhöhen"
              className={cartStyles.stepButton}
              onClick={() => onSetQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
          </div>
          <button type="button" className={cartStyles.removeButton} onClick={() => onRemove(item.id)}>
            Entfernen
          </button>
        </div>
      </div>
      <p className={cartStyles.price}>{formatCents(item.priceCents * item.quantity)}</p>
    </div>
  );
}
