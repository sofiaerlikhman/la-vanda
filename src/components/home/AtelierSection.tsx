import ImagePlaceholder from "@/components/ImagePlaceholder";
import Button from "@/components/Button";
import styles from "./AtelierSection.module.css";

export default function AtelierSection() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.imageWrap}>
          <ImagePlaceholder label="Werkstatt, Hände, 4:3" />
        </div>
        <div>
          <p className={styles.eyebrow}>Das Atelier</p>
          <h2 className={styles.title}>
            Gebunden an der
            <br />
            Marktstraße
          </h2>
          <p className={styles.lead}>
            Wir kaufen dreimal in der Woche selbst ein und binden jeden Strauß am Tag der Lieferung. Was nicht
            rausgeht, steht im Laden.
          </p>
          <p className={styles.detail}>Marktstraße 12, Wiesbaden. Montag bis Freitag 9–18:30 Uhr, Samstag 9–14 Uhr.</p>
          <Button href="/atelier" variant="secondary" size={48} className={styles.cta}>
            Atelier ansehen
          </Button>
        </div>
      </div>
    </section>
  );
}
