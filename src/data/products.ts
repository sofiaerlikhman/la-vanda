export type ProductSize = {
  label: string;
  priceCents: number;
};

export type ProductFaqEntry = {
  question: string;
  answer: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  /** Stored in cents to avoid floating-point rounding on money. */
  priceCents: number;
  category: "straeusse" | "pflanzen" | "vasen";
  badge?: string;
  deliveryLabel: string;
  /** true when the shown window is NOT today's — renders in warn-text per the design system. */
  deliveryUrgent: boolean;
  soldOut?: boolean;
  /** Caption for the still-missing product photo. Swap for a real image path/URL once photography exists. */
  image: string;
  /**
   * Full detail-page content. Only "feldrand" has real authored copy (from
   * la Vanda Produkt.dc.html) — everything else is marked with a bracketed
   * placeholder rather than invented, per the handoff's own copy rules
   * ("where a real fact is missing, put in a visibly marked placeholder").
   */
  description: string;
  sizes?: ProductSize[];
  gallery?: string[];
  faq?: ProductFaqEntry[];
};

const FELDRAND_FAQ: ProductFaqEntry[] = [
  {
    question: "Welche Blumen sind drin",
    answer:
      "Dahlien, Schafgarbe, Wiesenkerbel, Gräser. Saisonal, deshalb wechselt die Mischung — die Farbwelt bleibt.",
  },
  {
    question: "Pflege & Haltbarkeit",
    answer: "Stiele schräg anschneiden, Wasser alle zwei Tage wechseln. Sieben Tage Frischegarantie.",
  },
  {
    question: "Lieferung & Bestellschluss",
    answer: "Wiesbaden und Umgebung, 11–14 Uhr oder 17–20 Uhr, 4,90 €. Eigene Fahrer, kein Paketdienst.",
  },
];

const PLACEHOLDER_DESCRIPTION = "[Produktbeschreibung folgt]";
const PLACEHOLDER_FAQ: ProductFaqEntry[] = [
  { question: "Welche Blumen sind drin", answer: "[Inhalt folgt]" },
  { question: "Pflege & Haltbarkeit", answer: "[Inhalt folgt]" },
  { question: "Lieferung & Bestellschluss", answer: "[Inhalt folgt]" },
];

/** Klein/Mittel/Groß at Feldrand's own ratio (≈0.58× / 1× / 1.5× base price), rounded to the nearest 50 cents. */
function sizesFromBasePrice(basePriceCents: number): ProductSize[] {
  const round50 = (n: number) => Math.round(n / 50) * 50;
  return [
    { label: "Klein", priceCents: round50(basePriceCents * 0.58) },
    { label: "Mittel", priceCents: basePriceCents },
    { label: "Groß", priceCents: round50(basePriceCents * 1.5) },
  ];
}

/**
 * Full "Sträuße" catalog, as authored in la Vanda Sortiment.dc.html.
 * This is also the source for the home page's "Was heute noch geht" teaser
 * (which pulls a handful of these) and is the template other categories
 * (Pflanzen, Vasen & Zubehör) will extend once their own inventory exists.
 */
