"use client";

import Link from "next/link";
import { useT } from "@/i18n/LanguageProvider";
import styles from "./SiteFooter.module.css";

const COLUMNS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Sortiment",
    links: [
      { label: "Sträuße", href: "/sortiment" },
      { label: "Pflanzen", href: "/sortiment" },
      { label: "Vasen & Zubehör", href: "/sortiment" },
      { label: "Strauß selbst binden", href: "/konfigurator" },
      { label: "Gutscheine", href: "/gutschein" },
      { label: "Abo", href: "/abo" },
    ],
  },
  {
    heading: "Service",
    links: [
      { label: "Lieferung & Zeitfenster", href: "/lieferung" },
      { label: "Abholung im Laden", href: "/lieferung" },
      { label: "Frischegarantie", href: "/lieferung" },
      { label: "Fragen & Antworten", href: "/lieferung" },
      { label: "Kontakt", href: "/atelier" },
    ],
  },
  {
    heading: "Rechtliches",
    links: [
      { label: "AGB", href: "/agb" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "Widerruf", href: "/widerruf" },
      { label: "Impressum", href: "/impressum" },
      { label: "Barrierefreiheit", href: "/barrierefreiheit" },
    ],
  },
];

export default function SiteFooter() {
  const t = useT();

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <p className={styles.wordmark}>la Vanda</p>
          <p className={styles.address}>
            Marktstraße 12
            <br />
            65183 Wiesbaden
            <br />
            0611 000 000
          </p>
          <p className={styles.address}>
            {t("Mo–Fr 9–18:30 Uhr")}
            <br />
            {t("Sa 9–14 Uhr")}
          </p>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.heading}>
            <p className={styles.heading}>{t(col.heading)}</p>
            <div className={styles.linkList}>
              {col.links.map((link, i) => (
                <Link key={`${link.href}-${i}`} href={link.href}>
                  {t(link.label)}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.bottomBarWrap}>
        <div className={styles.bottomBar}>
          <span>© {new Date().getFullYear()} la Vanda</span>
          <span>{t("Bestellschluss 14 Uhr · Lieferung 17–20 Uhr")}</span>
        </div>
      </div>
    </footer>
  );
}
