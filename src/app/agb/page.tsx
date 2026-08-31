import type { Metadata } from "next";
import CutoffBanner from "@/components/CutoffBanner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import LegalPage from "@/components/textseite/LegalPage";

export const metadata: Metadata = {
  title: "AGB — la Vanda",
  description: "Allgemeine Geschäftsbedingungen für Bestellungen bei la Vanda.",
};

export default function AgbPage() {
  return (
    <div>
      <CutoffBanner />
      <SiteHeader />

      <LegalPage title="Allgemeine Geschäftsbedingungen">
        <h2>1. Geltungsbereich</h2>
        <p>
          Diese Bedingungen gelten für alle Bestellungen, die über den Onlineshop von la Vanda abgeschlossen werden —
          Sträuße, Pflanzen, Vasen &amp; Zubehör, Gutscheine sowie das Blumen-Abo.
        </p>

        <h2>2. Vertragspartner</h2>
        <p>
          Vertragspartner ist la Vanda [Rechtsform, z. B. Inhaberin/GmbH — wird ergänzt], Marktstraße 12, 65183
          Wiesbaden. Kontaktdaten findest du im <a href="/impressum">Impressum</a>.
        </p>

        <h2>3. Vertragsschluss</h2>
        <p>
          Die Darstellung der Artikel im Shop ist kein bindendes Angebot, sondern eine Aufforderung zur Bestellung.
          Mit „Kostenpflichtig bestellen“ gibst du ein verbindliches Angebot ab. Der Vertrag kommt zustande, sobald wir
          die Bestellung per E-Mail an die im Checkout angegebene Adresse bestätigen. Jede Bestellung erhält eine
          Bestellnummer im Format LV-JJ-NNNN.
        </p>

        <h2>4. Preise und Umsatzsteuer</h2>
        <p>
          Alle Preise verstehen sich inklusive der gesetzlichen Umsatzsteuer: 7 % auf Schnittblumen und Pflanzen, 19 %
          auf Vasen und Zubehör. Bei Lieferung kommt eine Lieferpauschale von 5,90 € hinzu; bei Abholung im Laden
          entfällt sie.
        </p>

        <h2>5. Lieferung und Abholung</h2>
        <p>
          Lieferungen erfolgen im Wiesbadener Liefergebiet innerhalb der im Checkout gewählten Zeitfenster (11–14 Uhr
          oder 17–20 Uhr, samstags nur vormittags), Bestellschluss ist täglich 14 Uhr. Bis 14 Uhr desselben Tages
          lässt sich eine laufende Bestellung noch ergänzen. Wahlweise kannst du deine Bestellung ohne Aufpreis im
          Laden in der Marktstraße abholen.
        </p>
        <p>
          Ist bei Zustellung niemand anzutreffen, verfahren wir nach der im Checkout hinterlegten Anweisung (z. B.
          Abgabe bei Nachbarn).
        </p>

        <h2>6. Zahlung</h2>
        <p>Du kannst wählen zwischen:</p>
        <ul>
          <li>Rechnung, zahlbar in 14 Tagen</li>
          <li>SEPA-Lastschrift</li>
          <li>Kreditkarte</li>
          <li>PayPal</li>
          <li>Zahlung bei Abholung im Laden</li>
        </ul>
        <p>Zahlungsdaten verarbeiten unsere Zahlungsdienstleister; wir selbst speichern keine Zahlungsdaten.</p>

        <h2>7. Gutscheine</h2>
        <p>
          Gutscheine sind bis zum Ende des dritten Jahres nach dem Jahr des Kaufs einlösbar und können nicht bar
          ausgezahlt werden. Solange ein Gutschein nicht eingelöst ist, kannst du ihn zurückgeben.
        </p>

        <h2>8. Blumen-Abo</h2>
        <p>
          Für das Blumen-Abo gelten gesonderte Bedingungen zu Laufzeit, Kündigung und Rhythmus. [Wird ergänzt, sobald
          das Abo im Shop buchbar ist.]
        </p>

        <h2>9. Frischegarantie und Reklamation</h2>
        <p>
          Auf Sträuße geben wir sieben Tage Frischegarantie. Meldet sich ein Strauß früher ab, ersetzen wir ihn.
          Reklamationen bitte mit Bestellnummer und, wenn möglich, einem Foto an uns richten — Kontaktdaten stehen im{" "}
          <a href="/impressum">Impressum</a>.
        </p>

        <h2>10. Widerrufsrecht</h2>
        <p>
          Als Verbraucherin oder Verbraucher steht dir grundsätzlich ein Widerrufsrecht zu. Bei frisch gebundener Ware
          entfällt es ab Bindebeginn. Die Einzelheiten stehen in unserer{" "}
          <a href="/widerruf">Widerrufsbelehrung</a>.
        </p>

        <h2>11. Haftung</h2>
        <p>
          Wir haften unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie nach den Vorschriften des
          Produkthaftungsgesetzes. Für leichte Fahrlässigkeit haften wir nur bei Verletzung einer wesentlichen
          Vertragspflicht, begrenzt auf den vorhersehbaren, vertragstypischen Schaden.
        </p>

        <h2>12. Schlussbestimmungen</h2>
        <p>
          Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Zwingende
          verbraucherschützende Bestimmungen deines gewöhnlichen Aufenthaltsorts bleiben unberührt. Gerichtsstand für
          Kaufleute: [wird ergänzt].
        </p>
      </LegalPage>

      <SiteFooter />
    </div>
  );
}
