# la Vanda — Engineering & Design Guidelines

Rules that apply to **every** code change in this project, for humans and for Claude.

`README.md` describes *what exists* (structure, what's built, known gaps, backend plan).
This file prescribes *how to change it*. When the two disagree, fix the contradiction —
don't silently pick one.

---

## 0. The short list

Before calling any change done:

1. It works from **320 px to ultrawide** — checked, not assumed.
2. `npm run build` passes and still emits **all 37 static pages**.
3. **German output is unchanged** unless German was the point of the change.
4. Every new user-facing string is in **`t()`/`<T>` and in both dictionaries**.
5. No hardcoded colour, spacing, duration or easing that exists as a **token**.
6. Keyboard reachable, focus visible, `prefers-reduced-motion` respected.
7. Nothing invented — missing facts get a **visibly-marked placeholder**.
8. Verified claims only. If it wasn't run, say so.

---

## 1. Responsiveness — every change, every screen

The site is built mobile-and-desktop, not desktop-with-a-mobile-patch. Treat both as
first-class on every change.

- **Breakpoint: `768 px`** (`--lv-bp-mobile`). It's repeated literally in every media
  query because custom properties can't be used in `@media` conditions — keep them in sync.
- **Design widths:** 375 px (mobile reference) and `--lv-container: 1280px` (desktop max).
  Layouts must survive **320 px** at the low end and centre gracefully on ultrawide.
- **Never introduce horizontal page scroll.** Wide content (grids, tables, chip rows,
  timelines) scrolls inside its own `overflow-x: auto` container — the body never does.
- **Use tokens for space,** especially `--lv-margin` (48 px desktop → 24 px mobile). Don't
  hardcode side padding.
- **Respect the mobile chrome.** A fixed bottom tab bar (`--lv-tabbar-h: 56px`) sits above
  the page and `body` reserves that space. Never place interactive content underneath it,
  and never let a new fixed/sticky element cover it.
- **Touch targets ≥ 44 × 44 px** on mobile.
- **Don't ship one side of a pair.** If a feature has a desktop affordance (inline nav,
  hover state), give it a mobile equivalent (tab bar, overlay, tap state) — and vice versa.
  Hover-only interactions must never be the *only* way to reach something.
- **Verify both.** Emulate a narrow viewport *and* a wide one before claiming done. State
  which you checked.

## 2. Structural regression testing — for anything newly added

Every addition must prove it didn't break what was already there.

- **Build is the gate:**
  ```bash
  npm run build
  ```
  It must compile **and** report `Generating static pages (37/37)`. A changed page count
  means a route was added or lost — confirm that was intended, and update this number here
  when it legitimately changes.
- **Check a page you did *not* touch,** not just the one you did. Shared components
  (`SiteHeader`, `SiteFooter`, `ProductCard`, `ImagePlaceholder`, `LegalPage`) reach nearly
  every route — a change to one is a change to all of them.
- **Guard the default output.** When adding a *layer* (a language, a motion pass, a theme),
  the existing German, motion-free baseline must be byte-for-byte unaffected. Verify by
  grepping the prerendered HTML in `out/`, not by reasoning about it.
- **Dictionary parity** after any i18n change (see §4) — key sets must match exactly.
- **Dynamic routes** (`produkt/[slug]`, `anlass/[slug]`) must keep full
  `generateStaticParams` coverage; a missing slug silently disappears from the build.
- **Never claim a pass you didn't run.** If a check was skipped or the environment couldn't
  run it, say which and why.

## 3. Design system — tokens, never magic values

`src/styles/tokens.css` is the single source of truth.

- **Never hardcode** a hex colour, spacing value, font size, radius, duration or easing that
  already exists as a `--lv-*` token. Add a token instead of a one-off value.
- Spacing is a **4 px scale** (`--lv-space-1…10`). Don't invent in-between values.
- **Square by default:** `--lv-radius-0` for cards/images/sections, `--lv-radius-1` (2 px)
  for controls, `--lv-radius-full` for dots/avatars **only**.
- Type comes from the scale (`--lv-text-*`) with the two families
  (`--lv-font-display` / `--lv-font-body` / `--lv-font-mono`).
- **Styles are colocated CSS Modules** (`Component.module.css`). `globals.css` is only for
  genuine globals: reset, base elements, and shared utilities. Don't add global class names
  that could collide.

