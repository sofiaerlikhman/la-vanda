import type { Metadata } from "next";
import Link from "next/link";
import LandingBanner from "@/components/landing/LandingBanner";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import LegalPage from "@/components/legal/LegalPage";
import { T } from "@/i18n/T";

export const metadata: Metadata = {
  title: "Datenschutz — la Vanda",
  description: "Wie la Vanda personenbezogene Daten im Onlineshop verarbeitet.",
};

export default function DatenschutzPage() {
  return (
    <div>
      <LandingBanner />
      <LandingHeader />

      <LegalPage title="Datenschutzerklärung">
        <h2>
          <T de="Verantwortlicher" />
        </h2>
        <p>
          <T de="Verantwortlich für die Datenverarbeitung auf dieser Website ist la Vanda [Rechtsform — wird ergänzt], Marktstraße 12, 65183 Wiesbaden, Telefon 0611 000 000, E-Mail [E-Mail-Adresse wird ergänzt]. Weitere Angaben im" />{" "}
          <Link href="/impressum">
            <T de="Impressum" />
          </Link>
          .
        </p>

        {/* Landing branch: the shop's sections on order data, anonymous
            shipping, payment providers and retention of order data are
            removed rather than kept — none of that processing can happen
            on a page with no cart, no checkout and no forms, and a privacy
            policy that describes processing which does not occur is worse
            than one that is merely short. Restore them together with the
            shop (see BACKEND.md). */}
        <h2>
          <T de="Keine Bestellung, keine Bestelldaten" />
        </h2>
        <p>
          <T de="Diese Website ist eine reine Informationsseite. Es gibt hier weder Warenkorb noch Bestell-, Buchungs- oder Reservierungsfunktion und keine Formulare. Wir erheben über diese Seite deshalb keine Bestell-, Liefer- oder Zahlungsdaten." />
        </p>

        <h2>
          <T de="Lokale Speicherung" />
        </h2>
        <p>
          <T de="Im lokalen Speicher deines Browsers (localStorage) merken wir uns ausschließlich die von dir gewählte Sprache (Deutsch, Ukrainisch oder Englisch), damit sie beim nächsten Besuch erhalten bleibt. Diese Angabe verlässt dein Gerät nicht. Cookies setzen wir nicht ein, und es sind keine Analyse-, Tracking- oder Marketing-Dienste eingebunden." />
        </p>

        <h2>
          <T de="Anfragen und Kontakt" />
        </h2>
        <p>
          <T de="Schreibst du uns per E-Mail oder rufst du uns an, verarbeiten wir deine Angaben nur, um deine Anfrage zu beantworten (Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO). Die Telefon- und E-Mail-Links auf dieser Seite öffnen dein eigenes Telefon- oder E-Mail-Programm; es werden dabei keine Daten an uns übertragen." />
        </p>

        <h2>
          <T de="Weitergabe an Dritte" />
        </h2>
        <p>
          <T de="Wir geben deine Daten nicht an Dritte weiter, abgesehen vom Hosting-Anbieter, der die Seite ausliefert, und soweit wir gesetzlich dazu verpflichtet sind. Ein Verkauf deiner Daten an Dritte findet nicht statt." />
        </p>

        <h2>
          <T de="Hosting" />
        </h2>
        <p>
          <T de="Diese Website wird gehostet bei: [Hosting-Anbieter wird ergänzt]." />
        </p>

        <h2>
          <T de="Deine Rechte" />
        </h2>
        <p>
          <T de="Du hast jederzeit das Recht auf:" />
        </p>
        <ul>
          <li>
            <T de="Auskunft über die zu deiner Person gespeicherten Daten (Art. 15 DSGVO)" />
          </li>
          <li>
            <T de="Berichtigung unrichtiger Daten (Art. 16 DSGVO)" />
          </li>
          <li>
            <T de="Löschung deiner Daten, soweit keine Aufbewahrungspflicht entgegensteht (Art. 17 DSGVO)" />
          </li>
          <li>
            <T de="Einschränkung der Verarbeitung (Art. 18 DSGVO)" />
          </li>
          <li>
            <T de="Datenübertragbarkeit (Art. 20 DSGVO)" />
          </li>
          <li>
            <T de="Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)" />
          </li>
        </ul>
        <p>
          <T de="Eine formlose E-Mail an [E-Mail-Adresse wird ergänzt] genügt. Außerdem kannst du dich bei einer Datenschutzaufsichtsbehörde beschweren, zuständig ist in Hessen: Der Hessische Beauftragte für Datenschutz und Informationsfreiheit." />
        </p>
      </LegalPage>

      <LandingFooter />
    </div>
  );
}
