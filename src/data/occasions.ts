/**
 * Occasions ("Anlässe") — used by the home page teaser (AnlaesseSection),
 * the full overview page (/anlaesse) and, for the three occasions that get
 * their own template page (/anlass/[slug]), the per-occasion detail content.
 *
 * Trauer and Firmenblumen are NOT in OCCASION_DETAILS — they have their own
 * standalone pages (/trauer, /firmenkunden) rather than the shared template,
 * per the sitemap note "Trauer: Lieferung zur Trauerhalle".
 */

const PLACEHOLDER = "[wird ergänzt]";

export type Occasion = {
  name: string;
  priceLabel: string;
  href: string;
  /** Short one-line teaser for the /anlaesse overview cards. Placeholder where the design handoff gives no occasion-specific copy. */
  blurb: string;
  /** Caption for the still-missing occasion photo (see ImagePlaceholder). */
  image: string;
};

export const OCCASIONS: Occasion[] = [
  {
    name: "Geburtstag",
    priceLabel: "ab 28,00 €",
    href: "/anlass/geburtstag",
    blurb: "Bis 14 Uhr bestellt, abends zwischen 17 und 20 Uhr an der Tür. Karte mit Handschrift legen wir dazu.",
    image: "Geburtstagsstrauß, Vollbild querformat",
  },
  {
    name: "Danke & gute Besserung",
    priceLabel: "ab 28,00 €",
    href: "/anlass/danke",
    blurb: PLACEHOLDER,
    image: "Danke & gute Besserung, Foto folgt",
  },
  {
    name: "Liebe",
    priceLabel: "ab 36,00 €",
    href: "/anlass/liebe",
    blurb: PLACEHOLDER,
    image: "Liebe, Foto folgt",
  },
  {
    name: "Trauer",
    priceLabel: "auf Anfrage",
    href: "/trauer",
    blurb: "Wir liefern direkt zur Trauerhalle oder ans Grab, pünktlich zur Aussegnung.",
    image: "Trauerfloristik, Foto folgt",
  },
  {
    name: "Firmenblumen",
    priceLabel: "auf Rechnung",
    href: "/firmenkunden",
    blurb: PLACEHOLDER,
    image: "Firmenblumen, Foto folgt",
  },
];

export type OccasionPriceTier = {
  label: string;
  /** Formatted price string (e.g. "44,00 €") or the bracketed placeholder when the source gives no figure for this tier. */
  price: string;
  description: string;
  deliveryLabel: string;
  /** true when the shown window is not today's — renders in warn-text, matching the Product convention. */
  deliveryUrgent: boolean;
  featured?: boolean;
};

export type OccasionDetail = {
  slug: string;
  name: string;
  heroTitle: string;
  heroIntro: string;
  /** The always-known "ab X €" figure from OCCASIONS, shown even when no full tier breakdown exists. */
  priceNote: string;
  /**
   * Full three-tier pricing, only where the handoff actually shows numbers.
   * Only "la Vanda Anlass.dc.html" is a worked example (Geburtstag) — Danke
   * and Liebe have no occasion-specific tier copy or pricing beyond the
   * single "ab" figure already in OCCASIONS, so they omit this rather than
   * invent Mittel/Groß prices.
   */
  tiers?: OccasionPriceTier[];
  /** Curated picks from the real catalog (src/data/products.ts) — no invented products. */
  productSlugs: string[];
  productsSectionTitle: string;
  adviceTitle: string;
  adviceParagraphs: string[];
};

export const OCCASION_DETAILS: Record<string, OccasionDetail> = {
  geburtstag: {
    slug: "geburtstag",
    name: "Geburtstag",
    heroTitle: "Zum Geburtstag",
    heroIntro: "Bis 14 Uhr bestellt, abends zwischen 17 und 20 Uhr an der Tür. Karte mit Handschrift legen wir dazu.",
    priceNote: "ab 28,00 €",
    tiers: [
      {
        label: "Klein",
        price: "28,00 €",
        description: "Für den Schreibtisch oder die Küche.",
        deliveryLabel: "Heute 17–20 Uhr",
        deliveryUrgent: false,
      },
      {
        label: "Mittel",
        price: "44,00 €",
        description: "Der Strauß, den die meisten schicken.",
        deliveryLabel: "Heute 17–20 Uhr",
        deliveryUrgent: false,
        featured: true,
      },
      {
        label: "Groß",
        price: "72,00 €",
        description: "Wenn es ein runder Geburtstag ist.",
        deliveryLabel: "Morgen 11–14 Uhr",
        deliveryUrgent: true,
      },
    ],
    productSlugs: ["feldrand", "spaetsommer", "kleiner-gruss", "dahlienbund", "weiss-gruen", "zimmerlinde"],
    productsSectionTitle: "Alle Sträuße zum Geburtstag",
    adviceTitle: "Was zum Geburtstag passt",
    adviceParagraphs: [
      "Wer den Beschenkten gut kennt, geht nach Farbe: kräftige Dahlien und Zinnien für jemanden, der es deutlich mag, weiße Anemonen und Gräser für alle, die es ruhig mögen. Wer unsicher ist, nimmt den mittleren Strauß — 44,00 €, gemischt, passt in jede Wohnung.",
      "Für Lieferungen ins Büro empfehlen wir das Fenster 11–14 Uhr und eine Telefonnummer im Bestellfeld. Für Lieferungen nach Hause das Fenster 17–20 Uhr, dann ist meistens jemand da.",
    ],
  },
  danke: {
    slug: "danke",
    name: "Danke & gute Besserung",
    heroTitle: "Danke & gute Besserung",
    heroIntro: "Bis 14 Uhr bestellt, abends zwischen 17 und 20 Uhr an der Tür. Karte mit Handschrift legen wir dazu.",
    priceNote: "ab 28,00 €",
    productSlugs: ["kleiner-gruss", "feldrand", "spaetsommer", "nelke-modern", "zimmerlinde", "amaryllis-einzeln"],
    productsSectionTitle: "Alle Sträuße zum Dankeschön",
    adviceTitle: PLACEHOLDER,
    adviceParagraphs: [PLACEHOLDER],
  },
  liebe: {
    slug: "liebe",
    name: "Liebe",
    heroTitle: "Liebe",
    heroIntro: "Bis 14 Uhr bestellt, abends zwischen 17 und 20 Uhr an der Tür. Karte mit Handschrift legen wir dazu.",
    priceNote: "ab 36,00 €",
    productSlugs: ["rose-eukalyptus", "ranunkel-tulpe", "weiss-gruen", "werkstattstrauss-xl", "dahlienbund", "hortensie-solo"],
    productsSectionTitle: "Alle Sträuße für die Liebe",
    adviceTitle: PLACEHOLDER,
    adviceParagraphs: [PLACEHOLDER],
  },
};
