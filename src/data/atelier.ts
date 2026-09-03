/**
 * Atelier content — opening hours, the team, workshop dates and the
 * shop's contact details.
 *
 * On the full shop branch this lived inline in the /atelier page and in
 * WorkshopList; here it is a typed data module so the landing page reads
 * everything through the same accessor seam a real backend would slot
 * into (see §9 of CLAUDE.md, and BACKEND.md for what each item needs).
 */

export type OpeningHoursRow = { days: string; hours: string };

/**
 * BACKEND — static opening hours.
 * These are the regular weekly hours from the handoff. Holiday closures,
 * Feiertage and one-off changes ("heute ab 15 Uhr geschlossen") cannot be
 * expressed here: a static export freezes whatever is in this array at
 * build time. A real opening-hours/calendar endpoint replaces this array.
 */
export const OPENING_HOURS: OpeningHoursRow[] = [
  { days: "Montag bis Freitag", hours: "9–18:30 Uhr" },
  { days: "Samstag", hours: "9–14 Uhr" },
  { days: "Sonntag", hours: "geschlossen" },
];

export type TeamMember = { name: string; role: string };

/** The four people named in the handoff. Portraits are still placeholders. */
export const TEAM: TeamMember[] = [
  { name: "Alina", role: "Inhaberin, Floristmeisterin" },
  { name: "Jonas", role: "Floristik, Einkauf" },
  { name: "Meryem", role: "Installationen, Events" },
  { name: "Tobias", role: "Lieferung" },
];

export type Workshop = {
  id: string;
  date: string;
  title: string;
};

/**
 * BACKEND — workshop dates.
 * A fixed list copied from the handoff, so it goes stale the moment a
 * date passes and it cannot show how many seats are left. Seat counts and
 * the "buchen" action from the shop branch are deliberately NOT rendered
 * on this page: both need a booking backend, and showing seat numbers
 * nobody can act on would read as live availability. The page marks the
 * list as unconfirmed until a real workshop calendar exists.
 */
export const WORKSHOPS: Workshop[] = [
  { id: "herbstkranz", date: "Do, 4. Sep", title: "Herbstkranz binden" },
  { id: "strauss-frei", date: "Sa, 13. Sep", title: "Strauß frei gebunden" },
  { id: "trockenblumen", date: "Do, 25. Sep", title: "Trockenblumen & Gräser" },
  { id: "tischschmuck", date: "Sa, 11. Okt", title: "Tischschmuck für Gäste" },
];

/**
 * Shop contact details.
 *
 * `phone` and `email` come from the handoff and are almost certainly
 * stand-ins — the Impressum still carries "[E-Mail-Adresse wird ergänzt]"
 * for the same address. They are rendered with a visible placeholder note
 * next to them so nobody publishes an unreachable number by accident.
 */
export const CONTACT = {
  street: "Marktstraße 12",
  city: "65183 Wiesbaden",
  phone: "0611 000 000",
  /** tel: needs the number without spaces; area code 0611 → +49 611. */
  phoneHref: "tel:+49611000000",
  email: "hallo@lavanda-wiesbaden.de",
  emailHref: "mailto:hallo@lavanda-wiesbaden.de",
} as const;

/**
 * Async on purpose — see CLAUDE.md §9. Today they filter a static array;
 * the signature is what a real backend slots into without touching a
 * single caller.
 */
export async function getOpeningHours(): Promise<OpeningHoursRow[]> {
  return OPENING_HOURS;
}

export async function getTeam(): Promise<TeamMember[]> {
  return TEAM;
}

export async function getWorkshops(): Promise<Workshop[]> {
  return WORKSHOPS;
}
