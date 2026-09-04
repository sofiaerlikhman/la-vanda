"use client";

import { useState, type ChangeEvent } from "react";
import Button from "@/components/Button";
import { useCart } from "@/context/CartContext";
import { useT } from "@/i18n/LanguageProvider";
import { formatPriceEUR } from "@/data/products";
import styles from "./VoucherPurchaseForm.module.css";

const PRESET_AMOUNTS_EUROS = [25, 50, 75, 100];
const MIN_CUSTOM_EUROS = 15;
const MAX_CUSTOM_EUROS = 500;

type DeliveryFormat = "pdf" | "card" | "flower";

type DeliveryOption = {
  id: DeliveryFormat;
  title: string;
  note: string;
  extraCents: number;
  priceLabel: string;
  summaryLabel: string;
};

const DELIVERY_OPTIONS: DeliveryOption[] = [
  {
    id: "pdf",
    title: "Als PDF per E-Mail",
    note: "Sofort nach Zahlung, zum Ausdrucken",
    extraCents: 0,
    priceLabel: "0,00 €",
    summaryLabel: "als PDF",
  },
  {
    id: "card",
    title: "Karte im Umschlag",
    note: "Von Hand beschrieben, per Post oder zum Abholen",
    extraCents: 250,
    priceLabel: "2,50 €",
    summaryLabel: "als Karte im Umschlag",
  },
  {
    id: "flower",
    title: "Mit einem Strauß geliefert",
    note: "Gutschein und Blumen in einem Termin",
    // The handoff prices this "ab 28,00 €" (starting from) — the exact fee
    // depends on which bouquet is picked, which this simple page doesn't
    // offer a chooser for. We charge the flat starting price shown, same
    // simplification the original design's own total calculator makes.
    extraCents: 2800,
    priceLabel: "ab 28,00 €",
    summaryLabel: "mit Strauß geliefert",
  },
];

/**
 * Amount + delivery-format picker for the Gutschein page. "In den Korb"
 * adds a real line to the client-side cart via useCart() (see
 * src/context/CartContext.tsx and BuyBox.tsx for the same pattern on the
 * product page) — it persists to localStorage and shows up at /checkout.
 *
 * There is no backend yet: actually issuing a redeemable voucher code (and
 * emailing/printing it) needs a real order + fulfillment system. This only
 * gets the purchase into the cart, same honesty gap as the rest of the
 * checkout flow (see CartContext's doc comment).
 */
export default function VoucherPurchaseForm() {
  const { addItem } = useCart();
  const t = useT();
  const [preset, setPreset] = useState<number | null>(50);
  const [customInput, setCustomInput] = useState("");
  const [delivery, setDelivery] = useState<DeliveryFormat>("pdf");
  const [greeting, setGreeting] = useState("");
  const [added, setAdded] = useState(false);

  const trimmedCustom = customInput.trim();
  const customIsSet = trimmedCustom !== "";
  const parsedCustom = customIsSet ? Number(trimmedCustom.replace(",", ".")) : null;
  const customValid =
    parsedCustom !== null &&
    Number.isFinite(parsedCustom) &&
    parsedCustom >= MIN_CUSTOM_EUROS &&
    parsedCustom <= MAX_CUSTOM_EUROS;

  const amountEuros = customIsSet ? (customValid ? (parsedCustom as number) : null) : preset;
  const canAdd = amountEuros !== null;
  const amountCents = amountEuros !== null ? Math.round(amountEuros * 100) : 0;

  const deliveryOption = DELIVERY_OPTIONS.find((d) => d.id === delivery) ?? DELIVERY_OPTIONS[0];
  const totalCents = amountCents + deliveryOption.extraCents;

  function handlePickPreset(value: number) {
    setPreset(value);
    setCustomInput("");
  }

  function handleCustomChange(event: ChangeEvent<HTMLInputElement>) {
    setCustomInput(event.target.value);
    setPreset(null);
  }

  function handleGreetingChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setGreeting(event.target.value);
  }

  function handleAddToCart() {
    if (!canAdd) return;
    addItem({
      id: `product:gutschein:${amountCents}-${delivery}`,
      kind: "product",
      name: `${t("Gutschein")} ${formatPriceEUR(amountCents)}`,
      priceCents: totalCents,
      image: "Gutscheinkarte auf Werkbank, 4:3",
      meta: `${t(deliveryOption.title)}${greeting.trim() ? t(" · mit Grußtext") : ""}`,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div>
      <p className={styles.label}>{t("Betrag")}</p>
      <div className={styles.chipRow} role="group" aria-label={t("Betrag wählen")}>
        {PRESET_AMOUNTS_EUROS.map((value) => {
          const active = !customIsSet && preset === value;
          return (
            <button
              key={value}
              type="button"
              className={active ? `${styles.chip} ${styles.chipActive}` : styles.chip}
              onClick={() => handlePickPreset(value)}
              aria-pressed={active}
            >
              {formatPriceEUR(value * 100)}
            </button>
          );
        })}
      </div>

      <label className={styles.customField}>
        <span>
          {t("Eigener Betrag, {min} bis {max} €")
            .replace("{min}", String(MIN_CUSTOM_EUROS))
            .replace("{max}", String(MAX_CUSTOM_EUROS))}
        </span>
        <input
          type="text"
          inputMode="decimal"
          placeholder={t("z. B. 65")}
          value={customInput}
          onChange={handleCustomChange}
          className={styles.customInput}
        />
        {customIsSet && !customValid && (
          <span className={styles.customError}>
            {t("Bitte einen Betrag zwischen {min} und {max} € eingeben.")
              .replace("{min}", String(MIN_CUSTOM_EUROS))
              .replace("{max}", String(MAX_CUSTOM_EUROS))}
          </span>
        )}
      </label>

      <p className={styles.label} style={{ marginTop: 32 }}>
        {t("Zustellung")}
      </p>
      <div className={styles.deliveryList} role="group" aria-label={t("Zustellung wählen")}>
        {DELIVERY_OPTIONS.map((option) => {
          const active = delivery === option.id;
          return (
            <button
              key={option.id}
              type="button"
              className={active ? `${styles.deliveryRow} ${styles.deliveryRowActive}` : styles.deliveryRow}
              onClick={() => setDelivery(option.id)}
              aria-pressed={active}
            >
              <span className={styles.deliveryText}>
                <span className={styles.deliveryTitle}>{t(option.title)}</span>
                <span className={styles.deliveryNote}>{t(option.note)}</span>
              </span>
              <span className={styles.deliveryPrice}>{t(option.priceLabel)}</span>
            </button>
          );
        })}
      </div>

      <label className={styles.greetingField}>
        <span>{t("Grußtext, optional")}</span>
        <textarea rows={3} value={greeting} onChange={handleGreetingChange} className={styles.greetingInput} />
      </label>

      <div className={styles.actions}>
        <Button variant="primary" className={styles.submitButton} onClick={handleAddToCart} disabled={!canAdd}>
          {added ? t("Hinzugefügt ✓") : t("In den Korb")}
        </Button>
        <span className={styles.summary}>
          {canAdd ? `${formatPriceEUR(totalCents)} ${t(deliveryOption.summaryLabel)}` : t("Betrag eingeben")}
        </span>
      </div>
    </div>
  );
}
