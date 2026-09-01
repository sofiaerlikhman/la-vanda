"use client";

import { useState } from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import styles from "./ProductGallery.module.css";

export default function ProductGallery({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const shots = images.length > 0 ? images : ["Produktbild"];
  const active = shots[Math.min(activeIndex, shots.length - 1)];

  return (
    <div className={styles.wrap}>
      <div className={`${styles.main} lv-zoom`}>
        <ImagePlaceholder label={active} className={`${styles.mainImage} lv-zoom-target`} />
      </div>
      {shots.length > 1 && (
        <div className={styles.thumbs}>
          {shots.map((shot, i) => (
            <button
              key={`${shot}-${i}`}
              type="button"
              className={i === activeIndex ? `${styles.thumb} ${styles.thumbActive}` : styles.thumb}
              onClick={() => setActiveIndex(i)}
              aria-label={`Bild anzeigen: ${shot}`}
              aria-pressed={i === activeIndex}
            >
              <ImagePlaceholder label={shot} className={styles.thumbImage} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
