"use client";

import ImagePlaceholder from "@/components/ImagePlaceholder";
import Button from "@/components/Button";
import { formatPriceEUR } from "@/data/products";
import { MIN_ORDER_CENTS } from "@/data/konfigurator";
import styles from "./OrderSummary.module.css";

export type SummaryLine = {
  label: string;
  value: string;
};

type OrderSummaryProps = {
  stemCount: number;
  totalCents: number;
  summaryLine: string;
  lines: SummaryLine[];
  disabled: boolean;
  added: boolean;
  onAddToCart: () => void;
};

/** Sticky price/summary panel — "Dein Strauß" — with the real "In den Korb" CTA. */
export default function OrderSummary({ stemCount, totalCents, summaryLine, lines, disabled, added, onAddToCart }: OrderSummaryProps) {
  const totalLabel = formatPriceEUR(totalCents);

  return (
    <aside className={styles.aside}>
      <div className={styles.top}>
        <p className={styles.eyebrow}>Dein Strauß</p>
        <p className={styles.total}>{totalLabel}</p>
        <p className={styles.summaryLine}>{summaryLine}</p>
      </div>

      <div className={styles.previewWrap}>
        <ImagePlaceholder label="Vorschau Strauß" className={styles.preview} />
      </div>

      <div className={styles.lines}>
        {stemCount === 0 && <p className={styles.empty}>Noch keine Blumen gewählt. Ab 9 Stielen wird der Strauß voll.</p>}
        {lines.map((line) => (
          <div key={line.label} className={styles.line}>
            <span className={styles.lineLabel}>{line.label}</span>
            <span className={styles.lineValue}>{line.value}</span>
          </div>
        ))}
      </div>

      <div className={styles.sumRow}>
        <span className={styles.sumLabel}>Summe</span>
        <span className={styles.sumValue}>{totalLabel}</span>
      </div>

      <div className={styles.cta}>
        <Button variant="primary" size={48} className={styles.ctaButton} disabled={disabled} onClick={onAddToCart}>
          {added ? "Hinzugefügt ✓" : "In den Korb"}
        </Button>
        <p className={styles.hint}>
          Mindestbestellwert {formatPriceEUR(MIN_ORDER_CENTS)}. Liefertag und Zeitfenster wählst du an der Kasse.
        </p>
        <div className={styles.trust}>
          <span>Sieben Tage Frischegarantie</span>
          <span>Eigene Fahrer, kein Paketdienst</span>
          <span>Von Hand gebunden am Bestelltag</span>
        </div>
      </div>
    </aside>
  );
}
