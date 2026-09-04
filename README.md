# la Vanda — Online Shop

Next.js/TypeScript frontend for the la Vanda flower shop (Wiesbaden), built on the `design_handoff_lavanda_shop` package (design tokens, prototypes, editorial rules). The complete sitemap is now built, starting from the pages that matter most for a working shop — see "What is built" for the state of each individual page, and "What is still missing" for the places deliberately left open (real photos, a real backend, legal texts to be reviewed before launch).

## Requirements

- Node.js 18.18 or newer
- npm (ships with Node) — yarn/pnpm work just as well if preferred

## Running locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). `npm run build && npm run start` builds and starts a production version locally.

> **Note on how this was created:** this project was written in a sandbox with no access to the npm registry — `npm install` could not be run here and the dev server could not be tested live. The code was carefully checked by hand instead: a TypeScript check in strict mode against the entire source (all ~75 `.ts`/`.tsx` files, zero errors), a comparison of every CSS module class used against its `.module.css` file (zero mismatches), and a check that every internal link in the project points at a route that is actually built (none found that did not exist). That is no substitute for a real compile run — after the first `npm install && npm run dev`, please say so briefly if something does not compile after all; that can be fixed quickly.

## Project structure

```
src/
  app/
    layout.tsx              Root layout (fonts, <html lang="de">, CartProvider, metadata)
    page.tsx                Home page
    globals.css             Reset, Begum @font-face, base body styling
    sortiment/              Catalogue page "Sträuße"
    produkt/[slug]/         Product detail page (dynamic route)
    checkout/               Cart → checkout, a single flow with 7 steps
    abo/  konfigurator/  anlaesse/  anlass/[slug]/  trauer/
    lieferung/  gutschein/  atelier/  anfrage/  firmenkunden/  konto/
    impressum/  agb/  datenschutz/  widerruf/  barrierefreiheit/
  components/
    Button.tsx              primary/secondary/onLavender/ghost, sizes 48/40/32
    SiteHeader.tsx / CartLink.tsx / SiteFooter.tsx
    CutoffBanner.tsx        Order-cut-off notice — clock logic is live
    ProductCard.tsx / ProductGrid.tsx / Breadcrumb.tsx / ImagePlaceholder.tsx
    home/ catalogue/ product/ checkout/ subscription/ configurator/
    inquiry/ atelier/ corporate/ voucher/ account/ delivery/ legal/
      — each page has its own components, same conventions as above
  context/
    CartContext.tsx         The real cart (see "Cart & checkout")
  data/
    products.ts             Catalogue + product details
    accessories.ts          "Passt dazu" accessories
    occasions.ts            Occasion list + detail content per occasion
    delivery.ts             Postcode check + real time-window/cut-off logic
    vouchers.ts             Discount-code redemption in checkout (demo codes)
    configurator.ts         Flower/greenery/wrapping/card options for the configurator
  styles/
    tokens.css              Copied 1:1 from design_handoff_lavanda_shop/tokens
public/
  fonts/                    Begum weights (.otf, see "Fonts")
```

**Route folders stay German, component folders are English.** Everything under
`src/app/` is a public URL — `/sortiment`, `/produkt/…`, `/impressum` — so those
names are part of the site and are not translated. The component folders under
`src/components/` are internal, so they read in English. The mapping:

| Route | Components |
| --- | --- |
| `/sortiment` | `components/catalogue/` |
| `/produkt/[slug]` | `components/product/` |
| `/abo` | `components/subscription/` |
| `/konfigurator` | `components/configurator/` |
| `/anfrage` | `components/inquiry/` |
| `/firmenkunden` | `components/corporate/` |
| `/gutschein` | `components/voucher/` |
| `/konto` | `components/account/` |
| `/lieferung` | `components/delivery/` |
| `/impressum`, `/agb`, `/datenschutz`, `/widerruf`, `/barrierefreiheit` | `components/legal/` |

The design tokens (`src/styles/tokens.css`) are taken from the handoff unchanged — every colour and every spacing value in the code references a `var(--lv-*)` variable, no new values.

## What is built

