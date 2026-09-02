import type { Metadata } from "next";
import CutoffBanner from "@/components/CutoffBanner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import LegalPage from "@/components/textseite/LegalPage";
import { T } from "@/i18n/T";

export const metadata: Metadata = {
  title: "Widerruf — la Vanda",
  description: "Widerrufsbelehrung für Bestellungen bei la Vanda, inklusive der Ausnahme für frisch gebundene Sträuße.",
};

export default function WiderrufPage() {
  return (
    <div>
      <CutoffBanner />
      <SiteHeader />

      <LegalPage title="Widerrufsbelehrung">
        <h2>
          <T de="Widerrufsrecht" />
        </h2>
        <p>
          <T de="Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem du oder eine von dir benannte dritte Person, die nicht der Frachtführer ist, die Waren in Besitz genommen hat bzw. haben." />
        </p>
        <p>
          <T de="Um dein Widerrufsrecht auszuüben, musst du uns — la Vanda, Marktstraße 12, 65183 Wiesbaden, Telefon 0611 000 000, E-Mail [E-Mail-Adresse wird ergänzt] — mittels einer eindeutigen Erklärung (z. B. per Post oder E-Mail) über deinen Entschluss informieren, diesen Vertrag zu widerrufen. Zur Wahrung der Widerrufsfrist reicht es, wenn du die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absendest." />
        </p>

        <h2>
          <T de="Folgen des Widerrufs" />
        </h2>
        <p>
          <T de="Wenn du diesen Vertrag widerrufst, erstatten wir dir alle Zahlungen, die wir von dir erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass du eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt hast), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag, an dem die Mitteilung über deinen Widerruf bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das du bei der ursprünglichen Transaktion eingesetzt hast, es sei denn, mit dir wurde ausdrücklich etwas anderes vereinbart." />
        </p>

        <h2>
          <T de="Wichtige Ausnahme: frisch gebundene Ware" />
        </h2>
        <p>
          <T de="Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von Waren, die schnell verderben oder deren Verfallsdatum schnell überschritten würde (§ 312g Abs. 2 Nr. 2 BGB). Das betrifft bei uns vor allem frisch gebundene Sträuße: Sobald wir mit dem Binden deiner Bestellung begonnen haben, handelt es sich um eine für dich individuell angefertigte, schnell verderbliche Ware —" />{" "}
          <strong>
            <T de="das Widerrufsrecht entfällt ab diesem Zeitpunkt (Bindebeginn)" />
          </strong>
          . <T de="Genau darauf weisen wir auch im Checkout hin, bevor du die Bestellung abschließt. Bis zum Bindebeginn kannst du wie oben beschrieben ganz normal widerrufen." />
        </p>
        <p>
          <T de="Für Pflanzen, Vasen, Zubehör und nicht eingelöste Gutscheine gilt das Widerrufsrecht uneingeschränkt." />
        </p>

        <h2>
          <T de="Muster-Widerrufsformular" />
        </h2>
        <p>
          <T de="Wenn du den Vertrag widerrufen möchtest, kannst du dieses Formular ausfüllen und an uns zurücksenden — oder formlos per E-Mail:" />
        </p>
        <ul>
          <li>
            <T de="An: la Vanda, Marktstraße 12, 65183 Wiesbaden, E-Mail [E-Mail-Adresse wird ergänzt]" />
          </li>
          <li>
            <T de="Hiermit widerrufe(n) ich/wir den von mir/uns abgeschlossenen Vertrag über den Kauf der folgenden Waren" />
          </li>
          <li>
            <T de="Bestellt am / erhalten am" />
          </li>
          <li>
            <T de="Name der Verbraucherin/des Verbrauchers" />
          </li>
          <li>
            <T de="Anschrift der Verbraucherin/des Verbrauchers" />
          </li>
          <li>
            <T de="Bestellnummer, falls bekannt" />
          </li>
          <li>
            <T de="Datum" />
          </li>
        </ul>
      </LegalPage>

      <SiteFooter />
    </div>
  );
}
