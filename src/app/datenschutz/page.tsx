import type { Metadata } from "next";
import CutoffBanner from "@/components/CutoffBanner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import LegalPage from "@/components/textseite/LegalPage";

export const metadata: Metadata = {
  title: "Datenschutz — la Vanda",
  description: "Wie la Vanda personenbezogene Daten im Onlineshop verarbeitet.",
};

export default function DatenschutzPage() {
  return (
    <div>
      <CutoffBanner />
      <SiteHeader />

      <LegalPage title="Datenschutzerklärung">
        <h2>Verantwortlicher</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist la Vanda [Rechtsform — wird ergänzt],
          Marktstraße 12, 65183 Wiesbaden, Telefon 0611 000 000, E-Mail [E-Mail-Adresse wird ergänzt]. Weitere Angaben
          im <a href="/impressum">Impressum</a>.
        </p>

        <h2>Daten aus deiner Bestellung</h2>
        <p>
          Beim Bestellen im Checkout verarbeiten wir Vorname, Nachname, Straße, Postleitzahl, Ort, E-Mail-Adresse und
          Telefonnummer sowie die gewählten Artikel, Liefer- oder Abholoption und die Zahlungsart. Rechtsgrundlage ist
          Art. 6 Abs. 1 lit. b DSGVO — die Verarbeitung ist zur Erfüllung des Kaufvertrags erforderlich. Die
          Bestellbestätigung mit Bestellnummer senden wir an die von dir angegebene E-Mail-Adresse.
        </p>
        <p>
          Deine Telefonnummer nutzen wir ausschließlich im Zusammenhang mit der Lieferung, etwa für die kurze
          Ankündigung per SMS, bevor wir bei dir eintreffen.
        </p>

        <h2>Anonymer Versand</h2>
        <p>
          Im Checkout kannst du eine Grußkarte anonym gestalten. In diesem Fall bleibt dein Name gegenüber der
          Empfängerin oder dem Empfänger verborgen; für Rückfragen, Zustellung und Buchhaltung bleibt er intern bei
          uns gespeichert.
        </p>

        <h2>Zahlungsdaten</h2>
        <p>
          Je nach gewählter Zahlungsart (Rechnung, SEPA-Lastschrift, Kreditkarte, PayPal oder Zahlung bei Abholung)
          verarbeiten die jeweiligen Zahlungsdienstleister deine Zahlungsdaten. Wir selbst speichern keine
          Kreditkarten- oder Kontodaten.
        </p>

        <h2>Warenkorb und lokale Speicherung</h2>
        <p>
          Dein Warenkorb wird technisch notwendig im lokalen Speicher deines Browsers (localStorage) abgelegt, damit
          er beim nächsten Besuch erhalten bleibt. Diese Daten verlassen deinen Browser nicht und werden nicht auf
          unseren Servern gespeichert. Tracking- oder Marketing-Cookies setzen wir nicht ein.
        </p>

        <h2>Anfragen und Kontakt</h2>
        <p>
          Schreibst du uns über ein Kontakt- oder Anfrageformular oder per E-Mail, verarbeiten wir deine Angaben nur,
          um deine Anfrage zu beantworten (Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO).
        </p>

        <h2>Weitergabe an Dritte</h2>
        <p>
          Eine Weitergabe deiner Daten erfolgt nur an Dienstleister, die wir zur Vertragserfüllung benötigen (z. B.
          Zahlungsdienstleister, Zustellung), sowie soweit wir gesetzlich dazu verpflichtet sind. Ein Verkauf deiner
          Daten an Dritte findet nicht statt.
        </p>

        <h2>Speicherdauer</h2>
        <p>
          Bestelldaten speichern wir so lange, wie es die handels- und steuerrechtlichen Aufbewahrungsfristen
          vorschreiben (in der Regel sechs bis zehn Jahre). Danach werden sie gelöscht, soweit keine gesetzliche
          Pflicht zur weiteren Aufbewahrung besteht.
        </p>

        <h2>Hosting</h2>
        <p>Diese Website wird gehostet bei: [Hosting-Anbieter wird ergänzt].</p>

        <h2>Deine Rechte</h2>
        <p>Du hast jederzeit das Recht auf:</p>
        <ul>
          <li>Auskunft über die zu deiner Person gespeicherten Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung deiner Daten, soweit keine Aufbewahrungspflicht entgegensteht (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        </ul>
        <p>
          Eine formlose E-Mail an [E-Mail-Adresse wird ergänzt] genügt. Außerdem kannst du dich bei einer
          Datenschutzaufsichtsbehörde beschweren, zuständig ist in Hessen: Der Hessische Beauftragte für Datenschutz
          und Informationsfreiheit.
        </p>
      </LegalPage>

      <SiteFooter />
    </div>
  );
}
