import type { Metadata } from "next";
import Link from "next/link";
import CutoffBanner from "@/components/CutoffBanner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import LegalPage from "@/components/legal/LegalPage";
import { T } from "@/i18n/T";

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
        <h2>
          <T de="1. Geltungsbereich" />
        </h2>
        <p>
          <T de="Diese Bedingungen gelten für alle Bestellungen, die über den Onlineshop von la Vanda abgeschlossen werden — Sträuße, Pflanzen, Vasen & Zubehör, Gutscheine sowie das Blumen-Abo." />
        </p>

        <h2>
          <T de="2. Vertragspartner" />
        </h2>
        <p>
          <T de="Vertragspartner ist la Vanda [Rechtsform, z. B. Inhaberin/GmbH — wird ergänzt], Marktstraße 12, 65183 Wiesbaden. Kontaktdaten findest du im" />{" "}
          <Link href="/impressum">
            <T de="Impressum" />
          </Link>
          .
        </p>

        <h2>
          <T de="3. Vertragsschluss" />
        </h2>
        <p>
          <T de="Die Darstellung der Artikel im Shop ist kein bindendes Angebot, sondern eine Aufforderung zur Bestellung. Mit „Kostenpflichtig bestellen“ gibst du ein verbindliches Angebot ab. Der Vertrag kommt zustande, sobald wir die Bestellung per E-Mail an die im Checkout angegebene Adresse bestätigen. Jede Bestellung erhält eine Bestellnummer im Format LV-JJ-NNNN." />
        </p>

        <h2>
          <T de="4. Preise und Umsatzsteuer" />
        </h2>
        <p>
          <T de="Alle Preise verstehen sich inklusive der gesetzlichen Umsatzsteuer: 7 % auf Schnittblumen und Pflanzen, 19 % auf Vasen und Zubehör. Bei Lieferung kommt eine Lieferpauschale von 5,90 € hinzu; bei Abholung im Laden entfällt sie." />
        </p>

        <h2>
          <T de="5. Lieferung und Abholung" />
        </h2>
        <p>
          <T de="Lieferungen erfolgen im Wiesbadener Liefergebiet innerhalb der im Checkout gewählten Zeitfenster (11–14 Uhr oder 17–20 Uhr, samstags nur vormittags), Bestellschluss ist täglich 14 Uhr. Bis 14 Uhr desselben Tages lässt sich eine laufende Bestellung noch ergänzen. Wahlweise kannst du deine Bestellung ohne Aufpreis im Laden in der Marktstraße abholen." />
        </p>
        <p>
          <T de="Ist bei Zustellung niemand anzutreffen, verfahren wir nach der im Checkout hinterlegten Anweisung (z. B. Abgabe bei Nachbarn)." />
        </p>

        <h2>
          <T de="6. Zahlung" />
        </h2>
        <p>
          <T de="Du kannst wählen zwischen:" />
        </p>
        <ul>
          <li>
            <T de="Rechnung, zahlbar in 14 Tagen" />
          </li>
          <li>
            <T de="SEPA-Lastschrift" />
          </li>
          <li>
            <T de="Kreditkarte" />
          </li>
          <li>PayPal</li>
          <li>
            <T de="Zahlung bei Abholung im Laden" />
          </li>
        </ul>
        <p>
          <T de="Zahlungsdaten verarbeiten unsere Zahlungsdienstleister; wir selbst speichern keine Zahlungsdaten." />
        </p>

        <h2>
          <T de="7. Gutscheine" />
        </h2>
        <p>
          <T de="Gutscheine sind bis zum Ende des dritten Jahres nach dem Jahr des Kaufs einlösbar und können nicht bar ausgezahlt werden. Solange ein Gutschein nicht eingelöst ist, kannst du ihn zurückgeben." />
        </p>

        <h2>
          <T de="8. Blumen-Abo" />
        </h2>
        <p>
          <T de="Für das Blumen-Abo gelten gesonderte Bedingungen zu Laufzeit, Kündigung und Rhythmus. [Wird ergänzt, sobald das Abo im Shop buchbar ist.]" />
        </p>

        <h2>
          <T de="9. Frischegarantie und Reklamation" />
        </h2>
        <p>
          <T de="Auf Sträuße geben wir sieben Tage Frischegarantie. Meldet sich ein Strauß früher ab, ersetzen wir ihn. Reklamationen bitte mit Bestellnummer und, wenn möglich, einem Foto an uns richten — Kontaktdaten stehen im" />{" "}
          <Link href="/impressum">
            <T de="Impressum" />
          </Link>
          .
        </p>

        <h2>
          <T de="10. Widerrufsrecht" />
        </h2>
        <p>
          <T de="Als Verbraucherin oder Verbraucher steht dir grundsätzlich ein Widerrufsrecht zu. Bei frisch gebundener Ware entfällt es ab Bindebeginn. Die Einzelheiten stehen in unserer" />{" "}
          <Link href="/widerruf">
            <T de="Widerrufsbelehrung" />
          </Link>
          .
        </p>

        <h2>
          <T de="11. Haftung" />
        </h2>
        <p>
          <T de="Wir haften unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie nach den Vorschriften des Produkthaftungsgesetzes. Für leichte Fahrlässigkeit haften wir nur bei Verletzung einer wesentlichen Vertragspflicht, begrenzt auf den vorhersehbaren, vertragstypischen Schaden." />
        </p>

        <h2>
          <T de="12. Schlussbestimmungen" />
        </h2>
        <p>
          <T de="Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Zwingende verbraucherschützende Bestimmungen deines gewöhnlichen Aufenthaltsorts bleiben unberührt. Gerichtsstand für Kaufleute: [wird ergänzt]." />
        </p>
      </LegalPage>

      <SiteFooter />
    </div>
  );
}
