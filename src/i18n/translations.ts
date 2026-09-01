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
};
