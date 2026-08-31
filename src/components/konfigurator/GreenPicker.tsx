"use client";

import { formatPriceEUR } from "@/data/products";
import { GREENS } from "@/data/konfigurator";
import styles from "./GreenPicker.module.css";

type GreenPickerProps = {
  greenId: string;
  onChange: (id: string) => void;
};

/** Step 2 — greenery/filler choice, from "2 · Grün & Struktur". Single-select, always one chosen. */
export default function GreenPicker({ greenId, onChange }: GreenPickerProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>2 · Grün &amp; Struktur</h2>
      <div className={styles.grid} role="radiogroup" aria-label="Grün wählen">
        {GREENS.map((green) => {
          const active = green.id === greenId;
          return (
            <button
              key={green.id}
              type="button"
              role="radio"
              aria-checked={active}
              className={active ? `${styles.option} ${styles.optionActive}` : styles.option}
              onClick={() => onChange(green.id)}
            >
              <span className={styles.name}>{green.name}</span>
              <span className={styles.note}>{green.note}</span>
              <span className={styles.price}>{formatPriceEUR(green.priceCents)}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
