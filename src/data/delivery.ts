export type DeliveryCheckResult =
  | { deliverable: true; message: string }
  | { deliverable: false; message: string };

/**
 * Placeholder postcode check.
 *
 * The handoff explicitly lists "postcode → zone + fee + windows" as backend
 * data (see README → "Data the pages need from the backend"), and no
 * exhaustive delivery-zone list ships with the design. Until that endpoint
 * exists, this only recognises the Wiesbaden postcode range (652xx–654xx)
 * as a rough stand-in — replace the body with a real API call
 * (e.g. `fetch('/api/delivery-zones/' + plz)`) once the backend has one.
 */
export async function checkDeliveryZone(plz: string): Promise<DeliveryCheckResult> {
  const trimmed = plz.trim();
  if (!/^\d{5}$/.test(trimmed)) {
    return { deliverable: false, message: "Bitte eine gültige, fünfstellige Postleitzahl eingeben." };
  }

  const code = Number(trimmed);
  const inWiesbadenArea = code >= 65180 && code <= 65207;

  if (inWiesbadenArea) {
    return { deliverable: true, message: `${trimmed} — wir liefern heute 17–20 Uhr.` };
  }

  return {
    deliverable: false,
    message: "Diese Postleitzahl liegt außerhalb unseres Liefergebiets. Ruf 0611 000 000 an, wir prüfen es von Hand.",
  };
}

export const BERLIN_TZ = "Europe/Berlin";

/** Seconds since local midnight in Europe/Berlin, from wall-clock hour/minute/second. */
export function berlinSecondsSinceMidnight(now: Date): number {
  const parts = new Intl.DateTimeFormat("de-DE", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
    timeZone: BERLIN_TZ,
  }).formatToParts(now);
  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value ?? 0);
  return get("hour") * 3600 + get("minute") * 60 + get("second");
}

/**
 * Seconds remaining until the next daily occurrence of `cutoffHour:00` in
 * Europe/Berlin, from wall-clock time (not elapsed UTC time) — matches what
 * a clock on the wall in Wiesbaden would show. A DST transition can shift
 * this by an hour on the two days a year that happens, an accepted
 * trade-off for a countdown display like this.
 */
export function secondsUntilBerlinCutoff(now: Date, cutoffHour: number): number {
  const secondsSinceMidnight = berlinSecondsSinceMidnight(now);
  const cutoffSeconds = cutoffHour * 3600;
  const remaining = cutoffSeconds - secondsSinceMidnight;
  return remaining > 0 ? remaining : remaining + 24 * 3600;
}

export function formatDuration(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  if (hours <= 0) {
    return `${minutes} min`;
  }
  return `${hours} h ${minutes} min`;
}

export type DeliveryWindowId = "11-14" | "17-20";

export type DeliveryWindowOption = {
  id: DeliveryWindowId;
  label: string;
  available: boolean;
  statusLabel: string;
};

export type DeliveryDayOption = {
  offsetDays: number;
  dayLabel: string;
  dateLabel: string;
  windows: DeliveryWindowOption[];
};

const WINDOW_DEFS: { id: DeliveryWindowId; label: string; cutoffHour: number }[] = [
  { id: "11-14", label: "11–14 Uhr", cutoffHour: 9 },
  { id: "17-20", label: "17–20 Uhr", cutoffHour: 14 },
];

/**
 * Day + time-window availability for the next `days` days, starting today.
 * Real logic, not a static mock: today's windows close at their own
 * cut-off (9 Uhr for the 11–14 window, 14 Uhr for 17–20 — matching
 * CutoffBanner/OrderCountdown), future days are always open, and Saturday
 * only offers the morning window — Sunday isn't offered at all. Both of
 * those last two rules are inferred from the footer's stated opening hours
 * (Mo–Fr full day, Sa mornings only, no Sonntag hours listed) rather than
 * spelled out anywhere in the handoff, so revisit them if a real delivery
 * calendar/backend says otherwise.
 */
export function getDeliveryDayOptions(now: Date, days = 5): DeliveryDayOption[] {
  const options: DeliveryDayOption[] = [];

  for (let offsetDays = 0; offsetDays < days; offsetDays++) {
    const dayDate = new Date(now.getTime() + offsetDays * 24 * 3600 * 1000);
    const weekdayLong = new Intl.DateTimeFormat("de-DE", { weekday: "long", timeZone: BERLIN_TZ }).format(dayDate);
    const dateLabel = new Intl.DateTimeFormat("de-DE", { day: "numeric", month: "short", timeZone: BERLIN_TZ }).format(
      dayDate
    );
    const weekdayShort = new Intl.DateTimeFormat("de-DE", { weekday: "short", timeZone: BERLIN_TZ }).format(dayDate);
    const isSaturday = weekdayShort.toLowerCase().startsWith("sa");
    const isSunday = weekdayShort.toLowerCase().startsWith("so");

    const windows: DeliveryWindowOption[] = WINDOW_DEFS.filter((def) => !isSunday && (!isSaturday || def.id === "11-14")).map(
      (def) => {
        if (offsetDays > 0) {
          return { id: def.id, label: def.label, available: true, statusLabel: "" };
        }
        const remaining = secondsUntilBerlinCutoff(now, def.cutoffHour);
        // secondsUntilBerlinCutoff always returns the *next* occurrence, so a
        // large remaining value today means the cutoff already passed today.
        const secondsSinceMidnight = berlinSecondsSinceMidnight(now);
        const available = secondsSinceMidnight < def.cutoffHour * 3600;
        return {
          id: def.id,
          label: def.label,
          available,
          statusLabel: available ? `Bestellschluss in ${formatDuration(remaining)}` : "Nicht mehr heute",
        };
      }
    );

    options.push({
      offsetDays,
      dayLabel: offsetDays === 0 ? "Heute" : weekdayLong,
      dateLabel,
      windows,
    });
  }

  return options;
}
