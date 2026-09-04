"use client";

import { formatPriceEUR } from "@/data/products";
import { useT } from "@/i18n/LanguageProvider";
import { GREENS } from "@/data/configurator";
import styles from "./GreenPicker.module.css";

type GreenPickerProps = {
  greenId: string;
  onChange: (id: string) => void;
};

/** Step 2 — greenery/filler choice, from "2 · Grün & Struktur". Single-select, always one chosen. */
export default function GreenPicker({ greenId, onChange }: GreenPickerProps) {
  const t = useT();
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{t("2 · Grün & Struktur")}</h2>
      <div className={styles.grid} role="radiogroup" aria-label={t("Grün wählen")}>
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
              <span className={styles.name}>{t(green.name)}</span>
              <span className={styles.note}>{t(green.note)}</span>
              <span className={styles.price}>{formatPriceEUR(green.priceCents)}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
