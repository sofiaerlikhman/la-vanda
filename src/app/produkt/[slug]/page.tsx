import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CutoffBanner from "@/components/CutoffBanner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumb from "@/components/Breadcrumb";
import ProductGrid from "@/components/ProductGrid";
import ProductGallery from "@/components/product/ProductGallery";
import BuyBox from "@/components/product/BuyBox";
import FaqAccordion from "@/components/product/FaqAccordion";
import AccessoryGrid from "@/components/product/AccessoryGrid";
import { getAllProductSlugs, getProductBySlug, getRelatedProducts, type Product } from "@/data/products";
import { getAccessories } from "@/data/accessories";
import { T } from "@/i18n/T";
import styles from "./page.module.css";

const CATEGORY_LABELS: Record<Product["category"], string> = {
  straeusse: "Sträuße",
  pflanzen: "Pflanzen",
  vasen: "Vasen & Zubehör",
};

type ProductPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  if (!product) {
    return { title: "Produkt nicht gefunden — la Vanda" };
  }
  return {
    title: `${product.name} — la Vanda`,
    description: product.description,
  };
}

/** Pre-render one static page per product (required by `output: 'export'`). */
export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

/**
 * Dynamic per-product route, statically generated at build time for every
 * slug from `generateStaticParams`. Once products come from a real database,
 * this can move to on-demand rendering / ISR on a server host.
 */
export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }

  const [related, accessories] = await Promise.all([getRelatedProducts(product, 4), getAccessories()]);
  const categoryLabel = CATEGORY_LABELS[product.category];

  return (
    <div>
      <CutoffBanner />
      <SiteHeader />

      <div className={styles.page}>
        <Breadcrumb
          items={[
            { label: "Start", href: "/" },
            { label: categoryLabel, href: "/sortiment" },
            { label: product.name },
          ]}
        />

        <div className={styles.layout}>
          <ProductGallery images={product.gallery ?? [product.image]} />
          <BuyBox product={product} />
        </div>

        {product.faq && (
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <T de="Häufige Fragen" />
            </h2>
            <FaqAccordion entries={product.faq} />
          </div>
        )}

        {accessories.length > 0 && (
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <T de="Passt dazu" />
            </h2>
            <AccessoryGrid accessories={accessories} />
          </div>
        )}

        {related.length > 0 && (
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <T de="Ähnliche" /> <T de={categoryLabel} />
            </h2>
            <ProductGrid products={related} />
          </div>
        )}
      </div>

      <SiteFooter />
    </div>
  );
}
