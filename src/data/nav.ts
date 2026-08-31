export type NavItem = { label: string; href: string };

/**
 * Primary site navigation. Shared between the desktop header's inline
 * nav (SiteHeader.tsx) and the mobile full-screen menu overlay
 * (components/mobile/MobileMenuOverlay.tsx) so the two link lists can
 * never drift apart.
 */
export const NAV_ITEMS: NavItem[] = [
  { label: "Blumen & Pflanzen", href: "/sortiment" },
  { label: "Anlässe", href: "/anlaesse" },
  { label: "Auf Anfrage", href: "/anfrage" },
  { label: "Lieferung", href: "/lieferung" },
  { label: "Atelier", href: "/atelier" },
];

/**
 * Secondary links shown below the primary nav in the mobile menu
 * overlay only (per "la Vanda Wireframes Mobile" screen 1b). Real
 * routes only — "Bestellstatus" points at the Konto → Bestellungen tab
 * since there's no separate order-tracking route, the same way the
 * footer already sends multiple labels (e.g. "Pflanzen" and "Vasen &
 * Zubehör") to one shared destination.
 */
export const MOBILE_SECONDARY_NAV: NavItem[] = [
  { label: "Abo", href: "/abo" },
  { label: "Gutscheine", href: "/gutschein" },
  { label: "Konto", href: "/konto" },
  { label: "Bestellstatus", href: "/konto" },
  { label: "Liefergebiet prüfen", href: "/lieferung" },
];