Every page from the sitemap exists as a real route, with content from the corresponding `la Vanda *.dc.html` prototype from the handoff. Where a page needed real facts that were missing from the handoff, there is a visibly marked placeholder such as `[wird ergänzt]` instead of invented text — carried through from the product page to the legal texts.

**Purchase path** (the core of the shop):
- **Home page** — hero, "Was heute noch geht", atelier teaser, subscription teaser, occasions, on-request band, delivery-area check.
- **Catalogue** (`/sortiment`) — catalogue with real filtering/sorting/paging, order-cut-off countdown.
- **Product** (`/produkt/[slug]`) — gallery, size selection, FAQ, "Passt dazu", "Ähnliche …". Only **Feldrand** has fully real copy; the other 12 catalogue products carry placeholders (see below).
- **Bouquet configurator** (`/konfigurator`) — assemble your own bouquet from real flower/greenery/wrapping/card options, with a continuously calculated price.
- **Checkout** (`/checkout`) — a single flow with the seven steps from the handoff: cart → when & where → card & greeting → payment → review → confirmation → shipment status. Uses the real cart, real delivery-day/time-window availability and a voucher redemption mechanism, and generates a real order number.

**Occasions & special needs:**
- **Occasions** (`/anlaesse`) — overview; **occasion template** (`/anlass/geburtstag`, `/anlass/danke`, `/anlass/liebe`) — a dynamic route per occasion; **bereavement** (`/trauer`) — standalone, more restrained in tone, delivery to the funeral hall, ending in a request rather than in the cart (prices "auf Anfrage").
- **Subscription** (`/abo`) — rhythm/size/time-window configurator with a genuinely calculated next delivery date.
- **Voucher** (`/gutschein`) — choose an amount, choose a format, add to cart; a separate area for redeeming a code.
- **Corporate customers** (`/firmenkunden`) — B2B information + its own account-request form.

**Service & the shop:**
- **Delivery** (`/lieferung`) — the detailed version of the home teaser: zones/prices, live display of the next five delivery days with real cut-off status, FAQ.
- **Atelier** (`/atelier`) — about the shop, team, workshops (with a real "In den Korb" for bookable dates), opening hours, contact form.
- **Request** (`/anfrage`) — form for installations/decoration, wedding & event, funeral floristry.
- **Account** (`/konto`) — login/registration UI + an account-area preview clearly marked as a preview, with real empty states (no invented orders/addresses).

**Legal** (`/impressum`, `/agb`, `/datenschutz`, `/widerruf`, `/barrierefreiheit`) — shared template (`src/components/legal/LegalPage.tsx`), structured according to common German law, reusing real facts where the project already fixes them (address, phone, payment methods, the withdrawal exception for freshly bound goods); everything company-specific (legal form, commercial register, VAT ID, responsible person) is marked as a placeholder. Every page carries a visible notice that this does not replace review by a lawyer.

### Cart & checkout — what of it is real

There is now a real, working cart (`src/context/CartContext.tsx`): "In den Korb" on the product page, in the configurator and on subscription/voucher accessories really does add something that shows up in the header badge and in `/checkout`, and that survives in `localStorage` (no backend needed, but no synchronisation between devices either). The checkout itself calculates for real: subtotal, delivery fee, voucher discount, total — all from the real cart data, not from static mockup numbers. What is NOT real in the end: there is no payment processing, no database order, no email confirmation — "Kostenpflichtig bestellen" generates an order number and shows the confirmation/status pages without anything leaving the client (see "Backend & inventory").

### Mobile — what is built

Every page is now responsive, with 768px as the switching point (documented in `src/styles/tokens.css`/`globals.css` — `--lv-margin` switches automatically from 48px to 24px there, without individual pages having to handle it themselves). The basis is the real reference `la Vanda Wireframes Mobile.dc.html` from the handoff, not free interpretation:

