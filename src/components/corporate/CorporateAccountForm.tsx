"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Button from "@/components/Button";
import { useT } from "@/i18n/LanguageProvider";
import styles from "./CorporateAccountForm.module.css";

type FormValues = {
  company: string;
  vatId: string;
  contactName: string;
  phone: string;
  billingEmail: string;
  interest: string;
  locations: string;
  notes: string;
};

const INTERESTS = ["Büro-Abo", "Sammelbestellung", "Deko & Event", "Mehreres"];
const LOCATIONS = ["Einer", "Zwei bis drei", "Mehr als drei"];

const EMPTY_FORM: FormValues = {
  company: "",
  vatId: "",
  contactName: "",
  phone: "",
  billingEmail: "",
  interest: INTERESTS[0],
  locations: LOCATIONS[0],
  notes: "",
};

/**
 * B2B account application (Sammelrechnung, Büro-Abo, Sammelbestellung …) —
 * a distinct form from the general /anfrage custom-request form, since this
 * is about opening a billing relationship, not requesting a one-off job.
 * There is no backend or CRM wired up anywhere in this project yet (see
 * README → "Backend & Inventar"): submitting only validates the required
 * fields client-side and shows a local confirmation. Swap this for a real
 * POST to a Next.js Route Handler (e.g. src/app/api/firmenkonto/route.ts,
 * emailing the shop or creating a lead in a CRM) once a backend exists.
 */
export default function CorporateAccountForm() {
  const t = useT();
  const [values, setValues] = useState<FormValues>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function updateField<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!values.company.trim() || !values.contactName.trim() || !values.phone.trim() || !values.billingEmail.trim()) {
      setError(t("Bitte Firma, Ansprechpartner, Telefon und E-Mail ausfüllen."));
      return;
    }
    setError(null);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.confirmation} role="status">
        <p className={styles.confirmationTitle}>{t("Danke, deine Anfrage ist da.")}</p>
        <p className={styles.confirmationBody}>
          {t("Wir melden uns innerhalb eines Werktags mit den Zahlungsbedingungen und einem Vorschlag für den Wochenplan.")}
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <label className={styles.field}>
        <span>{t("Firma")}</span>
        <input
          type="text"
          className={styles.input}
          value={values.company}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateField("company", e.target.value)}
        />
      </label>
      <label className={styles.field}>
        <span>{t("USt-IdNr., wenn vorhanden")}</span>
        <input
          type="text"
          className={styles.input}
          value={values.vatId}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateField("vatId", e.target.value)}
        />
      </label>
      <label className={styles.field}>
        <span>{t("Ansprechpartner")}</span>
        <input
          type="text"
          className={styles.input}
          value={values.contactName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateField("contactName", e.target.value)}
        />
      </label>
      <label className={styles.field}>
        <span>{t("Telefon")}</span>
        <input
          type="tel"
          className={styles.input}
          value={values.phone}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateField("phone", e.target.value)}
        />
      </label>
      <label className={`${styles.field} ${styles.fieldWide}`}>
        <span>{t("E-Mail für Rechnungen")}</span>
        <input
          type="email"
          className={styles.input}
          value={values.billingEmail}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateField("billingEmail", e.target.value)}
        />
      </label>
      <label className={styles.field}>
        <span>{t("Interesse")}</span>
        <select
          className={styles.select}
          value={values.interest}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => updateField("interest", e.target.value)}
        >
          {INTERESTS.map((interest) => (
            <option key={interest} value={interest}>
              {t(interest)}
            </option>
          ))}
        </select>
      </label>
      <label className={styles.field}>
        <span>{t("Standorte in Wiesbaden")}</span>
        <select
          className={styles.select}
          value={values.locations}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => updateField("locations", e.target.value)}
        >
          {LOCATIONS.map((location) => (
            <option key={location} value={location}>
              {t(location)}
            </option>
          ))}
        </select>
      </label>
      <label className={`${styles.field} ${styles.fieldWide}`}>
        <span>{t("Anmerkungen")}</span>
        <textarea
          rows={4}
          className={styles.textarea}
          value={values.notes}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => updateField("notes", e.target.value)}
        />
      </label>
      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}
      <div className={styles.actions}>
        <Button type="submit" variant="primary" size={48}>
          {t("Konto beantragen")}
        </Button>
        <span className={styles.note}>{t("Freischaltung innerhalb eines Werktags.")}</span>
      </div>
    </form>
  );
}
