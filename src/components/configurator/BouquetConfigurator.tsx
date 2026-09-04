"use client";

import { useMemo, useState } from "react";
import { useCart } from "@/context/CartContext";
import { useT } from "@/i18n/LanguageProvider";
import { formatPriceEUR } from "@/data/products";
import {
  BIND_FEE_CENTS,
  FLOWERS,
  FLOWER_GROUP_FILTERS,
  GREENS,
  GREETING_CARDS,
  MAX_STEMS_PER_FLOWER,
  WRAPS,
} from "@/data/configurator";
import FlowerPicker from "./FlowerPicker";
import GreenPicker from "./GreenPicker";
import WrapPicker from "./WrapPicker";
import GreetingCardPicker from "./GreetingCardPicker";
import OrderSummary, { type SummaryLine } from "./OrderSummary";
import styles from "./BouquetConfigurator.module.css";

type FlowerFilter = (typeof FLOWER_GROUP_FILTERS)[number];

/** Short, stable hash so identical configurations combine into one cart line. */
function hashConfig(input: string): string {
  let hash = 5381;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 33) ^ input.charCodeAt(i);
  }
  return (hash >>> 0).toString(36);
}

/**
 * "Strauß selbst binden" — the real, stateful bouquet configurator from
 * "la Vanda Strauss-Konfigurator.dc.html", rebuilt as one scrollable page of
 * four labelled sections (Blumen / Grün & Struktur / Verpackung / Grußkarte)
 * rather than a full wizard/stepper — the source has no "next step" gating
 * between sections (all four are visible and editable at once, exactly like
 * this), so a stepper would add UI without adding real functionality.
 *
 * Unlike the source's own initial state (pre-filled with a demo selection:
 * 7 roses, 5 dahlias, 3 yarrow), this starts empty — a real first-time
 * visitor hasn't chosen anything yet, and the empty-state copy the source
 * already defines ("Noch keine Blumen gewählt…") only makes sense as a
 * genuine starting point rather than something you'd only see by clearing
 * a demo cart.
 */
export default function BouquetConfigurator() {
  const { addItem } = useCart();
  const t = useT();
  const [qty, setQty] = useState<Record<string, number>>({});
  const [group, setGroup] = useState<FlowerFilter>("Alle");
  const [greenId, setGreenId] = useState(GREENS[0].id);
  const [wrapId, setWrapId] = useState(WRAPS[0].id);
  const [cardId, setCardId] = useState(GREETING_CARDS[0].id);
  const [message, setMessage] = useState("");
  const [added, setAdded] = useState(false);

  function bump(id: string, delta: number) {
    setQty((prev) => {
      const next = Math.max(0, Math.min(MAX_STEMS_PER_FLOWER, (prev[id] ?? 0) + delta));
      return { ...prev, [id]: next };
    });
  }

  const stemCount = useMemo(() => Object.values(qty).reduce((sum, q) => sum + q, 0), [qty]);
  const flowerTotalCents = useMemo(
    () => FLOWERS.reduce((sum, f) => sum + f.priceCents * (qty[f.id] ?? 0), 0),
    [qty]
  );
  const green = GREENS.find((g) => g.id === greenId) ?? GREENS[0];
  const wrap = WRAPS.find((w) => w.id === wrapId) ?? WRAPS[0];
  const card = GREETING_CARDS.find((c) => c.id === cardId) ?? GREETING_CARDS[0];
  const bindFeeCents = stemCount > 0 ? BIND_FEE_CENTS : 0;
  const totalCents = flowerTotalCents + green.priceCents + wrap.priceCents + card.priceCents + bindFeeCents;

  const lines: SummaryLine[] = useMemo(() => {
    const result: SummaryLine[] = [];
    for (const f of FLOWERS) {
      const q = qty[f.id] ?? 0;
      if (q > 0) result.push({ label: `${q}× ${t(f.name)}`, value: formatPriceEUR(f.priceCents * q) });
    }
    result.push({ label: t(green.name), value: formatPriceEUR(green.priceCents) });
    result.push({ label: t(wrap.name), value: wrap.priceCents > 0 ? formatPriceEUR(wrap.priceCents) : t("inklusive") });
    if (card.priceCents > 0) result.push({ label: t(card.name), value: formatPriceEUR(card.priceCents) });
    if (bindFeeCents > 0) result.push({ label: t("Binden von Hand"), value: formatPriceEUR(bindFeeCents) });
    return result;
  }, [qty, green, wrap, card, bindFeeCents, t]);

  const summaryLine =
    stemCount > 0
      ? `${stemCount} ${t("Stiele")} · ${t(green.name)} · ${t(wrap.name)}`
      : t("Wähle links deine Blumen");

  function handleAddToCart() {
    if (stemCount === 0) return;

    const flowerParts = FLOWERS.filter((f) => (qty[f.id] ?? 0) > 0)
      .map((f) => `${f.id}x${qty[f.id]}`)
      .join(",");
    const configKey = `${flowerParts}|green:${greenId}|wrap:${wrapId}|card:${cardId}|msg:${message.trim()}`;

    const metaParts = [`${stemCount} ${t("Stiele")}`, t(green.name), t(wrap.name)];
    if (card.priceCents > 0) metaParts.push(t(card.name));

    addItem({
      id: `product:konfigurator:${hashConfig(configKey)}`,
      kind: "product",
      name: t("Strauß selbst binden"),
      priceCents: totalCents,
      image: "Strauß selbst binden, Vorschau",
      meta: metaParts.join(" · "),
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className={styles.layout}>
      <div className={styles.main}>
        <FlowerPicker qty={qty} group={group} stemCount={stemCount} onGroupChange={setGroup} onBump={bump} />
        <GreenPicker greenId={greenId} onChange={setGreenId} />
        <WrapPicker wrapId={wrapId} onChange={setWrapId} />
        <GreetingCardPicker cardId={cardId} message={message} onCardChange={setCardId} onMessageChange={setMessage} />
      </div>

      <OrderSummary
        stemCount={stemCount}
        totalCents={totalCents}
        summaryLine={summaryLine}
        lines={lines}
        disabled={stemCount === 0}
        added={added}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
