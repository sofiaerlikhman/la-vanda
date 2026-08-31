import ImagePlaceholder from "@/components/ImagePlaceholder";
import Button from "@/components/Button";
import styles from "./AboSection.module.css";

/**
 * This is the home page's Abo *teaser* — it shows the rhythm/size options
 * as a static preview (matching the source design, which doesn't wire them
 * up here). The real, interactive configurator belongs on the future
 * /abo page.
 */
export default function AboSection() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.imageWrap}>
          <ImagePlaceholder label="Abo-Strauß, Hochformat 3:4" />
        </div>
        <div>
          <p className={styles.eyebrow}>Abo</p>
          <h2 className={styles.title}>Jede Woche frisch</h2>
          <p className={styles.lead}>
            Du wählst Größe, Rhythmus und Wochentag. Wir binden am Morgen und liefern am Abend. Pausieren geht bis
            18 Uhr am Vortag.
          </p>

          <p className={styles.groupLabel}>Rhythmus</p>
          <div className={styles.chipRow}>
            <span className={`${styles.chip} ${styles.chipSelected}`}>Wöchentlich</span>
            <span className={styles.chip}>14-tägig</span>
            <span className={styles.chip}>Monatlich</span>
          </div>

          <p className={styles.groupLabel}>Größe</p>
          <div className={styles.chipRow}>
            <span className={styles.chip}>28,00&nbsp;€</span>
            <span className={`${styles.chip} ${styles.chipSelected}`}>44,00&nbsp;€</span>
            <span className={styles.chip}>72,00&nbsp;€</span>
          </div>

          <div className={styles.footer}>
            <Button href="/abo" variant="primary" size={48}>
              Abo starten
            </Button>
            <span className={styles.summary}>44,00&nbsp;€ je Lieferung, Versand inklusive</span>
          </div>
        </div>
      </div>
    </section>
  );
}
