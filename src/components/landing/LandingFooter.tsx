"use client";

import Link from "next/link";
import SectionLink from "./SectionLink";
import { useT } from "@/i18n/LanguageProvider";
import { SECTION_NAV, LEGAL_NAV } from "@/data/nav";
import { CONTACT } from "@/data/atelier";
import styles from "./LandingFooter.module.css";

/**
 * Footer for the one-page site.
 *
 * The shop footer carried three columns of routes (Sortiment, Service,
 * Rechtliches). Two of those pointed at pages that don't exist on this
 * branch, so what's left is: where the shop is, the sections of this
 * page, and the legal pages that do still exist.
 *
 * `new Date().getFullYear()` runs at build time on a static export, so
 * the year is frozen into the HTML — it will read 2026 until the site is
 * rebuilt. Acceptable for a copyright line on a page that gets rebuilt
 * on every push; noted so nobody mistakes it for a live clock.
 */
export default function LandingFooter() {
  const t = useT();

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <p className={styles.wordmark}>la Vanda</p>
          <p className={styles.address}>
            {CONTACT.street}
            <br />
            {CONTACT.city}
            <br />
            {CONTACT.phone}
          </p>
          <p className={styles.address}>
            {t("Mo–Fr 9–18:30 Uhr")}
            <br />
            {t("Sa 9–14 Uhr")}
          </p>
        </div>

        <div>
          <p className={styles.heading}>{t("Auf dieser Seite")}</p>
          <div className={styles.linkList}>
            {SECTION_NAV.map((item) => (
              <SectionLink key={item.href} hash={item.href}>
                {t(item.label)}
              </SectionLink>
            ))}
          </div>
        </div>

        <div>
          <p className={styles.heading}>{t("Rechtliches")}</p>
          <div className={styles.linkList}>
            {LEGAL_NAV.map((item) => (
              <Link key={item.href} href={item.href}>
                {t(item.label)}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottomBarWrap}>
        <div className={styles.bottomBar}>
          <span>© {new Date().getFullYear()} la Vanda</span>
          <span>{t("Bestellung und Reservierung noch nicht möglich")}</span>
        </div>
      </div>
    </footer>
  );
}
