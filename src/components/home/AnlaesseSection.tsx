import Link from "next/link";
import { OCCASIONS } from "@/data/occasions";
import styles from "./AnlaesseSection.module.css";

export default function AnlaesseSection() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div>
          <p className={styles.eyebrow}>Anlässe</p>
          <h2 className={styles.title}>
            Wofür sind
            <br />
            die Blumen?
          </h2>
          <p className={styles.lead}>Zu jedem Anlass eine kuratierte Auswahl, drei Preisstufen, dasselbe Zeitfenster.</p>
        </div>
        <div className={styles.list}>
          {OCCASIONS.map((occasion) => (
            <Link key={occasion.href} href={occasion.href} className={styles.row}>
              <span className={styles.name}>{occasion.name}</span>
              <span className={styles.price}>{occasion.priceLabel}</span>
              <span className={styles.view}>Ansehen</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
