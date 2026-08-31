"use client";

import { useMemo, type ChangeEvent } from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Button from "@/components/Button";
import { useCart } from "@/context/CartContext";
import { getDeliveryDayOptions } from "@/data/delivery";
import { DELIVERY_FEE_CENTS, formatCents, type OrderState } from "./types";
import styles from "./checkout.module.css";
import cardStyles from "./CardStep.module.css";

const MOTIFS = [
  { id: "ohne", label: "Ohne Motiv", image: "Karte unifarben" },
  { id: "bluete", label: "Blüte", image: "Karte Blüte" },
  { id: "geburtstag", label: "Geburtstag", image: "Karte Geburtstag" },
  { id: "beileid", label: "Beileid", image: "Karte Trauer" },
];

const MESSAGE_LIMIT = 120;

const CARD_EXTRAS: { id: string; name: string; priceCents: number; defaultChecked: boolean }[] = [
  { id: "extra-handschrift", name: "Handgeschriebene Karte", priceCents: 300, defaultChecked: true },
  { id: "extra-frischmittel", name: "Frischhaltemittel", priceCents: 200, defaultChecked: false },
  { id: "extra-schokolade", name: "Tafel Schokolade", priceCents: 650, defaultChecked: false },
];

type Props = {
  order: OrderState;
  onChange: (patch: Partial<OrderState>) => void;
  onContinue: () => void;
  onBack: () => void;
};

export default function CardStep({ order, onChange, onContinue, onBack }: Props) {
  const { items, addItem, removeItem, hasItem, subtotalCents } = useCart();
  const dayOptions = useMemo(() => getDeliveryDayOptions(new Date()), []);
  const selectedDay = dayOptions.find((d) => d.offsetDays === order.dayOffset);
  const windowLabel = selectedDay?.windows.find((w) => w.id === order.window)?.label;
  const deliveryFee = order.deliveryType === "lieferung" ? DELIVERY_FEE_CENTS : 0;

  function toggleExtra(extra: (typeof CARD_EXTRAS)[number], checked: boolean) {
    if (checked) {
      addItem({ id: `extra:${extra.id}`, kind: "extra", name: extra.name, priceCents: extra.priceCents, image: extra.name });
    } else {
      removeItem(`extra:${extra.id}`);
    }
  }

  return (
    <div className={styles.layout}>
      <div>
        <h1 className={styles.title}>Karte &amp; Gruß</h1>
        <p className={styles.lead}>Wir schreiben von Hand. Bis {MESSAGE_LIMIT} Zeichen passen auf die Karte.</p>

        <p className={styles.sectionLabel}>Kartenmotiv</p>
        <div className={cardStyles.motifGrid}>
          {MOTIFS.map((motif) => (
            <button
              key={motif.id}
              type="button"
              className={cardStyles.motifCard}
              onClick={() => onChange({ card: { ...order.card, motif: motif.id } })}
            >
              <div className={order.card.motif === motif.id ? `${cardStyles.motifImage} ${cardStyles.motifImageActive}` : cardStyles.motifImage}>
                <ImagePlaceholder label={motif.image} className={cardStyles.motifImageInner} />
              </div>
              <span className={cardStyles.motifLabel}>{motif.label}</span>
            </button>
          ))}
        </div>

        <label className={cardStyles.messageField}>
          <span className={styles.sectionLabel} style={{ marginBottom: 0 }}>
            Dein Text
          </span>
          <textarea
            rows={4}
            className={styles.textarea}
            maxLength={MESSAGE_LIMIT}
            value={order.card.message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange({ card: { ...order.card, message: e.target.value } })}
          />
          <span className={cardStyles.counter}>
            {order.card.message.length} von {MESSAGE_LIMIT} Zeichen
          </span>
        </label>

        <p className={styles.sectionLabel} style={{ marginTop: 40 }}>
          Anonym verschicken
        </p>
        <div className={cardStyles.anonymousBox}>
          <label className={cardStyles.checkboxRow}>
            <input
              type="checkbox"
              checked={order.card.anonymous}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onChange({ card: { ...order.card, anonymous: e.target.checked } })}
            />
            <span>
              <span className={cardStyles.checkboxTitle}>Ohne meinen Namen zustellen</span>
              <span className={cardStyles.checkboxHint}>
                Karte und Lieferschein bleiben ohne Absender. Für Rückfragen behalten wir deine Daten, geben sie aber nicht
                weiter.
              </span>
            </span>
          </label>
        </div>

        <p className={styles.sectionLabel} style={{ marginTop: 40 }}>
          Extras
        </p>
        <div className={cardStyles.extrasList}>
          {CARD_EXTRAS.map((extra) => {
            const checked = hasItem(`extra:${extra.id}`);
            return (
              <label key={extra.id} className={cardStyles.extraRow}>
                <span className={cardStyles.checkboxRow} style={{ margin: 0 }}>
                  <input type="checkbox" checked={checked} onChange={(e: ChangeEvent<HTMLInputElement>) => toggleExtra(extra, e.target.checked)} />
                  <span>{extra.name}</span>
                </span>
                <span className={cardStyles.extraPrice}>{formatCents(extra.priceCents)}</span>
              </label>
            );
          })}
        </div>

        <div className={styles.actions}>
          <Button variant="primary" onClick={onContinue}>
            Weiter zur Zahlung
          </Button>
          <Button variant="ghost" onClick={onBack}>
            Zurück
          </Button>
        </div>
      </div>

      <aside className={styles.aside}>
        <p className={styles.asideEyebrow}>Lieferung steht</p>
        <p className={cardStyles.deliverySummary}>
          {selectedDay?.dayLabel ?? "—"}
          {windowLabel ? `, ${windowLabel}` : ""}
        </p>
        <p className={cardStyles.deliveryAddress}>
          {order.deliveryType === "lieferung"
            ? `${order.address.street}, ${order.address.postalCode} ${order.address.city}`
            : "Abholung: Marktstraße 12, 65183 Wiesbaden"}
        </p>
        <div className={styles.summaryLines} style={{ borderTop: "1px solid var(--lv-line-str)", paddingTop: 20 }}>
          {items.map((item) => (
            <div key={item.id} className={styles.summaryRow}>
              <span>{item.name}</span>
              <span className={styles.summaryRowValue}>{formatCents(item.priceCents * item.quantity)}</span>
            </div>
          ))}
          <div className={styles.summaryRow}>
            <span>{order.deliveryType === "lieferung" ? "Lieferung" : "Abholung"}</span>
            <span className={styles.summaryRowValue}>{order.deliveryType === "lieferung" ? formatCents(deliveryFee) : "Kostenlos"}</span>
          </div>
        </div>
        <div className={styles.totalRow}>
          <span className={styles.totalLabel}>Summe</span>
          <span className={styles.totalValue}>{formatCents(subtotalCents + deliveryFee)}</span>
        </div>
      </aside>
    </div>
  );
}
