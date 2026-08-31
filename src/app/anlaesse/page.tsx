import type { Metadata } from "next";
import Link from "next/link";
import CutoffBanner from "@/components/CutoffBanner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { OCCASIONS } from "@/data/occasions";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Anlässe — la Vanda",
  description: "Zu jedem Anlass eine kuratierte Auswahl, drei Preisstufen, dasselbe Zeitfenster.",
};

export default function AnlaessePage() {
  return (
    <div>
      <CutoffBanner />
      <SiteHeader />

      <div className={styles.page}>
        <Breadcrumb items={[{ label: "Start", href: "/" }, { label: "Anlässe" }]} />

        <div className={styles.head}>
          <p className={styles.eyebrow}>Anlässe</p>
          <h1 className={styles.title}>Wofür sind die Blumen?</h1>
          <p className={styles.lead}>
            Zu jedem Anlass eine kuratierte Auswahl, drei Preisstufen, dasselbe Zeitfenster.
          </p>
        </div>

        <div className={styles.grid}>
          {OCCASIONS.map((occasion) => (
            <Link key={occasion.href} href={occasion.href} className={styles.card}>
              <div className={styles.imageWrap}>
                <ImagePlaceholder label={occasion.image} className={styles.image} />
              </div>
              <div className={styles.body}>
                <h2 className={styles.name}>{occasion.name}</h2>
                <p className={styles.blurb}>{occasion.blurb}</p>
                <div className={styles.foot}>
                  <span className={styles.price}>{occasion.priceLabel}</span>
                  <span className={styles.view}>Ansehen</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
