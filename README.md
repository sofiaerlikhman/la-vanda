# la Vanda — Online-Shop

Next.js/TypeScript-Frontend für den la Vanda Blumenladen (Wiesbaden), aufgebaut auf dem `design_handoff_lavanda_shop`-Paket (Design-Tokens, Prototypen, Redaktionsregeln). Der komplette Sitemap ist jetzt gebaut, von den für einen funktionierenden Shop wichtigsten Seiten an — siehe "Was gebaut ist" für den Stand jeder einzelnen Seite und "Was noch fehlt" für die bewusst offen gelassenen Stellen (echte Fotos, echtes Backend, Rechtstexte vor dem Launch prüfen lassen).

## Voraussetzungen

- Node.js 18.18 oder neuer
- npm (im Lieferumfang von Node) — yarn/pnpm funktionieren genauso, falls bevorzugt

## Lokal starten

```bash
npm install
npm run dev
```

Dann [http://localhost:3000](http://localhost:3000) öffnen. `npm run build && npm run start` baut und startet eine Produktions-Version lokal.

> **Hinweis zur Erstellung:** Dieses Projekt wurde in einer Sandbox ohne Zugriff auf die npm-Registry geschrieben — `npm install` konnte hier nicht ausgeführt und der Dev-Server nicht live getestet werden. Der Code wurde stattdessen sorgfältig manuell geprüft: eine TypeScript-Kontrolle im strict mode gegen den gesamten Quellcode (alle ~75 `.ts`/`.tsx`-Dateien, null Fehler) sowie ein Abgleich jeder verwendeten CSS-Modul-Klasse gegen ihre `.module.css`-Datei (null Abweichungen) und eine Prüfung, dass jeder interne Link im Projekt auf eine tatsächlich gebaute Route zeigt (keine gefunden, die es nicht gibt). Das ersetzt keinen echten Compile-Lauf — bitte nach dem ersten `npm install && npm run dev` kurz Bescheid geben, falls doch etwas nicht kompiliert, das lässt sich schnell nachbessern.

## Projektstruktur

```
src/
  app/
    layout.tsx              Root-Layout (Fonts, <html lang="de">, CartProvider, Metadata)
    page.tsx                 Startseite
    globals.css               Reset, Begum-@font-face, Body-Grundstil
    sortiment/                Katalogseite "Sträuße"
    produkt/[slug]/            Produktdetailseite (dynamische Route)
    checkout/                 Korb → Kasse, ein einziger Flow mit 7 Schritten
    abo/  konfigurator/  anlaesse/  anlass/[slug]/  trauer/
    lieferung/  gutschein/  atelier/  anfrage/  firmenkunden/  konto/
    impressum/  agb/  datenschutz/  widerruf/  barrierefreiheit/
  components/
    Button.tsx                 primary/secondary/onLavender/ghost, Größen 48/40/32
    SiteHeader.tsx / CartLink.tsx / SiteFooter.tsx
    CutoffBanner.tsx             Bestellschluss-Hinweis — Uhrzeit-Logik live
    ProductCard.tsx / ProductGrid.tsx / Breadcrumb.tsx / ImagePlaceholder.tsx
    home/ sortiment/ produkt/ checkout/ abo/ konfigurator/
    anfrage/ atelier/ firmenkunden/ gutschein/ konto/ lieferung/ textseite/
      — je Seite ihre eigenen Komponenten, gleiche Konventionen wie oben
  context/
    CartContext.tsx            Der echte Warenkorb (siehe "Warenkorb & Checkout")
  data/
    products.ts                Katalog + Produktdetails
    accessories.ts              "Passt dazu"-Zubehör
    occasions.ts                 Anlässe-Liste + Detailinhalte pro Anlass
    delivery.ts                   PLZ-Prüfung + echte Zeitfenster-/Bestellschluss-Logik
    vouchers.ts                    Rabattcode-Einlösung im Checkout (Demo-Codes)
    konfigurator.ts                 Blumen/Grün/Verpackung/Karten-Optionen für den Konfigurator
  styles/
    tokens.css                  1:1 aus design_handoff_lavanda_shop/tokens kopiert
public/
  fonts/                        Begum-Schriftschnitte (.otf, siehe "Schriften")
```

Die Design-Tokens (`src/styles/tokens.css`) sind unverändert aus dem Handoff übernommen — jede Farbe, jeder Abstand im Code referenziert eine `var(--lv-*)`-Variable, keine neuen Werte.

## Was gebaut ist

Jede Seite aus dem Sitemap existiert als echte Route, mit Inhalten aus dem jeweiligen `la Vanda *.dc.html`-Prototyp aus dem Handoff. Wo eine Seite echte Fakten brauchte, die im Handoff fehlten, steht ein sichtbar markierter Platzhalter wie `[wird ergänzt]` statt erfundenem Text — durchgezogen von der Produktseite bis zu den Rechtstexten.

**Kaufstrecke** (der Kern des Shops):
- **Startseite** — Hero, "Was heute noch geht", Atelier-Teaser, Abo-Teaser, Anlässe, Auf-Anfrage-Band, Liefergebiets-Check.
- **Sortiment** (`/sortiment`) — Katalog mit echtem Filter/Sortierung/Paging, Bestellschluss-Countdown.
- **Produkt** (`/produkt/[slug]`) — Galerie, Größenauswahl, FAQ, "Passt dazu", "Ähnliche …". Nur **Feldrand** hat vollständig echten Text; die anderen 12 Katalogprodukte tragen Platzhalter (siehe unten).
- **Strauß-Konfigurator** (`/konfigurator`) — eigenen Strauß aus echten Blumen/Grün/Verpackungs-/Kartenoptionen zusammenstellen, mit laufend berechnetem Preis.
- **Checkout** (`/checkout`) — ein einziger Flow mit den sieben Schritten aus dem Handoff: Korb → Wann & wohin → Karte & Gruß → Zahlung → Prüfen → Bestätigung → Sendungsstatus. Nutzt den echten Warenkorb, echte Liefertag-/Zeitfenster-Verfügbarkeit, einen Gutschein-Einlöse-Mechanismus und erzeugt eine echte Bestellnummer.

**Anlässe & besondere Bedarfe:**
- **Anlässe** (`/anlaesse`) — Übersicht; **Anlass-Vorlage** (`/anlass/geburtstag`, `/anlass/danke`, `/anlass/liebe`) — dynamische Route pro Anlass; **Trauer** (`/trauer`) — eigenständig, zurückhaltenderer Ton, Lieferung zur Trauerhalle, endet in einer Anfrage statt im Warenkorb (Preise "auf Anfrage").
- **Abo** (`/abo`) — Rhythmus/Größe/Zeitfenster-Konfigurator mit echt berechnetem nächsten Liefertermin.
- **Gutschein** (`/gutschein`) — Betrag wählen, Format wählen, in den Korb; eigener Bereich zum Einlösen eines Codes.
- **Firmenkunden** (`/firmenkunden`) — B2B-Infos + eigenes Kontoanfrage-Formular.

**Service & der Laden:**
- **Lieferung** (`/lieferung`) — die ausführliche Version des Home-Teasers: Zonen/Preise, Live-Anzeige der nächsten fünf Liefertage mit echtem Bestellschluss-Status, FAQ.
- **Atelier** (`/atelier`) — über den Laden, Team, Workshops (mit echtem "In den Korb" für buchbare Termine), Öffnungszeiten, Kontaktformular.
- **Anfrage** (`/anfrage`) — Formular für Installationen/Deko, Hochzeit & Event, Trauerbinderei.
- **Konto** (`/konto`) — Login/Registrierung-UI + eine klar als Vorschau gekennzeichnete Kontobereich-Vorschau mit echten Leerzuständen (keine erfundenen Bestellungen/Adressen).

**Rechtliches** (`/impressum`, `/agb`, `/datenschutz`, `/widerruf`, `/barrierefreiheit`) — gemeinsame Vorlage (`src/components/textseite/LegalPage.tsx`), Struktur nach gängigem deutschem Recht, echte Fakten wiederverwendet, wo sie im Projekt schon feststehen (Adresse, Telefon, Zahlungsarten, Widerruf-Ausnahme für frisch gebundene Ware); alles Unternehmensspezifische (Rechtsform, Handelsregister, USt-IdNr., verantwortliche Person) ist als Platzhalter markiert. Jede Seite trägt einen sichtbaren Hinweis, dass das keine anwaltliche Prüfung ersetzt.

### Warenkorb & Checkout — was davon echt ist

Es gibt jetzt einen echten, funktionierenden Warenkorb (`src/context/CartContext.tsx`): "In den Korb" auf der Produktseite, im Konfigurator, bei Abo/Gutschein-Zubehör legt wirklich etwas ab, das im Header-Badge und in `/checkout` erscheint und in `localStorage` überlebt (kein Backend nötig, aber auch keine Synchronisierung zwischen Geräten). Der Checkout selbst rechnet echt: Zwischensumme, Liefergebühr, Gutschein-Rabatt, Summe — alles aus den echten Cart-Daten, nicht aus statischen Mockup-Zahlen. Was am Ende NICHT echt ist: Es gibt keine Zahlungsabwicklung, keinen Datenbank-Auftrag, keine E-Mail-Bestätigung — "Kostenpflichtig bestellen" erzeugt eine Bestellnummer und zeigt die Bestätigungs-/Statusseiten, ohne dass irgendetwas den Server verlässt (siehe "Backend & Inventar").

### Mobile — was gebaut ist

Jede Seite ist jetzt responsiv, mit 768px als Umschaltpunkt (in `src/styles/tokens.css`/`globals.css` dokumentiert — `--lv-margin` wechselt dort automatisch von 48px auf 24px, ohne dass einzelne Seiten das selbst regeln müssen). Grundlage ist die echte Referenz `la Vanda Wireframes Mobile.dc.html` aus dem Handoff, nicht freie Interpretation:

- **Globale mobile Navigation** (`src/components/mobile/`) — fixierte Tab-Leiste unten (Start/Blumen/Suche/Konto/Korb, `MobileTabBar`), Vollbild-Menü-Overlay in Ink-Farbe (`MobileMenuOverlay`, gleiche Linkliste wie die Desktop-Nav plus eine Sekundärliste) und eine eigene Vollbild-Suchansicht (`MobileSearchOverlay`) statt eines Header-Dropdowns — alle drei einmal in `src/app/layout.tsx` eingehängt, kein Per-Seiten-Aufwand nötig. Koordiniert über `src/context/MobileChromeContext.tsx`.
- **Echte Suche statt No-Op.** Der Such-Button im Header war bisher ohne Funktion (siehe alte Lücken-Liste) — jetzt öffnen Header-Icon UND Tab-Leiste dieselbe Sucheingabe, die nach `/sortiment?q=…` führt; `SortimentBrowser` filtert dort echt (Name/Beschreibung, clientseitig) statt ein Ergebnis vorzutäuschen.
- **Sortiment-Filter als eigene Ansicht statt Drawer** — der bestehende Filter-Drawer wird unter 768px zur Vollbildansicht (reine CSS-Anpassung, gleiche Komponente).
- **Fixierte Kaufleiste auf der Produktseite** (`BuyBox`) — Mengenwahl + "In den Korb" bleiben beim Scrollen sichtbar, direkt über der Tab-Leiste.
- **Checkout: 3 Phasen mobil, 7 Schritte darunter unverändert.** Die Wireframes zeigen mobil nur "Wann & wohin" / "Gruß" / "Zahlung" statt der sieben Desktop-Schritte. Statt zwei parallele Checkout-Implementierungen zu pflegen, zeigt `CheckoutStepper` auf Mobilgeräten eine auf 3 Phasen gruppierte Fortschrittsanzeige, während `CheckoutFlow` weiterhin dieselben sieben fokussierten Einzelschritte durchläuft — das erfüllt die Wireframe-Regel "ein Primary pro Ansicht" ohnehin schon pro Schritt.
- **Konto: aus Tabs wird eine Liste.** Wörtliche Vorgabe aus den Wireframes ("Auf mobil wird aus den Konto-Tabs eine Liste; jeder Punkt ist eine eigene Ansicht") — `KontoView` zeigt mobil entweder die Liste (Bestellungen/Abo/Adressen/Daten) oder die gewählte Ansicht mit "← Übersicht"-Rücksprung, nie beide nebeneinander wie am Desktop.
- **Alle übrigen Seiten** (Home, Abo, Konfigurator, Anlässe/Anlass/Trauer, Lieferung, Gutschein, Atelier, Anfrage, Firmenkunden, Rechtstexte) — durchgehend gestapelte Ein-Spalten-Layouts, volle Breite bei primären Buttons, mindestens 44px Tippziele, Schriftgrößen aus derselben Skala wie am Desktop (kein neuer Wert erfunden). Diese Seiten kommen in den Wireframes selbst nicht einzeln vor — dort greift saubere, konsistente Standard-Praxis statt einer erfundenen "mobilen Extraseite".
- **Apple Pay bewusst nicht übernommen.** Eine Variante der Mobile-Wireframes zeigt Apple Pay als Zahlungsoption; das existiert in `PAYMENT_LABELS` (`src/components/checkout/types.ts`) nicht und wurde nicht hinzugefügt, um keine Zahlungsart vorzutäuschen, die nirgends sonst im Projekt verankert ist.

### Echte Logik statt statischem Mock

- **CutoffBanner / OrderCountdown** — Europe/Berlin-Uhrzeit live, Cutoff-Logik geteilt in `src/data/delivery.ts`.
- **Liefertag-/Zeitfenster-Verfügbarkeit** (`getDeliveryDayOptions` in `src/data/delivery.ts`) — echte Berechnung für die nächsten Tage: 11–14-Uhr-Fenster schließt um 9 Uhr, 17–20-Uhr-Fenster um 14 Uhr, samstags nur vormittags, sonntags keine Lieferung (die beiden letzten Regeln sind aus den im Footer genannten Öffnungszeiten abgeleitet, nicht wörtlich im Handoff spezifiziert — bei Bedarf anpassen). Wird von Checkout UND der Lieferung-Seite geteilt.
- **Liefergebiets-Check** (`src/data/delivery.ts`) — PLZ-Bereichsprüfung (65180–65207) als Platzhalter, bis ein echter Zonen-Datensatz aus dem Backend kommt.
- **Sortiment-Filter/Sortierung/Paging** — echt, client-seitig über die Katalogdaten.
- **Gutschein-Einlösung** (`src/data/vouchers.ts`) — zwei Demo-Codes (`WILLKOMMEN10`, `LIEFERFREI`) zum Ausprobieren im Checkout; ersetzt eine echte Gutschein-Datenbank.
- **Konfigurator/Abo-Preisrechner** — laufend neu berechnete Summen aus echten, im jeweiligen Prototyp hinterlegten Preisen.

## Was noch fehlt / bekannte Lücken

- **Echte Produktfotos.** Es gibt keine Fotografie im Handoff — `ImagePlaceholder` zeigt überall eine beschriftete Fläche statt eines Bilds. Sobald Fotos da sind, durch `next/image` ersetzen (Bildpfad ist im `Product`-Typ schon als `image`-Feld vorgesehen).
- **Begum als `.otf`.** Die im Handoff mitgelieferten Schriftschnitte sind Desktop-Schnitte, keine `.woff2`. Funktionieren so im Browser, sind aber größer als nötig — vor dem Launch konvertieren und die Web-Embedding-Lizenz prüfen.
- **Echte Produkttexte.** 12 von 13 Katalogprodukten haben Platzhalter-Beschreibungen/FAQ statt echtem Text (`src/data/products.ts`) — vor dem Launch ersetzen.
- **Rechtstexte.** Alle fünf Seiten unter "Rechtliches" enthalten Platzhalter für unternehmensspezifische Angaben (Rechtsform, Handelsregister, USt-IdNr., E-Mail-Adresse, verantwortliche Person) und müssen vor Veröffentlichung von einer Rechtsanwältin/einem Rechtsanwalt geprüft werden — das ist im Code selbst ebenfalls vermerkt.
- **Konto ist eine Vorschau, kein echtes Login.** Registrierung/Anmeldung bestätigen nur clientseitig, ohne echte Sitzung — siehe "Backend & Inventar".

## Backend & Inventar — nächste Schritte

Die Datenschicht ist bewusst so geschnitten, dass ein echtes Backend reinpasst, ohne die meisten Komponenten anzufassen:

- `src/data/products.ts`, `accessories.ts`, `occasions.ts`, `konfigurator.ts` exportieren durchgehend `async`-Funktionen, obwohl sie aktuell nur feste Arrays filtern — genau deshalb lassen sie sich einzeln durch echte Datenbank-Queries/API-Aufrufe ersetzen, ohne die aufrufenden Seiten zu ändern.
- **Warenkorb.** `src/context/CartContext.tsx` ist echt, aber rein clientseitig (localStorage, kein Server, keine Geräte-Synchronisierung). Für einen Produktionsstand: Cart-Mutationen zusätzlich gegen einen `/api/cart`-Route-Handler spiegeln, oder ganz auf Server-Sessions umstellen.
- **Bestellungen & Zahlung.** Der Checkout (`src/components/checkout/CheckoutFlow.tsx`) erzeugt aktuell nur eine lokale Bestellnummer und räumt den Client-Cart leer — es gibt keine Datenbank-Order, keine echte Zahlungsabwicklung (Rechnung/SEPA/Kreditkarte/PayPal sind reine UI-Auswahl) und keine E-Mail-Bestätigung. Naheliegend: ein `/api/orders`-Route-Handler, ein echter Zahlungsanbieter (z. B. Stripe für Kreditkarte/SEPA, PayPal-SDK für PayPal), ein Transaktions-E-Mail-Versender (z. B. Resend/Postmark).
- **Abos.** `src/app/abo/AboConfigurator` legt beim Abschluss nur eine einmalige Cart-Position an — echtes wiederkehrendes Abrechnen braucht ein Subscriptions-Produkt bei einem Zahlungsanbieter (z. B. Stripe Billing) plus eine `subscriptions`-Tabelle.
- **Gutscheine.** `src/data/vouchers.ts` (Einlösung im Checkout) und die Gutschein-Kaufseite (`/gutschein`) sind aktuell unabhängige Demo-Mechanismen — ein echtes System bräuchte eine `vouchers`-Tabelle, die beim Kauf einen Code erzeugt und ihn beim Einlösen konsumiert.
- **Konto/Auth.** Es gibt noch keine echte Authentifizierung — `/konto` zeigt eine UI-Vorschau ohne Backend. Naheliegend: NextAuth.js oder ein eigenes Session-System, plus `users`/`orders`/`addresses`/`abos`-Tabellen.
- **Empfehlung fürs Backend insgesamt:** Next.js **Route Handlers** (`src/app/api/.../route.ts`) im selben Projekt — kein separates Backend-Repo nötig, deployt zusammen mit dem Frontend. Für die Datenbank bietet sich [Prisma](https://www.prisma.io/) + Postgres an (z. B. gehostet bei Supabase, Neon oder Railway); für Bilder ein Objektspeicher wie S3/Cloudflare R2 plus `next/image` mit `remotePatterns` in `next.config.mjs`.
- **Inventar-Datenmodell**, als Ausgangspunkt: Produkt (Name, Preis, Kategorie, Lagerbestand, Lieferfenster, Fotos), Liefer-Zonen (PLZ → Gebiet, Gebühr, Zeitfenster), Bestellungen, Abos (Rhythmus, Größe, Pausendaten), Gutscheine (Code, Betrag, Status), Nutzer (Adressen, Bestellhistorie).

## Auf GitHub bringen

```bash
git init
git add .
git commit -m "Initial commit: la Vanda Shop"
git branch -M main
git remote add origin <deine-repo-url>
git push -u origin main
```

`.gitignore` schließt bereits `node_modules`, `.next` und lokale Env-Dateien aus.

## Hosting

Als Next.js-Projekt lässt sich das am einfachsten auf **[Vercel](https://vercel.com)** deployen (Zero-Config: Repo verbinden, fertig) — funktioniert genauso auf jedem Node-fähigen Host (Railway, Render, eigener Server mit `npm run build && npm run start`). Sobald ein Backend/eine Datenbank dazukommt, kommen die Verbindungsdaten als Umgebungsvariablen dazu (`.env.local` lokal, im Hosting-Dashboard in Produktion) — `.env*` ist in `.gitignore` bereits ausgeschlossen, damit keine Zugangsdaten versehentlich commitet werden.
