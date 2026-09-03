"use client";

import ImagePlaceholder from "@/components/ImagePlaceholder";
import { useT } from "@/i18n/LanguageProvider";
import { formatPriceEUR, type ShowcaseBouquet } from "@/data/products";
import styles from "./BouquetShowcase.module.css";

/**
 * The shop window: a curated handful of bouquets, shown but not sold.
 *
 * Deliberately NOT a ProductCard. The shop card was a <Link> to a detail
 * page with an add-to-cart box, and it rendered two pieces of live state
 * — a sold-out overlay and a per-product delivery window. None of that
 * survives without a backend, and a card that looks clickable but isn't
 * is worse than a plain tile. What's left is the honest part: what it's
 * called, what it looks like, what it costs.
 *
 * BACKEND — every tile.
 *   • Which bouquets appear (getShowcaseBouquets is a frozen pick).
 *   • Whether any of them are actually available today.
 *   • Prices, which are build-time constants here.
 *   • The photos (see ImagePlaceholder).
 */
export default function BouquetShowcase({ products }: { products: ShowcaseBouquet[] }) {
  const t = useT();

  return (
    <section id="blumen" className={styles.section}>
      <div className={styles.head} data-reveal>
        <p className={styles.eyebrow}>{t("Blumen & Pflanzen")}</p>
        <h2 className={styles.title}>{t("Was wir binden")}</h2>
        <p className={styles.lead}>{t("Eine Auswahl aus dem Laden")}</p>
      </div>

      <div className={styles.grid} data-reveal-group>
        {products.map((product) => (
          <article key={product.id} className={styles.card}>
            <div className={styles.imageWrap}>
              <ImagePlaceholder label={t(product.image)} />
            </div>
            <div className={styles.body}>
              <h3 className={styles.name}>{t(product.name)}</h3>
              <p className={styles.price}>{formatPriceEUR(product.priceCents)}</p>
            </div>
          </article>
        ))}
      </div>

      <p className={styles.note}>
        {t("Preise als Orientierung. Was im Laden steht, wechselt mit der Saison und dem Einkauf.")}
      </p>
    </section>
  );
}
