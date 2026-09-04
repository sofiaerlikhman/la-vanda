import type { Metadata } from "next";
import Link from "next/link";
import CutoffBanner from "@/components/CutoffBanner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import BouquetConfigurator from "@/components/configurator/BouquetConfigurator";
import { T } from "@/i18n/T";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Strauß selbst binden — la Vanda",
  description:
    "Wähle Stiel für Stiel, entscheide über Menge und Verpackung. Der Preis rechnet mit — gebunden wird von Hand am Bestelltag.",
};

type InfoItem = {
  title: string;
  body: string;
  linkLabel?: string;
  linkHref?: string;
};

const INFO_ITEMS: InfoItem[] = [
  {
    title: "Saison",
    body: "Was hier steht, stand heute morgen noch auf dem Markt. Fehlt eine Sorte, rufen wir an, bevor wir tauschen.",
  },
  {
    title: "Bindung",
    body: "Spiralbindung von Hand, Stiele frisch angeschnitten, Wasserpolster in der Verpackung.",
  },
  {
    title: "Lieber beraten lassen",
    body: "Für Größeres — Hochzeit, Firma, Trauer — machen wir ein Angebot.",
    linkLabel: "Zur Anfrage",
    linkHref: "/anfrage",
  },
];

/**
 * "Strauß selbst binden" — bouquet configurator, from
 * "la Vanda Strauss-Konfigurator.dc.html". The interactive part (options,
 * running price, cart) lives in the client component BouquetConfigurator;
 * this shell is the static page frame + intro copy, server-rendered like
 * every other route.
 */
export default function KonfiguratorPage() {
  return (
    <div>
      <CutoffBanner />
      <SiteHeader />

      <div className={styles.page}>
        <Breadcrumb items={[{ label: "Start", href: "/" }, { label: "Blumen", href: "/sortiment" }, { label: "Strauß selbst binden" }]} />

        <div className={styles.hero}>
          <div>
            <span className={styles.badge}>
              <T de="Aus dem Kühlhaus, heute morgen" />
            </span>
            <h1 className={styles.title}>
              <T de="Strauß selbst binden" />
            </h1>
            <p className={styles.lead}>
              <T de="Wähle Stiel für Stiel, entscheide über Menge und Verpackung. Der Preis rechnet mit — gebunden wird von Hand am Bestelltag." />
            </p>
          </div>
          <div className={styles.heroImages}>
            <ImagePlaceholder label="Eimer im Laden" className={styles.heroImage} />
            <ImagePlaceholder label="Hände beim Binden" className={styles.heroImage} />
            <ImagePlaceholder label="Fertiger Strauß" className={styles.heroImage} />
          </div>
        </div>

        <BouquetConfigurator />

        <div className={styles.infoStrip}>
          {INFO_ITEMS.map((item) => (
            <div key={item.title} className={styles.infoItem}>
              <p className={styles.infoLabel}>
                <T de={item.title} />
              </p>
              <p className={styles.infoBody}>
                <T de={item.body} />
                {item.linkHref && item.linkLabel && (
                  <>
                    {" "}
                    <Link href={item.linkHref} className={styles.infoLink}>
                      <T de={item.linkLabel} />
                    </Link>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
