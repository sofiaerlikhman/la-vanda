"use client";

import { useMemo, useState, type ChangeEvent } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import { useCart } from "@/context/CartContext";
import { useT } from "@/i18n/LanguageProvider";
import { getDeliveryDayOptions } from "@/data/delivery";
import { applyVoucher } from "@/data/vouchers";
import { DELIVERY_FEE_CENTS, formatCents, PAYMENT_LABELS, type OrderState } from "./types";
import styles from "./checkout.module.css";
import reviewStyles from "./ReviewStep.module.css";

const MOTIF_LABELS: Record<string, string> = {
  ohne: "Ohne Motiv",
  bluete: "Blüte",
  geburtstag: "Geburtstag",
  beileid: "Beileid",
};

type Props = {
  order: OrderState;
  onChange: (patch: Partial<OrderState>) => void;
  onEditStep: (step: number) => void;
  onSubmit: () => void;
  onBack: () => void;
};

export default function ReviewStep({ order, onChange, onEditStep, onSubmit, onBack }: Props) {
  const { items, subtotalCents } = useCart();
  const t = useT();
  const [submitting, setSubmitting] = useState(false);
  const dayOptions = useMemo(() => getDeliveryDayOptions(new Date()), []);
  const selectedDay = dayOptions.find((d) => d.offsetDays === order.dayOffset);
  const selectedWindow = selectedDay?.windows.find((w) => w.id === order.window);
  const stillAvailable = order.deliveryType === "abholung" || (selectedWindow?.available ?? false);

  const deliveryFee = order.deliveryType === "lieferung" ? DELIVERY_FEE_CENTS : 0;
  const discount = order.appliedVoucher ? applyVoucher(order.appliedVoucher, subtotalCents, deliveryFee) : 0;
  const total = Math.max(0, subtotalCents + deliveryFee - discount);

  async function handleSubmit() {
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 400)); // brief pause so "Wird gesendet…" is visible — no real backend call yet
    setSubmitting(false);
    onSubmit();
  }

  return (
    <div className={styles.layout}>
      <div>
        <h1 className={styles.title} style={{ marginBottom: 40 }}>
          {t("Bitte prüfen")}
        </h1>

        <div className={reviewStyles.rows}>
          <div className={reviewStyles.row}>
            <p className={reviewStyles.rowLabel}>{t("Lieferung")}</p>
            <div>
              <p className={reviewStyles.rowPrimary}>
                {selectedDay?.dayLabel ? t(selectedDay.dayLabel) : ""}, {selectedDay?.dateLabel}
                {selectedWindow ? `, ${t(selectedWindow.label)}` : ""}
              </p>
              <p className={reviewStyles.rowSecondary}>
                {order.deliveryType === "lieferung"
                  ? `${order.address.firstName} ${order.address.lastName}, ${order.address.street}, ${order.address.postalCode} ${order.address.city}`
                  : t("Abholung im Laden, Marktstraße 12, 65183 Wiesbaden")}
              </p>
              {order.deliveryType === "lieferung" && (
                <p className={reviewStyles.rowMuted}>
                  {t("Wenn niemand öffnet")}: {t(order.address.ifNoAnswer)}
                </p>
              )}
            </div>
            <button type="button" className={reviewStyles.changeButton} onClick={() => onEditStep(1)}>
              {t("Ändern")}
            </button>
          </div>

          <div className={reviewStyles.row}>
            <p className={reviewStyles.rowLabel}>{t("Karte")}</p>
            <div>
              <p className={reviewStyles.rowPrimary}>
                {t("Motiv")} „{t(MOTIF_LABELS[order.card.motif] ?? "Ohne Motiv")}“{order.card.anonymous ? t(", anonym") : ""}
              </p>
              <p className={reviewStyles.rowSecondary}>{order.card.message ? `„${order.card.message}“` : t("Ohne Grußtext")}</p>
            </div>
            <button type="button" className={reviewStyles.changeButton} onClick={() => onEditStep(2)}>
              {t("Ändern")}
            </button>
          </div>

          <div className={reviewStyles.row}>
            <p className={reviewStyles.rowLabel}>{t("Zahlung")}</p>
            <div>
              <p className={reviewStyles.rowPrimary}>{t(PAYMENT_LABELS[order.payment])}</p>
              <p className={reviewStyles.rowSecondary}>
                {t(order.billingSameAsDelivery ? "Rechnungsadresse wie Lieferadresse" : "Abweichende Rechnungsadresse")}
              </p>
            </div>
            <button type="button" className={reviewStyles.changeButton} onClick={() => onEditStep(3)}>
              {t("Ändern")}
            </button>
          </div>

          <div className={reviewStyles.row}>
            <p className={reviewStyles.rowLabel}>{t("Artikel")}</p>
            <div>
              {items.map((item) => (
                <p key={item.id} className={reviewStyles.rowPrimary} style={{ marginTop: 0 }}>
                  {item.quantity} × {t(item.name)}
                  {item.meta ? `, ${t(item.meta)}` : ""} — {formatCents(item.priceCents * item.quantity)}
                </p>
              ))}
            </div>
            <button type="button" className={reviewStyles.changeButton} onClick={() => onEditStep(0)}>
              {t("Ändern")}
            </button>
          </div>
        </div>

        <label className={reviewStyles.agbRow}>
          <input
            type="checkbox"
            checked={order.agbAccepted}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange({ agbAccepted: e.target.checked })}
          />
          <span>
            {t("Ich habe die")} <Link href="/agb">{t("AGB")}</Link> {t("und den")}{" "}
            <Link href="/widerruf">{t("Widerruf")}</Link>
            {t(" gelesen. Bei frisch gebundener Ware entfällt das Widerrufsrecht ab Bindebeginn.")}
          </span>
        </label>

        {!stillAvailable && (
          <p className={reviewStyles.warning}>
            {t("Das gewählte Zeitfenster ist inzwischen abgelaufen — bitte in Schritt 1 ein neues wählen.")}
          </p>
        )}

        <div className={styles.actions}>
          <Button variant="primary" onClick={handleSubmit} disabled={!order.agbAccepted || !stillAvailable || submitting}>
            {submitting ? t("Wird gesendet…") : t("Kostenpflichtig bestellen")}
          </Button>
          <Button variant="ghost" onClick={onBack}>
            {t("Zurück")}
          </Button>
        </div>
      </div>

      <aside className={styles.aside}>
        <p className={styles.asideEyebrow}>{t("Summe")}</p>
        <p className={reviewStyles.bigTotal}>{formatCents(total)}</p>
        <p className={styles.asideNote}>
          {t("Enthält")} {order.deliveryType === "lieferung" ? formatCents(deliveryFee) : t("keine")}{" "}
          {t("Lieferung und 7 % USt. auf Blumen.")}
        </p>
        <div className={reviewStyles.statusRow}>
          <span className={stillAvailable ? reviewStyles.dotOk : reviewStyles.dotWarn} />
          <span className={stillAvailable ? reviewStyles.statusOk : reviewStyles.statusWarn}>
            {t(stillAvailable ? "Fenster noch frei" : "Fenster abgelaufen")}
          </span>
        </div>
      </aside>
    </div>
  );
}
