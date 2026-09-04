"use client";

import { useState } from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { useT } from "@/i18n/LanguageProvider";
import styles from "./ProductGallery.module.css";

export default function ProductGallery({ images }: { images: string[] }) {
  const t = useT();
  const [activeIndex, setActiveIndex] = useState(0);
  const shots = images.length > 0 ? images : ["Produktbild"];
  const active = shots[Math.min(activeIndex, shots.length - 1)];

  return (
    <div className={styles.wrap}>
      <div className={`${styles.main} lv-zoom`}>
        <ImagePlaceholder label={t(active)} className={`${styles.mainImage} lv-zoom-target`} />
      </div>
      {shots.length > 1 && (
        <div className={styles.thumbs}>
          {shots.map((shot, i) => (
            <button
              key={`${shot}-${i}`}
              type="button"
              className={i === activeIndex ? `${styles.thumb} ${styles.thumbActive}` : styles.thumb}
              onClick={() => setActiveIndex(i)}
              aria-label={`${t("Bild anzeigen")}: ${t(shot)}`}
              aria-pressed={i === activeIndex}
            >
              <ImagePlaceholder label={t(shot)} className={styles.thumbImage} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