- **Global mobile navigation** (`src/components/mobile/`) — fixed tab bar at the bottom (home/flowers/search/account/cart, `MobileTabBar`), full-screen menu overlay in ink colour (`MobileMenuOverlay`, the same link list as the desktop nav plus a secondary list) and a dedicated full-screen search view (`MobileSearchOverlay`) instead of a header dropdown — all three mounted once in `src/app/layout.tsx`, so no per-page work is needed. Coordinated via `src/context/MobileChromeContext.tsx`.
- **Real search instead of a no-op.** The search button in the header previously had no function (see the old gap list) — now the header icon AND the tab bar open the same search input, which leads to `/sortiment?q=…`; `CatalogueBrowser` filters there for real (name/description, client-side) instead of faking a result.
- **Catalogue filters as their own view instead of a drawer** — below 768px the existing filter drawer becomes a full-screen view (a pure CSS adjustment, same component).
- **Fixed buy bar on the product page** (`BuyBox`) — quantity selection + "In den Korb" stay visible while scrolling, directly above the tab bar.
- **Checkout: 3 phases on mobile, the 7 steps underneath unchanged.** The wireframes show only "Wann & wohin" / "Gruß" / "Zahlung" on mobile instead of the seven desktop steps. Rather than maintaining two parallel checkout implementations, `CheckoutStepper` shows a progress indicator grouped into 3 phases on mobile devices, while `CheckoutFlow` still walks through the same seven focused individual steps — which already satisfies the wireframe rule "one primary per view" per step anyway.
- **Account: tabs become a list.** A literal requirement from the wireframes ("on mobile the account tabs become a list; each item is its own view") — on mobile `AccountView` shows either the list (orders/subscription/addresses/details) or the selected view with a "← Übersicht" way back, never both side by side as on desktop.
- **All remaining pages** (home, subscription, configurator, occasions/occasion/bereavement, delivery, voucher, atelier, request, corporate customers, legal texts) — consistently stacked single-column layouts, full width for primary buttons, tap targets of at least 44px, font sizes from the same scale as on desktop (no new value invented). These pages do not appear individually in the wireframes themselves — there, clean and consistent standard practice applies instead of an invented "extra mobile page".
- **Apple Pay deliberately not adopted.** One variant of the mobile wireframes shows Apple Pay as a payment option; it does not exist in `PAYMENT_LABELS` (`src/components/checkout/types.ts`) and was not added, so as not to fake a payment method that is not anchored anywhere else in the project.

### Real logic instead of a static mock

- **CutoffBanner / OrderCountdown** — Europe/Berlin time live, cut-off logic shared in `src/data/delivery.ts`.
- **Delivery-day/time-window availability** (`getDeliveryDayOptions` in `src/data/delivery.ts`) — a real calculation for the coming days: the 11:00–14:00 window closes at 09:00, the 17:00–20:00 window at 14:00, Saturdays mornings only, no delivery on Sundays (the last two rules are derived from the opening hours named in the footer, not specified literally in the handoff — adjust if needed). Shared by checkout AND the delivery page.
- **Delivery-area check** (`src/data/delivery.ts`) — postcode range check (65180–65207) as a placeholder until a real zone dataset comes from the backend.
- **Catalogue filtering/sorting/paging** — real, client-side over the catalogue data.
- **Voucher redemption** (`src/data/vouchers.ts`) — two demo codes (`WILLKOMMEN10`, `LIEFERFREI`) to try out in checkout; stands in for a real voucher database.
- **Configurator/subscription price calculator** — continuously recalculated totals from real prices stored in the respective prototype.

## What is still missing / known gaps

- **Real product photos.** There is no photography in the handoff — `ImagePlaceholder` shows a captioned area everywhere instead of an image. As soon as photos exist, replace it with `next/image` (the image path is already provided for as an `image` field on the `Product` type).
- **Begum as `.otf`.** The weights supplied with the handoff are desktop cuts, not `.woff2`. They work in the browser as they are, but are larger than necessary — convert before launch and check the web embedding licence.
- **Real product copy.** 12 of 13 catalogue products have placeholder descriptions/FAQs instead of real text (`src/data/products.ts`) — replace before launch.
- **Legal texts.** All five pages under "Legal" contain placeholders for company-specific details (legal form, commercial register, VAT ID, email address, responsible person) and must be reviewed by a lawyer before publication — this is noted in the code itself as well.
- **The account is a preview, not a real login.** Registration/sign-in only confirm client-side, without a real session — see "Backend & inventory".

## Backend & inventory — next steps

The data layer is deliberately cut so that a real backend fits in without touching most components:

