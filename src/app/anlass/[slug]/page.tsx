import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CutoffBanner from "@/components/CutoffBanner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ProductGrid from "@/components/ProductGrid";
import { OCCASION_DETAILS } from "@/data/occasions";
import { getCatalog, type Product } from "@/data/products";
import { T } from "@/i18n/T";
import styles from "./page.module.css";

type AnlassPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: AnlassPageProps): Promise<Metadata> {
  const detail = OCCASION_DETAILS[params.slug];
  if (!detail) {
    return { title: "Anlass nicht gefunden — la Vanda" };
  }
  return {
    title: `${detail.name} — la Vanda`,
    description: detail.heroIntro,
  };
}

/** Pre-render one static page per occasion (required by `output: 'export'`). */
export function generateStaticParams() {
  return Object.keys(OCCASION_DETAILS).map((slug) => ({ slug }));
}

/** Curated picks in the exact order given by `productSlugs`, pulled from the real catalog — no invented products. */
async function getCuratedProducts(slugs: string[]): Promise<Product[]> {
  const [straeusse, pflanzen] = await Promise.all([getCatalog("straeusse"), getCatalog("pflanzen")]);
  const bySlug = new Map([...straeusse, ...pflanzen].map((p) => [p.slug, p]));
  return slugs.map((slug) => bySlug.get(slug)).filter((p): p is Product => Boolean(p));
}

/**
 * Shared template for the three occasions covered by "la Vanda Anlass.dc.html"
 * (Geburtstag, Danke & gute Besserung, Liebe). Trauer and Firmenblumen have
 * their own standalone pages instead of this route.
 */
export default async function AnlassPage({ params }: AnlassPageProps) {
  const detail = OCCASION_DETAILS[params.slug];
  if (!detail) {
    notFound();
  }

  const products = await getCuratedProducts(detail.productSlugs);

  return (
    <div>
      <CutoffBanner />
      <SiteHeader />

      <div className={styles.page}>
        <Breadcrumb
          items={[{ label: "Start", href: "/" }, { label: "Anlässe", href: "/anlaesse" }, { label: detail.name }]}
        />

        <section className={styles.hero}>
          <ImagePlaceholder label={`${detail.name}, Vollbild querformat`} className={styles.heroImage} />
          <div className={styles.heroPanel}>
            <p className={styles.eyebrow}>
              <T de="Anlass" />
            </p>
            <h1 className={styles.heroTitle}>
              <T de={detail.heroTitle} />
            </h1>
            <p className={styles.heroIntro}>
              <T de={detail.heroIntro} />
            </p>
          </div>
        </section>

        {detail.tiers && (
          <section className={styles.section}>
            <p className={styles.eyebrow}>
              <T de="Unsere Empfehlung" />
            </p>
            <h2 className={styles.sectionTitle}>
              <T de="Drei Größen, ein Zeitfenster" />
            </h2>
            <div className={styles.tierGrid}>
              {detail.tiers.map((tier) => (
                <article key={tier.label} className={styles.tierCard}>
                  <div className={styles.tierImageWrap}>
                    <ImagePlaceholder label={`${tier.label}, 4:5`} className={styles.tierImage} />
                    {tier.featured && (
                      <span className={styles.tierBadge}>
                        <T de="Am häufigsten" />
                      </span>
                    )}
                  </div>
                  <div className={styles.tierBody}>
                    <h3 className={styles.tierLabel}>
                      <T de={tier.label} />
                    </h3>
                    <p className={styles.tierPrice}>{tier.price}</p>
                    <p className={styles.tierDescription}>
                      <T de={tier.description} />
                    </p>
                    <p className={tier.deliveryUrgent ? styles.tierDeliveryWarn : styles.tierDelivery}>
                      <T de={tier.deliveryLabel} />
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {!detail.tiers && (
          <section className={styles.section}>
            <p className={styles.eyebrow}>
              <T de="Preis" />
            </p>
            <h2 className={styles.sectionTitle}>
              <T de={detail.priceNote} />
            </h2>
            <p className={styles.priceNoteBody}>
              <T de="[Preisstufen folgen]" />
            </p>
          </section>
        )}

        {products.length > 0 && (
          <section className={styles.section}>
            <div className={styles.productsHead}>
              <span className={styles.eyebrow}>
                <T de={detail.productsSectionTitle} />
              </span>
            </div>
            <ProductGrid products={products} />
          </section>
        )}

        <section className={styles.advice}>
          <h2 className={styles.adviceTitle}>
            <T de={detail.adviceTitle} />
          </h2>
          <div className={styles.adviceBody}>
            {detail.adviceParagraphs.map((paragraph, i) => (
              <p key={i} className={styles.adviceParagraph}>
                <T de={paragraph} />
              </p>
            ))}
            <div className={styles.adviceLinks}>
              <Link href="/anlaesse" className={styles.adviceLink}>
                <T de="Weitere Anlässe" />
              </Link>
              <Link href="/lieferung" className={styles.adviceLink}>
                <T de="Lieferung & Zeitfenster" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
    </div>
  );
}
