"use client";

import { useMemo, useState, type ChangeEvent } from "react";
import Button from "@/components/Button";
import { useCart } from "@/context/CartContext";
import { useT } from "@/i18n/LanguageProvider";
import { formatPriceEUR } from "@/data/products";
import styles from "./AboConfigurator.module.css";

type RhythmId = "weekly" | "biweekly" | "monthly";
type SizeId = "s" | "m" | "l";

type RhythmOption = {
  id: RhythmId;
  label: string;
  /** e.g. "je Woche" — used in the price summary line. */
  perUnit: string;
  /** e.g. "Alle 2 Wochen" — used in the cart line's meta text. */
  cartLabel: string;
};

type SizeOption = {
  id: SizeId;
  label: string;
  description: string;
  priceCents: number;
};

const RHYTHMS: RhythmOption[] = [
  { id: "weekly", label: "Wöchentlich", perUnit: "je Woche", cartLabel: "Jede Woche" },
  { id: "biweekly", label: "14-tägig", perUnit: "alle zwei Wochen", cartLabel: "Alle 2 Wochen" },
  { id: "monthly", label: "Monatlich", perUnit: "je Monat", cartLabel: "Einmal im Monat" },
];

const SIZES: SizeOption[] = [
  { id: "s", label: "Klein", description: "Zehn bis zwölf Stiele, für die Küche", priceCents: 2800 },
  { id: "m", label: "Mittel", description: "Achtzehn Stiele, unsere häufigste Größe", priceCents: 4400 },
  { id: "l", label: "Groß", description: "Dreißig Stiele, für Tresen und Empfang", priceCents: 7200 },
];

const WEEKDAYS = ["Dienstag", "Mittwoch", "Donnerstag", "Freitag"] as const;
type Weekday = (typeof WEEKDAYS)[number];

const DELIVERY_WINDOWS = ["17–20 Uhr", "11–14 Uhr"] as const;
type DeliveryWindow = (typeof DELIVERY_WINDOWS)[number];

const WEEKDAY_INDEX: Record<Weekday, number> = {
  Dienstag: 2,
  Mittwoch: 3,
  Donnerstag: 4,
  Freitag: 5,
};

/**
 * Next real calendar date matching `weekday`, strictly after today — if
 * today already is that weekday, it rolls to next week rather than today,
 * since a signup today can't make a delivery that's already underway.
 */
function nextDeliveryDate(weekday: Weekday, from: Date): Date {
  const today = new Date(from);
  today.setHours(0, 0, 0, 0);
  const targetIdx = WEEKDAY_INDEX[weekday];
  let diff = (targetIdx - today.getDay() + 7) % 7;
  if (diff === 0) diff = 7;
  const result = new Date(today);
  result.setDate(today.getDate() + diff);
  return result;
}

function formatDeliveryDate(date: Date): string {
  return date.toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" });
}

/**
 * The real subscription configurator: rhythm, size, weekday and delivery
 * window are live state, price and first-delivery date recompute on every
 * change, and "Abo abschließen" adds a real line to the cart via useCart().
 *
 * There is no payment-provider subscriptions product behind this yet (see
 * README → "Backend & Inventar") — actually billing and shipping on a
 * recurring cadence needs a subscriptions integration (e.g. Stripe Billing)
 * plus a backend to run it. This MVP only adds a one-time cart line that
 * represents the signup / first delivery; the chosen rhythm is carried as
 * `meta` text so it at least survives through checkout for now.
 */
