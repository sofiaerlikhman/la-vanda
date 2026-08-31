"use client";

import Button from "@/components/Button";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import type { ConfirmedOrder } from "./types";
import styles from "./checkout.module.css";
import confirmStyles from "./ConfirmationStep.module.css";

export default function ConfirmationStep({ confirmed, onTrack }: { confirmed: ConfirmedOrder; onTrack: () => void }) {
  const { order } = confirmed;
  const windowLabel = order.window === "11-14" ? "11–14 Uhr" : order.window === "17-20" ? "17–20 Uhr" : "";

  return (
    <div className={confirmStyles.layout}>
      <div>
        <p className={confirmStyles.eyebrow}>
          <span className={confirmStyles.dot} />
          Bestellung angenommen
        </p>
        <h1 className={confirmStyles.title}>
          {order.deliveryType === "lieferung" ? (
            <>
              Unterwegs zu dir
              <br />
              {windowLabel && `heute ${windowLabel}`}
            </>
          ) : (
            <>
              Bereit zur
              <br />
              Abholung
            </>
          )}
        </h1>
        <p className={styles.lead} style={{ marginBottom: 0 }}>
          {order.deliveryType === "lieferung"
            ? `Im Fenster ${windowLabel} sind wir an der ${order.address.street}. Zwanzig Minuten vorher bekommst du eine SMS.`
            : "Sag im Laden einfach deine Bestellnummer — wir haben deinen Strauß fertig für dich."}
        </p>

        <div className={confirmStyles.metaGrid}>
          <div>
            <p className={confirmStyles.metaLabel}>Bestellnummer</p>
            <p className={confirmStyles.metaValue}>{confirmed.orderNumber}</p>
          </div>
          <div>
            <p className={confirmStyles.metaLabel}>Bestätigung an</p>
            <p className={confirmStyles.metaValue}>{order.address.email}</p>
          </div>
        </div>

        <div className={confirmStyles.actionsRow}>
          <Button variant="primary" onClick={onTrack}>
            Lieferung verfolgen
          </Button>
          <Button variant="secondary" href="/sortiment">
            Weiter stöbern
          </Button>
        </div>

        <p className={confirmStyles.footnote}>
          Etwas vergessen? Bis 14 Uhr kannst du unter 0611 000 000 nachlegen — wir packen es dazu, ohne zweite
          Lieferpauschale.
        </p>
      </div>
      <div className={confirmStyles.imageWrap}>
        <ImagePlaceholder label="Bindeplatz, Strauß in Arbeit, 4:5" className={confirmStyles.image} />
      </div>
    </div>
  );
}
