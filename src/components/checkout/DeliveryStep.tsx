"use client";

import { useMemo, type ChangeEvent } from "react";
import Button from "@/components/Button";
import { useCart } from "@/context/CartContext";
import { getDeliveryDayOptions } from "@/data/delivery";
import { DELIVERY_FEE_CENTS, formatCents, type AddressForm, type DeliveryType, type OrderState } from "./types";
import styles from "./checkout.module.css";
import deliveryStyles from "./DeliveryStep.module.css";

type Props = {
  order: OrderState;
  onChange: (patch: Partial<OrderState>) => void;
  onContinue: () => void;
  onBack: () => void;
};

const ADDRESS_FIELDS: { key: keyof AddressForm; label: string; span?: boolean; type?: string }[] = [
  { key: "firstName", label: "Vorname" },
  { key: "lastName", label: "Nachname" },
  { key: "street", label: "Straße und Nummer", span: true },
  { key: "postalCode", label: "Postleitzahl" },
  { key: "city", label: "Ort" },
  { key: "email", label: "E-Mail", type: "email" },
  { key: "phone", label: "Telefon (für die Ankunfts-SMS)", type: "tel" },
];

export default function DeliveryStep({ order, onChange, onContinue, onBack }: Props) {
  const { items, subtotalCents } = useCart();
  const dayOptions = useMemo(() => getDeliveryDayOptions(new Date()), []);
  const selectedDay = dayOptions.find((d) => d.offsetDays === order.dayOffset) ?? dayOptions[0];

  const isLieferung = order.deliveryType === "lieferung";
  const deliveryFee = isLieferung ? DELIVERY_FEE_CENTS : 0;
  const total = subtotalCents + deliveryFee;

  const addressComplete =
    order.address.firstName.trim() !== "" &&
    order.address.lastName.trim() !== "" &&
    order.address.email.trim() !== "" &&
    (!isLieferung || (order.address.street.trim() !== "" && order.address.postalCode.trim() !== "" && order.address.city.trim() !== ""));

  const canContinue = order.window !== null && addressComplete;

  function updateAddress(key: keyof AddressForm, value: string) {
    onChange({ address: { ...order.address, [key]: value } });
  }

  function selectDeliveryType(type: DeliveryType) {
    onChange({ deliveryType: type, window: null });
  }

  return (
    <div className={styles.layout}>
      <div>
        <h1 className={styles.title}>Wann &amp; wohin</h1>
        <p className={styles.lead}>Erst das Zeitfenster, dann die Adresse. So siehst du sofort, ob heute noch geht.</p>

        <p className={styles.sectionLabel}>Art der Zustellung</p>
        <div className={deliveryStyles.typeRow}>
          <button
            type="button"
            className={isLieferung ? `${deliveryStyles.typeChip} ${deliveryStyles.typeChipActive}` : deliveryStyles.typeChip}
            onClick={() => selectDeliveryType("lieferung")}
          >
            Lieferung
          </button>
          <button
            type="button"
            className={!isLieferung ? `${deliveryStyles.typeChip} ${deliveryStyles.typeChipActive}` : deliveryStyles.typeChip}
            onClick={() => selectDeliveryType("abholung")}
          >
            Abholung im Laden
          </button>
        </div>

        <p className={styles.sectionLabel}>Tag</p>
        <div className={deliveryStyles.dayGrid}>
          {dayOptions.map((day) => (
            <button
              key={day.offsetDays}
              type="button"
              className={
                day.offsetDays === order.dayOffset ? `${deliveryStyles.dayTile} ${deliveryStyles.dayTileActive}` : deliveryStyles.dayTile
              }
              onClick={() => onChange({ dayOffset: day.offsetDays, window: null })}
            >
              <span className={deliveryStyles.dayLabel}>{day.dayLabel}</span>
              <span className={deliveryStyles.dateLabel}>{day.dateLabel}</span>
            </button>
          ))}
        </div>

        <p className={styles.sectionLabel}>Zeitfenster</p>
        <div className={deliveryStyles.windowList}>
          {selectedDay.windows.length === 0 && (
            <p className={deliveryStyles.windowClosed}>An diesem Tag liefern wir nicht — bitte einen anderen Tag wählen.</p>
          )}
          {selectedDay.windows.map((win) => {
            const active = order.window === win.id;
            return (
              <button
                key={win.id}
                type="button"
                className={active ? `${deliveryStyles.windowRow} ${deliveryStyles.windowRowActive}` : deliveryStyles.windowRow}
                onClick={() => win.available && onChange({ window: win.id })}
                disabled={!win.available}
              >
                <span>
                  <span className={deliveryStyles.windowLabel}>{win.label}</span>
                  {win.statusLabel && (
                    <span className={win.available ? deliveryStyles.windowStatus : deliveryStyles.windowStatusClosed}>
                      {win.statusLabel}
                    </span>
                  )}
                </span>
                {active && <span className={deliveryStyles.chosen}>Gewählt</span>}
                {!win.available && <span className={deliveryStyles.windowStatusClosed}>Nicht mehr heute</span>}
              </button>
            );
          })}
        </div>

        <p className={styles.sectionLabel}>{isLieferung ? "Lieferadresse" : "Kontaktdaten"}</p>
        <div className={deliveryStyles.addressGrid}>
          {ADDRESS_FIELDS.filter((f) => isLieferung || !["street", "postalCode", "city"].includes(f.key)).map((field) => (
            <label
              key={field.key}
              className={field.span ? `${styles.field} ${deliveryStyles.fieldFull}` : styles.field}
            >
              <span>{field.label}</span>
              <input
                type={field.type ?? "text"}
                className={styles.input}
                value={order.address[field.key]}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateAddress(field.key, e.target.value)}
              />
            </label>
          ))}
          {isLieferung && (
            <label className={`${styles.field} ${deliveryStyles.fieldFull}`}>
              <span>Wenn niemand öffnet</span>
              <select
                className={styles.select}
                value={order.address.ifNoAnswer}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => updateAddress("ifNoAnswer", e.target.value)}
              >
                <option>Bei Nachbarn abgeben</option>
                <option>Vor der Tür abstellen</option>
                <option>Zurück ins Atelier, wir rufen an</option>
              </select>
            </label>
          )}
        </div>

        <div className={styles.actions}>
          <Button variant="primary" onClick={onContinue} disabled={!canContinue}>
            Weiter zur Karte
          </Button>
          <Button variant="ghost" onClick={onBack}>
            Zurück zum Korb
          </Button>
        </div>
      </div>

      <aside className={styles.aside}>
        <p className={styles.asideEyebrow}>
          {items.length} {items.length === 1 ? "Artikel" : "Artikel"}
        </p>
        <div className={styles.summaryLines}>
          {items.map((item) => (
            <div key={item.id} className={styles.summaryRow}>
              <span>{item.name}</span>
              <span className={styles.summaryRowValue}>{formatCents(item.priceCents * item.quantity)}</span>
            </div>
          ))}
          <div className={styles.summaryRow}>
            <span>{isLieferung ? "Lieferung" : "Abholung"}</span>
            <span className={styles.summaryRowValue}>{isLieferung ? formatCents(deliveryFee) : "Kostenlos"}</span>
          </div>
        </div>
        <div className={styles.totalRow}>
          <span className={styles.totalLabel}>Summe</span>
          <span className={styles.totalValue}>{formatCents(total)}</span>
        </div>
      </aside>
    </div>
  );
}
