"use client";

import { useEffect, useMemo, useState, type ChangeEvent, type MouseEvent } from "react";
import { useSearchParams } from "next/navigation";
import ProductGrid from "@/components/ProductGrid";
import Button from "@/components/Button";
import { useT } from "@/i18n/LanguageProvider";
import type { Product } from "@/data/products";
import styles from "./SortimentBrowser.module.css";

type SortKey = "empfehlung" | "preis-auf" | "preis-ab";
type PriceCap = 3000 | 5000 | 8000 | null;

const PAGE_SIZE = 8;

const SORT_LABELS: Record<SortKey, string> = {
  empfehlung: "Empfehlung",
  "preis-auf": "Preis aufsteigend",
  "preis-ab": "Preis absteigend",
};

const PRICE_LABELS: { value: PriceCap; label: string }[] = [
  { value: 3000, label: "bis 30 €" },
  { value: 5000, label: "bis 50 €" },
  { value: 8000, label: "bis 80 €" },
];

/**
 * The interactive half of the Sortiment page: filter drawer, active-filter
 * chips, sorting, and "load more" paging over the products handed down from
 * the server component. This filters/sorts client-side rather than calling
 * a real search API — reasonable for a catalog this size, but the first
 * thing to swap for a real backend query once the catalog grows or needs
 * to reflect live stock across many categories.
 */
