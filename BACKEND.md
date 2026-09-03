# What needs a backend — landing branch

This branch (`landing`) is a **single public page** with no way to order,
reserve, book or subscribe. Everything on it is either a fixed fact about the
shop or a value frozen into the HTML at build time.

This file lists every element that would need a backend to work properly, and
what it does instead today. Each entry is also commented at the place in the
code that owns it — grep for `BACKEND` in `src/` to find them:

```bash
grep -rn "BACKEND" src/
```

`README.md` describes the full shop; `CLAUDE.md` prescribes how to change the
code. This file is only about the gap between "shows information" and "works".

---

## 1. Removed outright — no fake affordance left behind

These existed on the shop branch, had no backend behind them, and are **gone**
rather than disabled. There is no route to reach them either, so a customer
cannot order anything even by typing a URL.

| Gone | Was | Needed to bring back |
| --- | --- | --- |
| Cart & checkout (`/checkout`, `CartContext`) | 6-step flow that collected an address and card details and confirmed locally | Orders, payments (PSP), address validation, email confirmations |
| Product pages (`/produkt/[slug]`) | Detail page with size picker and add-to-cart | Product + inventory service |
| Catalog & filtering (`/sortiment`) | Client-side filter over a static array | Product service with real availability |
| Bouquet configurator (`/konfigurator`) | Priced a custom bouquet into the cart | Product/pricing service, stock per stem |
| Subscriptions (`/abo`) | Configured a recurring delivery | Recurring orders, pausing, recurring billing |
| Vouchers (`/gutschein`) | Purchase + redeem forms | Voucher issuing, balance lookup, redemption |
| Account (`/konto`) | Login and order history (already showed a "not connected" state) | Auth, order history |
| Requests (`/anfrage`), corporate (`/firmenkunden`), contact form (`/atelier`) | Forms that validated input and sent nothing | Mail service or form endpoint + spam protection |
| Workshop booking | "58,00 € buchen" added a seat to the client-side cart — no seat was ever reserved | Booking service with seat inventory |
| Pickup reservation | "Abholung reservieren" button | Reservation service |
| Postcode delivery check | Answered from a hardcoded 652xx–654xx range | Zone lookup: postcode → zone + fee + windows |
| Cut-off countdown & delivery-window picker | Real client-side clock logic, but it only means something if an order can follow | Delivery calendar (business days, holidays, capacity) |
| Product search | Client-side match over the static catalog, linking to detail pages | Search index |
| `/agb`, `/widerruf` | Terms and withdrawal policy | Not a backend issue — they describe a purchase contract that cannot be entered into on this page. Restore them with the shop. |

## 2. On the page, but frozen at build time

These **are** rendered, and they are honest as far as they go — but they are
constants compiled into the HTML. They change only when someone edits the file
and redeploys.

| Element | Where | What a backend would give it |
| --- | --- | --- |
| Bouquet tiles (which six, names, prices) | `src/data/products.ts` → `getShowcaseBouquets()`, rendered by `BouquetShowcase` | Live selection, live prices, real availability. Sold-out state and per-product delivery windows are deliberately **not** rendered — both are order-flow state that cannot be kept truthful here. |
| Occasion price labels ("ab 28,00 €") | `src/data/occasions.ts`, `OccasionsSection` | Catalog-driven pricing |
| Subscription rhythms and prices | `src/data/abo.ts`, `AboSection` | Product service |
| Opening hours | `src/data/atelier.ts` → `OPENING_HOURS`, `HoursSection` + `ContactSection` | Holiday closures and one-off changes ("heute ab 15 Uhr geschlossen") — impossible on a static export |
| Workshop dates | `src/data/atelier.ts` → `WORKSHOPS`, `WorkshopSection` | A workshop calendar. The list goes stale as soon as a date passes; seat counts are left off entirely, since a stale seat count reads as live availability. Marked in the UI as unconfirmed. |
| Team members | `src/data/atelier.ts` → `TEAM`, `TeamSection` | A CMS, if the team changes often |
| Delivery facts (area, windows, fee) | `src/data/delivery.ts`, `DeliverySection` | Per-postcode zones, fees and which windows are open today |
| Copyright year in the footer | `LandingFooter` — `new Date().getFullYear()` runs at **build** time | Nothing; just be aware it is frozen until the next deploy |

## 3. Not a backend, but still missing before this goes live

| Item | Status |
| --- | --- |
| **Photography** | Every image is an `ImagePlaceholder` showing a caption describing the shot that belongs there. This is the most visible gap. |
| **Map** | The map slot is a placeholder. A real map needs a maps provider (embed or tiles + API key). The directions note carries the actual information meanwhile. |
| **Phone number and email** | `0611 000 000` / `hallo@lavanda-wiesbaden.de` come from the handoff and are very likely stand-ins — the Impressum still reads `[E-Mail-Adresse wird ergänzt]` for the same shop. Rendered with a visible `[Telefon und E-Mail vor Veröffentlichung bestätigen]` note so an unreachable number cannot be published by accident. Both are `tel:` / `mailto:` links, which work with no backend at all. |
| **Legal pages** | `Impressum`, `Datenschutz` and `Barrierefreiheit` are kept — a publicly reachable German business site needs the first two by law even without a shop. They are still lawyer-review placeholders, and say so. |
| **Page metadata** | `<title>` and `meta description` stay German in every language. Server-evaluated at build time, so the client-side language switch cannot reach them (CLAUDE.md §4). |

## 4. What genuinely works with no backend

Worth stating, so nobody "fixes" these:

- **Three languages** (DE / UA / EN) — client-side dictionaries, choice stored
  in `localStorage`.
- **Section navigation** — in-page anchors, plus a full-screen menu overlay
  below 768px.
- **`tel:` and `mailto:` links** — handled by the visitor's own device.
- **Scroll reveals and hover effects** — CSS + `IntersectionObserver`, gated
  behind `prefers-reduced-motion`, and content is never left invisible if the
  JS fails.
