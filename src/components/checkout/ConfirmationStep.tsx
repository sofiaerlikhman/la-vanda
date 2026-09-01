"use client";

import Button from "@/components/Button";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { useT } from "@/i18n/LanguageProvider";
import type { ConfirmedOrder } from "./types";
import styles from "./checkout.module.css";
import confirmStyles from "./ConfirmationStep.module.css";

export default function ConfirmationStep({ confirmed, onTrack }: { confirmed: ConfirmedOrder; onTrack: () => void }) {
  const { order } = confirmed;
  const t = useT();
  const windowLabel = order.window === "11-14" ? "11–14 Uhr" : order.window === "17-20" ? "17–20 Uhr" : "";

  return (
    <div className={confirmStyles.layout}>
      <div>
        <p className={confirmStyles.eyebrow}>
          <span className={confirmStyles.dot} />
          {t("Bestellung angenommen")}
        </p>
        <h1 className={confirmStyles.title}>
          {order.deliveryType === "lieferung" ? (
            <>
              {t("Unterwegs zu dir")}
              <br />
              {windowLabel && `${t("heute")} ${t(windowLabel)}`}
            </>
          ) : (
            <>
              {t("Bereit zur")}
              <br />
              {t("Abholung")}
            </>
          )}
        </h1>
        <p className={styles.lead} style={{ marginBottom: 0 }}>
          {order.deliveryType === "lieferung"
            ? t("Im Fenster {w} sind wir an der {s}. Zwanzig Minuten vorher bekommst du eine SMS.")
                .replace("{w}", t(windowLabel))
                .replace("{s}", order.address.street)
            : t("Sag im Laden einfach deine Bestellnummer — wir haben deinen Strauß fertig für dich.")}
        </p>

        <div className={confirmStyles.metaGrid}>
          <div>
            <p className={confirmStyles.metaLabel}>{t("Bestellnummer")}</p>
            <p className={confirmStyles.metaValue}>{confirmed.orderNumber}</p>
          </div>
          <div>
            <p className={confirmStyles.metaLabel}>{t("Bestätigung an")}</p>
            <p className={confirmStyles.metaValue}>{order.address.email}</p>
          </div>
        </div>

        <div className={confirmStyles.actionsRow}>
          <Button variant="primary" onClick={onTrack}>
            {t("Lieferung verfolgen")}
          </Button>
          <Button variant="secondary" href="/sortiment">
            {t("Weiter stöbern")}
          </Button>
        </div>

        <p className={confirmStyles.footnote}>
          {t(
            "Etwas vergessen? Bis 14 Uhr kannst du unter 0611 000 000 nachlegen — wir packen es dazu, ohne zweite Lieferpauschale.",
          )}
        </p>
      </div>
      <div className={confirmStyles.imageWrap}>
        <ImagePlaceholder label="Bindeplatz, Strauß in Arbeit, 4:5" className={confirmStyles.image} />
      </div>
    </div>
  );
}
