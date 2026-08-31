import type { Metadata } from "next";
import CutoffBanner from "@/components/CutoffBanner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import LegalPage from "@/components/textseite/LegalPage";

export const metadata: Metadata = {
  title: "Impressum — la Vanda",
  description: "Angaben gemäß § 5 TMG zu la Vanda in Wiesbaden.",
};

export default function ImpressumPage() {
  return (
    <div>
      <CutoffBanner />
      <SiteHeader />

      <LegalPage title="Impressum">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          la Vanda [Rechtsform, z. B. Inhaberin/GmbH — wird ergänzt]
          <br />
          Marktstraße 12
          <br />
          65183 Wiesbaden
        </p>

        <h2>Vertreten durch</h2>
        <p>[Name der verantwortlichen Person]</p>

        <h2>Kontakt</h2>
        <p>
          Telefon: 0611 000 000
          <br />
          E-Mail: [E-Mail-Adresse wird ergänzt]
        </p>

        <h2>Registereintrag</h2>
        <p>
          Eintragung im Handelsregister: [Handelsregisternummer, falls zutreffend]
          <br />
          Registergericht: [wird ergänzt]
        </p>

        <h2>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: [USt-IdNr. wird ergänzt]
        </p>

        <h2>Redaktionell verantwortlich</h2>
        <p>Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV: [Name der verantwortlichen Person], Anschrift wie oben.</p>

        <h2>EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
            ec.europa.eu/consumers/odr
          </a>
          . Unsere E-Mail-Adresse findest du oben unter „Kontakt“.
        </p>

        <h2>Verbraucherstreitbeilegung</h2>
        <p>
          Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir [wird
          ergänzt: bereit / nicht bereit und nicht verpflichtet].
        </p>
      </LegalPage>

      <SiteFooter />
    </div>
  );
}
