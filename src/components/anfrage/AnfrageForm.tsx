"use client";

import Link from "next/link";
import { useState, type ChangeEvent, type FormEvent } from "react";
import Button from "@/components/Button";
import styles from "./AnfrageForm.module.css";

type FormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  requestType: string;
  date: string;
  location: string;
  budget: string;
  message: string;
  consent: boolean;
};

const REQUEST_TYPES = [
  "Installation im Laden oder Restaurant",
  "Hochzeit",
  "Firmenevent",
  "Trauerbinderei",
  "Etwas anderes",
];

const BUDGETS = ["bis 300 €", "300 bis 900 €", "900 bis 2.500 €", "über 2.500 €", "Noch offen"];

const EMPTY_FORM: FormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  requestType: REQUEST_TYPES[0],
  date: "",
  location: "",
  budget: BUDGETS[0],
  message: "",
  consent: false,
};

/**
 * The custom-request form for installations/deco, weddings & events, and
 * Trauerbinderei — bespoke work that never goes through the normal cart.
 * There is no backend or email service wired up anywhere in this project
 * yet (see README → "Backend & Inventar"): submitting only validates the
 * required fields client-side and shows a local confirmation. Swap this for
 * a real POST to a Next.js Route Handler (e.g. src/app/api/anfrage/route.ts,
 * emailing the shop or forwarding to a CRM) once a backend exists — nothing
 * here is actually sent anywhere yet.
 */
export default function AnfrageForm() {
  const [values, setValues] = useState<FormValues>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function updateField<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      setError("Bitte Name, E-Mail und eine kurze Beschreibung ausfüllen.");
      return;
    }
    if (!values.consent) {
      setError("Bitte der Verarbeitung deiner Angaben zustimmen.");
      return;
    }
    setError(null);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.confirmation} role="status">
        <p className={styles.confirmationTitle}>Danke, deine Anfrage ist da.</p>
        <p className={styles.confirmationBody}>Antwort innerhalb von zwei Werktagen, meist am selben Tag.</p>
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
        <span>Firma, wenn vorhanden</span>
        <input
          type="text"
          className={styles.input}
          value={values.company}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateField("company", e.target.value)}
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
      <label className={styles.field}>
        <span>Telefon</span>
        <input
          type="tel"
          className={styles.input}
          value={values.phone}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateField("phone", e.target.value)}
        />
      </label>
      <label className={styles.field}>
        <span>Art der Anfrage</span>
        <select
          className={styles.select}
          value={values.requestType}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => updateField("requestType", e.target.value)}
        >
          {REQUEST_TYPES.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>
      <label className={styles.field}>
        <span>Datum</span>
        <input
          type="date"
          className={styles.input}
          value={values.date}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateField("date", e.target.value)}
        />
      </label>
      <label className={styles.field}>
        <span>Ort</span>
        <input
          type="text"
          placeholder="Adresse oder Stadtteil"
          className={styles.input}
          value={values.location}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateField("location", e.target.value)}
        />
      </label>
      <label className={styles.field}>
        <span>Budget</span>
        <select
          className={styles.select}
          value={values.budget}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => updateField("budget", e.target.value)}
        >
          {BUDGETS.map((budget) => (
            <option key={budget}>{budget}</option>
          ))}
        </select>
      </label>
      <label className={`${styles.field} ${styles.fieldWide}`}>
        <span>Was schwebt dir vor?</span>
        <textarea
          rows={5}
          className={styles.textarea}
          value={values.message}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => updateField("message", e.target.value)}
        />
      </label>
      <label className={styles.consentRow}>
        <input
          type="checkbox"
          className={styles.consentInput}
          checked={values.consent}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateField("consent", e.target.checked)}
        />
        <span className={styles.consentText}>
          Ich bin mit der Verarbeitung meiner Angaben zur Bearbeitung dieser Anfrage einverstanden.{" "}
          <Link href="/datenschutz">Datenschutz</Link>
        </span>
      </label>
      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}
      <div className={styles.actions}>
        <Button type="submit" variant="primary" size={48}>
          Anfrage senden
        </Button>
        <span className={styles.note}>Antwort innerhalb von zwei Werktagen, meist am selben Tag.</span>
      </div>
    </form>
  );
}
