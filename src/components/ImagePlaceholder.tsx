import styles from "./ImagePlaceholder.module.css";

type ImagePlaceholderProps = {
  /** Describes the photo that belongs here (subject + aspect), for whoever fills the slot later. */
  label: string;
  className?: string;
};

/**
 * Stand-in for real product/location photography.
 *
 * The design handoff supplies no images — every photo is a placeholder the
 * client fills in later. Once real photos exist, swap this for next/image
 * (see the `image` field already reserved on the Product type in
 * src/data/products.ts) without touching any layout code, since this
 * component always fills its parent exactly like an <img> with object-fit:
 * cover would.
 */
export default function ImagePlaceholder({ label, className }: ImagePlaceholderProps) {
  return (
    <div className={[styles.placeholder, className].filter(Boolean).join(" ")} role="img" aria-label={label}>
      <span className={styles.caption}>{label}</span>
    </div>
  );
}
