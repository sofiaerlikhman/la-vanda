"use client";

import ImagePlaceholder from "@/components/ImagePlaceholder";
import { formatPriceEUR } from "@/data/products";
import { FLOWERS, FLOWER_GROUP_FILTERS, MAX_STEMS_PER_FLOWER, type FlowerGroup } from "@/data/konfigurator";
import styles from "./FlowerPicker.module.css";

type FlowerFilter = (typeof FLOWER_GROUP_FILTERS)[number];

type FlowerPickerProps = {
  qty: Record<string, number>;
  group: FlowerFilter;
  stemCount: number;
  onGroupChange: (group: FlowerFilter) => void;
  onBump: (id: string, delta: number) => void;
};

/** Step 1 — pick flowers by group, stem by stem, from "1 · Blumen wählen". */
export default function FlowerPicker({ qty, group, stemCount, onGroupChange, onBump }: FlowerPickerProps) {
  const visible = FLOWERS.filter((f) => group === "Alle" || f.group === (group as FlowerGroup));

  return (
    <section>
      <div className={styles.header}>
        <h2 className={styles.title}>1 · Blumen wählen</h2>
        <span className={styles.stemLabel}>{stemCount} Stiele gewählt</span>
      </div>

      <div className={styles.chips} role="group" aria-label="Blumengruppe filtern">
        {FLOWER_GROUP_FILTERS.map((g) => (
          <button
            key={g}
            type="button"
            className={g === group ? `${styles.chip} ${styles.chipActive}` : styles.chip}
            onClick={() => onGroupChange(g)}
            aria-pressed={g === group}
          >
            {g}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {visible.map((flower) => {
          const q = qty[flower.id] ?? 0;
          return (
            <article key={flower.id} className={q > 0 ? `${styles.card} ${styles.cardActive}` : styles.card}>
              <div className={styles.imageWrap}>
                <ImagePlaceholder label={flower.name} className={styles.image} />
                {q > 0 && <span className={styles.qtyBadge}>{q}</span>}
              </div>
              <div className={styles.body}>
                <h3 className={styles.name}>{flower.name}</h3>
                <p className={styles.note}>{flower.note}</p>
                <div className={styles.row}>
                  <span className={styles.price}>{formatPriceEUR(flower.priceCents)} / Stiel</span>
                  <div className={styles.stepper} role="group" aria-label={`Menge ${flower.name}`}>
                    <button
                      type="button"
                      aria-label={`${flower.name} weniger`}
                      className={styles.stepButton}
                      onClick={() => onBump(flower.id, -1)}
                      disabled={q <= 0}
                    >
                      −
                    </button>
                    <span className={styles.stepValue}>{q}</span>
                    <button
                      type="button"
                      aria-label={`${flower.name} mehr`}
                      className={styles.stepButton}
                      onClick={() => onBump(flower.id, 1)}
                      disabled={q >= MAX_STEMS_PER_FLOWER}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
