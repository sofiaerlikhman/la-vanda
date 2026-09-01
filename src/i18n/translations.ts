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

  // ════════════════════════════════════════════════════════════════════
  //  CHECKOUT FLOW (components/checkout/*)
  // ════════════════════════════════════════════════════════════════════
  // Stepper
  "1 Wann & wohin": "1 Коли й куди",
  "2 Karte & Gruß": "2 Листівка й вітання",
  "3 Zahlung": "3 Оплата",
  "Bestätigung": "Підтвердження",
  "Status": "Статус",
  "Wann & wohin": "Коли й куди",
  "Gruß": "Вітання",
  "Zahlung": "Оплата",
  // Cart step
  "Dein Korb": "Ваш кошик",
  "Dein Korb ist leer.": "Ваш кошик порожній.",
  "Sträuße ansehen": "Переглянути букети",
  "Zusammenfassung": "Підсумок",
  "Zwischensumme": "Проміжна сума",
  "Lieferung Wiesbaden": "Доставка Вісбаден",
  "Summe": "Разом",
  "Zur Lieferung": "До доставки",
  "Zeitfenster wählst du im nächsten Schritt. Bis 14 Uhr bestellt, heute 17–20 Uhr geliefert.":
    "Часове вікно оберете на наступному кроці. Замовлення до 14:00 — доставка сьогодні 17–20 год.",
  "Entfernen": "Видалити",
  "Größe klein": "Розмір малий",
  "Größe mittel": "Розмір середній",
  "Größe groß": "Розмір великий",
  // Delivery step
  "Erst das Zeitfenster, dann die Adresse. So siehst du sofort, ob heute noch geht.":
    "Спершу часове вікно, потім адреса. Так одразу видно, чи встигнемо сьогодні.",
  "Art der Zustellung": "Спосіб доставки",
  "Tag": "День",
  "Heute": "Сьогодні",
  "Montag": "Понеділок",
  "Dienstag": "Вівторок",
  "Mittwoch": "Середа",
  "Donnerstag": "Четвер",
  "Freitag": "П'ятниця",
  "Samstag": "Субота",
  "Sonntag": "Неділя",
  "An diesem Tag liefern wir nicht — bitte einen anderen Tag wählen.":
    "Цього дня ми не доставляємо — оберіть інший день.",
  "11–14 Uhr": "11–14 год",
  "17–20 Uhr": "17–20 год",
  "Gewählt": "Обрано",
  "Nicht mehr heute": "Сьогодні вже ні",
  "Lieferadresse": "Адреса доставки",
  "Kontaktdaten": "Контактні дані",
  "Vorname": "Ім'я",
  "Nachname": "Прізвище",
  "Straße und Nummer": "Вулиця та номер",
  "Ort": "Місто",
  "E-Mail": "Ел. пошта",
  "Telefon (für die Ankunfts-SMS)": "Телефон (для SMS про прибуття)",
  "Wenn niemand öffnet": "Якщо ніхто не відчинить",
  "Bei Nachbarn abgeben": "Залишити сусідам",
  "Vor der Tür abstellen": "Залишити під дверима",
  "Zurück ins Atelier, wir rufen an": "Повернути в ательє, ми зателефонуємо",
  "Weiter zur Karte": "Далі до листівки",
  "Zurück zum Korb": "Назад до кошика",
  "Kostenlos": "Безкоштовно",
  // Card step
  "Karte & Gruß": "Листівка й вітання",
  "Wir schreiben von Hand. Bis {n} Zeichen passen auf die Karte.":
    "Пишемо від руки. На листівку вміщується до {n} символів.",
  "Kartenmotiv": "Мотив листівки",
  "Ohne Motiv": "Без мотиву",
  "Blüte": "Квітка",
  "Beileid": "Співчуття",
  "Karte unifarben": "Листівка однотонна",
  "Karte Blüte": "Листівка квітка",
  "Karte Geburtstag": "Листівка день народження",
  "Karte Trauer": "Листівка траур",
  "Dein Text": "Ваш текст",
  "{n} von {m} Zeichen": "{n} з {m} символів",
  "Anonym verschicken": "Надіслати анонімно",
  "Ohne meinen Namen zustellen": "Доставити без мого імені",
  "Karte und Lieferschein bleiben ohne Absender. Für Rückfragen behalten wir deine Daten, geben sie aber nicht weiter.":
    "Листівка й накладна лишаться без відправника. Ваші дані зберігаємо для зв'язку, але нікому не передаємо.",
  "Extras": "Додатки",
  "Handgeschriebene Karte": "Листівка від руки",
  "Frischhaltemittel": "Засіб для свіжості",
  "Tafel Schokolade": "Плитка шоколаду",
  "Weiter zur Zahlung": "Далі до оплати",
  "Zurück": "Назад",
  "Lieferung steht": "Доставку узгоджено",
  "Abholung: Marktstraße 12, 65183 Wiesbaden": "Самовивіз: Marktstraße 12, 65183 Вісбаден",
  // Payment step
  "Rechnung, zahlbar in 14 Tagen": "Рахунок, оплата протягом 14 днів",
  "SEPA-Lastschrift": "SEPA-переказ",
  "Kreditkarte": "Кредитна картка",
  "Bei Abholung im Laden zahlen": "Оплата при самовивозі",
  "Abgebucht wird erst, wenn der Strauß gebunden ist.": "Кошти списуємо лише коли букет зібрано.",
  "Empfohlen": "Рекомендовано",
  "Rechnungsadresse": "Адреса для рахунку",
  "Wie die Lieferadresse": "Як адреса доставки",
  "Gutschein- oder Rabattcode": "Подарунковий код або код знижки",
  "Code eingeben": "Введіть код",
  "Einlösen": "Застосувати",
  "Code ungültig oder abgelaufen.": "Код недійсний або прострочений.",
  "eingelöst": "застосовано",
  "Bestellung prüfen": "Перевірити замовлення",
  "Enthält 7 % USt. auf Blumen, 19 % auf Vasen und Zubehör.":
    "Включає 7% ПДВ на квіти, 19% на вази та аксесуари.",
  // Review step
  "Bitte prüfen": "Перевірте, будь ласка",
  "Karte": "Листівка",
  "Ändern": "Змінити",
  "Motiv": "Мотив",
  ", anonym": ", анонімно",
  "Ohne Grußtext": "Без тексту вітання",
  "Rechnungsadresse wie Lieferadresse": "Адреса для рахунку як адреса доставки",
  "Abweichende Rechnungsadresse": "Інша адреса для рахунку",
  "Abholung im Laden, Marktstraße 12, 65183 Wiesbaden":
    "Самовивіз у магазині, Marktstraße 12, 65183 Вісбаден",
  "Ich habe die": "Я прочитав(ла)",
  "und den": "та",
  " gelesen. Bei frisch gebundener Ware entfällt das Widerrufsrecht ab Bindebeginn.":
    ". Для щойно зібраного товару право відмови зникає з початку збирання.",
  "Das gewählte Zeitfenster ist inzwischen abgelaufen — bitte in Schritt 1 ein neues wählen.":
    "Обране часове вікно вже минуло — оберіть нове на кроці 1.",
  "Wird gesendet…": "Надсилання…",
  "Kostenpflichtig bestellen": "Замовити з оплатою",
  "Enthält": "Включає",
  "keine": "без",
  "Lieferung und 7 % USt. auf Blumen.": "доставки та 7% ПДВ на квіти.",
  "Fenster noch frei": "Вікно ще вільне",
  "Fenster abgelaufen": "Вікно минуло",
  // Confirmation step
  "Bestellung angenommen": "Замовлення прийнято",
  "Unterwegs zu dir": "Прямуємо до вас",
  "heute": "сьогодні",
  "Bereit zur": "Готово до",
  "Im Fenster {w} sind wir an der {s}. Zwanzig Minuten vorher bekommst du eine SMS.":
    "У вікні {w} ми будемо на {s}. За двадцять хвилин до того отримаєте SMS.",
  "Sag im Laden einfach deine Bestellnummer — wir haben deinen Strauß fertig für dich.":
    "Просто назвіть у магазині номер замовлення — ваш букет уже готовий.",
  "Bestellnummer": "Номер замовлення",
  "Bestätigung an": "Підтвердження на",
  "Lieferung verfolgen": "Відстежити доставку",
  "Weiter stöbern": "Продовжити перегляд",
  "Etwas vergessen? Bis 14 Uhr kannst du unter 0611 000 000 nachlegen — wir packen es dazu, ohne zweite Lieferpauschale.":
    "Щось забули? До 14:00 можна додати за номером 0611 000 000 — докладемо без другої плати за доставку.",
  "Bindeplatz, Strauß in Arbeit, 4:5": "Робоче місце, букет у роботі, 4:5",
  // Status step
  "Bestellung": "Замовлення",
  "Gebunden": "Зібрано",
  "Sobald der Strauß fertig ist": "Щойно букет буде готовий",
  "Unterwegs": "У дорозі",
  "Wenn der Fahrer losfährt": "Коли водій вирушить",
  "Zugestellt": "Доставлено",
  "Im gewählten Zeitfenster": "В обраному часовому вікні",
  "noch offen": "ще в очікуванні",
  "Fahrer anrufen": "Зателефонувати водію",
  "Inhalt": "Вміст",
  "Ohne Konto? Bestellnummer und Postleitzahl genügen, um diesen Status wieder aufzurufen.":
    "Без акаунта? Досить номера замовлення й поштового індексу, щоб знову відкрити цей статус.",

  // ════════════════════════════════════════════════════════════════════
  //  SERVICE PAGES (atelier, abo, lieferung, gutschein, anfrage, …)
  // ════════════════════════════════════════════════════════════════════
  // Atelier page
  "Atelier & Kontakt": "Ательє та контакти",
  "Ein Laden mit Werkstatt dahinter. Vorne kannst du kaufen, hinten binden wir. Beides gehört zusammen.":
    "Магазин із майстернею позаду. Спереду можна купувати, позаду ми збираємо букети. Одне без одного не існує.",
  "Öffnungszeiten": "Години роботи",
  "& Anfahrt": "та як дістатися",
  "Montag bis Freitag": "Понеділок – п'ятниця",
  "9–18:30 Uhr": "9–18:30",
  "9–14 Uhr": "9–14",
  "geschlossen": "зачинено",
  "Zwei Minuten von der Haltestelle Luisenplatz. Parkhaus Marktstraße direkt gegenüber, erste halbe Stunde frei.":
    "Дві хвилини від зупинки Luisenplatz. Паркінг Marktstraße прямо навпроти, перші півгодини безкоштовно.",
  "Abholung reservieren": "Зарезервувати самовивіз",
  "Nachricht schreiben": "Написати повідомлення",
  "Wer bindet": "Хто збирає букети",
  "Inhaberin, Floristmeisterin": "Власниця, майстриня-флористка",
  "Floristik, Einkauf": "Флористика, закупівля",
  "Installationen, Events": "Інсталяції, події",
  "Porträt, Hochformat": "Портрет, вертикально",
  "Ladenlokal Marktstraße von außen, Querformat": "Магазин на Marktstraße знадвору, горизонтально",
  "Karte, Marktstraße 12": "Карта, Marktstraße 12",
  "Workshops": "Майстер-класи",
  "Zwei Stunden": "Дві години",
  "an der Werkbank": "за робочим столом",
  "Maximal acht Plätze. Material, Werkzeug und ein Glas Wein sind dabei, das Gebundene nimmst du mit.":
    "Максимум вісім місць. Матеріали, інструменти та келих вина включені, зібране забираєте із собою.",
  "Für Gruppen ab sechs Personen machen wir eigene Termine — auch außerhalb der Öffnungszeiten.":
    "Для груп від шести осіб проводимо окремі заняття — навіть поза робочими годинами.",
  "Nachricht": "Повідомлення",
  "schreiben": "написати",
  "Für Bestellungen, Reklamationen und alles andere. Für Installationen und Hochzeiten nimm besser das":
    "Для замовлень, рекламацій та всього іншого. Для інсталяцій і весіль краще скористайтеся",
  "Anfrageformular": "формою запиту",
  // Workshops
  "Do, 4. Sep": "Чт, 4 вер",
  "Sa, 13. Sep": "Сб, 13 вер",
  "Do, 25. Sep": "Чт, 25 вер",
  "Sa, 11. Okt": "Сб, 11 жов",
  "Herbstkranz binden": "Осінній вінок",
  "Strauß frei gebunden": "Букет вільної форми",
  "Trockenblumen & Gräser": "Сухоцвіти та трави",
  "Tischschmuck für Gäste": "Прикраса столу для гостей",
  "3 Plätze": "3 місця",
  "1 Platz": "1 місце",
  "Ausgebucht": "Розпродано",
  "8 Plätze": "8 місць",
  "Warteliste": "Список очікування",
  "{p} buchen": "Забронювати {p}",
  // Contact form (Atelier) + shared form strings
  "Bitte Name, E-Mail und Nachricht ausfüllen.": "Будь ласка, заповніть ім'я, ел. пошту та повідомлення.",
  "Danke, deine Nachricht ist da.": "Дякуємо, ваше повідомлення отримано.",
  "Wir antworten am nächsten Werktag.": "Відповімо наступного робочого дня.",
  "Name": "Ім'я",
  "Bestellnummer, wenn es um eine Lieferung geht": "Номер замовлення, якщо йдеться про доставку",
  "Nachricht senden": "Надіслати повідомлення",

  // ── Trauer (bereavement) page ───────────────────────────────────────
  "Trauerfloristik": "Траурна флористика",
  "Trauerstrauß klassisch": "Траурний букет класичний",
  "Trauerstrauß weiß": "Траурний букет білий",
  "Bindegebinde": "В'язана композиція",
  "Kranz 50 cm": "Вінок 50 см",
  "Kranz 70 cm": "Вінок 70 см",
  "Sargschmuck": "Оздоблення труни",
  "Urnengebinde": "Композиція для урни",
  "Grabgesteck": "Композиція на могилу",
  "Ein Werktag Vorlauf": "Один робочий день наперед",
  "Wir liefern direkt zur Trauerhalle oder ans Grab, pünktlich zur Aussegnung. Sag uns Datum, Uhrzeit und Ort — den Rest übernehmen wir.":
    "Доставляємо прямо до траурної зали або на могилу, точно до церемонії прощання. Повідомте дату, час і місце — решту беремо на себе.",
  "Wenn es schnell gehen muss: 0611 000 000. Wir gehen auch außerhalb der Öffnungszeiten ans Telefon.":
    "Якщо потрібно швидко: 0611 000 000. Відповідаємо на дзвінки й поза робочими годинами.",
  "Kurzfristig": "Терміново",
  "Bis 10 Uhr bestellt, am Folgetag an der Halle": "Замовлення до 10:00 — наступного дня біля зали",
  "Kränze und Sargschmuck brauchen einen Werktag Vorlauf. Bindegebinde und Trauersträuße gehen am selben Tag.":
    "Вінки та оздоблення труни потребують одного робочого дня наперед. В'язані композиції та траурні букети — того ж дня.",
  "Lieferung zur": "Доставка до",
  "Trauerhalle": "траурної зали",
  "Wir kennen die Friedhöfe in Wiesbaden und fahren dreißig Minuten vor Beginn vor. Die Schleife beschriften wir von Hand.":
    "Ми знаємо кладовища Вісбадена й приїжджаємо за тридцять хвилин до початку. Стрічку підписуємо від руки.",
  "Ohne Aufpreis": "Без доплати",
  "Angaben zur Trauerfeier": "Дані про церемонію прощання",
  "Nenne uns Name, Datum, Uhrzeit und Ort der Trauerfeier sowie den gewünschten Schleifentext — wir melden uns mit einem Vorschlag und dem Preis.":
    "Повідомте ім'я, дату, час і місце церемонії, а також бажаний текст на стрічці — ми зв'яжемося з пропозицією та ціною.",
  "Name der Verstorbenen oder des Verstorbenen": "Ім'я померлої або померлого",
  "Datum, Uhrzeit und Ort (Friedhof oder Halle)": "Дата, час і місце (кладовище або зала)",
  "Schleifentext, wir schreiben von Hand": "Текст на стрічці, пишемо від руки",
  "Angaben zur Trauerfeier senden": "Надіслати дані про церемонію",
  "Wir rufen zur Bestätigung zurück, meist innerhalb einer Stunde.":
    "Ми передзвонимо для підтвердження, зазвичай упродовж години.",
  "Häufige": "Поширені",
  "Fragen": "запитання",
  "Was kostet ein Kranz?": "Скільки коштує вінок?",
  "Ab 140 € für 50 cm Durchmesser. Größere Kränze und Sargschmuck rechnen wir nach Aufwand, wir nennen den Preis vorher.":
    "Від 140 € за 50 см у діаметрі. Більші вінки й оздоблення труни рахуємо за обсягом робіт, ціну називаємо заздалегідь.",
  "Wie lang darf der Schleifentext sein?": "Якою може бути довжина тексту на стрічці?",
  "Zwei Zeilen mit je 30 Zeichen passen gut. Mehr geht auf breiterem Band, das bestellen wir am Vortag.":
    "Два рядки по 30 символів вміщуються добре. Більше — на ширшій стрічці, її замовляємо напередодні.",
  "Können wir die Blumen vorher sehen?": "Чи можемо ми побачити квіти заздалегідь?",
  "Ja. Wir schicken ein Foto, sobald das Gebinde fertig ist — vor der Lieferung, per Nachricht.":
    "Так. Надішлемо фото, щойно композиція буде готова — перед доставкою, повідомленням.",
  "Rechnung an das Bestattungshaus?": "Рахунок на похоронне бюро?",
  "Möglich. Nenne uns das Haus, wir klären die Abrechnung direkt dort.":
    "Можливо. Назвіть бюро — ми залагодимо розрахунок безпосередньо там.",

  // ── Abo (subscription) page + configurator ──────────────────────────
  "Wir kaufen ein": "Ми закуповуємо",
  "Dreimal pro Woche am Großmarkt. Was gut ist, kommt ins Abo.":
    "Тричі на тиждень на оптовому ринку. Що добре — потрапляє в підписку.",
  "Am Morgen gebunden": "Зібрано вранці",
  "Kein Lagerstrauß. Jede Woche eine andere Handschrift.": "Жодних складських букетів. Щотижня інший почерк.",
  "Abends geliefert": "Доставлено ввечері",
  "Eigene Fahrer, dein Fenster. SMS zwanzig Minuten vorher.": "Власні водії, ваше вікно. SMS за двадцять хвилин.",
  "Du steuerst": "Ви керуєте",
  "Pausieren, verschieben, kündigen — im Konto, ohne Anruf.": "Призупинити, перенести, скасувати — в акаунті, без дзвінка.",
  "Blumenabo": "Підписка на квіти",
  "Jede Woche": "Щотижня",
  "frisch gebunden": "свіжо зібрані",
  "Du wählst Rhythmus, Größe und Wochentag. Wir binden am Morgen und liefern am Abend. Pausieren geht bis 18 Uhr am Vortag, kündigen jederzeit.":
    "Ви обираєте ритм, розмір і день тижня. Ми збираємо вранці й доставляємо ввечері. Призупинити можна до 18:00 напередодні, скасувати будь-коли.",
  "So läuft das Abo": "Як працює підписка",
  "Büro-Abo": "Офісна підписка",
  "Für Empfang": "Для рецепції",
  "und Besprechung": "та переговорної",
  "Ab drei Vasen im Haus rechnen wir monatlich auf Rechnung ab. Vasen stellen wir, Wasserwechsel machen wir mit.":
    "Від трьох ваз у приміщенні рахуємо щомісяця за рахунком. Вази надаємо, воду міняємо самі.",
  "Firmenkunden ansehen": "Переглянути для компаній",
  "Abo-Strauß auf Werkbank, Hochformat 3:4": "Букет за підпискою на робочому столі, вертикально 3:4",
  "Was, wenn ich verreise?": "А якщо я поїду?",
  "Pausieren bis 18 Uhr am Vortag im Konto. Die Lieferung fällt aus, berechnet wird nichts.":
    "Призупиніть до 18:00 напередодні в акаунті. Доставка скасовується, нічого не стягуємо.",
  "Kann ich Blumen ausschließen?": "Чи можу я виключити певні квіти?",
  "Ja. Notiere Allergien oder Abneigungen im Konto, wir hinterlegen sie am Bindeplatz.":
    "Так. Зазначте алергії чи небажані квіти в акаунті — ми врахуємо їх на робочому місці.",
  "Wie lange läuft das Abo?": "Скільки триває підписка?",
  "Unbefristet, kündbar bis 18 Uhr am Vortag der nächsten Lieferung.":
    "Безстроково, можна скасувати до 18:00 напередодні наступної доставки.",
  "Abo als Geschenk?": "Підписка в подарунок?",
  "Wähle im Checkout drei, sechs oder zwölf Lieferungen. Danach endet es von selbst.":
    "Оберіть під час оформлення три, шість або дванадцять доставок. Після цього підписка завершиться сама.",
  // Configurator
  "je Woche": "на тиждень",
  "alle zwei Wochen": "кожні два тижні",
  "je Monat": "на місяць",
  "Alle 2 Wochen": "Кожні 2 тижні",
  "Einmal im Monat": "Раз на місяць",
  "Zehn bis zwölf Stiele, für die Küche": "Десять–дванадцять стебел, для кухні",
  "Achtzehn Stiele, unsere häufigste Größe": "Вісімнадцять стебел, наш найпопулярніший розмір",
  "Dreißig Stiele, für Tresen und Empfang": "Тридцять стебел, для стійки та рецепції",
  "1 · Rhythmus": "1 · Ритм",
  "2 · Größe": "2 · Розмір",
  "3 · Wochentag & Fenster": "3 · День тижня та вікно",
  "Wochentag": "День тижня",
  "Abo abschließen": "Оформити підписку",
  "Lieferung inklusive": "доставка включена",
  "Erste Lieferung {d}, {w}. Danach automatisch, bis du pausierst.":
    "Перша доставка {d}, {w}. Далі автоматично, доки не призупините.",

  // ── Lieferung (delivery) page + components ──────────────────────────
  "Lieferung & Service": "Доставка та сервіс",
  "Eigene Fahrer,": "Власні водії,",
  "zwei Fenster": "два вікна",
  "Kein Paketdienst. Der Strauß verlässt das Atelier am Bestelltag und kommt im Wasser transportiert bei dir an.":
    "Жодних поштових служб. Букет залишає ательє в день замовлення й прибуває до вас у воді.",
  "Fenster A": "Вікно A",
  "Fenster B": "Вікно B",
  "Ab 2 Std.": "Від 2 год",
  "Bestellschluss 9 Uhr am selben Tag": "Прийом до 9:00 того ж дня",
  "Bestellschluss 14 Uhr am selben Tag": "Прийом до 14:00 того ж дня",
  "Bestellschluss Freitag 17 Uhr": "Прийом до п'ятниці 17:00",
  "Marktstraße 12, ohne Aufpreis": "Marktstraße 12, без доплати",
  "Nächste Liefertermine": "Найближчі дати доставки",
  "Live berechnet aus dem Bestellschluss von oben — schau nach 9 Uhr oder nach 14 Uhr noch einmal vorbei.":
    "Розраховано наживо за прийомом замовлень вище — зазирніть ще раз після 9:00 або після 14:00.",
  "Liefergebiet": "Зона доставки",
  "Karte Wiesbaden mit Liefergebiet": "Карта Вісбадена із зоною доставки",
  "Ab 90 € Warenwert": "Від вартості товару 90 €",
  "ohne Kosten": "безкоштовно",
  "Außerhalb dieser Orte fahren wir auf Absprache. Ruf an, wir sagen dir sofort, ob es passt.":
    "Поза цими районами їздимо за домовленістю. Зателефонуйте — одразу скажемо, чи можливо.",
  "Wenn niemand da ist": "Якщо нікого немає вдома",
  "Du legst im Checkout fest, was dann passiert: Nachbarn, vor der Tür oder zurück ins Atelier. Wir schreiben dir in jedem Fall eine SMS.":
    "Ви вказуєте під час оформлення, що робити далі: сусіди, під дверима чи назад в ательє. У будь-якому разі надішлемо SMS.",
  "Auf Wunsch bleiben Karte und Lieferschein ohne Absender. Die Option steht in Schritt 2 des Checkouts.":
    "За бажанням листівка й накладна лишаються без відправника. Опція є на кроці 2 оформлення.",
  "Sieben Tage Haltbarkeit. Hält der Strauß nicht, binden wir neu oder erstatten — ohne Rücksendung, ein Foto genügt.":
    "Сім днів свіжості. Якщо букет не витримає, зберемо новий або повернемо кошти — без повернення товару, досить фото.",
  "Fragen &": "Питання та",
  "Antworten": "відповіді",
  "Nichts gefunden? 0611 000 000, Mo–Fr 9–18:30 Uhr.": "Не знайшли? 0611 000 000, Пн–Пт 9–18:30.",
  "Wie transportiert ihr die Blumen?": "Як ви перевозите квіти?",
  "In Wassergel und Papierhülle, aufrecht in Transportkisten. Im Sommer fahren wir mit Kühlung.":
    "У водному гелі та паперовій обгортці, вертикально в транспортних ящиках. Улітку їздимо з охолодженням.",
  "Kann ich ein genaueres Zeitfenster bekommen?": "Чи можу я отримати точніше часове вікно?",
  "Am Liefertag bekommst du zwanzig Minuten vor Ankunft eine SMS mit Namen des Fahrers.":
    "У день доставки за двадцять хвилин до прибуття ви отримаєте SMS з іменем водія.",
  "Liefert ihr an Sonntagen?": "Чи доставляєте ви в неділю?",
  "Nein. Für Trauerfälle und Hochzeiten machen wir Ausnahmen — ruf an, dann finden wir eine Lösung.":
    "Ні. Для траурних випадків і весіль робимо винятки — зателефонуйте, і ми знайдемо рішення.",
  "Wie pflege ich den Strauß?": "Як доглядати за букетом?",
  "Stiele schräg anschneiden, Wasser alle zwei Tage wechseln, nicht neben Obst oder Heizung stellen.":
    "Підрізайте стебла навскіс, міняйте воду кожні два дні, не ставте біля фруктів чи опалення.",
  "Wo finde ich meine Bestellung ohne Konto?": "Де знайти моє замовлення без акаунта?",
  "Mit Bestellnummer und Postleitzahl auf der Bestellstatus-Seite — die eigenständige Such-Seite dafür ist noch nicht angebunden [wird ergänzt]. Ruf in der Zwischenzeit gern an.":
    "За номером замовлення й поштовим індексом на сторінці статусу — окрема сторінка пошуку ще не підключена [буде додано]. Тим часом радо приймемо дзвінок.",
  "Termine werden geladen …": "Завантаження дат …",
  "Verfügbare Liefertermine": "Доступні дати доставки",
  "Kein Liefertag": "Не день доставки",

  // ── Gutschein (gift voucher) page + forms + data ────────────────────
  "Gutschein": "Подарунковий сертифікат",
  "Ein Betrag, drei Jahre gültig, einlösbar im Laden und online. Als Karte im Umschlag oder als PDF in der Sekunde.":
    "Одна сума, дійсна три роки, можна активувати в магазині та онлайн. Листівкою в конверті або у PDF за секунду.",
  "Gutscheinkarte auf Werkbank, 4:3": "Подарункова листівка на робочому столі, 4:3",
  "Zu den Anlässen": "До приводів",
  "Weihnachten": "Різдво",
  "Bestellschluss 22. Dezember, 12 Uhr": "Прийом до 22 грудня, 12:00",
  "Muttertag": "День матері",
  "Zusatzfenster am Sonntag, 9–13 Uhr": "Додаткове вікно в неділю, 9–13",
  "Valentinstag": "День Святого Валентина",
  "Vorbestellung ab 1. Februar": "Попереднє замовлення з 1 лютого",
  "Gutschein einlösen": "Активувати сертифікат",
  "Code im Checkout eingeben oder im Laden vorzeigen. Restbeträge bleiben stehen, Teileinlösung ist möglich.":
    "Введіть код під час оформлення або покажіть у магазині. Залишок зберігається, часткова активація можлива.",
  "Wie lange ist der Gutschein gültig?": "Скільки діє сертифікат?",
  "Drei Jahre ab Ausstellung, gerechnet ab Ende des Kaufjahres.":
    "Три роки з моменту видачі, рахуючи від кінця року покупки.",
  "Gilt er auch für Workshops?": "Чи діє він на майстер-класи?",
  "Ja, für Workshops, Abos und alles im Laden. Nicht für Installationen auf Anfrage.":
    "Так, на майстер-класи, підписки й усе в магазині. Не на інсталяції за запитом.",
  "Kann ich ihn zurückgeben?": "Чи можу я його повернути?",
  "Innerhalb von 14 Tagen, solange er nicht eingelöst ist. Schreib uns kurz.":
    "Упродовж 14 днів, поки він не активований. Напишіть нам коротко.",
  // Purchase form
  "Betrag": "Сума",
  "Betrag wählen": "Оберіть суму",
  "Eigener Betrag, {min} bis {max} €": "Власна сума, від {min} до {max} €",
  "z. B. 65": "напр. 65",
  "Bitte einen Betrag zwischen {min} und {max} € eingeben.": "Введіть суму від {min} до {max} €.",
  "Zustellung": "Спосіб отримання",
  "Zustellung wählen": "Оберіть спосіб отримання",
  "Als PDF per E-Mail": "У PDF на ел. пошту",
  "Sofort nach Zahlung, zum Ausdrucken": "Одразу після оплати, для друку",
  "Karte im Umschlag": "Листівка в конверті",
  "Von Hand beschrieben, per Post oder zum Abholen": "Підписана від руки, поштою або самовивіз",
  "Mit einem Strauß geliefert": "З доставкою букета",
  "Gutschein und Blumen in einem Termin": "Сертифікат і квіти за один раз",
  "als PDF": "у PDF",
  "als Karte im Umschlag": "листівкою в конверті",
  "mit Strauß geliefert": "з доставкою букета",
  "Grußtext, optional": "Текст вітання, за бажанням",
  "Betrag eingeben": "Введіть суму",
  " · mit Grußtext": " · з текстом вітання",
  // Redeem form
  "Gutscheincode": "Код сертифіката",
  "Guthaben prüfen": "Перевірити баланс",
  "Code nicht gefunden — bitte im Laden nachfragen.": "Код не знайдено — запитайте в магазині.",
  "erkannt": "розпізнано",
  // Voucher data (also used at checkout)
  "10 % Rabatt": "Знижка 10%",
  "Lieferung geschenkt": "Доставка в подарунок",

  // ── Anfrage (custom request) page + form ────────────────────────────
  "Floristik": "Флористика",
  "nach Maß": "на замовлення",
  "Installationen für Laden, Restaurant und Hotel. Hochzeit und Event. Trauerbinderei. Wir antworten innerhalb von zwei Werktagen mit Vorschlag und Preis.":
    "Інсталяції для магазинів, ресторанів і готелів. Весілля та події. Траурна флористика. Відповідаємо протягом двох робочих днів із пропозицією та ціною.",
  "Installationen & Deko": "Інсталяції та декор",
  "Ladeninstallation, 4:5": "Інсталяція в магазині, 4:5",
  "Wöchentlich oder saisonal, für Schaufenster, Empfang und Gastraum. Wir stellen Gefäße, wechseln Wasser und räumen ab.":
    "Щотижня або сезонно, для вітрин, рецепції та залу. Надаємо вази, міняємо воду й прибираємо.",
  "ab 180 € je Termin": "від 180 € за захід",
  "Hochzeit & Event": "Весілля та події",
  "Hochzeitsfloristik, 4:5": "Весільна флористика, 4:5",
  "Brautstrauß, Anstecker, Tischläufer, Bogen. Aufbau vor Ort, Abbau am Folgetag. Ein Termin im Atelier gehört dazu.":
    "Букет нареченої, бутоньєрки, доріжки на столи, арка. Монтаж на місці, демонтаж наступного дня. Зустріч в ательє включена.",
  "ab 900 € Gesamtbudget": "від 900 € загальний бюджет",
  "Trauerbinderei, 4:5": "Траурна флористика, 4:5",
  "Kränze, Sargschmuck, Urnengebinde mit Schleifenband. Lieferung direkt zur Trauerhalle, pünktlich zur Aussegnung.":
    "Вінки, оздоблення труни, композиції для урни зі стрічкою. Доставка прямо до траурної зали, точно до церемонії.",
  "ab 140 €": "від 140 €",
  "Zur Trauerstrecke": "До траурної добірки",
  "Referenzen": "Референси",
  "Wo wir": "Де ми",
  "schon stehen": "вже присутні",
  "Zwölf Häuser in Wiesbaden und Mainz, wöchentlich betreut. Auf Wunsch nennen wir Ansprechpartner.":
    "Дванадцять закладів у Вісбадені та Майнці, обслуговуємо щотижня. За запитом назвемо контактних осіб.",
  "Anfrage": "Запит",
  "Ort, Datum und Budget genügen für den ersten Vorschlag. Fotos helfen, sind aber kein Muss.":
    "Місце, дата й бюджет — цього досить для першої пропозиції. Фото допомагають, але не обов'язкові.",
  "Direkt": "Напряму",
  "Bitte Name, E-Mail und eine kurze Beschreibung ausfüllen.": "Будь ласка, заповніть ім'я, ел. пошту та короткий опис.",
  "Bitte der Verarbeitung deiner Angaben zustimmen.": "Будь ласка, погодьтеся з обробкою ваших даних.",
  "Danke, deine Anfrage ist da.": "Дякуємо, ваш запит отримано.",
  "Antwort innerhalb von zwei Werktagen, meist am selben Tag.":
    "Відповідь протягом двох робочих днів, зазвичай того ж дня.",
  "Firma, wenn vorhanden": "Компанія, якщо є",
  "Telefon": "Телефон",
  "Art der Anfrage": "Тип запиту",
  "Installation im Laden oder Restaurant": "Інсталяція в магазині чи ресторані",
  "Hochzeit": "Весілля",
  "Firmenevent": "Корпоративна подія",
  "Trauerbinderei": "Траурна флористика",
  "Etwas anderes": "Щось інше",
  "Datum": "Дата",
  "Adresse oder Stadtteil": "Адреса або район",
  "Budget": "Бюджет",
  "bis 300 €": "до 300 €",
  "300 bis 900 €": "300–900 €",
  "900 bis 2.500 €": "900–2 500 €",
  "über 2.500 €": "понад 2 500 €",
  "Noch offen": "Ще не визначено",
  "Was schwebt dir vor?": "Що ви задумали?",
  "Ich bin mit der Verarbeitung meiner Angaben zur Bearbeitung dieser Anfrage einverstanden.":
    "Я погоджуюся з обробкою моїх даних для опрацювання цього запиту.",
  "Anfrage senden": "Надіслати запит",

  // ── Firmenkunden (business customers) page + form ───────────────────
  // ("Blumen" and "auf Rechnung" are already defined above — reused here.)
  "Firmenkunden": "Для компаній",
  "Ein Ansprechpartner, monatliche Sammelrechnung, feste Preise. Für Empfang, Geburtstage im Team und Kundengeschenke.":
    "Один контакт, щомісячний зведений рахунок, фіксовані ціни. Для рецепції, днів народження в команді та подарунків клієнтам.",
  "Firmenkonto anlegen": "Створити корпоративний акаунт",
  "Installation anfragen": "Замовити інсталяцію",
  "Einzeln": "Окремо",
  "Saisonal": "Сезонно",
  "Sammelbestellung": "Групове замовлення",
  "Deko & Event": "Декор та події",
  "Frische Vasen im Haus, Wasserwechsel inklusive. Ab drei Standorten mit Wochenplan.":
    "Свіжі вази в приміщенні, зміна води включена. Від трьох локацій із тижневим планом.",
  "ab 44,00 € je Vase und Woche": "від 44,00 € за вазу на тиждень",
  "Bis zu fünfzig Adressen in einem Vorgang, jede mit eigener Karte. CSV-Import möglich.":
    "До п'ятдесяти адрес за один раз, кожна з власною листівкою. Можливий імпорт CSV.",
  "ab 28,00 € je Adresse": "від 28,00 € за адресу",
  "Schaufenster, Weihnachten, Sommerfest. Aufbau und Abbau durch uns.":
    "Вітрини, Різдво, літнє свято. Монтаж і демонтаж — за нами.",
  "Angebot nach Termin": "Пропозиція після зустрічі",
  "Was ein": "Що вміє",
  "Firmenkonto kann": "корпоративний акаунт",
  "Freigeschaltet innerhalb eines Werktags, nach kurzer Bonitätsprüfung.":
    "Активація впродовж одного робочого дня, після короткої перевірки платоспроможності.",
  "Adressen": "Адреси",
  "Sammelrechnung zum Monatsende, 14 Tage netto, auf Wunsch mit Kostenstelle":
    "Зведений рахунок наприкінці місяця, 14 днів нетто, за бажанням із центром витрат",
  "Adressbuch für Standorte und Mitarbeitende, Import per CSV":
    "Адресна книга для локацій і працівників, імпорт через CSV",
  "Nutzer": "Користувачі",
  "Mehrere Bestellberechtigte, ein Budget, Freigabe durch die Verwaltung":
    "Кілька осіб із правом замовлення, один бюджет, погодження керівництвом",
  "Wiederholung": "Повторення",
  "Geburtstagsliste einmal hinterlegen, wir erinnern und liefern":
    "Один раз внесіть список днів народжень — ми нагадаємо й доставимо",
  "Eine Durchwahl, ein Name — kein Ticketsystem": "Один номер, одне ім'я — без тікет-системи",
  "Firmenkonto": "Корпоративний акаунт",
  "anlegen": "створити",
  "Wir melden uns mit den Zahlungsbedingungen und einem Vorschlag für den Wochenplan.":
    "Ми зв'яжемося з умовами оплати та пропозицією тижневого плану.",
  // Form
  "Bitte Firma, Ansprechpartner, Telefon und E-Mail ausfüllen.":
    "Будь ласка, заповніть компанію, контактну особу, телефон та ел. пошту.",
  "Wir melden uns innerhalb eines Werktags mit den Zahlungsbedingungen und einem Vorschlag für den Wochenplan.":
    "Ми зв'яжемося впродовж одного робочого дня з умовами оплати та пропозицією тижневого плану.",
  "Firma": "Компанія",
  "USt-IdNr., wenn vorhanden": "ПДВ-номер, якщо є",
  "Ansprechpartner": "Контактна особа",
  "E-Mail für Rechnungen": "Ел. пошта для рахунків",
  "Interesse": "Інтерес",
  "Mehreres": "Кілька",
  "Standorte in Wiesbaden": "Локації у Вісбадені",
  "Einer": "Один",
  "Zwei bis drei": "Два–три",
  "Mehr als drei": "Більше трьох",
  "Anmerkungen": "Примітки",
  "Konto beantragen": "Подати заявку",
  "Freischaltung innerhalb eines Werktags.": "Активація впродовж одного робочого дня.",

  // ── Konto (account) page ────────────────────────────────────────────
  "Anmelden": "Увійти",
  "Vorschau: Kontobereich": "Попередній перегляд: акаунт",
  "Mit Konto: Bestellungen im Blick, Abo verwalten, Adressen hinterlegen. Registrieren dauert eine Minute.":
    "З акаунтом: замовлення на видноті, керування підпискою, збереження адрес. Реєстрація займає хвилину.",
  "So ist der Kontobereich aufgebaut, sobald echte Konten angebunden sind — ohne echte Daten.":
    "Так виглядатиме розділ акаунта, щойно підключать справжні акаунти — без реальних даних.",
  "Registrieren": "Зареєструватися",
  "Passwort": "Пароль",
  "Passwort bestätigen": "Підтвердьте пароль",
  "Konto erstellen": "Створити акаунт",
  "Bitte E-Mail-Adresse angeben.": "Будь ласка, вкажіть адресу ел. пошти.",
  "Das sieht nicht nach einer gültigen E-Mail aus.": "Це не схоже на дійсну ел. пошту.",
  "Bitte Passwort angeben.": "Будь ласка, введіть пароль.",
  "Bitte Vorname angeben.": "Будь ласка, вкажіть ім'я.",
  "Bitte Nachname angeben.": "Будь ласка, вкажіть прізвище.",
  "Mindestens 8 Zeichen.": "Щонайменше 8 символів.",
  "Die Passwörter stimmen nicht überein.": "Паролі не збігаються.",
  "Konten sind in dieser Version noch nicht angebunden — hier entsteht später die echte Anmeldung.":
    "Акаунти в цій версії ще не підключені — тут згодом з'явиться справжній вхід.",
  "Bestellungen": "Замовлення",
  "Abo verwalten": "Керування підпискою",
  "Daten & Zahlung": "Дані та оплата",
  "Vorschau — noch nicht mit echten Konten verbunden. Alles hier ist ein leerer Beispielzustand, keine echten Daten.":
    "Попередній перегляд — ще не з'єднано зі справжніми акаунтами. Усе тут — порожній приклад, без реальних даних.",
  "Zurück zur Anmeldung": "Назад до входу",
  "← Übersicht": "← Огляд",
  "Noch keine Bestellungen.": "Ще немає замовлень.",
  "Sobald du bestellst, erscheinen Status und Verlauf hier.":
    "Щойно ви зробите замовлення, тут з'являться статус і історія.",
  "Sträuße entdecken": "Відкрити букети",
  "Noch kein Abo aktiv.": "Ще немає активної підписки.",
  "Rhythmus, Größe und Lieferfenster lassen sich hier verwalten, sobald der Abo-Konfigurator angebunden ist. [wird ergänzt]":
    "Ритм, розмір і вікно доставки можна буде керувати тут, щойно підключать конфігуратор підписки. [буде додано]",
  "Adresse hinzufügen": "Додати адресу",
  "Adressverwaltung ist in dieser Vorschau noch nicht angebunden.":
    "Керування адресами в цьому попередньому перегляді ще не підключено.",
  "Noch keine gespeicherte Adresse.": "Ще немає збереженої адреси.",
  "Hinterlegte Lieferadressen erscheinen hier.": "Збережені адреси доставки з'являться тут.",
  "Mobil, für die SMS vor der Lieferung": "Мобільний, для SMS перед доставкою",
  "Änderungen speichern": "Зберегти зміни",
  "Zahlungsart": "Спосіб оплати",
  "Noch keine Zahlungsart hinterlegt.": "Ще не додано спосіб оплати.",
  "Newsletter": "Розсилка",
  "Einmal im Monat, was in der Werkstatt steht": "Раз на місяць — що є в майстерні",
  "Nur als Vorschau lokal ausgewählt — ohne Konto wird das nicht gespeichert.":
    "Обрано лише локально для перегляду — без акаунта це не збережеться.",
};
