import type { Metadata } from "next";
import LandingBanner from "@/components/landing/LandingBanner";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import LegalPage from "@/components/legal/LegalPage";
import { T } from "@/i18n/T";

export const metadata: Metadata = {
  title: "Barrierefreiheit — la Vanda",
  description: "Erklärung zur Barrierefreiheit des la Vanda Onlineshops.",
};

export default function BarrierefreiheitPage() {
  return (
    <div>
      <LandingBanner />
      <LandingHeader />

      <LegalPage
        title="Erklärung zur Barrierefreiheit"
        lead="Wir wollen, dass jede Person hier bestellen kann. Diese Seite sagt, wo wir stehen und was noch fehlt."
      >
        <h2>
          <T de="Stand der Umsetzung" />
        </h2>
        <p>
          <T de="Wir arbeiten daran, den Shop an die WCAG 2.2 auf Stufe AA anzunähern. Bedienelemente sollen mit der Tastatur erreichbar sein, der Fokus sichtbar bleiben und Status nie ausschließlich über Farbe vermittelt werden. Eine vollständige, geprüfte Konformitätserklärung liegt noch nicht vor." />
        </p>

        <h2>
          <T de="Bekannte Einschränkungen" />
        </h2>
        <ul>
          <li>
            <T de="Nicht alle Bereiche wurden bereits mit einem Screenreader vollständig getestet." />
          </li>
          <li>
            <T de="Ältere Produktfotos haben teils knappe oder fehlende Alternativtexte." />
          </li>
          <li>
            <T de="Diese Erklärung selbst ist ein Platzhalter und noch nicht durch eine externe Prüfstelle bestätigt." />
          </li>
        </ul>

        <h2>
          <T de="Barriere melden" />
        </h2>
        <p>
          <T de="Ist dir etwas aufgefallen, das dich behindert? Schreib an [E-Mail-Adresse wird ergänzt] oder ruf 0611 000 000 an. Wir melden uns zurück und sagen, wie es weitergeht." />
        </p>

        <h2>
          <T de="Durchsetzungsverfahren" />
        </h2>
        <p>
          <T de="Bist du mit unserer Antwort nicht zufrieden, kannst du dich an die Durchsetzungs- und Überwachungsstelle des Landes Hessen wenden, die für die Barrierefreiheit von Websites zuständig ist." />
        </p>
      </LegalPage>

      <LandingFooter />
    </div>
  );
}