export default function SortimentBrowser({ products }: { products: Product[] }) {
  const t = useT();
  const searchParams = useSearchParams();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sortBy, setSortBy] = useState<SortKey>("empfehlung");
  const [deliveryToday, setDeliveryToday] = useState(false);
  const [deliveryTomorrow, setDeliveryTomorrow] = useState(false);
  const [priceCap, setPriceCap] = useState<PriceCap>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [query, setQuery] = useState(() => searchParams.get("q") ?? "");

  // The mobile search overlay (and, now, the desktop header's search icon —
  // both open the same overlay) route here with ?q=… — pick up a new term
  // if the user searches again while already on this page.
  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    let list = products.filter((p) => {
      if (priceCap !== null && p.priceCents > priceCap) return false;
      if (deliveryToday && p.deliveryUrgent) return false;
      if (deliveryTomorrow && !p.deliveryUrgent) return false;
      if (term && !p.name.toLowerCase().includes(term) && !p.description.toLowerCase().includes(term)) return false;
      return true;
    });

    if (sortBy === "preis-auf") {
      list = [...list].sort((a, b) => a.priceCents - b.priceCents);
    } else if (sortBy === "preis-ab") {
      list = [...list].sort((a, b) => b.priceCents - a.priceCents);
    }

    return list;
  }, [products, sortBy, deliveryToday, deliveryTomorrow, priceCap, query]);

  const visible = filtered.slice(0, visibleCount);
  const remaining = filtered.length - visible.length;

  function applyAndClose() {
    setVisibleCount(PAGE_SIZE);
    setDrawerOpen(false);
  }

  function resetFilters() {
    setSortBy("empfehlung");
    setDeliveryToday(false);
    setDeliveryTomorrow(false);
    setPriceCap(null);
    setQuery("");
    setVisibleCount(PAGE_SIZE);
  }

  const activeChips: { key: string; label: string; onRemove: () => void }[] = [];
  if (query.trim()) activeChips.push({ key: "query", label: `„${query.trim()}"`, onRemove: () => setQuery("") });
  if (deliveryToday) activeChips.push({ key: "today", label: t("Heute lieferbar"), onRemove: () => setDeliveryToday(false) });
  if (deliveryTomorrow)
    activeChips.push({ key: "tomorrow", label: t("Morgen lieferbar"), onRemove: () => setDeliveryTomorrow(false) });
  if (priceCap !== null) {
    const label = PRICE_LABELS.find((p) => p.value === priceCap)?.label ?? "";
    activeChips.push({ key: "price", label: t(label), onRemove: () => setPriceCap(null) });
  }

  // Count noun uses German singular/plural; the {n} template lets Ukrainian
  // control word order and its own plural form.
  const countLabel = (n: number) => t(n === 1 ? "{n} Strauß" : "{n} Sträuße").replace("{n}", String(n));

  return (
    <div>
      <div className={styles.filterBar}>
        <button type="button" className={styles.filterButton} onClick={() => setDrawerOpen(true)}>
          {t("Filter")}
        </button>
        {activeChips.map((chip) => (
          <button key={chip.key} type="button" className={styles.chip} onClick={chip.onRemove}>
            {chip.label} <span aria-hidden="true">✕</span>
          </button>
        ))}
        <span className={styles.count}>{countLabel(filtered.length)}</span>
        <button type="button" className={styles.sortButton} onClick={() => setDrawerOpen(true)}>
          {t("Sortierung")}: {t(SORT_LABELS[sortBy])}
        </button>
      </div>

      {visible.length > 0 ? (
        <ProductGrid products={visible} />
      ) : (
        <p className={styles.empty}>
          {query.trim()
            ? t("Nichts gefunden für {q}. Filter zurücksetzen und noch einmal versuchen.").replace(
                "{q}",
                `„${query.trim()}"`,
              )
            : t("Keine Sträuße für diese Filter. Filter zurücksetzen und noch einmal versuchen.")}
        </p>
      )}

      {remaining > 0 && (
        <div className={styles.loadMoreWrap}>
          <Button
            variant="secondary"
            onClick={() => setVisibleCount((v) => Math.min(v + PAGE_SIZE, filtered.length))}
          >
            {t("Weitere {n} laden").replace("{n}", String(Math.min(remaining, PAGE_SIZE)))}
          </Button>
        </div>
      )}

      {drawerOpen && (
        <div className={styles.overlay} role="presentation" onClick={() => setDrawerOpen(false)}>
          <aside
            className={styles.drawer}
            role="dialog"
            aria-label={t("Filter & Sortierung")}
            onClick={(e: MouseEvent) => e.stopPropagation()}
          >
            <div className={styles.drawerHead}>
              <p className={styles.drawerTitle}>{t("Filter & Sortierung")}</p>
              <button type="button" className={styles.closeButton} onClick={() => setDrawerOpen(false)} aria-label={t("Schließen")}>
                ✕
              </button>
            </div>

            <div className={styles.drawerSection}>
              <p className={styles.sectionLabel}>{t("Sortierung")}</p>
              {(Object.keys(SORT_LABELS) as SortKey[]).map((key) => (
                <label key={key} className={styles.radioRow}>
                  <input type="radio" name="sort" checked={sortBy === key} onChange={() => setSortBy(key)} />
                  {t(SORT_LABELS[key])}
                </label>
              ))}
            </div>

            <div className={styles.drawerSection}>
              <p className={styles.sectionLabel}>{t("Preis")}</p>
              <label className={styles.radioRow}>
                <input type="radio" name="price" checked={priceCap === null} onChange={() => setPriceCap(null)} />
                {t("Alle Preise")}
              </label>
              {PRICE_LABELS.map((p) => (
                <label key={p.label} className={styles.radioRow}>
                  <input type="radio" name="price" checked={priceCap === p.value} onChange={() => setPriceCap(p.value)} />
                  {t(p.label)}
                </label>
              ))}
            </div>

            <div className={styles.drawerSection}>
              <p className={styles.sectionLabel}>{t("Lieferung")}</p>
              <label className={styles.checkRow}>
                <input
                  type="checkbox"
                  checked={deliveryToday}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setDeliveryToday(e.target.checked)}
                />
                {t("Heute lieferbar")}
              </label>
              <label className={styles.checkRow}>
                <input
                  type="checkbox"
                  checked={deliveryTomorrow}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setDeliveryTomorrow(e.target.checked)}
                />
                {t("Morgen lieferbar")}
              </label>
            </div>

            <div className={styles.drawerFooter}>
              <Button variant="primary" onClick={applyAndClose}>
                {t(filtered.length === 1 ? "{n} Strauß zeigen" : "{n} Sträuße zeigen").replace(
                  "{n}",
                  String(filtered.length),
                )}
              </Button>
              <Button variant="ghost" onClick={resetFilters}>
                {t("Zurücksetzen")}
              </Button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
