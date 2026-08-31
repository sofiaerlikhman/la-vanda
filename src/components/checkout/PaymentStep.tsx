"use client";

import { useState, type ChangeEvent } from "react";
import Button from "@/components/Button";
import { useCart } from "@/context/CartContext";
import { redeemVoucher, applyVoucher } from "@/data/vouchers";
import { DELIVERY_FEE_CENTS, formatCents, PAYMENT_LABELS, type OrderState, type PaymentMethod } from "./types";
import styles from "./checkout.module.css";
import paymentStyles from "./PaymentStep.module.css";

const METHODS: PaymentMethod[] = ["rechnung", "sepa", "kreditkarte", "paypal", "abholung"];

type Props = {
  order: OrderState;
  onChange: (patch: Partial<OrderState>) => void;
  onContinue: () => void;
  onBack: () => void;
};

export default function PaymentStep({ order, onChange, onContinue, onBack }: Props) {
  const { items, subtotalCents } = useCart();
  const [checking, setChecking] = useState(false);
  const deliveryFee = order.deliveryType === "lieferung" ? DELIVERY_FEE_CENTS : 0;
  const discount = order.appliedVoucher ? applyVoucher(order.appliedVoucher, subtotalCents, deliveryFee) : 0;
  const total = Math.max(0, subtotalCents + deliveryFee - discount);

  async function handleRedeem() {
    if (!order.voucherCode.trim()) return;
    setChecking(true);
    const voucher = await redeemVoucher(order.voucherCode);
    setChecking(false);
    onChange({ appliedVoucher: voucher, voucherError: voucher ? null : "Code ungültig oder abgelaufen." });
  }

  return (
    <div className={styles.layout}>
      <div>
        <h1 className={styles.title}>Zahlung</h1>
        <p className={styles.lead}>Abgebucht wird erst, wenn der Strauß gebunden ist.</p>

        <div className={paymentStyles.methodList}>
          {METHODS.map((method) => (
            <label
              key={method}
              className={order.payment === method ? `${paymentStyles.methodRow} ${paymentStyles.methodRowActive}` : paymentStyles.methodRow}
            >
              <input type="radio" name="pay" checked={order.payment === method} onChange={() => onChange({ payment: method })} />
              <span className={paymentStyles.methodLabel}>{PAYMENT_LABELS[method]}</span>
              {method === "rechnung" && <span className={paymentStyles.recommended}>Empfohlen</span>}
            </label>
          ))}
        </div>

        <p className={styles.sectionLabel} style={{ marginTop: 40 }}>
          Rechnungsadresse
        </p>
        <label className={paymentStyles.checkboxRow}>
          <input
            type="checkbox"
            checked={order.billingSameAsDelivery}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange({ billingSameAsDelivery: e.target.checked })}
          />
          Wie die Lieferadresse
        </label>

        <label className={paymentStyles.voucherField}>
          <span>Gutschein- oder Rabattcode</span>
          <span className={paymentStyles.voucherRow}>
            <input
              type="text"
              placeholder="Code eingeben"
              className={styles.input}
              style={{ flex: 1 }}
              value={order.voucherCode}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onChange({ voucherCode: e.target.value, voucherError: null })}
            />
            <Button variant="secondary" onClick={handleRedeem} disabled={checking}>
              Einlösen
            </Button>
          </span>
          {order.appliedVoucher && (
            <span className={paymentStyles.voucherOk}>„{order.appliedVoucher.code}“ eingelöst — {order.appliedVoucher.description}.</span>
          )}
          {order.voucherError && <span className={paymentStyles.voucherError}>{order.voucherError}</span>}
        </label>

        <div className={styles.actions}>
          <Button variant="primary" onClick={onContinue}>
            Bestellung prüfen
          </Button>
          <Button variant="ghost" onClick={onBack}>
            Zurück
          </Button>
        </div>
      </div>

      <aside className={styles.aside}>
        <p className={styles.asideEyebrow}>Zusammenfassung</p>
        <div className={styles.summaryLines}>
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
          {discount > 0 && (
            <div className={styles.summaryRow}>
              <span>Gutschein</span>
              <span className={styles.summaryRowValue}>−{formatCents(discount)}</span>
            </div>
          )}
        </div>
        <div className={styles.totalRow}>
          <span className={styles.totalLabel}>Summe</span>
          <span className={styles.totalValue}>{formatCents(total)}</span>
        </div>
        <p className={styles.asideNote}>Enthält 7 % USt. auf Blumen, 19 % auf Vasen und Zubehör.</p>
      </aside>
    </div>
  );
}
