import ImagePlaceholder from "@/components/ImagePlaceholder";
import Button from "@/components/Button";
import styles from "./AnfrageBand.module.css";

export default function AnfrageBand() {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <ImagePlaceholder label="Installation, Vollbreite" className={styles.image} />
        <div className={styles.panel} data-reveal>
          <p className={styles.eyebrow}>Auf Anfrage</p>
          <h2 className={styles.title}>Floristik nach Maß</h2>
          <p className={styles.lead}>
            Installationen für Laden und Restaurant, Hochzeiten, Trauerbinderei. Schreib uns Ort, Datum und Budget —
            wir antworten innerhalb von zwei Werktagen.
          </p>
          <Button href="/anfrage" variant="secondary" size={48} className={styles.cta}>
            Anfrage schreiben
          </Button>
        </div>
      </div>
    </section>
  );
}
