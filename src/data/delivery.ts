/**
 * Delivery facts, as plain information.
 *
 * The shop branch had a live postcode check, a cut-off countdown and a
 * day/window picker here. None of them belong on a page that cannot take
 * an order: a countdown to a 14:00 cut-off you cannot order before is
 * misleading, and the postcode check only ever recognised a hardcoded
 * Wiesbaden range (the real zone list was always listed as backend data).
 * What is left is the set of facts the handoff actually states.
 */

export type DeliveryFact = { label: string; value: string };

/**
 * BACKEND — none of these are live.
 * Zones, per-zone fees and which windows are still open today all come
 * from the delivery backend the README plans ("postcode → zone + fee +
 * windows"). Until it exists these are the flat, always-true statements
 * from the handoff, with no promise attached to a specific day.
 */
export const DELIVERY_FACTS: DeliveryFact[] = [
  { label: "Liefergebiet", value: "Wiesbaden und Umgebung" },
  { label: "Zeitfenster", value: "11–14 Uhr oder 17–20 Uhr" },
  { label: "Liefergebühr", value: "4,90 €" },
  { label: "Abholung", value: "Im Laden zu den Öffnungszeiten" },
];

/** Async on purpose — the seam a real delivery endpoint slots into (CLAUDE.md §9). */
export async function getDeliveryFacts(): Promise<DeliveryFact[]> {
  return DELIVERY_FACTS;
}