- `src/data/products.ts`, `accessories.ts`, `occasions.ts`, `configurator.ts` export `async` functions throughout, even though they currently only filter fixed arrays — precisely so they can be replaced one by one with real database queries/API calls without changing the calling pages.
- **Cart.** `src/context/CartContext.tsx` is real, but purely client-side (localStorage, no server, no device synchronisation). For a production state: additionally mirror cart mutations against an `/api/cart` route handler, or move to server sessions entirely.
- **Orders & payment.** The checkout (`src/components/checkout/CheckoutFlow.tsx`) currently only generates a local order number and empties the client cart — there is no database order, no real payment processing (invoice/SEPA/credit card/PayPal are pure UI selection) and no email confirmation. The obvious next steps: an `/api/orders` route handler, a real payment provider (e.g. Stripe for credit card/SEPA, the PayPal SDK for PayPal), and a transactional email sender (e.g. Resend/Postmark).
- **Subscriptions.** `src/components/subscription/SubscriptionConfigurator.tsx` only creates a one-off cart line on completion — real recurring billing needs a subscription product at a payment provider (e.g. Stripe Billing) plus a `subscriptions` table.
- **Vouchers.** `src/data/vouchers.ts` (redemption in checkout) and the voucher purchase page (`/gutschein`) are currently independent demo mechanisms — a real system would need a `vouchers` table that generates a code on purchase and consumes it on redemption.
- **Account/auth.** There is no real authentication yet — `/konto` shows a UI preview with no backend. The obvious next steps: NextAuth.js or a custom session system, plus `users`/`orders`/`addresses`/`abos` tables.
- **Recommendation for the backend overall:** Next.js **route handlers** (`src/app/api/.../route.ts`) in the same project — no separate backend repo needed, and it deploys together with the frontend. For the database, [Prisma](https://www.prisma.io/) + Postgres is a good fit (e.g. hosted at Supabase, Neon or Railway); for images, object storage such as S3/Cloudflare R2 plus `next/image` with `remotePatterns` in `next.config.mjs`.
- **Inventory data model**, as a starting point: product (name, price, category, stock, delivery window, photos), delivery zones (postcode → area, fee, time windows), orders, subscriptions (rhythm, size, pause dates), vouchers (code, amount, status), users (addresses, order history).

## Putting it on GitHub

```bash
git init
git add .
git commit -m "Initial commit: la Vanda Shop"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

`.gitignore` already excludes `node_modules`, `.next` and local env files.

## What is live right now?

> **Currently live: the `landing` branch** — a one-page preview with no
> ordering, reservation or booking function. This branch (`main`), with the
> complete shop, stays exactly as it is and can be published again at any time.

What gets published is **always the branch named under `LIVE_BRANCH` in
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)** — not the
branch you pushed last. So a push to `main` does not change the live site by
accident.

**Back to the complete shop:** set `LIVE_BRANCH` to `main` — on **both**
branches, so the two copies of the file agree — and push:

```bash
git checkout main
sed -i 's/^  LIVE_BRANCH: .*/  LIVE_BRANCH: main/' .github/workflows/deploy.yml
git commit -am "Publish the full shop again"
git push

git checkout landing
sed -i 's/^  LIVE_BRANCH: .*/  LIVE_BRANCH: main/' .github/workflows/deploy.yml
git commit -am "Publish the full shop again"
git push
```

The first push starts the deploy; the second only keeps the file in sync. The
other way round (back to the landing page) works the same, with `landing`
instead of `main`.

**Publish once without changing anything:** Actions tab → "Deploy to GitHub
Pages" → "Run workflow" → type the branch name into the "branch" field. That
applies to that run only; the next push publishes `LIVE_BRANCH` again.

What the landing page shows and what it is still missing is written up in
`BACKEND.md` on the `landing` branch.

## Hosting

As a Next.js project this is easiest to deploy on **[Vercel](https://vercel.com)** (zero config: connect the repo, done) — it works just as well on any Node-capable host (Railway, Render, your own server with `npm run build && npm run start`). As soon as a backend/database is added, the connection details come along as environment variables (`.env.local` locally, in the hosting dashboard in production) — `.env*` is already excluded in `.gitignore` so that no credentials get committed by accident.
