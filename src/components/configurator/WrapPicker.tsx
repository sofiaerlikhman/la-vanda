"use client";

import ImagePlaceholder from "@/components/ImagePlaceholder";
import { formatPriceEUR } from "@/data/products";
import { useT } from "@/i18n/LanguageProvider";
import { WRAPS } from "@/data/configurator";
import styles from "./WrapPicker.module.css";

type WrapPickerProps = {
  wrapId: string;
  onChange: (id: string) => void;
};

/** Step 3 — packaging choice, from "3 · Verpackung". Single-select, always one chosen. */
export default function WrapPicker({ wrapId, onChange }: WrapPickerProps) {
  const t = useT();
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{t("3 · Verpackung")}</h2>
      <div className={styles.grid} role="radiogroup" aria-label={t("Verpackung wählen")}>
        {WRAPS.map((wrap) => {
          const active = wrap.id === wrapId;
          return (
            <button
              key={wrap.id}
              type="button"
              role="radio"
              aria-checked={active}
              className={active ? `${styles.option} ${styles.optionActive}` : styles.option}
              onClick={() => onChange(wrap.id)}
            >
              <div className={styles.imageWrap}>
                <ImagePlaceholder label={wrap.image} className={styles.image} />
              </div>
              <div className={styles.body}>
                <span className={styles.name}>{t(wrap.name)}</span>
                <span className={styles.note}>{t(wrap.note)}</span>
                <span className={styles.price}>{wrap.priceCents > 0 ? `+ ${formatPriceEUR(wrap.priceCents)}` : t("inklusive")}</span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