export default function AboConfigurator() {
  const { addItem } = useCart();
  const t = useT();
  const [rhythm, setRhythm] = useState<RhythmId>("weekly");
  const [size, setSize] = useState<SizeId>("m");
  const [weekday, setWeekday] = useState<Weekday>("Dienstag");
  const [deliveryWindow, setDeliveryWindow] = useState<DeliveryWindow>("17–20 Uhr");
  const [added, setAdded] = useState(false);

  const selectedRhythm = RHYTHMS.find((r) => r.id === rhythm) ?? RHYTHMS[0];
  const selectedSize = SIZES.find((s) => s.id === size) ?? SIZES[1];

  const firstDeliveryDate = useMemo(() => formatDeliveryDate(nextDeliveryDate(weekday, new Date())), [weekday]);

  function handleRhythmChange(id: RhythmId) {
    setRhythm(id);
  }

  function handleSizeChange(id: SizeId) {
    setSize(id);
  }

  function handleWeekdayChange(e: ChangeEvent<HTMLSelectElement>) {
    setWeekday(e.target.value as Weekday);
  }

  function handleWindowChange(e: ChangeEvent<HTMLSelectElement>) {
    setDeliveryWindow(e.target.value as DeliveryWindow);
  }

  function handleSubmit() {
    addItem(
      {
        id: `product:abo:${rhythm}-${size}`,
        kind: "product",
        name: `${t("Blumenabo")}, ${t("Größe")} ${t(selectedSize.label).toLowerCase()}`,
        priceCents: selectedSize.priceCents,
        image: `Abo-Strauß, Größe ${selectedSize.label.toLowerCase()}, quadratisch`,
        meta: `${t(selectedRhythm.cartLabel)}, ${t("Größe")} ${t(selectedSize.label).toLowerCase()}`,
      },
      1
    );
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div>
      <p className={`${styles.stepLabel} ${styles.stepLabelFirst}`}>{t("1 · Rhythmus")}</p>
      <div className={styles.rhythmRow} role="group" aria-label={t("Rhythmus")}>
        {RHYTHMS.map((r) => (
          <button
            key={r.id}
            type="button"
            className={r.id === rhythm ? `${styles.rhythmChip} ${styles.rhythmChipActive}` : styles.rhythmChip}
            aria-pressed={r.id === rhythm}
            onClick={() => handleRhythmChange(r.id)}
          >
            {t(r.label)}
          </button>
        ))}
      </div>

      <p className={styles.stepLabel}>{t("2 · Größe")}</p>
      <div className={styles.sizeList} role="group" aria-label={t("Größe")}>
        {SIZES.map((s) => (
          <button
            key={s.id}
            type="button"
            className={s.id === size ? `${styles.sizeRow} ${styles.sizeRowActive}` : styles.sizeRow}
            aria-pressed={s.id === size}
            onClick={() => handleSizeChange(s.id)}
          >
            <span className={styles.sizeText}>
              <span className={styles.sizeName}>{t(s.label)}</span>
              <span className={styles.sizeDescription}>{t(s.description)}</span>
            </span>
            <span className={styles.sizePrice}>{formatPriceEUR(s.priceCents)}</span>
          </button>
        ))}
      </div>

      <p className={styles.stepLabel}>{t("3 · Wochentag & Fenster")}</p>
      <div className={styles.selectRow}>
        <select className={styles.select} value={weekday} onChange={handleWeekdayChange} aria-label={t("Wochentag")}>
          {WEEKDAYS.map((day) => (
            <option key={day} value={day}>
              {t(day)}
            </option>
          ))}
        </select>
        <select className={styles.select} value={deliveryWindow} onChange={handleWindowChange} aria-label={t("Zeitfenster")}>
          {DELIVERY_WINDOWS.map((w) => (
            <option key={w} value={w}>
              {t(w)}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.ctaRow}>
        <Button variant="primary" className={styles.ctaButton} onClick={handleSubmit}>
          {added ? t("Hinzugefügt ✓") : t("Abo abschließen")}
        </Button>
        <span className={styles.summary}>
          {formatPriceEUR(selectedSize.priceCents)} {t(selectedRhythm.perUnit)}, {t("Lieferung inklusive")}
        </span>
      </div>
      <p className={styles.firstDelivery}>
        {t("Erste Lieferung {d}, {w}. Danach automatisch, bis du pausierst.")
          .replace("{d}", firstDeliveryDate)
          .replace("{w}", t(deliveryWindow))}
      </p>
    </div>
  );
}