## 4. Internationalisation — German is the source, UA + EN mirror it

Three languages: `de` (source, prerendered default), `uk`, `en`.

- **Every user-facing string goes through translation.** Client components use
  `useT()` → `t("German source")`. Server components use `<T de="German source" />`
  (they can't call hooks). No raw user-facing German in JSX.
- **The German string *is* the key.** Add each new key to **both**
  `src/i18n/translations.ts` (uk) **and** `src/i18n/en.ts` (en). A key in one but not the
  other is a bug even though it degrades safely.
- **Keys must match byte-for-byte** — en dashes `–`, em dashes `—`, German quotes `„ "`,
  ellipses `…`, `&`, and trailing punctuation. Copy from source, never retype.
- **Verify parity after every i18n change:**
  ```bash
  grep -oP '^\s{2}"[^"]+":' src/i18n/translations.ts | sed 's/^ *//; s/:$//' | sort -u > /tmp/uk.txt
  grep -oP '^\s{2}"[^"]+":' src/i18n/en.ts          | sed 's/^ *//; s/:$//' | sort -u > /tmp/en.txt
  diff /tmp/uk.txt /tmp/en.txt && echo "keys match"
  ```
  Also check for duplicate keys — a duplicate is a TypeScript error and silently overrides.
- **Interpolation uses placeholder keys,** never string concatenation around word order:
  `t("Weitere {n} laden").replace("{n}", String(n))`. Word order differs per language;
  concatenated fragments break it.
- **Translate attributes too:** `aria-label`, `placeholder`, `alt`, and the captions passed
  to `ImagePlaceholder` (it translates its own label).
- **`<select>` option `value` stays German**, only the visible label translates — the stored
  form state must stay language-independent.
- **JSX strips whitespace across newlines.** When splitting a sentence around a `<Link>`,
  either keep the fragments on one line, use `{" "}`, or bake the leading space into the
  German key. Check the rendered German, not just the translation.
- **Missing key ⇒ falls back to German.** That's the safety net, not the plan.
- **Never change German output** while adding or editing another language.
- **Known exception — page metadata stays German.** `export const metadata` (`<title>`,
  `meta description`) is evaluated on the server at build time, so it cannot be translated
  by the client-side switch: browser tabs and search results are German in every language.
  This is a deliberate limit of client-side i18n on a static export, not an oversight. Don't
  "fix" it by wiring metadata into `t()` — that can't work. Fixing it properly means
  per-locale routes (`/en/…`, `/uk/…`) with their own `generateMetadata`, which is a
  separate, larger decision.

## 5. Accessibility

The site publishes an accessibility statement targeting **WCAG 2.2 AA** — changes must not
undercut it.

- Everything interactive is **keyboard reachable and operable**.
- **Focus stays visible.** Use `--lv-focus-ring` / `--lv-focus-offset`; never remove an
  outline without an equally visible replacement.
- **Never convey status by colour alone** — pair colour with text, icon or shape
  (the delivery-urgent labels and stock states already follow this).
- **`prefers-reduced-motion` is honoured** for every animation and transform.
- Prefer **semantic elements**; use ARIA to fill gaps, not to replace semantics.
- Translated `aria-label`s (see §4) — an English-only label in Ukrainian mode is a defect.

## 6. Motion

Motion is decorative enhancement. The site must be fully usable and legible without it.

- **Animate `transform` and `opacity` only** (compositor-friendly). Avoid animating
  layout properties.
- **Gate everything** behind `@media (prefers-reduced-motion: no-preference)`.
- **Reveal once and stay.** Scroll reveals never re-hide on scroll-out — flicker while
  reading is worse than no animation.
- **Content must never be able to get stuck invisible.** The hidden pre-reveal state is
  applied only under `(prefers-reduced-motion: no-preference) and (scripting: enabled)`, so
  no-JS, old-browser and reduced-motion visitors always see content.
- **Don't let a fill-mode animation and a hover effect fight over the same property on the
  same element.** A finished `animation-fill-mode: both/forwards` keeps applying its `to`
  value and will override a hover `transform`. Put reveal animation on the element and hover
  transforms on a *descendant* (this is why `ProductCard` lifts via shadow and zooms its
  inner image rather than transforming the card).
- Reuse the motion tokens (`--lv-dur-*`, `--lv-ease`, `--lv-reveal-rise`, `--lv-hover-*`).
- Keep it **subtle**: this is a florist, not a showreel.

## 7. Static export & hosting constraints

The site is a **fully static export** deployed to GitHub Pages at `/la-vanda`.

- `output: "export"`, `basePath: "/la-vanda"`, `trailingSlash: true`, `images.unoptimized`.
- **Not available:** API routes, server actions, middleware, ISR/revalidation, runtime
  `fetch` in server components, and the `next/image` optimizer. Don't reach for them.
- **Dynamic segments require `generateStaticParams`** covering every valid slug.
- **Internal links must use `next/link`.** A raw `<a href="/…">` does *not* get the
  `basePath` and 404s in production.
- **Absolute asset URLs inside CSS need the `/la-vanda` prefix** — `basePath` does not
  rewrite `url()`. (This is why the `@font-face` sources are prefixed; keep them in sync if
  the basePath ever changes.)
- **Anything read at build time is frozen** in the HTML. Live values (clock, countdowns,
  cut-off state) must be computed client-side after hydration.
- Deployment is automatic: **push to `main` → GitHub Actions → Pages**.

## 8. Content honesty — the project's strongest existing convention

Carried over from the handoff rules and `README.md` ("Echte Logik statt statischem Mock").

- **Never invent** products, prices, photography, reviews, testimonials, availability,
  contact details, or payment methods that aren't anchored elsewhere in the project.
- **Missing facts get a visibly-marked placeholder** — `[wird ergänzt]`, `[Inhalt folgt]`,
  `ImagePlaceholder` — never plausible-looking filler.
- **Prefer real client-side logic over static mocks.** Cut-off times, delivery windows,
  filtering, price calculation and voucher redemption are all really computed; keep new
  features to that standard.
- **Where there is no backend, be honest in the UI.** Show a clear "not connected yet"
  state (as `/konto` and the contact forms do) rather than faking a success.
- **Legal pages are placeholders requiring a lawyer** — that notice must stay, in every
  language.

## 9. Data layer

- Content lives in **`src/data/*.ts`** as typed modules, not inline in components.
- **Keep accessors `async`** even when they only filter a static array — that's the seam a
  real backend slots into without touching callers. Don't "simplify" them to sync.
- New content types get a type + accessor in `src/data`, following the existing shape.

## 10. Code style

- **TypeScript throughout**, explicit prop types on components.
- **Match the surrounding comment density.** This codebase explains *why* and records
  trade-offs and known gaps. Keep that; don't narrate *what* the code plainly does.
- **`"use client"` at the leaf that needs it**, not high in the tree. Server components stay
  server components wherever possible (use `<T>` for their text).
- Colocate `Component.tsx` + `Component.module.css`.
- Follow existing naming and file layout rather than introducing a parallel convention.

## 11. Git & shipping

- **Commit and push only when asked.**
- **Small, single-purpose, revertable commits** — each one should build on its own.
- **Tag a restore point before large or experimental work** (e.g. `pre-ukrainian-i18n`) and
  push the tag, so there's a named way back.
- **Never rewrite pushed history.** To undo, `git revert` — it redeploys cleanly.
- End commit messages with the agreed `Co-Authored-By:` trailer.

## 12. Verification & reporting

- **Run things; don't assume.** Build it, serve it, look at it.
- **Report outcomes faithfully.** If a test fails, show the output. If a step was skipped,
  say so. Don't hedge a verified result, and don't imply verification you didn't do.
- **Know the environment's limits.** The in-app preview can run with a hidden/zero-size
  viewport, which pauses `requestAnimationFrame`, CSS animations and `IntersectionObserver`.
  Motion and scroll-reveal genuinely cannot be observed there — say that plainly instead of
  implying a visual check, and fall back to inspecting computed styles and built output.

---

## Pre-flight checklist

```
[ ] npm run build → passes, 37/37 static pages
[ ] Narrow (≤375px) and wide (≥1280px) both checked, no horizontal scroll
[ ] A page I didn't touch still renders correctly
[ ] German output unchanged (unless German was the change)
[ ] New strings: t()/<T> + both dictionaries + key parity + no duplicates
[ ] No hardcoded values that exist as tokens
[ ] Keyboard + visible focus + prefers-reduced-motion
[ ] No invented content; placeholders visibly marked
[ ] Commit is small, revertable, and builds on its own
```
