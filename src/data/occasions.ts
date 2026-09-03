/**
 * Occasions ("Anlässe") — the kinds of work the shop takes on, with the
 * entry price the handoff states for each.
 *
 * On the shop branch each row linked to its own occasion page and, for
 * three of them, a full three-tier price breakdown (OCCASION_DETAILS).
 * The landing page has no other routes to link to, so the rows are plain
 * information: what we do, and roughly what it costs. `href` is gone on
 * purpose — a link to a page that does not exist on this branch would
 * 404 in production.
 */

const PLACEHOLDER = "[wird ergänzt]";

export type Occasion = {
  name: string;
  priceLabel: string;
  /** Short one-line teaser. Placeholder where the design handoff gives no occasion-specific copy. */
  blurb: string;
  /** Caption for the still-missing occasion photo (see ImagePlaceholder). */
  image: string;
};

export const OCCASIONS: Occasion[] = [
  {
    name: "Geburtstag",
    priceLabel: "ab 28,00 €",
    blurb: "Bis 14 Uhr bestellt, abends zwischen 17 und 20 Uhr an der Tür. Karte mit Handschrift legen wir dazu.",
    image: "Geburtstagsstrauß, Vollbild querformat",
  },
  {
    name: "Danke & gute Besserung",
    priceLabel: "ab 28,00 €",
    blurb: PLACEHOLDER,
    image: "Danke & gute Besserung, Foto folgt",
  },
  {
    name: "Liebe",
    priceLabel: "ab 36,00 €",
    blurb: PLACEHOLDER,
    image: "Liebe, Foto folgt",
  },
  {
    name: "Trauer",
    priceLabel: "auf Anfrage",
    blurb: "Wir liefern direkt zur Trauerhalle oder ans Grab, pünktlich zur Aussegnung.",
    image: "Trauerfloristik, Foto folgt",
  },
  {
    name: "Firmenblumen",
    priceLabel: "auf Rechnung",
    blurb: PLACEHOLDER,
    image: "Firmenblumen, Foto folgt",
  },
];

/**
 * The two fields the landing page renders. Same reason as
 * ShowcaseBouquet in src/data/products.ts: everything an accessor
 * returns is serialised into the payload the browser downloads, and
 * blurbs and photo captions that nothing shows don't belong there.
 */
export type OccasionSummary = Pick<Occasion, "name" | "priceLabel">;

/** Async on purpose — the seam a real backend slots into (CLAUDE.md §9). */
export async function getOccasions(): Promise<OccasionSummary[]> {
  return OCCASIONS.map(({ name, priceLabel }) => ({ name, priceLabel }));
}
