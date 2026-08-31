"use client";

import type { ChangeEvent } from "react";
import { formatPriceEUR } from "@/data/products";
import { GREETING_CARDS, MAX_CARD_MESSAGE_LENGTH } from "@/data/konfigurator";
import styles from "./GreetingCardPicker.module.css";

type GreetingCardPickerProps = {
  cardId: string;
  message: string;
  onCardChange: (id: string) => void;
  onMessageChange: (message: string) => void;
};

/** Step 4 — greeting card + handwritten text, from "4 · Grußkarte". */
export default function GreetingCardPicker({ cardId, message, onCardChange, onMessageChange }: GreetingCardPickerProps) {
  function handleMessageChange(e: ChangeEvent<HTMLTextAreaElement>) {
    onMessageChange(e.target.value.slice(0, MAX_CARD_MESSAGE_LENGTH));
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>4 · Grußkarte</h2>
      <div className={styles.layout}>
        <div className={styles.options} role="radiogroup" aria-label="Grußkarte wählen">
          {GREETING_CARDS.map((card) => {
            const active = card.id === cardId;
            return (
              <button
                key={card.id}
                type="button"
                role="radio"
                aria-checked={active}
                className={active ? `${styles.option} ${styles.optionActive}` : styles.option}
                onClick={() => onCardChange(card.id)}
              >
                <span className={styles.name}>{card.name}</span>
                <span className={styles.price}>{card.priceCents > 0 ? `+ ${formatPriceEUR(card.priceCents)}` : "inklusive"}</span>
              </button>
            );
          })}
        </div>
        <div>
          <label htmlFor="lv-cfg-msg" className={styles.label}>
            Text auf der Karte
          </label>
          <textarea
            id="lv-cfg-msg"
            rows={4}
            placeholder={`Handgeschrieben von uns, max. ${MAX_CARD_MESSAGE_LENGTH} Zeichen`}
            className={styles.textarea}
            value={message}
            onChange={handleMessageChange}
            disabled={cardId === "keine"}
          />
          <p className={styles.counter}>
            {message.length} / {MAX_CARD_MESSAGE_LENGTH}
          </p>
        </div>
      </div>
    </section>
  );
}
