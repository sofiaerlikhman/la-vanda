/**
 * German → Ukrainian dictionary (first cut: shared chrome + home page).
 *
 * Keyed by the exact German source string. `t()` (see LanguageProvider)
 * looks a string up here when Ukrainian is active and falls back to the
 * German original when there's no entry — so anything not yet translated
 * simply stays German and nothing ever breaks. German output is never
 * touched: the dictionary is only consulted for `lang === "uk"`.
 *
 * IMPORTANT: keys must match the component text byte-for-byte, including
 * en dashes (–), em dashes (—) and punctuation. Copy the source verbatim.
 */
export const uk: Record<string, string> = {
  // ── Primary navigation (data/nav.ts) ───────────────────────────────
  "Blumen & Pflanzen": "Квіти та рослини",
  "Anlässe": "Приводи",
  "Auf Anfrage": "На замовлення",
  "Lieferung": "Доставка",
  "Atelier": "Ательє",

  // ── Mobile secondary navigation ─────────────────────────────────────
  "Abo": "Підписка",
  "Gutscheine": "Подарункові сертифікати",
  "Konto": "Акаунт",
  "Bestellstatus": "Статус замовлення",
  "Liefergebiet prüfen": "Перевірити зону доставки",

  // ── Accessible labels (aria) ────────────────────────────────────────
  "Hauptnavigation": "Головна навігація",
  "Suche": "Пошук",
  "Menü": "Меню",
  "Menü schließen": "Закрити меню",
  "Suche schließen": "Закрити пошук",
  "Weitere Seiten": "Інші сторінки",
  "Mobile Navigation": "Мобільна навігація",
  "Korb": "Кошик",
  "Artikel": "товарів",
  "Suchbegriff": "Пошуковий запит",

  // ── Cut-off banner (CutoffBanner) ───────────────────────────────────
  "Heute bis 14 Uhr bestellt — 17–20 Uhr bei dir": "Замовлення до 14:00 — сьогодні 17–20 год у вас",
  "Ab 14 Uhr bestellt — morgen 17–20 Uhr bei dir": "Замовлення після 14:00 — завтра 17–20 год у вас",
  "Wiesbaden und Umgebung": "Вісбаден і околиці",

  // ── Footer (SiteFooter) ─────────────────────────────────────────────
  "Sortiment": "Асортимент",
  "Service": "Сервіс",
  "Rechtliches": "Правова інформація",
  "Sträuße": "Букети",
  "Pflanzen": "Рослини",
  "Vasen & Zubehör": "Вази та аксесуари",
  "Strauß selbst binden": "Зібрати букет самому",
  "Lieferung & Zeitfenster": "Доставка та часові вікна",
  "Abholung im Laden": "Самовивіз у магазині",
  "Frischegarantie": "Гарантія свіжості",
  "Fragen & Antworten": "Питання та відповіді",
  "Kontakt": "Контакти",
  "AGB": "Умови користування",
  "Datenschutz": "Конфіденційність",
  "Widerruf": "Право відмови",
  "Impressum": "Реквізити",
  "Barrierefreiheit": "Доступність",
  "Mo–Fr 9–18:30 Uhr": "Пн–Пт 9–18:30",
  "Sa 9–14 Uhr": "Сб 9–14",
  "Bestellschluss 14 Uhr · Lieferung 17–20 Uhr": "Прийом замовлень до 14:00 · Доставка 17–20 год",

  // ── Mobile search (MobileSearchOverlay) ─────────────────────────────
  "Sträuße, Pflanzen, Anlässe …": "Букети, рослини, приводи …",
  "Suchbegriff eingeben und Enter drücken — Ergebnisse erscheinen im Sortiment.":
    "Введіть запит і натисніть Enter — результати з'являться в асортименті.",

  // ── Mobile tab bar (MobileTabBar) ───────────────────────────────────
  "Start": "Головна",
  "Blumen": "Квіти",

  // ── Home · Hero ─────────────────────────────────────────────────────
  "Blumenatelier · Wiesbaden": "Квіткове ательє · Вісбаден",
  "Heute gebunden,": "Зібрано сьогодні,",
  "heute bei dir": "сьогодні у вас",
  "Ein Laden, der liefert. Bestell bis 14 Uhr, wir sind zwischen 17 und 20 Uhr an der Tür.":
    "Магазин, який доставляє. Замовляйте до 14:00 — ми біля ваших дверей між 17 та 20 годиною.",
  "Heute liefern": "Доставити сьогодні",
  "Abo ansehen": "Переглянути підписку",
  "Werkstatt, Querformat — Hände beim Binden": "Майстерня, горизонтально — руки під час збирання букета",

  // ── Home · Today's picks (TodaysPicksSection) ───────────────────────
  "Heute gebunden": "Зібрано сьогодні",
  "Was heute noch geht": "Що ще встигнемо сьогодні",
  "Alle Blumen": "Усі квіти",

  // ── Home · Atelier section (AtelierSection) ─────────────────────────
  "Das Atelier": "Ательє",
  "Gebunden an der": "Зібрано на",
  "Wir kaufen dreimal in der Woche selbst ein und binden jeden Strauß am Tag der Lieferung. Was nicht rausgeht, steht im Laden.":
    "Ми тричі на тиждень самі закуповуємо квіти й збираємо кожен букет у день доставки. Те, що не поїхало, лишається в магазині.",
  "Marktstraße 12, Wiesbaden. Montag bis Freitag 9–18:30 Uhr, Samstag 9–14 Uhr.":
    "Marktstraße 12, Вісбаден. Понеділок–п'ятниця 9–18:30, субота 9–14.",
  "Atelier ansehen": "Переглянути ательє",
  "Werkstatt, Hände, 4:3": "Майстерня, руки, 4:3",

  // ── Home · Abo section (AboSection) ─────────────────────────────────
  "Jede Woche frisch": "Щотижня свіжі квіти",
  "Du wählst Größe, Rhythmus und Wochentag. Wir binden am Morgen und liefern am Abend. Pausieren geht bis 18 Uhr am Vortag.":
    "Ви обираєте розмір, ритм і день тижня. Ми збираємо вранці й доставляємо ввечері. Призупинити можна до 18:00 напередодні.",
  "Rhythmus": "Ритм",
  "Wöchentlich": "Щотижня",
  "14-tägig": "Раз на два тижні",
  "Monatlich": "Щомісяця",
  "Größe": "Розмір",
  "Abo starten": "Оформити підписку",
  "je Lieferung, Versand inklusive": "за доставку, пересилання включено",
  "Abo-Strauß, Hochformat 3:4": "Букет за підпискою, вертикально 3:4",

  // ── Home · Anlässe section (AnlaesseSection) ────────────────────────
  "Wofür sind": "Для чого",
  "die Blumen?": "ці квіти?",
  "Zu jedem Anlass eine kuratierte Auswahl, drei Preisstufen, dasselbe Zeitfenster.":
    "До кожного приводу — дібрана добірка, три цінові рівні, те саме часове вікно.",
  "Ansehen": "Переглянути",
  // Occasion names + prices (data/occasions.ts)
  "Geburtstag": "День народження",
  "Danke & gute Besserung": "Подяка та одужання",
  "Liebe": "Кохання",
  "Trauer": "Траур",
  "Firmenblumen": "Квіти для компаній",
  "ab 28,00 €": "від 28,00 €",
  "ab 36,00 €": "від 36,00 €",
  "auf Anfrage": "за запитом",
  "auf Rechnung": "за рахунком",

  // ── Home · Anfrage band (AnfrageBand) ───────────────────────────────
  "Floristik nach Maß": "Флористика на замовлення",
  "Installationen für Laden und Restaurant, Hochzeiten, Trauerbinderei. Schreib uns Ort, Datum und Budget — wir antworten innerhalb von zwei Werktagen.":
    "Оформлення для магазинів і ресторанів, весілля, траурна флористика. Напишіть нам місце, дату й бюджет — відповімо протягом двох робочих днів.",
  "Anfrage schreiben": "Надіслати запит",
  "Installation, Vollbreite": "Інсталяція, на всю ширину",

  // ── Home · Lieferung section (LieferungSection) ─────────────────────
  "Liefern wir zu dir?": "Чи доставляємо ми до вас?",
  "Eigene Fahrer, kein Paketdienst. Zwei Zeitfenster am Tag, samstags eines.":
    "Власні водії, жодних поштових служб. Два часові вікна на день, у суботу — одне.",
  "Postleitzahl": "Поштовий індекс",
  "Prüfen": "Перевірити",

  // ── Product cards (ProductCard) — delivery labels & badges ──────────
  "Heute 17–20 Uhr": "Сьогодні 17–20 год",
  "Morgen 11–14 Uhr": "Завтра 11–14 год",
  "Saison": "Сезон",
  "Neu": "Новинка",
  "Bestseller": "Хіт продажів",
  "Heute ausverkauft": "Сьогодні розпродано",

  // ── Delivery-zone check results (data/delivery.ts, static messages) ──
  "Bitte eine gültige, fünfstellige Postleitzahl eingeben.": "Введіть дійсний п'ятизначний поштовий індекс.",
  "Diese Postleitzahl liegt außerhalb unseres Liefergebiets. Ruf 0611 000 000 an, wir prüfen es von Hand.":
    "Цей поштовий індекс поза нашою зоною доставки. Зателефонуйте 0611 000 000 — ми перевіримо вручну.",

  // ── Language toggle (LanguageToggle) ────────────────────────────────
  "Sprache wählen": "Обрати мову",

  // ════════════════════════════════════════════════════════════════════
  //  PAGES BEYOND THE HOME PAGE
  // ════════════════════════════════════════════════════════════════════

  // ── Product catalog (data/products.ts) ──────────────────────────────
  // Product names — descriptive, so translated. To keep any as German,
  // simply delete that line.
  "Feldrand": "Польовий край",
  "Spätsommer": "Пізнє літо",
  "Weiß & Grün": "Біле та зелене",
  "Dahlienbund": "Жоржиновий букет",
  "Kleiner Gruß": "Маленьке вітання",
  "Rosé & Eukalyptus": "Рожеве та евкаліпт",
  "Wiesenbunt": "Лугове різнобарв'я",
  "Hortensie solo": "Гортензія соло",
  "Werkstattstrauß XL": "Букет майстерні XL",
  "Ranunkel & Tulpe": "Ранункулюс і тюльпан",
  "Nelke modern": "Гвоздика модерн",
  "Amaryllis einzeln": "Амариліс окремо",
  "Zimmerlinde": "Кімнатна липа",
  // Descriptions & FAQ
  "Wiesenblumen, Dahlien und Gräser, locker gebunden. Was der Markt am Morgen hergibt — die Zusammenstellung wechselt mit der Woche.":
    "Лугові квіти, жоржини та трави, вільно зібрані. Те, що ринок пропонує зранку — склад змінюється щотижня.",
  "[Produktbeschreibung folgt]": "[опис товару буде додано]",
  "Welche Blumen sind drin": "Які квіти всередині",
  "Dahlien, Schafgarbe, Wiesenkerbel, Gräser. Saisonal, deshalb wechselt die Mischung — die Farbwelt bleibt.":
    "Жоржини, деревій, бутень, трави. Сезонні, тому суміш змінюється — палітра лишається.",
  "Pflege & Haltbarkeit": "Догляд і свіжість",
  "Stiele schräg anschneiden, Wasser alle zwei Tage wechseln. Sieben Tage Frischegarantie.":
    "Підрізайте стебла навскіс, міняйте воду кожні два дні. Сім днів гарантії свіжості.",
  "Lieferung & Bestellschluss": "Доставка та прийом замовлень",
  "Wiesbaden und Umgebung, 11–14 Uhr oder 17–20 Uhr, 4,90 €. Eigene Fahrer, kein Paketdienst.":
    "Вісбаден і околиці, 11–14 год або 17–20 год, 4,90 €. Власні водії, жодних поштових служб.",
  "[Inhalt folgt]": "[вміст буде додано]",
  // Sizes
  "Klein": "Малий",
  "Mittel": "Середній",
  "Groß": "Великий",
  // Photo placeholder captions
  "Strauß Feldrand, 1:1": "Букет Польовий край, 1:1",
  "Strauß, quadratisch": "Букет, квадрат",
  "Strauß weiß, quadratisch": "Букет білий, квадрат",
  "Produktbild, quadratisch": "Фото товару, квадрат",
  "Pflanze, quadratisch": "Рослина, квадрат",
  "Detail": "Деталь",
  "In der Vase": "У вазі",
  "Größenvergleich": "Порівняння розмірів",

  // ── Accessories (data/accessories.ts) ───────────────────────────────
  "Vase Klar": "Ваза прозора",
  "Grußkarte": "Листівка",
  "Frischmittel": "Засіб для свіжості",
  "Vase Steingut": "Ваза керамічна",
  "Vase, klar, quadratisch": "Ваза, прозора, квадрат",
  "Grußkarte, quadratisch": "Листівка, квадрат",
  "Frischmittel, quadratisch": "Засіб для свіжості, квадрат",
  "Vase, Steingut, quadratisch": "Ваза, кераміка, квадрат",

  // ── Shop page (sortiment) + browser ─────────────────────────────────
  "Am Bestelltag gebunden. Was du hier siehst, steht heute in der Werkstatt — Restmenge inklusive.":
    "Зібрано в день замовлення. Те, що ви бачите тут, сьогодні стоїть у майстерні — залишок включно.",
  "Lieber selbst zusammenstellen? Strauß-Konfigurator": "Волієте зібрати самі? Конфігуратор букета",
  "Zeitfenster": "Часові вікна",
  "Zwei feste Fenster täglich: 11–14 Uhr und 17–20 Uhr. Samstags nur vormittags.":
    "Два фіксовані вікна щодня: 11–14 год і 17–20 год. У суботу лише зранку.",
  "Abholung": "Самовивіз",
  "Im Laden in der Marktstraße, ohne Aufpreis — einfach bei der Bestellung auswählen.":
    "У магазині на Marktstraße, без доплати — просто оберіть під час замовлення.",
  "Frische": "Свіжість",
  "Sieben Tage Frischegarantie. Meldet sich ein Strauß früher ab, ersetzen wir ihn.":
    "Сім днів гарантії свіжості. Якщо букет зів'яне раніше — замінимо.",
  "Empfehlung": "Рекомендовані",
  "Preis aufsteigend": "Ціна за зростанням",
  "Preis absteigend": "Ціна за спаданням",
  "bis 30 €": "до 30 €",
  "bis 50 €": "до 50 €",
  "bis 80 €": "до 80 €",
  "Filter": "Фільтр",
  "Sortierung": "Сортування",
  "Preis": "Ціна",
  "Alle Preise": "Усі ціни",
  "Filter & Sortierung": "Фільтр і сортування",
  "Schließen": "Закрити",
  "Zurücksetzen": "Скинути",
  "Heute lieferbar": "Доставка сьогодні",
  "Morgen lieferbar": "Доставка завтра",
  "{n} Strauß": "{n} букет",
  "{n} Sträuße": "{n} букети",
  "{n} Strauß zeigen": "Показати {n} букет",
  "{n} Sträuße zeigen": "Показати {n} букети",
  "Weitere {n} laden": "Завантажити ще {n}",
  "Nichts gefunden für {q}. Filter zurücksetzen und noch einmal versuchen.":
    "Нічого не знайдено за запитом {q}. Скиньте фільтри й спробуйте ще раз.",
  "Keine Sträuße für diese Filter. Filter zurücksetzen und noch einmal versuchen.":
    "Немає букетів за цими фільтрами. Скиньте фільтри й спробуйте ще раз.",

  // ── Order countdown (sortiment/OrderCountdown) ──────────────────────
  "Bestellschluss": "Прийом замовлень до",
  "in {d}": "за {d}",
  "Danach nächstes Fenster: morgen 11–14 Uhr.": "Далі наступне вікно: завтра 11–14 год.",

  // ── Product detail page (produkt/[slug]) ────────────────────────────
  "Häufige Fragen": "Поширені запитання",
  "Passt dazu": "Гарно поєднується",
  "Ähnliche": "Схожі",
  "Breadcrumb": "Навігаційна стежка",
  "Bild anzeigen": "Показати зображення",
  "Bestellschluss 14 Uhr": "Прийом замовлень до 14:00",
  "Menge": "Кількість",
  "Menge verringern": "Зменшити кількість",
  "Menge erhöhen": "Збільшити кількість",
  "Ausverkauft": "Розпродано",
  "Hinzugefügt ✓": "Додано ✓",
  "In den Korb": "До кошика",
  "+ Korb": "+ Кошик",
  "Eigene Fahrer, kein Paketdienst. Sieben Tage Frischegarantie — meldet sich der Strauß früher ab, ersetzen wir ihn.":
    "Власні водії, жодних поштових служб. Сім днів гарантії свіжості — якщо букет зів'яне раніше, замінимо.",
  "Produkt nicht gefunden — la Vanda": "Товар не знайдено — la Vanda",

  // ── Occasions overview + detail (anlaesse, anlass/[slug], data) ──────
  "Wofür sind die Blumen?": "Для чого ці квіти?",
  "Bis 14 Uhr bestellt, abends zwischen 17 und 20 Uhr an der Tür. Karte mit Handschrift legen wir dazu.":
    "Замовлення до 14:00 — увечері між 17 та 20 годиною біля дверей. Листівку з написом від руки додамо.",
  "Wir liefern direkt zur Trauerhalle oder ans Grab, pünktlich zur Aussegnung.":
    "Доставляємо прямо до траурної зали або на могилу, точно до церемонії прощання.",
  "[wird ergänzt]": "[буде додано]",
  "Anlass": "Привід",
  "Zum Geburtstag": "До дня народження",
  "Unsere Empfehlung": "Наша рекомендація",
  "Drei Größen, ein Zeitfenster": "Три розміри, одне часове вікно",
  "Am häufigsten": "Найпопулярніший",
  "Für den Schreibtisch oder die Küche.": "Для столу чи кухні.",
  "Der Strauß, den die meisten schicken.": "Букет, який надсилає більшість.",
  "Wenn es ein runder Geburtstag ist.": "Коли ювілей.",
  "[Preisstufen folgen]": "[цінові рівні буде додано]",
  "Alle Sträuße zum Geburtstag": "Усі букети до дня народження",
  "Alle Sträuße zum Dankeschön": "Усі букети на подяку",
  "Alle Sträuße für die Liebe": "Усі букети для кохання",
  "Was zum Geburtstag passt": "Що пасує до дня народження",
  "Wer den Beschenkten gut kennt, geht nach Farbe: kräftige Dahlien und Zinnien für jemanden, der es deutlich mag, weiße Anemonen und Gräser für alle, die es ruhig mögen. Wer unsicher ist, nimmt den mittleren Strauß — 44,00 €, gemischt, passt in jede Wohnung.":
    "Хто добре знає адресата, орієнтується на колір: яскраві жоржини та цинії для того, хто любить виразність, білі анемони й трави для тих, хто любить спокій. Хто вагається — бере середній букет: 44,00 €, змішаний, пасує до будь-якої оселі.",
  "Für Lieferungen ins Büro empfehlen wir das Fenster 11–14 Uhr und eine Telefonnummer im Bestellfeld. Für Lieferungen nach Hause das Fenster 17–20 Uhr, dann ist meistens jemand da.":
    "Для доставки в офіс радимо вікно 11–14 год і номер телефону в полі замовлення. Для доставки додому — вікно 17–20 год, тоді зазвичай хтось удома.",
  "Weitere Anlässe": "Інші приводи",
};
