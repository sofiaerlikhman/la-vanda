"use client";

import ImagePlaceholder from "@/components/ImagePlaceholder";
import { useT } from "@/i18n/LanguageProvider";
import { SUBSCRIPTION_RHYTHMS, SUBSCRIPTION_SIZE_PRICES_CENTS } from "@/data/subscription";
import { formatPriceEUR } from "@/data/products";
import styles from "./SubscriptionSection.module.css";

/**
 * The subscription, described rather than offered.
 *
 * The shop home page showed rhythm and size as chips with one of each
 * pre-selected — they looked interactive but weren't, and the real
 * configurator lived on /abo. Here they're a plain list of options with
 * no selected state at all, so nothing invites a click that does
 * nothing, and the summary shows the price range instead of the price
 * of a selection nobody made.
 *
 * BACKEND — starting a subscription. Recurring orders, pausing, billing
 * and the delivery-day choice all need the shop backend; there is no
 * "Abo starten" button here because there is nothing to start.
 */
export default function SubscriptionSection() {
  const t = useT();

  const prices = SUBSCRIPTION_SIZE_PRICES_CENTS.map(formatPriceEUR);
  const priceRange = `${prices[0]} – ${prices[prices.length - 1]}`;

  return (
    <section className={styles.section}>
      <div className={styles.grid} data-reveal>
        <div className={styles.imageWrap}>
          <ImagePlaceholder label={t("Abo-Strauß, Hochformat 3:4")} />
        </div>
        <div>
          <p className={styles.eyebrow}>{t("Abo")}</p>
          <h2 className={styles.title}>{t("Jede Woche frisch")}</h2>
          <p className={styles.lead}>
            {t(
              "Du wählst Größe, Rhythmus und Wochentag. Wir binden am Morgen und liefern am Abend. Pausieren geht bis 18 Uhr am Vortag.",
            )}
          </p>

          <dl className={styles.facts}>
            <div className={styles.fact}>
              <dt className={styles.factLabel}>{t("Rhythmus")}</dt>
              <dd className={styles.factValue}>{SUBSCRIPTION_RHYTHMS.map((r) => t(r)).join(" · ")}</dd>
            </div>
            <div className={styles.fact}>
              <dt className={styles.factLabel}>{t("Größe")}</dt>
              <dd className={styles.factValue}>{prices.join(" · ")}</dd>
            </div>
          </dl>

          <p className={styles.summary}>
            {priceRange} {t("je Lieferung, Versand inklusive")}
          </p>
        </div>
      </div>
    </section>
  );
}
