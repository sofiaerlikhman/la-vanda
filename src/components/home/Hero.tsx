import ImagePlaceholder from "@/components/ImagePlaceholder";
import Button from "@/components/Button";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <ImagePlaceholder label="Werkstatt, Querformat — Hände beim Binden" className={styles.image} />
      <div className={styles.panel} data-reveal>
        <p className={styles.eyebrow}>Blumenatelier · Wiesbaden</p>
        <h1 className={styles.headline}>
          Heute gebunden,
          <br />
          heute bei dir
        </h1>
        <p className={styles.lead}>
          Ein Laden, der liefert. Bestell bis 14 Uhr, wir sind zwischen 17 und 20 Uhr an der Tür.
        </p>
        <div className={styles.actions}>
          <Button href="/sortiment" variant="primary" size={48}>
            Heute liefern
          </Button>
          <Button href="/abo" variant="secondary" size={48}>
            Abo ansehen
          </Button>
        </div>
      </div>
    </section>
  );
}
