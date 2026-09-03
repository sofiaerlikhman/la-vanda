/**
 * German → English dictionary. Same keys as the Ukrainian dictionary
 * (src/i18n/translations.ts) — keyed by the exact German source string.
 * `t()` (see LanguageProvider) consults this when English is active and
 * falls back to the German original when there's no entry. German output is
 * never touched. Prices keep the site's comma-decimal formatting so they
 * match `formatPriceEUR`; times use am/pm for natural English.
 */
export const en: Record<string, string> = {
  // ── Primary navigation ──────────────────────────────────────────────
  "Blumen & Pflanzen": "Flowers & Plants",
  "Anlässe": "Occasions",
  "Auf Anfrage": "On Request",
  "Lieferung": "Delivery",
  "Atelier": "Studio",

  // ── Mobile secondary navigation ─────────────────────────────────────
  "Abo": "Subscription",
  "Gutscheine": "Gift Vouchers",
  "Konto": "Account",
  "Bestellstatus": "Order Status",
  "Liefergebiet prüfen": "Check delivery area",

  // ── Accessible labels (aria) ────────────────────────────────────────
  "Hauptnavigation": "Main navigation",
  "Suche": "Search",
  "Menü": "Menu",
  "Menü schließen": "Close menu",
  "Suche schließen": "Close search",
  "Weitere Seiten": "More pages",
  "Mobile Navigation": "Mobile navigation",
  "Korb": "Cart",
  "Artikel": "items",
  "Suchbegriff": "Search term",

  // ── Cut-off banner ──────────────────────────────────────────────────
  "Heute bis 14 Uhr bestellt — 17–20 Uhr bei dir": "Order by 2pm today — with you 5–8pm",
  "Ab 14 Uhr bestellt — morgen 17–20 Uhr bei dir": "Ordered after 2pm — with you tomorrow 5–8pm",
  "Wiesbaden und Umgebung": "Wiesbaden and surroundings",

  // ── Footer ──────────────────────────────────────────────────────────
  "Sortiment": "Shop",
  "Service": "Service",
  "Rechtliches": "Legal",
  "Sträuße": "Bouquets",
  "Pflanzen": "Plants",
  "Vasen & Zubehör": "Vases & Accessories",
  "Strauß selbst binden": "Build your own bouquet",
  "Lieferung & Zeitfenster": "Delivery & time slots",
  "Abholung im Laden": "Store pickup",
  "Frischegarantie": "Freshness guarantee",
  "Fragen & Antworten": "Questions & Answers",
  "Kontakt": "Contact",
  "AGB": "Terms",
  "Datenschutz": "Privacy",
  "Widerruf": "Right of withdrawal",
  "Impressum": "Imprint",
  "Barrierefreiheit": "Accessibility",
  "Mo–Fr 9–18:30 Uhr": "Mon–Fri 9am–6:30pm",
  "Sa 9–14 Uhr": "Sat 9am–2pm",
  "Bestellschluss 14 Uhr · Lieferung 17–20 Uhr": "Order cut-off 2pm · Delivery 5–8pm",

  // ── Mobile search ───────────────────────────────────────────────────
  "Sträuße, Pflanzen, Anlässe …": "Bouquets, plants, occasions …",
  "Suchbegriff eingeben und Enter drücken — Ergebnisse erscheinen im Sortiment.":
    "Type a search term and press Enter — results appear in the shop.",

  // ── Mobile tab bar ──────────────────────────────────────────────────
  "Start": "Home",
  "Blumen": "Flowers",

  // ── Home · Hero ─────────────────────────────────────────────────────
  "Blumenatelier · Wiesbaden": "Flower studio · Wiesbaden",
  "Heute gebunden,": "Arranged today,",
  "heute bei dir": "with you today",
  "Ein Laden, der liefert. Bestell bis 14 Uhr, wir sind zwischen 17 und 20 Uhr an der Tür.":
    "A shop that delivers. Order by 2pm and we're at your door between 5 and 8pm.",
  "Heute liefern": "Deliver today",
  "Abo ansehen": "View subscription",
  "Werkstatt, Querformat — Hände beim Binden": "Workshop, landscape — hands arranging",

  // ── Home · Today's picks ────────────────────────────────────────────
  "Heute gebunden": "Arranged today",
  "Was heute noch geht": "What still works today",
  "Alle Blumen": "All flowers",

  // ── Home · Atelier section ──────────────────────────────────────────
  "Das Atelier": "The Studio",
  "Gebunden an der": "Arranged on",
  "Wir kaufen dreimal in der Woche selbst ein und binden jeden Strauß am Tag der Lieferung. Was nicht rausgeht, steht im Laden.":
    "We buy fresh three times a week ourselves and arrange every bouquet on the day it's delivered. Whatever doesn't go out stands in the shop.",
  "Marktstraße 12, Wiesbaden. Montag bis Freitag 9–18:30 Uhr, Samstag 9–14 Uhr.":
    "Marktstraße 12, Wiesbaden. Monday to Friday 9am–6:30pm, Saturday 9am–2pm.",
  "Atelier ansehen": "View the studio",
  "Werkstatt, Hände, 4:3": "Workshop, hands, 4:3",

  // ── Home · Abo section ──────────────────────────────────────────────
  "Jede Woche frisch": "Fresh every week",
  "Du wählst Größe, Rhythmus und Wochentag. Wir binden am Morgen und liefern am Abend. Pausieren geht bis 18 Uhr am Vortag.":
    "You choose size, rhythm and weekday. We arrange in the morning and deliver in the evening. Pause until 6pm the day before.",
  "Rhythmus": "Rhythm",
  "Wöchentlich": "Weekly",
  "14-tägig": "Every two weeks",
  "Monatlich": "Monthly",
  "Größe": "Size",
  "Abo starten": "Start subscription",
  "je Lieferung, Versand inklusive": "per delivery, shipping included",
  "Abo-Strauß, Hochformat 3:4": "Subscription bouquet, portrait 3:4",

  // ── Home · Anlässe section ──────────────────────────────────────────
  "Wofür sind": "What are",
  "die Blumen?": "the flowers for?",
  "Zu jedem Anlass eine kuratierte Auswahl, drei Preisstufen, dasselbe Zeitfenster.":
    "A curated selection for every occasion, three price tiers, the same time slot.",
  "Ansehen": "View",
  "Geburtstag": "Birthday",
  "Danke & gute Besserung": "Thanks & get well",
  "Liebe": "Love",
  "Trauer": "Sympathy",
  "Firmenblumen": "Corporate flowers",
  "ab 28,00 €": "from 28,00 €",
  "ab 36,00 €": "from 36,00 €",
  "auf Anfrage": "on request",
  "auf Rechnung": "on account",

  // ── Home · Anfrage band ─────────────────────────────────────────────
  "Floristik nach Maß": "Bespoke floristry",
  "Installationen für Laden und Restaurant, Hochzeiten, Trauerbinderei. Schreib uns Ort, Datum und Budget — wir antworten innerhalb von zwei Werktagen.":
    "Installations for shops and restaurants, weddings, funeral arrangements. Send us the place, date and budget — we reply within two business days.",
  "Anfrage schreiben": "Send a request",
  "Installation, Vollbreite": "Installation, full width",

  // ── Home · Lieferung section ────────────────────────────────────────
  "Liefern wir zu dir?": "Do we deliver to you?",
  "Eigene Fahrer, kein Paketdienst. Zwei Zeitfenster am Tag, samstags eines.":
    "Our own drivers, no parcel service. Two time slots a day, one on Saturdays.",
  "Postleitzahl": "Postal code",
  "Prüfen": "Check",

  // ── Product cards — delivery labels & badges ────────────────────────
  "Heute 17–20 Uhr": "Today 5–8pm",
  "Morgen 11–14 Uhr": "Tomorrow 11am–2pm",
  "Saison": "Seasonal",
  "Neu": "New",
  "Bestseller": "Bestseller",
  "Heute ausverkauft": "Sold out today",

  // ── Delivery-zone check results ─────────────────────────────────────
  "Bitte eine gültige, fünfstellige Postleitzahl eingeben.": "Please enter a valid five-digit postal code.",
  "Diese Postleitzahl liegt außerhalb unseres Liefergebiets. Ruf 0611 000 000 an, wir prüfen es von Hand.":
    "This postal code is outside our delivery area. Call 0611 000 000 and we'll check by hand.",

  // ── Language toggle ─────────────────────────────────────────────────
  "Sprache wählen": "Choose language",

  // ── Product catalog ─────────────────────────────────────────────────
  "Feldrand": "Field Edge",
  "Spätsommer": "Late Summer",
  "Weiß & Grün": "White & Green",
  "Dahlienbund": "Dahlia Bunch",
  "Kleiner Gruß": "Little Greeting",
  "Rosé & Eukalyptus": "Rosé & Eucalyptus",
  "Wiesenbunt": "Meadow Mix",
  "Hortensie solo": "Hydrangea Solo",
  "Werkstattstrauß XL": "Workshop Bouquet XL",
  "Ranunkel & Tulpe": "Ranunculus & Tulip",
  "Nelke modern": "Carnation Modern",
  "Amaryllis einzeln": "Amaryllis Single",
  "Zimmerlinde": "Indoor Linden",
  "Wiesenblumen, Dahlien und Gräser, locker gebunden. Was der Markt am Morgen hergibt — die Zusammenstellung wechselt mit der Woche.":
    "Meadow flowers, dahlias and grasses, loosely arranged. Whatever the market offers in the morning — the mix changes week to week.",
  "[Produktbeschreibung folgt]": "[product description to follow]",
  "Welche Blumen sind drin": "Which flowers are in it",
  "Dahlien, Schafgarbe, Wiesenkerbel, Gräser. Saisonal, deshalb wechselt die Mischung — die Farbwelt bleibt.":
    "Dahlias, yarrow, cow parsley, grasses. Seasonal, so the mix changes — the palette stays.",
  "Pflege & Haltbarkeit": "Care & longevity",
  "Stiele schräg anschneiden, Wasser alle zwei Tage wechseln. Sieben Tage Frischegarantie.":
    "Cut the stems at an angle, change the water every two days. Seven-day freshness guarantee.",
  "Lieferung & Bestellschluss": "Delivery & order cut-off",
  "Wiesbaden und Umgebung, 11–14 Uhr oder 17–20 Uhr, 4,90 €. Eigene Fahrer, kein Paketdienst.":
    "Wiesbaden and surroundings, 11am–2pm or 5–8pm, 4,90 €. Our own drivers, no parcel service.",
  "[Inhalt folgt]": "[content to follow]",
  "Klein": "Small",
  "Mittel": "Medium",
  "Groß": "Large",
  "Strauß Feldrand, 1:1": "Field Edge bouquet, 1:1",
  "Strauß, quadratisch": "Bouquet, square",
  "Strauß weiß, quadratisch": "White bouquet, square",
  "Produktbild, quadratisch": "Product photo, square",
  "Pflanze, quadratisch": "Plant, square",
  "Detail": "Detail",
  "In der Vase": "In the vase",
  "Größenvergleich": "Size comparison",

  // ── Accessories ─────────────────────────────────────────────────────
  "Vase Klar": "Clear Vase",
  "Grußkarte": "Greeting card",
  "Frischmittel": "Flower food",
  "Vase Steingut": "Stoneware Vase",
  "Vase, klar, quadratisch": "Vase, clear, square",
  "Grußkarte, quadratisch": "Greeting card, square",
  "Frischmittel, quadratisch": "Flower food, square",
  "Vase, Steingut, quadratisch": "Vase, stoneware, square",

  // ── Shop page + browser ─────────────────────────────────────────────
  "Am Bestelltag gebunden. Was du hier siehst, steht heute in der Werkstatt — Restmenge inklusive.":
    "Arranged on the day you order. What you see here is in the workshop today — remaining stock included.",
  "Lieber selbst zusammenstellen? Strauß-Konfigurator": "Prefer to build it yourself? Bouquet configurator",
  "Zeitfenster": "Time slots",
  "Zwei feste Fenster täglich: 11–14 Uhr und 17–20 Uhr. Samstags nur vormittags.":
    "Two fixed slots daily: 11am–2pm and 5–8pm. Saturdays mornings only.",
  "Abholung": "Pickup",
  "Im Laden in der Marktstraße, ohne Aufpreis — einfach bei der Bestellung auswählen.":
    "At the shop on Marktstraße, no surcharge — just select it at checkout.",
  "Frische": "Freshness",
  "Sieben Tage Frischegarantie. Meldet sich ein Strauß früher ab, ersetzen wir ihn.":
    "Seven-day freshness guarantee. If a bouquet fades sooner, we replace it.",
  "Empfehlung": "Recommended",
  "Preis aufsteigend": "Price ascending",
  "Preis absteigend": "Price descending",
  "bis 30 €": "up to 30 €",
  "bis 50 €": "up to 50 €",
  "bis 80 €": "up to 80 €",
  "Filter": "Filter",
  "Sortierung": "Sorting",
  "Preis": "Price",
  "Alle Preise": "All prices",
  "Filter & Sortierung": "Filter & Sorting",
  "Schließen": "Close",
  "Zurücksetzen": "Reset",
  "Heute lieferbar": "Deliverable today",
  "Morgen lieferbar": "Deliverable tomorrow",
  "{n} Strauß": "{n} bouquet",
  "{n} Sträuße": "{n} bouquets",
  "{n} Strauß zeigen": "Show {n} bouquet",
  "{n} Sträuße zeigen": "Show {n} bouquets",
  "Weitere {n} laden": "Load {n} more",
  "Nichts gefunden für {q}. Filter zurücksetzen und noch einmal versuchen.":
    "Nothing found for {q}. Reset the filters and try again.",
  "Keine Sträuße für diese Filter. Filter zurücksetzen und noch einmal versuchen.":
    "No bouquets for these filters. Reset the filters and try again.",

  // ── Order countdown ─────────────────────────────────────────────────
  "Bestellschluss": "Order cut-off",
  "in {d}": "in {d}",
  "Danach nächstes Fenster: morgen 11–14 Uhr.": "After that, next slot: tomorrow 11am–2pm.",

  // ── Product detail page ─────────────────────────────────────────────
  "Häufige Fragen": "Frequently asked questions",
  "Passt dazu": "Goes well with",
  "Ähnliche": "Similar",
  "Breadcrumb": "Breadcrumb",
  "Bild anzeigen": "Show image",
  "Bestellschluss 14 Uhr": "Order cut-off 2pm",
  "Menge": "Quantity",
  "Menge verringern": "Decrease quantity",
  "Menge erhöhen": "Increase quantity",
  "Ausverkauft": "Sold out",
  "Hinzugefügt ✓": "Added ✓",
  "In den Korb": "Add to cart",
  "+ Korb": "+ Cart",
  "Eigene Fahrer, kein Paketdienst. Sieben Tage Frischegarantie — meldet sich der Strauß früher ab, ersetzen wir ihn.":
    "Our own drivers, no parcel service. Seven-day freshness guarantee — if the bouquet fades sooner, we replace it.",
  "Produkt nicht gefunden — la Vanda": "Product not found — la Vanda",

  // ── Occasions overview + detail ─────────────────────────────────────
  "Wofür sind die Blumen?": "What are the flowers for?",
  "Bis 14 Uhr bestellt, abends zwischen 17 und 20 Uhr an der Tür. Karte mit Handschrift legen wir dazu.":
    "Order by 2pm and it's at the door between 5 and 8pm. We add a handwritten card.",
  "Wir liefern direkt zur Trauerhalle oder ans Grab, pünktlich zur Aussegnung.":
    "We deliver directly to the funeral hall or graveside, on time for the service.",
  "[wird ergänzt]": "[to follow]",
  "Anlass": "Occasion",
  "Zum Geburtstag": "For a birthday",
  "Unsere Empfehlung": "Our recommendation",
  "Drei Größen, ein Zeitfenster": "Three sizes, one time slot",
  "Am häufigsten": "Most popular",
  "Für den Schreibtisch oder die Küche.": "For the desk or the kitchen.",
  "Der Strauß, den die meisten schicken.": "The bouquet most people send.",
  "Wenn es ein runder Geburtstag ist.": "When it's a milestone birthday.",
  "[Preisstufen folgen]": "[price tiers to follow]",
  "Alle Sträuße zum Geburtstag": "All birthday bouquets",
  "Alle Sträuße zum Dankeschön": "All thank-you bouquets",
  "Alle Sträuße für die Liebe": "All bouquets for love",
  "Was zum Geburtstag passt": "What suits a birthday",
  "Wer den Beschenkten gut kennt, geht nach Farbe: kräftige Dahlien und Zinnien für jemanden, der es deutlich mag, weiße Anemonen und Gräser für alle, die es ruhig mögen. Wer unsicher ist, nimmt den mittleren Strauß — 44,00 €, gemischt, passt in jede Wohnung.":
    "If you know the recipient well, go by colour: bold dahlias and zinnias for someone who likes it striking, white anemones and grasses for anyone who likes it calm. If in doubt, take the medium bouquet — 44,00 €, mixed, fits any home.",
  "Für Lieferungen ins Büro empfehlen wir das Fenster 11–14 Uhr und eine Telefonnummer im Bestellfeld. Für Lieferungen nach Hause das Fenster 17–20 Uhr, dann ist meistens jemand da.":
    "For office deliveries we recommend the 11am–2pm slot and a phone number in the order field. For home deliveries the 5–8pm slot, when someone is usually there.",
  "Weitere Anlässe": "More occasions",

  // ── Checkout · stepper ──────────────────────────────────────────────
  "1 Wann & wohin": "1 When & where",
  "2 Karte & Gruß": "2 Card & message",
  "3 Zahlung": "3 Payment",
  "Bestätigung": "Confirmation",
  "Status": "Status",
  "Wann & wohin": "When & where",
  "Gruß": "Message",
  "Zahlung": "Payment",
  // Cart step
  "Dein Korb": "Your cart",
  "Dein Korb ist leer.": "Your cart is empty.",
  "Sträuße ansehen": "View bouquets",
  "Zusammenfassung": "Summary",
  "Zwischensumme": "Subtotal",
  "Lieferung Wiesbaden": "Delivery Wiesbaden",
  "Summe": "Total",
  "Zur Lieferung": "To delivery",
  "Zeitfenster wählst du im nächsten Schritt. Bis 14 Uhr bestellt, heute 17–20 Uhr geliefert.":
    "Choose the time slot in the next step. Order by 2pm, delivered today 5–8pm.",
  "Entfernen": "Remove",
  "Größe klein": "Size small",
  "Größe mittel": "Size medium",
  "Größe groß": "Size large",
  // Delivery step
  "Erst das Zeitfenster, dann die Adresse. So siehst du sofort, ob heute noch geht.":
    "The time slot first, then the address. That way you see right away if today still works.",
  "Art der Zustellung": "Delivery method",
  "Tag": "Day",
  "Heute": "Today",
  "Montag": "Monday",
  "Dienstag": "Tuesday",
  "Mittwoch": "Wednesday",
  "Donnerstag": "Thursday",
  "Freitag": "Friday",
  "Samstag": "Saturday",
  "Sonntag": "Sunday",
  "An diesem Tag liefern wir nicht — bitte einen anderen Tag wählen.":
    "We don't deliver on this day — please choose another day.",
  "11–14 Uhr": "11am–2pm",
  "17–20 Uhr": "5–8pm",
  "Gewählt": "Selected",
  "Nicht mehr heute": "Not today anymore",
  "Lieferadresse": "Delivery address",
  "Kontaktdaten": "Contact details",
  "Vorname": "First name",
  "Nachname": "Last name",
  "Straße und Nummer": "Street and number",
  "Ort": "City",
  "E-Mail": "Email",
  "Telefon (für die Ankunfts-SMS)": "Phone (for the arrival text)",
  "Wenn niemand öffnet": "If no one answers",
  "Bei Nachbarn abgeben": "Leave with neighbours",
  "Vor der Tür abstellen": "Leave at the door",
  "Zurück ins Atelier, wir rufen an": "Back to the studio, we'll call",
  "Weiter zur Karte": "Continue to the card",
  "Zurück zum Korb": "Back to cart",
  "Kostenlos": "Free",
  // Card step
  "Karte & Gruß": "Card & message",
  "Wir schreiben von Hand. Bis {n} Zeichen passen auf die Karte.":
    "We write by hand. Up to {n} characters fit on the card.",
  "Kartenmotiv": "Card design",
  "Ohne Motiv": "No design",
  "Blüte": "Blossom",
  "Beileid": "Condolence",
  "Karte unifarben": "Card plain",
  "Karte Blüte": "Card blossom",
  "Karte Geburtstag": "Card birthday",
  "Karte Trauer": "Card sympathy",
  "Dein Text": "Your message",
  "{n} von {m} Zeichen": "{n} of {m} characters",
  "Anonym verschicken": "Send anonymously",
  "Ohne meinen Namen zustellen": "Deliver without my name",
  "Karte und Lieferschein bleiben ohne Absender. Für Rückfragen behalten wir deine Daten, geben sie aber nicht weiter.":
    "The card and delivery note stay without a sender. We keep your details for queries but don't pass them on.",
  "Extras": "Extras",
  "Handgeschriebene Karte": "Handwritten card",
  "Frischhaltemittel": "Flower food",
  "Tafel Schokolade": "Bar of chocolate",
  "Weiter zur Zahlung": "Continue to payment",
  "Zurück": "Back",
  "Lieferung steht": "Delivery is set",
  "Abholung: Marktstraße 12, 65183 Wiesbaden": "Pickup: Marktstraße 12, 65183 Wiesbaden",
  // Payment step
  "Rechnung, zahlbar in 14 Tagen": "Invoice, payable in 14 days",
  "SEPA-Lastschrift": "SEPA direct debit",
  "Kreditkarte": "Credit card",
  "Bei Abholung im Laden zahlen": "Pay on pickup in store",
  "Abgebucht wird erst, wenn der Strauß gebunden ist.": "You're only charged once the bouquet is arranged.",
  "Empfohlen": "Recommended",
  "Rechnungsadresse": "Billing address",
  "Wie die Lieferadresse": "Same as delivery address",
  "Gutschein- oder Rabattcode": "Voucher or discount code",
  "Code eingeben": "Enter code",
  "Einlösen": "Redeem",
  "Code ungültig oder abgelaufen.": "Code invalid or expired.",
  "eingelöst": "redeemed",
  "Bestellung prüfen": "Review order",
  "Enthält 7 % USt. auf Blumen, 19 % auf Vasen und Zubehör.":
    "Includes 7% VAT on flowers, 19% on vases and accessories.",
  // Review step
  "Bitte prüfen": "Please review",
  "Karte": "Card",
  "Ändern": "Change",
  "Motiv": "Design",
  ", anonym": ", anonymous",
  "Ohne Grußtext": "No message",
  "Rechnungsadresse wie Lieferadresse": "Billing address same as delivery",
  "Abweichende Rechnungsadresse": "Different billing address",
  "Abholung im Laden, Marktstraße 12, 65183 Wiesbaden": "Store pickup, Marktstraße 12, 65183 Wiesbaden",
  "Ich habe die": "I have read the",
  "und den": "and the",
  " gelesen. Bei frisch gebundener Ware entfällt das Widerrufsrecht ab Bindebeginn.":
    ". For freshly arranged goods the right of withdrawal ends once arranging begins.",
  "Das gewählte Zeitfenster ist inzwischen abgelaufen — bitte in Schritt 1 ein neues wählen.":
    "The chosen time slot has now passed — please pick a new one in step 1.",
  "Wird gesendet…": "Sending…",
  "Kostenpflichtig bestellen": "Place binding order",
  "Enthält": "Includes",
  "keine": "no",
  "Lieferung und 7 % USt. auf Blumen.": "delivery and 7% VAT on flowers.",
  "Fenster noch frei": "Slot still open",
  "Fenster abgelaufen": "Slot expired",
  // Confirmation step
  "Bestellung angenommen": "Order received",
  "Unterwegs zu dir": "On the way to you",
  "heute": "today",
  "Bereit zur": "Ready for",
  "Im Fenster {w} sind wir an der {s}. Zwanzig Minuten vorher bekommst du eine SMS.":
    "In the {w} slot we'll be at {s}. You'll get a text twenty minutes beforehand.",
  "Sag im Laden einfach deine Bestellnummer — wir haben deinen Strauß fertig für dich.":
    "Just give your order number in the shop — we'll have your bouquet ready for you.",
  "Bestellnummer": "Order number",
  "Bestätigung an": "Confirmation to",
  "Lieferung verfolgen": "Track delivery",
  "Weiter stöbern": "Keep browsing",
  "Etwas vergessen? Bis 14 Uhr kannst du unter 0611 000 000 nachlegen — wir packen es dazu, ohne zweite Lieferpauschale.":
    "Forgot something? Until 2pm you can add to it on 0611 000 000 — we'll include it, no second delivery fee.",
  "Bindeplatz, Strauß in Arbeit, 4:5": "Workbench, bouquet in progress, 4:5",
  // Status step
  "Bestellung": "Order",
  "Gebunden": "Arranged",
  "Sobald der Strauß fertig ist": "Once the bouquet is ready",
  "Unterwegs": "On the way",
  "Wenn der Fahrer losfährt": "When the driver sets off",
  "Zugestellt": "Delivered",
  "Im gewählten Zeitfenster": "In the chosen time slot",
  "noch offen": "still pending",
  "Fahrer anrufen": "Call the driver",
  "Inhalt": "Contents",
  "Ohne Konto? Bestellnummer und Postleitzahl genügen, um diesen Status wieder aufzurufen.":
    "No account? An order number and postal code are enough to open this status again.",

  // ── Atelier page ────────────────────────────────────────────────────
  "Atelier & Kontakt": "Studio & Contact",
  "Ein Laden mit Werkstatt dahinter. Vorne kannst du kaufen, hinten binden wir. Beides gehört zusammen.":
    "A shop with a workshop behind it. You buy up front, we arrange in the back. The two belong together.",
  "Öffnungszeiten": "Opening hours",
  "& Anfahrt": "& Directions",
  "Montag bis Freitag": "Monday to Friday",
  "9–18:30 Uhr": "9am–6:30pm",
  "9–14 Uhr": "9am–2pm",
  "geschlossen": "closed",
  "Zwei Minuten von der Haltestelle Luisenplatz. Parkhaus Marktstraße direkt gegenüber, erste halbe Stunde frei.":
    "Two minutes from the Luisenplatz stop. Marktstraße car park directly opposite, first half hour free.",
  "Abholung reservieren": "Reserve pickup",
  "Nachricht schreiben": "Write a message",
  "Wer bindet": "Who arranges",
  "Inhaberin, Floristmeisterin": "Owner, master florist",
  "Floristik, Einkauf": "Floristry, purchasing",
  "Installationen, Events": "Installations, events",
  "Porträt, Hochformat": "Portrait, vertical",
  "Ladenlokal Marktstraße von außen, Querformat": "Marktstraße shopfront from outside, landscape",
  "Karte, Marktstraße 12": "Map, Marktstraße 12",
  "Workshops": "Workshops",
  "Zwei Stunden": "Two hours",
  "an der Werkbank": "at the workbench",
  "Maximal acht Plätze. Material, Werkzeug und ein Glas Wein sind dabei, das Gebundene nimmst du mit.":
    "Eight places maximum. Materials, tools and a glass of wine are included; you take home what you make.",
  "Für Gruppen ab sechs Personen machen wir eigene Termine — auch außerhalb der Öffnungszeiten.":
    "For groups of six or more we arrange private sessions — even outside opening hours.",
  "Nachricht": "Message",
  "schreiben": "Write a",
  "Für Bestellungen, Reklamationen und alles andere. Für Installationen und Hochzeiten nimm besser das":
    "For orders, complaints and everything else. For installations and weddings, better use the",
  "Anfrageformular": "request form",
  "Do, 4. Sep": "Thu, Sep 4",
  "Sa, 13. Sep": "Sat, Sep 13",
  "Do, 25. Sep": "Thu, Sep 25",
  "Sa, 11. Okt": "Sat, Oct 11",
  "Herbstkranz binden": "Make an autumn wreath",
  "Strauß frei gebunden": "Free-form bouquet",
  "Trockenblumen & Gräser": "Dried flowers & grasses",
  "Tischschmuck für Gäste": "Table decoration for guests",
  "3 Plätze": "3 places",
  "1 Platz": "1 place",
  "Ausgebucht": "Fully booked",
  "8 Plätze": "8 places",
  "Warteliste": "Waiting list",
  "{p} buchen": "Book {p}",
  "Bitte Name, E-Mail und Nachricht ausfüllen.": "Please fill in name, email and message.",
  "Danke, deine Nachricht ist da.": "Thanks, we've got your message.",
  "Wir antworten am nächsten Werktag.": "We reply on the next business day.",
  "Name": "Name",
  "Bestellnummer, wenn es um eine Lieferung geht": "Order number, if it's about a delivery",
  "Nachricht senden": "Send message",

  // ── Trauer page ─────────────────────────────────────────────────────
  "Trauerfloristik": "Funeral floristry",
  "Trauerstrauß klassisch": "Sympathy bouquet classic",
  "Trauerstrauß weiß": "Sympathy bouquet white",
  "Bindegebinde": "Tied arrangement",
  "Kranz 50 cm": "Wreath 50 cm",
  "Kranz 70 cm": "Wreath 70 cm",
  "Sargschmuck": "Casket spray",
  "Urnengebinde": "Urn arrangement",
  "Grabgesteck": "Grave arrangement",
  "Ein Werktag Vorlauf": "One business day's notice",
  "Wir liefern direkt zur Trauerhalle oder ans Grab, pünktlich zur Aussegnung. Sag uns Datum, Uhrzeit und Ort — den Rest übernehmen wir.":
    "We deliver directly to the funeral hall or graveside, on time for the service. Tell us the date, time and place — we take care of the rest.",
  "Wenn es schnell gehen muss: 0611 000 000. Wir gehen auch außerhalb der Öffnungszeiten ans Telefon.":
    "If it needs to be quick: 0611 000 000. We answer the phone outside opening hours too.",
  "Kurzfristig": "Short notice",
  "Bis 10 Uhr bestellt, am Folgetag an der Halle": "Order by 10am, at the hall the next day",
  "Kränze und Sargschmuck brauchen einen Werktag Vorlauf. Bindegebinde und Trauersträuße gehen am selben Tag.":
    "Wreaths and casket sprays need one business day's notice. Tied arrangements and sympathy bouquets go the same day.",
  "Lieferung zur": "Delivery to the",
  "Trauerhalle": "funeral hall",
  "Wir kennen die Friedhöfe in Wiesbaden und fahren dreißig Minuten vor Beginn vor. Die Schleife beschriften wir von Hand.":
    "We know the cemeteries in Wiesbaden and arrive thirty minutes before the start. We letter the ribbon by hand.",
  "Ohne Aufpreis": "No surcharge",
  "Angaben zur Trauerfeier": "Details of the service",
  "Nenne uns Name, Datum, Uhrzeit und Ort der Trauerfeier sowie den gewünschten Schleifentext — wir melden uns mit einem Vorschlag und dem Preis.":
    "Tell us the name, date, time and place of the service and the ribbon text you'd like — we'll come back with a proposal and the price.",
  "Name der Verstorbenen oder des Verstorbenen": "Name of the deceased",
  "Datum, Uhrzeit und Ort (Friedhof oder Halle)": "Date, time and place (cemetery or hall)",
  "Schleifentext, wir schreiben von Hand": "Ribbon text, we write by hand",
  "Angaben zur Trauerfeier senden": "Send service details",
  "Wir rufen zur Bestätigung zurück, meist innerhalb einer Stunde.":
    "We call back to confirm, usually within an hour.",
  "Häufige": "Frequently asked",
  "Fragen": "questions",
  "Was kostet ein Kranz?": "How much does a wreath cost?",
  "Ab 140 € für 50 cm Durchmesser. Größere Kränze und Sargschmuck rechnen wir nach Aufwand, wir nennen den Preis vorher.":
    "From 140 € for 50 cm diameter. Larger wreaths and casket sprays we price by effort; we tell you the price beforehand.",
  "Wie lang darf der Schleifentext sein?": "How long can the ribbon text be?",
  "Zwei Zeilen mit je 30 Zeichen passen gut. Mehr geht auf breiterem Band, das bestellen wir am Vortag.":
    "Two lines of 30 characters each fit well. More goes on wider ribbon, which we order the day before.",
  "Können wir die Blumen vorher sehen?": "Can we see the flowers beforehand?",
  "Ja. Wir schicken ein Foto, sobald das Gebinde fertig ist — vor der Lieferung, per Nachricht.":
    "Yes. We send a photo as soon as the arrangement is ready — before delivery, by message.",
  "Rechnung an das Bestattungshaus?": "Invoice to the funeral home?",
  "Möglich. Nenne uns das Haus, wir klären die Abrechnung direkt dort.":
    "Possible. Give us the funeral home and we'll settle the billing directly with them.",

  // ── Abo page + configurator ─────────────────────────────────────────
  "Wir kaufen ein": "We buy in",
  "Dreimal pro Woche am Großmarkt. Was gut ist, kommt ins Abo.":
    "Three times a week at the wholesale market. What's good goes into the subscription.",
  "Am Morgen gebunden": "Arranged in the morning",
  "Kein Lagerstrauß. Jede Woche eine andere Handschrift.": "No stock bouquet. A different signature every week.",
  "Abends geliefert": "Delivered in the evening",
  "Eigene Fahrer, dein Fenster. SMS zwanzig Minuten vorher.": "Our own drivers, your slot. A text twenty minutes before.",
  "Du steuerst": "You're in control",
  "Pausieren, verschieben, kündigen — im Konto, ohne Anruf.": "Pause, reschedule, cancel — in your account, no phone call.",
  "Blumenabo": "Flower subscription",
  "Jede Woche": "Fresh every",
  "frisch gebunden": "week, by hand",
  "Du wählst Rhythmus, Größe und Wochentag. Wir binden am Morgen und liefern am Abend. Pausieren geht bis 18 Uhr am Vortag, kündigen jederzeit.":
    "You choose rhythm, size and weekday. We arrange in the morning and deliver in the evening. Pause until 6pm the day before, cancel any time.",
  "So läuft das Abo": "How the subscription works",
  "Büro-Abo": "Office subscription",
  "Für Empfang": "For reception",
  "und Besprechung": "and meeting rooms",
  "Ab drei Vasen im Haus rechnen wir monatlich auf Rechnung ab. Vasen stellen wir, Wasserwechsel machen wir mit.":
    "From three vases on site we bill monthly on account. We provide the vases and change the water too.",
  "Firmenkunden ansehen": "View business customers",
  "Abo-Strauß auf Werkbank, Hochformat 3:4": "Subscription bouquet on workbench, portrait 3:4",
  "Was, wenn ich verreise?": "What if I travel?",
  "Pausieren bis 18 Uhr am Vortag im Konto. Die Lieferung fällt aus, berechnet wird nichts.":
    "Pause until 6pm the day before in your account. The delivery is skipped and nothing is charged.",
  "Kann ich Blumen ausschließen?": "Can I exclude certain flowers?",
  "Ja. Notiere Allergien oder Abneigungen im Konto, wir hinterlegen sie am Bindeplatz.":
    "Yes. Note allergies or dislikes in your account and we'll flag them at the workbench.",
  "Wie lange läuft das Abo?": "How long does the subscription run?",
  "Unbefristet, kündbar bis 18 Uhr am Vortag der nächsten Lieferung.":
    "Open-ended, cancellable until 6pm the day before the next delivery.",
  "Abo als Geschenk?": "Subscription as a gift?",
  "Wähle im Checkout drei, sechs oder zwölf Lieferungen. Danach endet es von selbst.":
    "Choose three, six or twelve deliveries at checkout. After that it ends on its own.",
  "je Woche": "per week",
  "alle zwei Wochen": "every two weeks",
  "je Monat": "per month",
  "Alle 2 Wochen": "Every 2 weeks",
  "Einmal im Monat": "Once a month",
  "Zehn bis zwölf Stiele, für die Küche": "Ten to twelve stems, for the kitchen",
  "Achtzehn Stiele, unsere häufigste Größe": "Eighteen stems, our most popular size",
  "Dreißig Stiele, für Tresen und Empfang": "Thirty stems, for the counter and reception",
  "1 · Rhythmus": "1 · Rhythm",
  "2 · Größe": "2 · Size",
  "3 · Wochentag & Fenster": "3 · Weekday & slot",
  "Wochentag": "Weekday",
  "Abo abschließen": "Complete subscription",
  "Lieferung inklusive": "delivery included",
  "Erste Lieferung {d}, {w}. Danach automatisch, bis du pausierst.":
    "First delivery {d}, {w}. Automatically after that, until you pause.",

  // ── Lieferung page + components ─────────────────────────────────────
  "Lieferung & Service": "Delivery & Service",
  "Eigene Fahrer,": "Our own drivers,",
  "zwei Fenster": "two slots",
  "Kein Paketdienst. Der Strauß verlässt das Atelier am Bestelltag und kommt im Wasser transportiert bei dir an.":
    "No parcel service. The bouquet leaves the studio on the day you order and arrives transported in water.",
  "Fenster A": "Slot A",
  "Fenster B": "Slot B",
  "Ab 2 Std.": "From 2 hrs",
  "Bestellschluss 9 Uhr am selben Tag": "Order cut-off 9am same day",
  "Bestellschluss 14 Uhr am selben Tag": "Order cut-off 2pm same day",
  "Bestellschluss Freitag 17 Uhr": "Order cut-off Friday 5pm",
  "Marktstraße 12, ohne Aufpreis": "Marktstraße 12, no surcharge",
  "Nächste Liefertermine": "Next delivery dates",
  "Live berechnet aus dem Bestellschluss von oben — schau nach 9 Uhr oder nach 14 Uhr noch einmal vorbei.":
    "Calculated live from the cut-offs above — check back after 9am or after 2pm.",
  "Liefergebiet": "Delivery area",
  "Karte Wiesbaden mit Liefergebiet": "Map of Wiesbaden with delivery area",
  "Ab 90 € Warenwert": "From 90 € order value",
  "ohne Kosten": "free of charge",
  "Außerhalb dieser Orte fahren wir auf Absprache. Ruf an, wir sagen dir sofort, ob es passt.":
    "Beyond these areas we deliver by arrangement. Call and we'll tell you right away if it works.",
  "Wenn niemand da ist": "If no one is home",
  "Du legst im Checkout fest, was dann passiert: Nachbarn, vor der Tür oder zurück ins Atelier. Wir schreiben dir in jedem Fall eine SMS.":
    "You decide at checkout what happens then: neighbours, at the door or back to the studio. Either way we text you.",
  "Auf Wunsch bleiben Karte und Lieferschein ohne Absender. Die Option steht in Schritt 2 des Checkouts.":
    "On request the card and delivery note stay without a sender. The option is in step 2 of checkout.",
  "Sieben Tage Haltbarkeit. Hält der Strauß nicht, binden wir neu oder erstatten — ohne Rücksendung, ein Foto genügt.":
    "Seven days' longevity. If the bouquet doesn't last, we re-arrange or refund — no return, a photo is enough.",
  "Fragen &": "Questions &",
  "Antworten": "Answers",
  "Nichts gefunden? 0611 000 000, Mo–Fr 9–18:30 Uhr.": "Nothing found? 0611 000 000, Mon–Fri 9am–6:30pm.",
  "Wie transportiert ihr die Blumen?": "How do you transport the flowers?",
  "In Wassergel und Papierhülle, aufrecht in Transportkisten. Im Sommer fahren wir mit Kühlung.":
    "In water gel and paper wrap, upright in transport crates. In summer we drive with cooling.",
  "Kann ich ein genaueres Zeitfenster bekommen?": "Can I get a more precise time slot?",
  "Am Liefertag bekommst du zwanzig Minuten vor Ankunft eine SMS mit Namen des Fahrers.":
    "On the delivery day you get a text twenty minutes before arrival with the driver's name.",
  "Liefert ihr an Sonntagen?": "Do you deliver on Sundays?",
  "Nein. Für Trauerfälle und Hochzeiten machen wir Ausnahmen — ruf an, dann finden wir eine Lösung.":
    "No. For bereavements and weddings we make exceptions — call and we'll find a solution.",
  "Wie pflege ich den Strauß?": "How do I care for the bouquet?",
  "Stiele schräg anschneiden, Wasser alle zwei Tage wechseln, nicht neben Obst oder Heizung stellen.":
    "Cut the stems at an angle, change the water every two days, don't place it next to fruit or heating.",
  "Wo finde ich meine Bestellung ohne Konto?": "Where do I find my order without an account?",
  "Mit Bestellnummer und Postleitzahl auf der Bestellstatus-Seite — die eigenständige Such-Seite dafür ist noch nicht angebunden [wird ergänzt]. Ruf in der Zwischenzeit gern an.":
    "With an order number and postal code on the order-status page — the standalone search page for it isn't connected yet [to follow]. In the meantime, feel free to call.",
  "Termine werden geladen …": "Loading dates …",
  "Verfügbare Liefertermine": "Available delivery dates",
  "Kein Liefertag": "Not a delivery day",

  // ── Gutschein page + forms + data ───────────────────────────────────
  "Gutschein": "Gift voucher",
  "Ein Betrag, drei Jahre gültig, einlösbar im Laden und online. Als Karte im Umschlag oder als PDF in der Sekunde.":
    "One amount, valid for three years, redeemable in store and online. As a card in an envelope or a PDF in seconds.",
  "Gutscheinkarte auf Werkbank, 4:3": "Voucher card on workbench, 4:3",
  "Zu den Anlässen": "For the occasions",
  "Weihnachten": "Christmas",
  "Bestellschluss 22. Dezember, 12 Uhr": "Order cut-off December 22, 12pm",
  "Muttertag": "Mother's Day",
  "Zusatzfenster am Sonntag, 9–13 Uhr": "Extra slot on Sunday, 9am–1pm",
  "Valentinstag": "Valentine's Day",
  "Vorbestellung ab 1. Februar": "Pre-order from February 1",
  "Gutschein einlösen": "Redeem voucher",
  "Code im Checkout eingeben oder im Laden vorzeigen. Restbeträge bleiben stehen, Teileinlösung ist möglich.":
    "Enter the code at checkout or show it in store. Remaining balances carry over, partial redemption is possible.",
  "Wie lange ist der Gutschein gültig?": "How long is the voucher valid?",
  "Drei Jahre ab Ausstellung, gerechnet ab Ende des Kaufjahres.":
    "Three years from issue, counted from the end of the year of purchase.",
  "Gilt er auch für Workshops?": "Does it work for workshops too?",
  "Ja, für Workshops, Abos und alles im Laden. Nicht für Installationen auf Anfrage.":
    "Yes, for workshops, subscriptions and everything in store. Not for installations on request.",
  "Kann ich ihn zurückgeben?": "Can I return it?",
  "Innerhalb von 14 Tagen, solange er nicht eingelöst ist. Schreib uns kurz.":
    "Within 14 days, as long as it hasn't been redeemed. Just drop us a line.",
  "Betrag": "Amount",
  "Betrag wählen": "Choose amount",
  "Eigener Betrag, {min} bis {max} €": "Custom amount, {min} to {max} €",
  "z. B. 65": "e.g. 65",
  "Bitte einen Betrag zwischen {min} und {max} € eingeben.": "Please enter an amount between {min} and {max} €.",
  "Zustellung": "Delivery",
  "Zustellung wählen": "Choose delivery",
  "Als PDF per E-Mail": "As a PDF by email",
  "Sofort nach Zahlung, zum Ausdrucken": "Right after payment, to print",
  "Karte im Umschlag": "Card in an envelope",
  "Von Hand beschrieben, per Post oder zum Abholen": "Handwritten, by post or for pickup",
  "Mit einem Strauß geliefert": "Delivered with a bouquet",
  "Gutschein und Blumen in einem Termin": "Voucher and flowers in one delivery",
  "als PDF": "as a PDF",
  "als Karte im Umschlag": "as a card in an envelope",
  "mit Strauß geliefert": "delivered with a bouquet",
  "Grußtext, optional": "Message, optional",
  "Betrag eingeben": "Enter amount",
  " · mit Grußtext": " · with message",
  "Gutscheincode": "Voucher code",
  "Guthaben prüfen": "Check balance",
  "Code nicht gefunden — bitte im Laden nachfragen.": "Code not found — please ask in store.",
  "erkannt": "recognised",
  "10 % Rabatt": "10% discount",
  "Lieferung geschenkt": "Free delivery",

  // ── Anfrage page + form ─────────────────────────────────────────────
  "Floristik": "Floristry",
  "nach Maß": "made to measure",
  "Installationen für Laden, Restaurant und Hotel. Hochzeit und Event. Trauerbinderei. Wir antworten innerhalb von zwei Werktagen mit Vorschlag und Preis.":
    "Installations for shops, restaurants and hotels. Weddings and events. Funeral arrangements. We reply within two business days with a proposal and price.",
  "Installationen & Deko": "Installations & Decor",
  "Ladeninstallation, 4:5": "Shop installation, 4:5",
  "Wöchentlich oder saisonal, für Schaufenster, Empfang und Gastraum. Wir stellen Gefäße, wechseln Wasser und räumen ab.":
    "Weekly or seasonal, for windows, reception and dining rooms. We provide vessels, change water and clear up.",
  "ab 180 € je Termin": "from 180 € per visit",
  "Hochzeit & Event": "Wedding & Event",
  "Hochzeitsfloristik, 4:5": "Wedding floristry, 4:5",
  "Brautstrauß, Anstecker, Tischläufer, Bogen. Aufbau vor Ort, Abbau am Folgetag. Ein Termin im Atelier gehört dazu.":
    "Bridal bouquet, buttonholes, table runners, arch. Setup on site, takedown the next day. A studio appointment is part of it.",
  "ab 900 € Gesamtbudget": "from 900 € total budget",
  "Trauerbinderei, 4:5": "Funeral arrangements, 4:5",
  "Kränze, Sargschmuck, Urnengebinde mit Schleifenband. Lieferung direkt zur Trauerhalle, pünktlich zur Aussegnung.":
    "Wreaths, casket sprays, urn arrangements with ribbon. Delivery directly to the funeral hall, on time for the service.",
  "ab 140 €": "from 140 €",
  "Zur Trauerstrecke": "To the sympathy section",
  "Referenzen": "References",
  "Wo wir": "Where we're",
  "schon stehen": "already present",
  "Zwölf Häuser in Wiesbaden und Mainz, wöchentlich betreut. Auf Wunsch nennen wir Ansprechpartner.":
    "Twelve venues in Wiesbaden and Mainz, serviced weekly. On request we'll name contacts.",
  "Anfrage": "Request",
  "Ort, Datum und Budget genügen für den ersten Vorschlag. Fotos helfen, sind aber kein Muss.":
    "Place, date and budget are enough for a first proposal. Photos help but aren't a must.",
  "Direkt": "Direct",
  "Bitte Name, E-Mail und eine kurze Beschreibung ausfüllen.": "Please fill in name, email and a short description.",
  "Bitte der Verarbeitung deiner Angaben zustimmen.": "Please consent to the processing of your details.",
  "Danke, deine Anfrage ist da.": "Thanks, we've got your request.",
  "Antwort innerhalb von zwei Werktagen, meist am selben Tag.":
    "Reply within two business days, usually the same day.",
  "Firma, wenn vorhanden": "Company, if any",
  "Telefon": "Phone",
  "Art der Anfrage": "Type of request",
  "Installation im Laden oder Restaurant": "Installation in a shop or restaurant",
  "Hochzeit": "Wedding",
  "Firmenevent": "Corporate event",
  "Trauerbinderei": "Funeral arrangements",
  "Etwas anderes": "Something else",
  "Datum": "Date",
  "Adresse oder Stadtteil": "Address or district",
  "Budget": "Budget",
  "bis 300 €": "up to 300 €",
  "300 bis 900 €": "300 to 900 €",
  "900 bis 2.500 €": "900 to 2.500 €",
  "über 2.500 €": "over 2.500 €",
  "Noch offen": "Undecided",
  "Was schwebt dir vor?": "What do you have in mind?",
  "Ich bin mit der Verarbeitung meiner Angaben zur Bearbeitung dieser Anfrage einverstanden.":
    "I consent to my details being processed to handle this request.",
  "Anfrage senden": "Send request",

  // ── Firmenkunden page + form ────────────────────────────────────────
  "Firmenkunden": "Business customers",
  "Ein Ansprechpartner, monatliche Sammelrechnung, feste Preise. Für Empfang, Geburtstage im Team und Kundengeschenke.":
    "One contact, a monthly consolidated invoice, fixed prices. For reception, team birthdays and client gifts.",
  "Firmenkonto anlegen": "Open a business account",
  "Installation anfragen": "Request an installation",
  "Einzeln": "One-off",
  "Saisonal": "Seasonal",
  "Sammelbestellung": "Bulk order",
  "Deko & Event": "Decor & Event",
  "Frische Vasen im Haus, Wasserwechsel inklusive. Ab drei Standorten mit Wochenplan.":
    "Fresh vases on site, water changes included. From three locations with a weekly plan.",
  "ab 44,00 € je Vase und Woche": "from 44,00 € per vase per week",
  "Bis zu fünfzig Adressen in einem Vorgang, jede mit eigener Karte. CSV-Import möglich.":
    "Up to fifty addresses in one go, each with its own card. CSV import possible.",
  "ab 28,00 € je Adresse": "from 28,00 € per address",
  "Schaufenster, Weihnachten, Sommerfest. Aufbau und Abbau durch uns.":
    "Windows, Christmas, summer party. Setup and takedown by us.",
  "Angebot nach Termin": "Quote after a meeting",
  "Was ein": "What a",
  "Firmenkonto kann": "business account can do",
  "Freigeschaltet innerhalb eines Werktags, nach kurzer Bonitätsprüfung.":
    "Activated within one business day, after a brief credit check.",
  "Adressen": "Addresses",
  "Sammelrechnung zum Monatsende, 14 Tage netto, auf Wunsch mit Kostenstelle":
    "Consolidated invoice at month-end, net 14 days, with cost centre on request",
  "Adressbuch für Standorte und Mitarbeitende, Import per CSV":
    "Address book for locations and staff, import via CSV",
  "Nutzer": "Users",
  "Mehrere Bestellberechtigte, ein Budget, Freigabe durch die Verwaltung":
    "Multiple people authorised to order, one budget, approval by administration",
  "Wiederholung": "Recurrence",
  "Geburtstagsliste einmal hinterlegen, wir erinnern und liefern":
    "Set up a birthday list once, we remind and deliver",
  "Eine Durchwahl, ein Name — kein Ticketsystem": "One direct line, one name — no ticket system",
  "Firmenkonto": "Business account",
  "anlegen": "open",
  "Wir melden uns mit den Zahlungsbedingungen und einem Vorschlag für den Wochenplan.":
    "We'll get in touch with the payment terms and a proposal for the weekly plan.",
  "Bitte Firma, Ansprechpartner, Telefon und E-Mail ausfüllen.":
    "Please fill in company, contact, phone and email.",
  "Wir melden uns innerhalb eines Werktags mit den Zahlungsbedingungen und einem Vorschlag für den Wochenplan.":
    "We'll be in touch within one business day with the payment terms and a proposal for the weekly plan.",
  "Firma": "Company",
  "USt-IdNr., wenn vorhanden": "VAT ID, if available",
  "Ansprechpartner": "Contact person",
  "E-Mail für Rechnungen": "Email for invoices",
  "Interesse": "Interest",
  "Mehreres": "Several",
  "Standorte in Wiesbaden": "Locations in Wiesbaden",
  "Einer": "One",
  "Zwei bis drei": "Two to three",
  "Mehr als drei": "More than three",
  "Anmerkungen": "Notes",
  "Konto beantragen": "Apply for account",
  "Freischaltung innerhalb eines Werktags.": "Activation within one business day.",

  // ── Konto page ──────────────────────────────────────────────────────
  "Anmelden": "Sign in",
  "Vorschau: Kontobereich": "Preview: account area",
  "Mit Konto: Bestellungen im Blick, Abo verwalten, Adressen hinterlegen. Registrieren dauert eine Minute.":
    "With an account: orders at a glance, manage your subscription, save addresses. Registering takes a minute.",
  "So ist der Kontobereich aufgebaut, sobald echte Konten angebunden sind — ohne echte Daten.":
    "This is how the account area is set up once real accounts are connected — without real data.",
  "Registrieren": "Register",
  "Passwort": "Password",
  "Passwort bestätigen": "Confirm password",
  "Konto erstellen": "Create account",
  "Bitte E-Mail-Adresse angeben.": "Please provide an email address.",
  "Das sieht nicht nach einer gültigen E-Mail aus.": "That doesn't look like a valid email.",
  "Bitte Passwort angeben.": "Please enter a password.",
  "Bitte Vorname angeben.": "Please enter a first name.",
  "Bitte Nachname angeben.": "Please enter a last name.",
  "Mindestens 8 Zeichen.": "At least 8 characters.",
  "Die Passwörter stimmen nicht überein.": "The passwords don't match.",
  "Konten sind in dieser Version noch nicht angebunden — hier entsteht später die echte Anmeldung.":
    "Accounts aren't connected in this version yet — the real sign-in will be built here later.",
  "Bestellungen": "Orders",
  "Abo verwalten": "Manage subscription",
  "Daten & Zahlung": "Details & Payment",
  "Vorschau — noch nicht mit echten Konten verbunden. Alles hier ist ein leerer Beispielzustand, keine echten Daten.":
    "Preview — not yet connected to real accounts. Everything here is an empty example state, no real data.",
  "Zurück zur Anmeldung": "Back to sign-in",
  "← Übersicht": "← Overview",
  "Noch keine Bestellungen.": "No orders yet.",
  "Sobald du bestellst, erscheinen Status und Verlauf hier.":
    "As soon as you order, status and history appear here.",
  "Sträuße entdecken": "Discover bouquets",
  "Noch kein Abo aktiv.": "No subscription active yet.",
  "Rhythmus, Größe und Lieferfenster lassen sich hier verwalten, sobald der Abo-Konfigurator angebunden ist. [wird ergänzt]":
    "Rhythm, size and delivery slot can be managed here once the subscription configurator is connected. [to follow]",
  "Adresse hinzufügen": "Add address",
  "Adressverwaltung ist in dieser Vorschau noch nicht angebunden.":
    "Address management isn't connected in this preview yet.",
  "Noch keine gespeicherte Adresse.": "No saved address yet.",
  "Hinterlegte Lieferadressen erscheinen hier.": "Saved delivery addresses appear here.",
  "Mobil, für die SMS vor der Lieferung": "Mobile, for the text before delivery",
  "Änderungen speichern": "Save changes",
  "Zahlungsart": "Payment method",
  "Noch keine Zahlungsart hinterlegt.": "No payment method saved yet.",
  "Newsletter": "Newsletter",
  "Einmal im Monat, was in der Werkstatt steht": "Once a month, what's in the workshop",
  "Nur als Vorschau lokal ausgewählt — ohne Konto wird das nicht gespeichert.":
    "Selected locally for preview only — without an account this isn't saved.",

  // ── Konfigurator page + components + data ───────────────────────────
  "Aus dem Kühlhaus, heute morgen": "From the cold store, this morning",
  "Wähle Stiel für Stiel, entscheide über Menge und Verpackung. Der Preis rechnet mit — gebunden wird von Hand am Bestelltag.":
    "Choose stem by stem, decide on quantity and wrapping. The price keeps up — it's arranged by hand on the day you order.",
  "Eimer im Laden": "Buckets in the shop",
  "Hände beim Binden": "Hands arranging",
  "Fertiger Strauß": "Finished bouquet",
  "Bindung": "Arranging",
  "Was hier steht, stand heute morgen noch auf dem Markt. Fehlt eine Sorte, rufen wir an, bevor wir tauschen.":
    "What's here was still at the market this morning. If a variety is missing, we call before we swap.",
  "Spiralbindung von Hand, Stiele frisch angeschnitten, Wasserpolster in der Verpackung.":
    "Spiral-tied by hand, stems freshly cut, water cushion in the wrapping.",
  "Lieber beraten lassen": "Prefer some advice",
  "Für Größeres — Hochzeit, Firma, Trauer — machen wir ein Angebot.":
    "For bigger things — weddings, corporate, funerals — we'll make a quote.",
  "Zur Anfrage": "To the request",
  "Alle": "All",
  "Klassisch": "Classic",
  "Wiese": "Meadow",
  "Zart": "Delicate",
  "Rose Quicksand": "Quicksand Rose",
  "Altrosa, lange haltbar": "Dusky pink, long-lasting",
  "Dahlie": "Dahlia",
  "Vom Feld, wechselnde Farben": "From the field, changing colours",
  "Ranunkel": "Ranunculus",
  "Dicht gefüllt, cremeweiß": "Densely petalled, cream white",
  "Tulpe": "Tulip",
  "Nur in der Saison": "In season only",
  "Nelke": "Carnation",
  "Kräftig, sehr standfest": "Bold, very sturdy",
  "Schafgarbe": "Yarrow",
  "Gelb bis ocker, trocknet gut": "Yellow to ochre, dries well",
  "Wiesenkerbel": "Cow parsley",
  "Luftig, macht Volumen": "Airy, adds volume",
  "Lisianthus": "Lisianthus",
  "Wirkt wie eine kleine Rose": "Looks like a small rose",
  "Anemone": "Anemone",
  "Dunkles Auge, klare Farbe": "Dark centre, clear colour",
  "Eukalyptus": "Eucalyptus",
  "Graugrün, duftet": "Grey-green, fragrant",
  "Gräser": "Grasses",
  "Locker, luftige Silhouette": "Loose, airy silhouette",
  "Pistazie": "Pistachio",
  "Dichtes Blattwerk": "Dense foliage",
  "Seidenpapier": "Tissue paper",
  "Zwei Lagen, Kordel, Wasserpolster": "Two layers, cord, water cushion",
  "Baumwolltuch": "Cotton cloth",
  "Wiederverwendbar, naturweiß": "Reusable, natural white",
  "Trageschachtel": "Carry box",
  "Steht sicher im Auto": "Stands securely in the car",
  "Strauß kommt eingestellt": "Bouquet arrives placed in it",
  "Ohne Karte": "No card",
  "inklusive": "included",
  "Binden von Hand": "Hand-arranging",
  "Stiele": "stems",
  "Wähle links deine Blumen": "Choose your flowers on the left",
  "1 · Blumen wählen": "1 · Choose flowers",
  "{n} Stiele gewählt": "{n} stems chosen",
  "Blumengruppe filtern": "Filter flower group",
  "/ Stiel": "/ stem",
  "weniger": "less",
  "mehr": "more",
  "2 · Grün & Struktur": "2 · Greenery & structure",
  "Grün wählen": "Choose greenery",
  "3 · Verpackung": "3 · Wrapping",
  "Verpackung wählen": "Choose wrapping",
  "4 · Grußkarte": "4 · Greeting card",
  "Grußkarte wählen": "Choose greeting card",
  "Text auf der Karte": "Text on the card",
  "Handgeschrieben von uns, max. {n} Zeichen": "Handwritten by us, max. {n} characters",
  "Dein Strauß": "Your bouquet",
  "Vorschau Strauß": "Bouquet preview",
  "Noch keine Blumen gewählt. Ab 9 Stielen wird der Strauß voll.":
    "No flowers chosen yet. From 9 stems the bouquet fills out.",
  "Mindestbestellwert {p}. Liefertag und Zeitfenster wählst du an der Kasse.":
    "Minimum order {p}. You choose the delivery day and time slot at checkout.",
  "Sieben Tage Frischegarantie": "Seven-day freshness guarantee",
  "Eigene Fahrer, kein Paketdienst": "Our own drivers, no parcel service",
  "Von Hand gebunden am Bestelltag": "Hand-arranged on the day you order",

  // ════════════════════════════════════════════════════════════════════
  //  LEGAL PAGES (placeholder texts — need native/legal review)
  // ════════════════════════════════════════════════════════════════════
  "Stand 31. August 2026": "As of August 31, 2026",
  "Rechtlicher Hinweis:": "Legal notice:",
  "Diese Seite enthält Platzhalter und ersetzt keine anwaltliche Prüfung. Vor Veröffentlichung von einer Rechtsanwältin/einem Rechtsanwalt prüfen lassen.":
    "This page contains placeholders and does not replace legal review. Have it checked by a lawyer before publishing.",
  "Allgemeine Geschäftsbedingungen": "Terms and Conditions",
  "Datenschutzerklärung": "Privacy Policy",
  "Widerrufsbelehrung": "Withdrawal Policy",
  "Erklärung zur Barrierefreiheit": "Accessibility Statement",

  // Impressum
  "Angaben gemäß § 5 TMG": "Information pursuant to § 5 TMG",
  "la Vanda [Rechtsform, z. B. Inhaberin/GmbH — wird ergänzt]":
    "la Vanda [legal form, e.g. sole proprietor/GmbH — to follow]",
  "Vertreten durch": "Represented by",
  "[Name der verantwortlichen Person]": "[name of the responsible person]",
  "Registereintrag": "Register entry",
  "Eintragung im Handelsregister: [Handelsregisternummer, falls zutreffend]":
    "Entry in the commercial register: [commercial register number, if applicable]",
  "Registergericht: [wird ergänzt]": "Registry court: [to follow]",
  "Umsatzsteuer-ID": "VAT ID",
  "Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: [USt-IdNr. wird ergänzt]":
    "VAT identification number pursuant to § 27a of the VAT Act: [VAT ID to follow]",
  "Redaktionell verantwortlich": "Responsible for content",
  "Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV: [Name der verantwortlichen Person], Anschrift wie oben.":
    "Responsible for content pursuant to § 18 (2) MStV: [name of the responsible person], address as above.",
  "EU-Streitschlichtung": "EU dispute resolution",
  "Verbraucherstreitbeilegung": "Consumer dispute resolution",
  ". Unsere E-Mail-Adresse findest du oben unter „Kontakt“.": ". You'll find our email address above under “Contact”.",
  "Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir [wird ergänzt: bereit / nicht bereit und nicht verpflichtet].":
    "We are [to follow: willing / not willing and not obliged] to take part in a dispute resolution procedure before a consumer arbitration board.",
  "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:":
    "The European Commission provides a platform for online dispute resolution (ODR):",

  // Barrierefreiheit
  "Wir wollen, dass jede Person hier bestellen kann. Diese Seite sagt, wo wir stehen und was noch fehlt.":
    "We want everyone to be able to order here. This page says where we stand and what's still missing.",
  "Stand der Umsetzung": "State of implementation",
  "Wir arbeiten daran, den Shop an die WCAG 2.2 auf Stufe AA anzunähern. Bedienelemente sollen mit der Tastatur erreichbar sein, der Fokus sichtbar bleiben und Status nie ausschließlich über Farbe vermittelt werden. Eine vollständige, geprüfte Konformitätserklärung liegt noch nicht vor.":
    "We're working to bring the shop closer to WCAG 2.2 at level AA. Controls should be reachable by keyboard, focus should stay visible and status should never be conveyed by colour alone. A complete, audited conformance statement isn't available yet.",
  "Bekannte Einschränkungen": "Known limitations",
  "Nicht alle Bereiche wurden bereits mit einem Screenreader vollständig getestet.":
    "Not all areas have been fully tested with a screen reader yet.",
  "Ältere Produktfotos haben teils knappe oder fehlende Alternativtexte.":
    "Some older product photos have brief or missing alt text.",
  "Diese Erklärung selbst ist ein Platzhalter und noch nicht durch eine externe Prüfstelle bestätigt.":
    "This statement itself is a placeholder and not yet confirmed by an external audit body.",
  "Barriere melden": "Report a barrier",
  "Ist dir etwas aufgefallen, das dich behindert? Schreib an [E-Mail-Adresse wird ergänzt] oder ruf 0611 000 000 an. Wir melden uns zurück und sagen, wie es weitergeht.":
    "Noticed something that gets in your way? Write to [email address to follow] or call 0611 000 000. We'll get back to you and say what happens next.",
  "Durchsetzungsverfahren": "Enforcement procedure",
  "Bist du mit unserer Antwort nicht zufrieden, kannst du dich an die Durchsetzungs- und Überwachungsstelle des Landes Hessen wenden, die für die Barrierefreiheit von Websites zuständig ist.":
    "If you're not satisfied with our response, you can contact the enforcement and monitoring body of the state of Hesse, which is responsible for website accessibility.",

  // Widerruf
  "Widerrufsrecht": "Right of withdrawal",
  "Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem du oder eine von dir benannte dritte Person, die nicht der Frachtführer ist, die Waren in Besitz genommen hat bzw. haben.":
    "You have the right to withdraw from this contract within fourteen days without giving reasons. The withdrawal period is fourteen days from the day on which you, or a third party named by you who is not the carrier, took possession of the goods.",
  "Um dein Widerrufsrecht auszuüben, musst du uns — la Vanda, Marktstraße 12, 65183 Wiesbaden, Telefon 0611 000 000, E-Mail [E-Mail-Adresse wird ergänzt] — mittels einer eindeutigen Erklärung (z. B. per Post oder E-Mail) über deinen Entschluss informieren, diesen Vertrag zu widerrufen. Zur Wahrung der Widerrufsfrist reicht es, wenn du die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absendest.":
    "To exercise your right of withdrawal, you must inform us — la Vanda, Marktstraße 12, 65183 Wiesbaden, phone 0611 000 000, email [email address to follow] — by means of a clear statement (e.g. by post or email) of your decision to withdraw from this contract. To meet the withdrawal deadline, it is enough that you send your notice of withdrawal before the withdrawal period has expired.",
  "Folgen des Widerrufs": "Consequences of withdrawal",
  "Wenn du diesen Vertrag widerrufst, erstatten wir dir alle Zahlungen, die wir von dir erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass du eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt hast), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag, an dem die Mitteilung über deinen Widerruf bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das du bei der ursprünglichen Transaktion eingesetzt hast, es sei denn, mit dir wurde ausdrücklich etwas anderes vereinbart.":
    "If you withdraw from this contract, we will refund all payments we have received from you, including delivery costs (except for the additional costs arising from your choosing a type of delivery other than the cheapest standard delivery offered by us), without undue delay and no later than fourteen days from the day on which we received notice of your withdrawal. For this refund we use the same means of payment you used for the original transaction, unless expressly agreed otherwise with you.",
  "Wichtige Ausnahme: frisch gebundene Ware": "Important exception: freshly arranged goods",
  "Für Pflanzen, Vasen, Zubehör und nicht eingelöste Gutscheine gilt das Widerrufsrecht uneingeschränkt.":
    "For plants, vases, accessories and unredeemed vouchers the right of withdrawal applies without restriction.",
  "Muster-Widerrufsformular": "Model withdrawal form",
  "Wenn du den Vertrag widerrufen möchtest, kannst du dieses Formular ausfüllen und an uns zurücksenden — oder formlos per E-Mail:":
    "If you wish to withdraw from the contract, you can fill in this form and return it to us — or informally by email:",
  "An: la Vanda, Marktstraße 12, 65183 Wiesbaden, E-Mail [E-Mail-Adresse wird ergänzt]":
    "To: la Vanda, Marktstraße 12, 65183 Wiesbaden, email [email address to follow]",
  "Hiermit widerrufe(n) ich/wir den von mir/uns abgeschlossenen Vertrag über den Kauf der folgenden Waren":
    "I/we hereby withdraw from the contract concluded by me/us for the purchase of the following goods",
  "Bestellt am / erhalten am": "Ordered on / received on",
  "Name der Verbraucherin/des Verbrauchers": "Name of the consumer",
  "Anschrift der Verbraucherin/des Verbrauchers": "Address of the consumer",
  "Bestellnummer, falls bekannt": "Order number, if known",

  // Datenschutz
  "Verantwortlicher": "Controller",
  "Daten aus deiner Bestellung": "Data from your order",
  "Deine Telefonnummer nutzen wir ausschließlich im Zusammenhang mit der Lieferung, etwa für die kurze Ankündigung per SMS, bevor wir bei dir eintreffen.":
    "We use your phone number solely in connection with the delivery, for example for the brief text notification before we arrive.",
  "Anonymer Versand": "Anonymous sending",
  "Im Checkout kannst du eine Grußkarte anonym gestalten. In diesem Fall bleibt dein Name gegenüber der Empfängerin oder dem Empfänger verborgen; für Rückfragen, Zustellung und Buchhaltung bleibt er intern bei uns gespeichert.":
    "At checkout you can make a greeting card anonymous. In that case your name is hidden from the recipient; for queries, delivery and accounting it remains stored internally with us.",
  "Zahlungsdaten": "Payment data",
  "Je nach gewählter Zahlungsart (Rechnung, SEPA-Lastschrift, Kreditkarte, PayPal oder Zahlung bei Abholung) verarbeiten die jeweiligen Zahlungsdienstleister deine Zahlungsdaten. Wir selbst speichern keine Kreditkarten- oder Kontodaten.":
    "Depending on the chosen payment method (invoice, SEPA direct debit, credit card, PayPal or payment on pickup) the respective payment service providers process your payment data. We ourselves do not store any credit card or bank account data.",
  "Warenkorb und lokale Speicherung": "Cart and local storage",
  "Dein Warenkorb wird technisch notwendig im lokalen Speicher deines Browsers (localStorage) abgelegt, damit er beim nächsten Besuch erhalten bleibt. Diese Daten verlassen deinen Browser nicht und werden nicht auf unseren Servern gespeichert. Tracking- oder Marketing-Cookies setzen wir nicht ein.":
    "Your cart is stored, as technically necessary, in your browser's local storage (localStorage) so it's kept for your next visit. This data does not leave your browser and is not stored on our servers. We do not use tracking or marketing cookies.",
  "Anfragen und Kontakt": "Enquiries and contact",
  "Schreibst du uns über ein Kontakt- oder Anfrageformular oder per E-Mail, verarbeiten wir deine Angaben nur, um deine Anfrage zu beantworten (Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO).":
    "If you write to us via a contact or request form or by email, we process your details only to answer your enquiry (Art. 6 (1) (b) or (f) GDPR).",
  "Weitergabe an Dritte": "Disclosure to third parties",
  "Eine Weitergabe deiner Daten erfolgt nur an Dienstleister, die wir zur Vertragserfüllung benötigen (z. B. Zahlungsdienstleister, Zustellung), sowie soweit wir gesetzlich dazu verpflichtet sind. Ein Verkauf deiner Daten an Dritte findet nicht statt.":
    "Your data is only disclosed to service providers we need to fulfil the contract (e.g. payment providers, delivery) and where we are legally obliged to do so. Your data is not sold to third parties.",
  "Speicherdauer": "Retention period",
  "Bestelldaten speichern wir so lange, wie es die handels- und steuerrechtlichen Aufbewahrungsfristen vorschreiben (in der Regel sechs bis zehn Jahre). Danach werden sie gelöscht, soweit keine gesetzliche Pflicht zur weiteren Aufbewahrung besteht.":
    "We store order data for as long as commercial and tax retention periods require (usually six to ten years). After that it is deleted, unless there is a legal obligation to keep it longer.",
  "Hosting": "Hosting",
  "Deine Rechte": "Your rights",
  "Du hast jederzeit das Recht auf:": "You have the right at any time to:",
  "Auskunft über die zu deiner Person gespeicherten Daten (Art. 15 DSGVO)":
    "access to the data stored about you (Art. 15 GDPR)",
  "Berichtigung unrichtiger Daten (Art. 16 DSGVO)": "rectification of inaccurate data (Art. 16 GDPR)",
  "Löschung deiner Daten, soweit keine Aufbewahrungspflicht entgegensteht (Art. 17 DSGVO)":
    "erasure of your data, unless a retention obligation applies (Art. 17 GDPR)",
  "Einschränkung der Verarbeitung (Art. 18 DSGVO)": "restriction of processing (Art. 18 GDPR)",
  "Datenübertragbarkeit (Art. 20 DSGVO)": "data portability (Art. 20 GDPR)",
  "Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)": "objection to processing (Art. 21 GDPR)",

  // AGB
  "1. Geltungsbereich": "1. Scope",
  "2. Vertragspartner": "2. Contracting party",
  "3. Vertragsschluss": "3. Conclusion of contract",
  "4. Preise und Umsatzsteuer": "4. Prices and VAT",
  "5. Lieferung und Abholung": "5. Delivery and pickup",
  "6. Zahlung": "6. Payment",
  "7. Gutscheine": "7. Vouchers",
  "8. Blumen-Abo": "8. Flower subscription",
  "9. Frischegarantie und Reklamation": "9. Freshness guarantee and complaints",
  "10. Widerrufsrecht": "10. Right of withdrawal",
  "11. Haftung": "11. Liability",
  "12. Schlussbestimmungen": "12. Final provisions",
  "Du kannst wählen zwischen:": "You can choose between:",
  "Zahlung bei Abholung im Laden": "Payment on pickup in store",
  "Zahlungsdaten verarbeiten unsere Zahlungsdienstleister; wir selbst speichern keine Zahlungsdaten.":
    "Our payment service providers process payment data; we ourselves store no payment data.",

  // Legal prose (long)
  "Telefon: 0611 000 000": "Phone: 0611 000 000",
  "E-Mail: [E-Mail-Adresse wird ergänzt]": "Email: [email address to follow]",
  "Diese Bedingungen gelten für alle Bestellungen, die über den Onlineshop von la Vanda abgeschlossen werden — Sträuße, Pflanzen, Vasen & Zubehör, Gutscheine sowie das Blumen-Abo.":
    "These terms apply to all orders concluded through the la Vanda online shop — bouquets, plants, vases & accessories, vouchers and the flower subscription.",
  "Vertragspartner ist la Vanda [Rechtsform, z. B. Inhaberin/GmbH — wird ergänzt], Marktstraße 12, 65183 Wiesbaden. Kontaktdaten findest du im":
    "The contracting party is la Vanda [legal form, e.g. sole proprietor/GmbH — to follow], Marktstraße 12, 65183 Wiesbaden. You'll find contact details in the",
  "Die Darstellung der Artikel im Shop ist kein bindendes Angebot, sondern eine Aufforderung zur Bestellung. Mit „Kostenpflichtig bestellen“ gibst du ein verbindliches Angebot ab. Der Vertrag kommt zustande, sobald wir die Bestellung per E-Mail an die im Checkout angegebene Adresse bestätigen. Jede Bestellung erhält eine Bestellnummer im Format LV-JJ-NNNN.":
    "The presentation of items in the shop is not a binding offer but an invitation to order. By clicking “Place binding order” you make a binding offer. The contract is formed once we confirm the order by email to the address given at checkout. Every order receives an order number in the format LV-YY-NNNN.",
  "Alle Preise verstehen sich inklusive der gesetzlichen Umsatzsteuer: 7 % auf Schnittblumen und Pflanzen, 19 % auf Vasen und Zubehör. Bei Lieferung kommt eine Lieferpauschale von 5,90 € hinzu; bei Abholung im Laden entfällt sie.":
    "All prices include statutory VAT: 7% on cut flowers and plants, 19% on vases and accessories. A flat delivery fee of 5,90 € applies for delivery; for store pickup it does not.",
  "Lieferungen erfolgen im Wiesbadener Liefergebiet innerhalb der im Checkout gewählten Zeitfenster (11–14 Uhr oder 17–20 Uhr, samstags nur vormittags), Bestellschluss ist täglich 14 Uhr. Bis 14 Uhr desselben Tages lässt sich eine laufende Bestellung noch ergänzen. Wahlweise kannst du deine Bestellung ohne Aufpreis im Laden in der Marktstraße abholen.":
    "Deliveries are made within the Wiesbaden delivery area during the time slots chosen at checkout (11am–2pm or 5–8pm, Saturdays mornings only); the daily order cut-off is 2pm. Until 2pm the same day a current order can still be added to. Alternatively you can pick up your order at no extra charge at the shop on Marktstraße.",
  "Ist bei Zustellung niemand anzutreffen, verfahren wir nach der im Checkout hinterlegten Anweisung (z. B. Abgabe bei Nachbarn).":
    "If no one is present at delivery, we follow the instruction stored at checkout (e.g. leaving with neighbours).",
  "Gutscheine sind bis zum Ende des dritten Jahres nach dem Jahr des Kaufs einlösbar und können nicht bar ausgezahlt werden. Solange ein Gutschein nicht eingelöst ist, kannst du ihn zurückgeben.":
    "Vouchers are redeemable until the end of the third year after the year of purchase and cannot be paid out in cash. As long as a voucher has not been redeemed, you can return it.",
  "Für das Blumen-Abo gelten gesonderte Bedingungen zu Laufzeit, Kündigung und Rhythmus. [Wird ergänzt, sobald das Abo im Shop buchbar ist.]":
    "Separate terms on duration, cancellation and rhythm apply to the flower subscription. [To follow once the subscription can be booked in the shop.]",
  "Auf Sträuße geben wir sieben Tage Frischegarantie. Meldet sich ein Strauß früher ab, ersetzen wir ihn. Reklamationen bitte mit Bestellnummer und, wenn möglich, einem Foto an uns richten — Kontaktdaten stehen im":
    "We give a seven-day freshness guarantee on bouquets. If a bouquet fades sooner, we replace it. Please send complaints with the order number and, if possible, a photo — contact details are in the",
  "Als Verbraucherin oder Verbraucher steht dir grundsätzlich ein Widerrufsrecht zu. Bei frisch gebundener Ware entfällt es ab Bindebeginn. Die Einzelheiten stehen in unserer":
    "As a consumer you are generally entitled to a right of withdrawal. For freshly arranged goods it ends once arranging begins. The details are in our",
  "Wir haften unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie nach den Vorschriften des Produkthaftungsgesetzes. Für leichte Fahrlässigkeit haften wir nur bei Verletzung einer wesentlichen Vertragspflicht, begrenzt auf den vorhersehbaren, vertragstypischen Schaden.":
    "We are liable without limitation for intent and gross negligence as well as under the provisions of the Product Liability Act. For slight negligence we are liable only for breach of a material contractual obligation, limited to the foreseeable damage typical of the contract.",
  "Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Zwingende verbraucherschützende Bestimmungen deines gewöhnlichen Aufenthaltsorts bleiben unberührt. Gerichtsstand für Kaufleute: [wird ergänzt].":
    "The law of the Federal Republic of Germany applies, excluding the UN Convention on Contracts for the International Sale of Goods. Mandatory consumer-protection provisions of your habitual residence remain unaffected. Place of jurisdiction for merchants: [to follow].",
  "Verantwortlich für die Datenverarbeitung auf dieser Website ist la Vanda [Rechtsform — wird ergänzt], Marktstraße 12, 65183 Wiesbaden, Telefon 0611 000 000, E-Mail [E-Mail-Adresse wird ergänzt]. Weitere Angaben im":
    "Responsible for data processing on this website is la Vanda [legal form — to follow], Marktstraße 12, 65183 Wiesbaden, phone 0611 000 000, email [email address to follow]. Further details in the",
  "Beim Bestellen im Checkout verarbeiten wir Vorname, Nachname, Straße, Postleitzahl, Ort, E-Mail-Adresse und Telefonnummer sowie die gewählten Artikel, Liefer- oder Abholoption und die Zahlungsart. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO — die Verarbeitung ist zur Erfüllung des Kaufvertrags erforderlich. Die Bestellbestätigung mit Bestellnummer senden wir an die von dir angegebene E-Mail-Adresse.":
    "When ordering at checkout we process first name, last name, street, postal code, city, email address and phone number, as well as the chosen items, delivery or pickup option and payment method. The legal basis is Art. 6 (1) (b) GDPR — processing is necessary to perform the purchase contract. We send the order confirmation with the order number to the email address you provided.",
  "Diese Website wird gehostet bei: [Hosting-Anbieter wird ergänzt].":
    "This website is hosted at: [hosting provider to follow].",
  "Eine formlose E-Mail an [E-Mail-Adresse wird ergänzt] genügt. Außerdem kannst du dich bei einer Datenschutzaufsichtsbehörde beschweren, zuständig ist in Hessen: Der Hessische Beauftragte für Datenschutz und Informationsfreiheit.":
    "An informal email to [email address to follow] is enough. You can also complain to a data protection supervisory authority; in Hesse the competent one is: The Hessian Commissioner for Data Protection and Freedom of Information.",
  "Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von Waren, die schnell verderben oder deren Verfallsdatum schnell überschritten würde (§ 312g Abs. 2 Nr. 2 BGB). Das betrifft bei uns vor allem frisch gebundene Sträuße: Sobald wir mit dem Binden deiner Bestellung begonnen haben, handelt es sich um eine für dich individuell angefertigte, schnell verderbliche Ware —":
    "The right of withdrawal does not apply to contracts for the supply of goods that spoil quickly or whose expiry date would soon be exceeded (§ 312g (2) no. 2 BGB). For us this mainly concerns freshly arranged bouquets: once we have begun arranging your order, it is goods made individually for you that spoil quickly —",
  "das Widerrufsrecht entfällt ab diesem Zeitpunkt (Bindebeginn)": "the right of withdrawal ends from this point (the start of arranging)",
  "Genau darauf weisen wir auch im Checkout hin, bevor du die Bestellung abschließt. Bis zum Bindebeginn kannst du wie oben beschrieben ganz normal widerrufen.":
    "We point this out at checkout too, before you complete the order. Until arranging begins you can withdraw entirely normally, as described above.",

  // ═════════════════════════════════════════════════════════════════════
  //  LANDING PAGE (this branch only — the one-page preview site)
  // ═════════════════════════════════════════════════════════════════════
  // Preview status (LandingBanner, PreviewNotice, LandingFooter)
  "Vorschau": "Preview",
  "Bestellung und Reservierung noch nicht möglich": "Ordering and reservation not possible yet",
  "Noch kein Online-Shop": "No online shop yet",
  "Diese Seite zeigt, was wir machen und wo du uns findest. Bestellen und reservieren kannst du hier noch nicht — im Laden an der Marktstraße 12 sind wir zu den Öffnungszeiten da.":
    "This page shows what we make and where to find us. You can't order or reserve here yet — we're in the shop at Marktstraße 12 during opening hours.",

  // Landing chrome (LandingHeader, LandingFooter, LandingMenuOverlay)
  "Zum Inhalt springen": "Skip to content",
  "Auf dieser Seite": "On this page",

  // Landing sections
  "Blumen ansehen": "See the flowers",
  "Was wir binden": "What we make",
  "Eine Auswahl aus dem Laden": "A selection from the shop",
  "Preise als Orientierung. Was im Laden steht, wechselt mit der Saison und dem Einkauf.":
    "Prices are a guide. What is in the shop changes with the season and what we buy.",
  "Wie wir arbeiten": "How we work",
  "Anmeldung online noch nicht möglich.": "Signing up online is not possible yet.",
  "[Termine und freie Plätze werden vor Veröffentlichung bestätigt]":
    "[Dates and available places to be confirmed before publication]",
  "Wie wir liefern": "How we deliver",
  // Bare price: identical in all three languages (comma decimal, non-breaking
  // space before the €, matching formatPriceEUR). Listed so the key audit
  // stays clean rather than relying on the German fallback.
  "4,90 €": "4,90 €",
  "Liefergebühr": "Delivery fee",
  "11–14 Uhr oder 17–20 Uhr": "11am–2pm or 5–8pm",
  "Im Laden zu den Öffnungszeiten": "In the shop during opening hours",
  "So erreichst du uns": "How to reach us",
  "Adresse": "Address",
  "Ein Kontaktformular gibt es auf dieser Seite noch nicht.": "There is no contact form on this page yet.",
  "[Telefon und E-Mail vor Veröffentlichung bestätigen]":
    "[Confirm phone and email before publication]",

  // Datenschutz — landing-branch wording (no cart, no forms, no payments)
  "Keine Bestellung, keine Bestelldaten": "No orders, no order data",
  "Diese Website ist eine reine Informationsseite. Es gibt hier weder Warenkorb noch Bestell-, Buchungs- oder Reservierungsfunktion und keine Formulare. Wir erheben über diese Seite deshalb keine Bestell-, Liefer- oder Zahlungsdaten.":
    "This website is purely an information page. There is no cart, no ordering, booking or reservation function and no forms. We therefore collect no order, delivery or payment data through this page.",
  "Lokale Speicherung": "Local storage",
  "Im lokalen Speicher deines Browsers (localStorage) merken wir uns ausschließlich die von dir gewählte Sprache (Deutsch, Ukrainisch oder Englisch), damit sie beim nächsten Besuch erhalten bleibt. Diese Angabe verlässt dein Gerät nicht. Cookies setzen wir nicht ein, und es sind keine Analyse-, Tracking- oder Marketing-Dienste eingebunden.":
    "In your browser's local storage (localStorage) we remember only the language you chose (German, Ukrainian or English), so it is kept for your next visit. This never leaves your device. We do not use cookies, and no analytics, tracking or marketing services are embedded.",
  "Schreibst du uns per E-Mail oder rufst du uns an, verarbeiten wir deine Angaben nur, um deine Anfrage zu beantworten (Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO). Die Telefon- und E-Mail-Links auf dieser Seite öffnen dein eigenes Telefon- oder E-Mail-Programm; es werden dabei keine Daten an uns übertragen.":
    "If you email or call us, we process your details only in order to answer your enquiry (Art. 6 (1) (b) or (f) GDPR). The phone and email links on this page open your own phone or email program; no data is transmitted to us in the process.",
  "Wir geben deine Daten nicht an Dritte weiter, abgesehen vom Hosting-Anbieter, der die Seite ausliefert, und soweit wir gesetzlich dazu verpflichtet sind. Ein Verkauf deiner Daten an Dritte findet nicht statt.":
    "We do not pass your data to third parties, apart from the hosting provider that serves the page, and where we are legally obliged to. Your data is never sold to third parties.",
};
