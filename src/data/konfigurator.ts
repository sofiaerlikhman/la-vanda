/**
 * Reference data for the "Strauß selbst binden" configurator
 * (src/app/konfigurator), authored from
 * "la Vanda Strauss-Konfigurator.dc.html". All prices/names/notes below are
 * taken verbatim from that source's embedded script (FLOWERS / GREENS /
 * WRAPS / CARDS / BIND_FEE) and converted from float euros to integer cents
 * to match the rest of the codebase (see src/data/products.ts).
 */

export type FlowerGroup = "Klassisch" | "Saison" | "Wiese" | "Zart";

export type Flower = {
  id: string;
  name: string;
  /** Price per stem, in cents. */
  priceCents: number;
  group: FlowerGroup;
  note: string;
};

export type GreenOption = {
  id: string;
  name: string;
  priceCents: number;
  note: string;
};

export type WrapOption = {
  id: string;
  name: string;
  priceCents: number;
  note: string;
  /** Caption for the still-missing product photo (see ImagePlaceholder). */
  image: string;
};

export type GreetingCardOption = {
  id: string;
  name: string;
  priceCents: number;
};

/** "Alle" plus every real flower group, in the order the filter chips appear. */
export const FLOWER_GROUP_FILTERS: readonly ("Alle" | FlowerGroup)[] = ["Alle", "Klassisch", "Saison", "Wiese", "Zart"];

export const FLOWERS: Flower[] = [
  { id: "rose", name: "Rose Quicksand", priceCents: 390, group: "Klassisch", note: "Altrosa, lange haltbar" },
  { id: "dahlie", name: "Dahlie", priceCents: 450, group: "Saison", note: "Vom Feld, wechselnde Farben" },
  { id: "ranunkel", name: "Ranunkel", priceCents: 340, group: "Saison", note: "Dicht gefüllt, cremeweiß" },
  { id: "tulpe", name: "Tulpe", priceCents: 180, group: "Klassisch", note: "Nur in der Saison" },
  { id: "nelke", name: "Nelke", priceCents: 220, group: "Klassisch", note: "Kräftig, sehr standfest" },
  { id: "schafgarbe", name: "Schafgarbe", priceCents: 260, group: "Wiese", note: "Gelb bis ocker, trocknet gut" },
  { id: "kerbel", name: "Wiesenkerbel", priceCents: 200, group: "Wiese", note: "Luftig, macht Volumen" },
  { id: "lisianthus", name: "Lisianthus", priceCents: 360, group: "Zart", note: "Wirkt wie eine kleine Rose" },
  { id: "anemone", name: "Anemone", priceCents: 320, group: "Zart", note: "Dunkles Auge, klare Farbe" },
];

/** Maximum stems selectable per flower type (matches the source's own clamp). */
export const MAX_STEMS_PER_FLOWER = 30;

export const GREENS: GreenOption[] = [
  { id: "eukalyptus", name: "Eukalyptus", priceCents: 450, note: "Graugrün, duftet" },
  { id: "graeser", name: "Gräser", priceCents: 350, note: "Locker, luftige Silhouette" },
  { id: "pistazie", name: "Pistazie", priceCents: 500, note: "Dichtes Blattwerk" },
];

export const WRAPS: WrapOption[] = [
  { id: "papier", name: "Seidenpapier", priceCents: 0, note: "Zwei Lagen, Kordel, Wasserpolster", image: "Seidenpapier" },
  { id: "tuch", name: "Baumwolltuch", priceCents: 650, note: "Wiederverwendbar, naturweiß", image: "Baumwolltuch" },
  { id: "box", name: "Trageschachtel", priceCents: 900, note: "Steht sicher im Auto", image: "Trageschachtel" },
  { id: "vase", name: "Vase Klar", priceCents: 2400, note: "Strauß kommt eingestellt", image: "Vase Klar" },
];

export const GREETING_CARDS: GreetingCardOption[] = [
  { id: "keine", name: "Ohne Karte", priceCents: 0 },
  { id: "karte", name: "Handgeschriebene Karte", priceCents: 350 },
];

/** Charged once per order, only once at least one stem is chosen. */
export const BIND_FEE_CENTS = 600;

/** Informational only ("Mindestbestellwert 25,00 €") — not enforced here, see BouquetConfigurator. */
export const MIN_ORDER_CENTS = 2500;

export const MAX_CARD_MESSAGE_LENGTH = 200;
