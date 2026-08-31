"use client";

import { useState } from "react";
import type { ProductFaqEntry } from "@/data/products";
import styles from "./FaqAccordion.module.css";

export default function FaqAccordion({ entries }: { entries: ProductFaqEntry[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.list}>
      {entries.map((entry, i) => {
        const open = openIndex === i;
        return (
          <div key={entry.question} className={styles.item}>
            <button
              type="button"
              className={styles.question}
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              {entry.question}
              <span className={styles.icon} aria-hidden="true">
                {open ? "−" : "+"}
              </span>
            </button>
            {open && <p className={styles.answer}>{entry.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
