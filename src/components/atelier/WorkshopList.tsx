"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatPriceEUR } from "@/data/products";
import styles from "./WorkshopList.module.css";

type WorkshopStatus = "ok" | "warn" | "full";

type Workshop = {
  id: string;
  date: string;
  title: string;
  seatsLabel: string;
  status: WorkshopStatus;
  /** Absent for a fully booked date — those show "Warteliste" instead of a bookable price. */
  priceCents?: number;
};

/** Upcoming Atelier workshops, copied from the handoff's fixed date list. */
const WORKSHOPS: Workshop[] = [
  { id: "herbstkranz", date: "Do, 4. Sep", title: "Herbstkranz binden", seatsLabel: "3 Plätze", status: "ok", priceCents: 5800 },
  { id: "strauss-frei", date: "Sa, 13. Sep", title: "Strauß frei gebunden", seatsLabel: "1 Platz", status: "warn", priceCents: 6400 },
  { id: "trockenblumen", date: "Do, 25. Sep", title: "Trockenblumen & Gräser", seatsLabel: "Ausgebucht", status: "full" },
  { id: "tischschmuck", date: "Sa, 11. Okt", title: "Tischschmuck für Gäste", seatsLabel: "8 Plätze", status: "ok", priceCents: 5800 },
];

/**
 * Bookable Atelier workshops. There's no booking/seat-inventory backend yet
 * (the seat counts above are static copy from the handoff, not live data),
 * so "buchen" adds a real line to the client-side cart — the same
 * useCart()/addItem() pattern BuyBox uses for products — rather than
 * actually reserving a seat. A sold-out date shows a disabled "Warteliste"
 * button, matching the handoff (no waitlist capture exists yet either).
 */
export default function WorkshopList() {
  const { addItem } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  function handleBook(workshop: Workshop) {
    if (!workshop.priceCents) return;
    addItem({
      id: `product:workshop-${workshop.id}`,
      kind: "product",
      name: `Workshop: ${workshop.title}`,
      priceCents: workshop.priceCents,
      image: workshop.title,
      meta: workshop.date,
    });
    setAddedId(workshop.id);
    window.setTimeout(() => {
      setAddedId((current) => (current === workshop.id ? null : current));
    }, 2000);
  }

  return (
    <div className={styles.list}>
      {WORKSHOPS.map((workshop) => (
        <div key={workshop.id} className={styles.row}>
          <span className={styles.date}>{workshop.date}</span>
          <span className={styles.title}>{workshop.title}</span>
          <span
            className={
              workshop.status === "ok" ? styles.seatsOk : workshop.status === "warn" ? styles.seatsWarn : styles.seatsFull
            }
          >
            <span className={styles.dot} />
            {workshop.seatsLabel}
          </span>
          {workshop.priceCents ? (
            <button type="button" className={styles.bookButton} onClick={() => handleBook(workshop)}>
              {addedId === workshop.id ? "Hinzugefügt ✓" : `${formatPriceEUR(workshop.priceCents)} buchen`}
            </button>
          ) : (
            <button type="button" className={styles.waitlistButton} disabled>
              Warteliste
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