const CATALOG_PRODUCTS: Product[] = [
  {
    id: "feldrand",
    slug: "feldrand",
    name: "Feldrand",
    priceCents: 4800,
    category: "straeusse",
    badge: "Saison",
    deliveryLabel: "Heute 17–20 Uhr",
    deliveryUrgent: false,
    image: "Strauß Feldrand, 1:1",
    description:
      "Wiesenblumen, Dahlien und Gräser, locker gebunden. Was der Markt am Morgen hergibt — die Zusammenstellung wechselt mit der Woche.",
    sizes: [
      { label: "Klein", priceCents: 2800 },
      { label: "Mittel", priceCents: 4800 },
      { label: "Groß", priceCents: 7200 },
    ],
    gallery: ["Strauß Feldrand, 1:1", "Detail", "In der Vase", "Größenvergleich"],
    faq: FELDRAND_FAQ,
  },
  {
    id: "spaetsommer",
    slug: "spaetsommer",
    name: "Spätsommer",
    priceCents: 3600,
    category: "straeusse",
    deliveryLabel: "Heute 17–20 Uhr",
    deliveryUrgent: false,
    image: "Strauß, quadratisch",
    description: PLACEHOLDER_DESCRIPTION,
    sizes: sizesFromBasePrice(3600),
    faq: PLACEHOLDER_FAQ,
  },
  {
    id: "weiss-gruen",
    slug: "weiss-gruen",
    name: "Weiß & Grün",
    priceCents: 6200,
    category: "straeusse",
    deliveryLabel: "Heute 17–20 Uhr",
    deliveryUrgent: false,
    image: "Strauß weiß, quadratisch",
    description: PLACEHOLDER_DESCRIPTION,
    sizes: sizesFromBasePrice(6200),
    faq: PLACEHOLDER_FAQ,
  },
  {
    id: "dahlienbund",
    slug: "dahlienbund",
    name: "Dahlienbund",
    priceCents: 4400,
    category: "straeusse",
    badge: "Neu",
    deliveryLabel: "Heute 17–20 Uhr",
    deliveryUrgent: false,
    image: "Produktbild, quadratisch",
    description: PLACEHOLDER_DESCRIPTION,
    sizes: sizesFromBasePrice(4400),
    faq: PLACEHOLDER_FAQ,
  },
  {
    id: "kleiner-gruss",
    slug: "kleiner-gruss",
    name: "Kleiner Gruß",
    priceCents: 2800,
    category: "straeusse",
    deliveryLabel: "Heute 17–20 Uhr",
    deliveryUrgent: false,
    image: "Produktbild, quadratisch",
    description: PLACEHOLDER_DESCRIPTION,
    sizes: sizesFromBasePrice(2800),
    faq: PLACEHOLDER_FAQ,
  },
  {
    id: "rose-eukalyptus",
    slug: "rose-eukalyptus",
    name: "Rosé & Eukalyptus",
    priceCents: 5200,
    category: "straeusse",
    deliveryLabel: "Morgen 11–14 Uhr",
    deliveryUrgent: true,
    image: "Produktbild, quadratisch",
    description: PLACEHOLDER_DESCRIPTION,
    sizes: sizesFromBasePrice(5200),
    faq: PLACEHOLDER_FAQ,
  },
  {
    id: "wiesenbunt",
    slug: "wiesenbunt",
    name: "Wiesenbunt",
    priceCents: 3400,
    category: "straeusse",
    deliveryLabel: "Morgen 11–14 Uhr",
    deliveryUrgent: true,
    soldOut: true,
    image: "Produktbild, quadratisch",
    description: PLACEHOLDER_DESCRIPTION,
    sizes: sizesFromBasePrice(3400),
    faq: PLACEHOLDER_FAQ,
  },
  {
    id: "hortensie-solo",
    slug: "hortensie-solo",
    name: "Hortensie solo",
    priceCents: 3900,
    category: "straeusse",
    deliveryLabel: "Heute 17–20 Uhr",
    deliveryUrgent: false,
    image: "Produktbild, quadratisch",
    description: PLACEHOLDER_DESCRIPTION,
    sizes: sizesFromBasePrice(3900),
    faq: PLACEHOLDER_FAQ,
  },
  {
    id: "werkstattstrauss-xl",
    slug: "werkstattstrauss-xl",
    name: "Werkstattstrauß XL",
    priceCents: 8400,
    category: "straeusse",
    badge: "Bestseller",
    deliveryLabel: "Heute 17–20 Uhr",
    deliveryUrgent: false,
    image: "Produktbild, quadratisch",
    description: PLACEHOLDER_DESCRIPTION,
    sizes: sizesFromBasePrice(8400),
    faq: PLACEHOLDER_FAQ,
  },
  {
    id: "ranunkel-tulpe",
    slug: "ranunkel-tulpe",
    name: "Ranunkel & Tulpe",
    priceCents: 4600,
    category: "straeusse",
    deliveryLabel: "Morgen 11–14 Uhr",
    deliveryUrgent: true,
    image: "Produktbild, quadratisch",
    description: PLACEHOLDER_DESCRIPTION,
    sizes: sizesFromBasePrice(4600),
    faq: PLACEHOLDER_FAQ,
  },
  {
    id: "nelke-modern",
    slug: "nelke-modern",
    name: "Nelke modern",
    priceCents: 3100,
    category: "straeusse",
    deliveryLabel: "Heute 17–20 Uhr",
    deliveryUrgent: false,
    image: "Produktbild, quadratisch",
    description: PLACEHOLDER_DESCRIPTION,
    sizes: sizesFromBasePrice(3100),
    faq: PLACEHOLDER_FAQ,
  },
  {
    id: "amaryllis-einzeln",
    slug: "amaryllis-einzeln",
    name: "Amaryllis einzeln",
    priceCents: 2600,
    category: "straeusse",
    deliveryLabel: "Heute 17–20 Uhr",
    deliveryUrgent: false,
    image: "Produktbild, quadratisch",
    description: PLACEHOLDER_DESCRIPTION,
    sizes: sizesFromBasePrice(2600),
    faq: PLACEHOLDER_FAQ,
  },
  {
    id: "zimmerlinde",
    slug: "zimmerlinde",
    name: "Zimmerlinde",
    priceCents: 2900,
    category: "pflanzen",
    deliveryLabel: "Morgen 11–14 Uhr",
    deliveryUrgent: true,
    image: "Pflanze, quadratisch",
    description: PLACEHOLDER_DESCRIPTION,
    faq: PLACEHOLDER_FAQ,
  },
];

/**
 * Home page teaser — a fixed curated pick, not the full catalog.
 * Kept as its own function (rather than `getCatalog().slice(0, 4)`) since
 * "today's picks" is meant to be a merchandising choice, not just "the
 * first four in the list" — the backend will eventually drive this from
 * real availability data.
 */
export async function getTodaysProducts(): Promise<Product[]> {
  const bySlug = (slug: string) => CATALOG_PRODUCTS.find((p) => p.slug === slug)!;
  return [bySlug("feldrand"), bySlug("spaetsommer"), bySlug("zimmerlinde"), bySlug("weiss-gruen")];
}

export async function getCatalog(category: Product["category"] = "straeusse"): Promise<Product[]> {
  return CATALOG_PRODUCTS.filter((p) => p.category === category);
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return CATALOG_PRODUCTS.find((p) => p.slug === slug);
}

export async function getRelatedProducts(product: Product, limit = 4): Promise<Product[]> {
  return CATALOG_PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, limit);
}

/** `48,00 €` — comma decimal separator, non-breaking space before the €, per DESIGN-SYSTEM-RULES. */
export function formatPriceEUR(cents: number): string {
  const euros = (cents / 100).toFixed(2).replace(".", ",");
  return `${euros} €`;
}
