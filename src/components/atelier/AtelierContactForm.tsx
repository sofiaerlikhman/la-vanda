"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Button from "@/components/Button";
import styles from "./AtelierContactForm.module.css";

type FormValues = {
  name: string;
  email: string;
  orderNumber: string;
  message: string;
};

const EMPTY_FORM: FormValues = { name: "", email: "", orderNumber: "", message: "" };

/**
 * General shop contact form — orders, complaints, everything that isn't a
 * bespoke request (those belong on /anfrage instead, as the lead text below
 * says). There is no backend or email service wired up anywhere in this
 * project yet (see README → "Backend & Inventar"): this only validates the
 * required fields client-side and shows a local confirmation state. Swap
 * this for a real POST to a Next.js Route Handler (e.g.
 * src/app/api/kontakt/route.ts, emailing the shop or forwarding to a CRM)
 * once a backend exists — nothing here is actually sent anywhere.
 */
export default function AtelierContactForm() {
  const [values, setValues] = useState<FormValues>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function updateField(key: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      setError("Bitte Name, E-Mail und Nachricht ausfüllen.");
      return;
    }
    setError(null);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.confirmation} role="status">
        <p className={styles.confirmationTitle}>Danke, deine Nachricht ist da.</p>
        <p className={styles.confirmationBody}>Wir antworten am nächsten Werktag.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <label className={styles.field}>
        <span>Name</span>
        <input
          type="text"
          className={styles.input}
          value={values.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateField("name", e.target.value)}
        />
      </label>
      <label className={styles.field}>
        <span>E-Mail</span>
        <input
          type="email"
          className={styles.input}
          value={values.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateField("email", e.target.value)}
        />
      </label>
      <label className={`${styles.field} ${styles.fieldWide}`}>
        <span>Bestellnummer, wenn es um eine Lieferung geht</span>
        <input
          type="text"
          placeholder="LV-26-0000"
          className={styles.input}
          value={values.orderNumber}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateField("orderNumber", e.target.value)}
        />
      </label>
      <label className={`${styles.field} ${styles.fieldWide}`}>
        <span>Nachricht</span>
        <textarea
          rows={5}
          className={styles.textarea}
          value={values.message}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => updateField("message", e.target.value)}
        />
      </label>
      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}
      <div className={styles.actions}>
        <Button type="submit" variant="primary" size={48}>
          Nachricht senden
        </Button>
        <span className={styles.note}>Wir antworten am nächsten Werktag.</span>
      </div>
    </form>
  );
}
