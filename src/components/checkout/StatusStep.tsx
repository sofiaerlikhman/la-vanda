"use client";

import Button from "@/components/Button";
import { useT } from "@/i18n/LanguageProvider";
import { formatCents, type ConfirmedOrder } from "./types";
import styles from "./checkout.module.css";
import statusStyles from "./StatusStep.module.css";

function formatPlacedAt(iso: string): string {
  return new Intl.DateTimeFormat("de-DE", {
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Berlin",
  }).format(new Date(iso));
}

const UPCOMING_STEPS = [
  { title: "Gebunden", hint: "Sobald der Strauß fertig ist" },
  { title: "Unterwegs", hint: "Wenn der Fahrer losfährt" },
  { title: "Zugestellt", hint: `Im gewählten Zeitfenster` },
];

/**
 * There's no real order-tracking backend yet, so only the first step
 * ("Bestellung angenommen") gets a real timestamp — everything after it is
 * shown as upcoming/pending rather than a fabricated completion time. Wire
 * the remaining steps up to real driver/workshop events once that exists.
 */
export default function StatusStep({ confirmed, onBackToCart }: { confirmed: ConfirmedOrder; onBackToCart: () => void }) {
  const t = useT();
  return (
    <div className={styles.layout}>
      <div>
        <p className={styles.asideEyebrow} style={{ margin: "0 0 16px" }}>
          {t("Bestellung")} {confirmed.orderNumber}
        </p>
        <h1 className={styles.title}>{t("Bestellstatus")}</h1>

        <div className={statusStyles.timeline}>
          <div className={statusStyles.step}>
            <span className={statusStyles.dotDone} />
            <div>
              <p className={statusStyles.stepTitle}>{t("Bestellung angenommen")}</p>
              <p className={statusStyles.stepMeta}>{formatPlacedAt(confirmed.placedAt)}</p>
            </div>
          </div>
          {UPCOMING_STEPS.map((step) => (
            <div key={step.title} className={statusStyles.step}>
              <span className={statusStyles.dotPending} />
              <div>
                <p className={statusStyles.stepTitlePending}>{t(step.title)}</p>
                <p className={statusStyles.stepMeta}>
                  {t(step.hint)} — {t("noch offen")}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={statusStyles.actionsRow}>
          <a href="tel:+496110000000" className={statusStyles.callLink}>
            {t("Fahrer anrufen")}
          </a>
          <Button variant="ghost" onClick={onBackToCart}>
            {t("Zurück zum Korb")}
          </Button>
        </div>
      </div>

      <aside className={styles.aside}>
        <p className={styles.asideEyebrow}>{t("Inhalt")}</p>
        <div className={styles.summaryLines}>
          {confirmed.items.map((item) => (
            <div key={item.id} className={styles.summaryRow}>
              <span>{t(item.name)}</span>
              <span className={styles.summaryRowValue}>{formatCents(item.priceCents * item.quantity)}</span>
            </div>
          ))}
          <div className={styles.summaryRow}>
            <span>{t("Lieferung")}</span>
            <span className={styles.summaryRowValue}>{formatCents(confirmed.deliveryFeeCents)}</span>
          </div>
        </div>
        <div className={styles.totalRow}>
          <span className={styles.totalLabel}>{t("Summe")}</span>
          <span className={styles.totalValue}>{formatCents(confirmed.totalCents)}</span>
        </div>
        <p className={styles.asideNote}>
          {t("Ohne Konto? Bestellnummer und Postleitzahl genügen, um diesen Status wieder aufzurufen.")}
        </p>
      </aside>
    </div>
  );
}
