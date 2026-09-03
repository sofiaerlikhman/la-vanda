export type NavItem = { label: string; href: string };

/**
 * Landing-page section nav.
 *
 * This branch ships a single page, so every "nav" entry is an in-page
 * anchor rather than a route. Shared between the header's inline nav
 * (LandingHeader), the mobile menu overlay (LandingMenuOverlay) and the
 * footer, so the three link lists can never drift apart. The `href`
 * fragments must match the `id`s set on the sections in src/app/page.tsx.
 */
export const SECTION_NAV: NavItem[] = [
  { label: "Blumen", href: "#blumen" },
  { label: "Atelier", href: "#atelier" },
  { label: "Workshops", href: "#workshops" },
  { label: "Lieferung", href: "#lieferung" },
  { label: "Kontakt", href: "#kontakt" },
];

/**
 * The text pages that survive on the landing branch. Impressum and
 * Datenschutz are legally required for a publicly reachable German
 * business site even without a shop; Barrierefreiheit backs the
 * accessibility statement the project already publishes. AGB and
 * Widerruf are deliberately absent — both describe a purchase contract
 * that cannot be entered into here (see BACKEND.md).
 */
export const LEGAL_NAV: NavItem[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Barrierefreiheit", href: "/barrierefreiheit" },
];
