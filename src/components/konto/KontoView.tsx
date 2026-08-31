"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Button from "@/components/Button";
import styles from "./KontoView.module.css";

/**
 * BACKEND GAP — no real authentication or account backend exists yet
 * (see README.md "Backend & Inventar"): no user database, no password
 * hashing/storage, no sessions, no orders/addresses/subscriptions tables.
 * This view therefore does two honest things instead of faking a login:
 *
 *  1. Runs the login/register forms for real (client-side field
 *     validation), but on a valid submit shows a plain notice that
 *     accounts aren't wired up yet — it never pretends to sign anyone in.
 *  2. Offers an explicitly-labelled "preview" of the future dashboard
 *     shell (Bestellungen / Abo verwalten / Adressen / Daten & Zahlung)
 *     with empty states — no fabricated orders, names, or addresses.
 *
 * Wiring this up for real needs: a real auth system (e.g. NextAuth.js or
 * a custom session/cookie setup) plus a users/orders/addresses/abos
 * database (see README's "Inventar-Datenmodell" section for a starting
 * schema) and Route Handlers to back each tab below with real data.
 */

type ViewMode = "auth" | "preview";
type AuthMode = "login" | "register";
type Tab = "bestellungen" | "abo" | "adressen" | "daten";

const TABS: { id: Tab; label: string }[] = [
  { id: "bestellungen", label: "Bestellungen" },
  { id: "abo", label: "Abo verwalten" },
  { id: "adressen", label: "Adressen" },
  { id: "daten", label: "Daten & Zahlung" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type LoginFields = { email: string; password: string };
type RegisterFields = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

function validateLogin(fields: LoginFields): Partial<Record<keyof LoginFields, string>> {
  const errors: Partial<Record<keyof LoginFields, string>> = {};
  if (!fields.email.trim()) errors.email = "Bitte E-Mail-Adresse angeben.";
  else if (!EMAIL_RE.test(fields.email.trim())) errors.email = "Das sieht nicht nach einer gültigen E-Mail aus.";
  if (!fields.password) errors.password = "Bitte Passwort angeben.";
  return errors;
}

function validateRegister(fields: RegisterFields): Partial<Record<keyof RegisterFields, string>> {
  const errors: Partial<Record<keyof RegisterFields, string>> = {};
  if (!fields.firstName.trim()) errors.firstName = "Bitte Vorname angeben.";
  if (!fields.lastName.trim()) errors.lastName = "Bitte Nachname angeben.";
  if (!fields.email.trim()) errors.email = "Bitte E-Mail-Adresse angeben.";
  else if (!EMAIL_RE.test(fields.email.trim())) errors.email = "Das sieht nicht nach einer gültigen E-Mail aus.";
  if (!fields.password) errors.password = "Bitte Passwort angeben.";
  else if (fields.password.length < 8) errors.password = "Mindestens 8 Zeichen.";
  if (fields.passwordConfirm !== fields.password) errors.passwordConfirm = "Die Passwörter stimmen nicht überein.";
  return errors;
}

const NOT_CONNECTED_NOTICE =
  "Konten sind in dieser Version noch nicht angebunden — hier entsteht später die echte Anmeldung.";

export default function KontoView() {
  const [view, setView] = useState<ViewMode>("auth");
  const [authMode, setAuthMode] = useState<AuthMode>("login");

  const [loginFields, setLoginFields] = useState<LoginFields>({ email: "", password: "" });
  const [loginErrors, setLoginErrors] = useState<Partial<Record<keyof LoginFields, string>>>({});
  const [loginSubmitted, setLoginSubmitted] = useState(false);

  const [registerFields, setRegisterFields] = useState<RegisterFields>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [registerErrors, setRegisterErrors] = useState<Partial<Record<keyof RegisterFields, string>>>({});
  const [registerSubmitted, setRegisterSubmitted] = useState(false);

  const [activeTab, setActiveTab] = useState<Tab>("bestellungen");
  // Mobile only (see KontoView.module.css): "la Vanda Wireframes Mobile" is
  // explicit here — "Auf mobil wird aus den Konto-Tabs eine Liste; jeder
  // Punkt ist eine eigene Ansicht" (the tabs become a list; each item is
  // its own view). Both the list and the selected panel stay in the DOM
  // always — only which one is visible changes, driven by this flag via
  // the data-mobile-view attribute below; desktop's CSS ignores it and
  // always shows the sidebar + panel side by side.
  const [mobileShowList, setMobileShowList] = useState(true);
  const [addressNoteOpen, setAddressNoteOpen] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [datenSubmitted, setDatenSubmitted] = useState(false);

  function handleLoginChange(field: keyof LoginFields) {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setLoginFields((prev) => ({ ...prev, [field]: event.target.value }));
      setLoginSubmitted(false);
    };
  }

  function handleLoginSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const errors = validateLogin(loginFields);
    setLoginErrors(errors);
    setLoginSubmitted(Object.keys(errors).length === 0);
  }

  function handleRegisterChange(field: keyof RegisterFields) {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setRegisterFields((prev) => ({ ...prev, [field]: event.target.value }));
      setRegisterSubmitted(false);
    };
  }

  function handleRegisterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const errors = validateRegister(registerFields);
    setRegisterErrors(errors);
    setRegisterSubmitted(Object.keys(errors).length === 0);
  }

  function switchAuthMode(mode: AuthMode) {
    setAuthMode(mode);
    setLoginSubmitted(false);
    setRegisterSubmitted(false);
  }

  function handleDatenSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDatenSubmitted(true);
  }

  return (
    <div>
      <div className={styles.head}>
        <p className={styles.eyebrow}>Konto</p>
        <h1 className={styles.title}>{view === "auth" ? "Anmelden" : "Vorschau: Kontobereich"}</h1>
        <p className={styles.lead}>
          {view === "auth"
            ? "Mit Konto: Bestellungen im Blick, Abo verwalten, Adressen hinterlegen. Registrieren dauert eine Minute."
            : "So ist der Kontobereich aufgebaut, sobald echte Konten angebunden sind — ohne echte Daten."}
        </p>
      </div>

      <div className={styles.modeRow}>
        <button
          type="button"
          className={view === "auth" ? `${styles.modePill} ${styles.modePillActive}` : styles.modePill}
          onClick={() => setView("auth")}
        >
          Anmelden
        </button>
        <button
          type="button"
          className={view === "preview" ? `${styles.modePill} ${styles.modePillActive}` : styles.modePill}
          onClick={() => setView("preview")}
        >
          Vorschau: Kontobereich
        </button>
      </div>

      {view === "auth" ? (
        <div className={styles.authCard}>
          <div className={styles.authTabs}>
            <button
              type="button"
              className={authMode === "login" ? `${styles.authTab} ${styles.authTabActive}` : styles.authTab}
              onClick={() => switchAuthMode("login")}
            >
              Anmelden
            </button>
            <button
              type="button"
              className={authMode === "register" ? `${styles.authTab} ${styles.authTabActive}` : styles.authTab}
              onClick={() => switchAuthMode("register")}
            >
              Registrieren
            </button>
          </div>

          {authMode === "login" ? (
            <form className={styles.form} onSubmit={handleLoginSubmit} noValidate>
              <label className={styles.field}>
                <span>E-Mail</span>
                <input
                  type="email"
                  value={loginFields.email}
                  onChange={handleLoginChange("email")}
                  className={styles.input}
                  aria-invalid={Boolean(loginErrors.email)}
                />
                {loginErrors.email && <span className={styles.errorText}>{loginErrors.email}</span>}
              </label>
              <label className={styles.field}>
                <span>Passwort</span>
                <input
                  type="password"
                  value={loginFields.password}
                  onChange={handleLoginChange("password")}
                  className={styles.input}
                  aria-invalid={Boolean(loginErrors.password)}
                />
                {loginErrors.password && <span className={styles.errorText}>{loginErrors.password}</span>}
              </label>
              <Button type="submit" size={48} className={styles.submitButton}>
                Anmelden
              </Button>
              {loginSubmitted && <p className={styles.notice}>{NOT_CONNECTED_NOTICE}</p>}
            </form>
          ) : (
            <form className={styles.form} onSubmit={handleRegisterSubmit} noValidate>
              <div className={styles.formGrid}>
                <label className={styles.field}>
                  <span>Vorname</span>
                  <input
                    type="text"
                    value={registerFields.firstName}
                    onChange={handleRegisterChange("firstName")}
                    className={styles.input}
                    aria-invalid={Boolean(registerErrors.firstName)}
                  />
                  {registerErrors.firstName && <span className={styles.errorText}>{registerErrors.firstName}</span>}
                </label>
                <label className={styles.field}>
                  <span>Nachname</span>
                  <input
                    type="text"
                    value={registerFields.lastName}
                    onChange={handleRegisterChange("lastName")}
                    className={styles.input}
                    aria-invalid={Boolean(registerErrors.lastName)}
                  />
                  {registerErrors.lastName && <span className={styles.errorText}>{registerErrors.lastName}</span>}
                </label>
              </div>
              <label className={styles.field}>
                <span>E-Mail</span>
                <input
                  type="email"
                  value={registerFields.email}
                  onChange={handleRegisterChange("email")}
                  className={styles.input}
                  aria-invalid={Boolean(registerErrors.email)}
                />
                {registerErrors.email && <span className={styles.errorText}>{registerErrors.email}</span>}
              </label>
              <div className={styles.formGrid}>
                <label className={styles.field}>
                  <span>Passwort</span>
                  <input
                    type="password"
                    value={registerFields.password}
                    onChange={handleRegisterChange("password")}
                    className={styles.input}
                    aria-invalid={Boolean(registerErrors.password)}
                  />
                  {registerErrors.password && <span className={styles.errorText}>{registerErrors.password}</span>}
                </label>
                <label className={styles.field}>
                  <span>Passwort bestätigen</span>
                  <input
                    type="password"
                    value={registerFields.passwordConfirm}
                    onChange={handleRegisterChange("passwordConfirm")}
                    className={styles.input}
                    aria-invalid={Boolean(registerErrors.passwordConfirm)}
                  />
                  {registerErrors.passwordConfirm && (
                    <span className={styles.errorText}>{registerErrors.passwordConfirm}</span>
                  )}
                </label>
              </div>
              <Button type="submit" size={48} className={styles.submitButton}>
                Konto erstellen
              </Button>
              {registerSubmitted && <p className={styles.notice}>{NOT_CONNECTED_NOTICE}</p>}
            </form>
          )}
        </div>
      ) : (
        <div>
          <p className={styles.previewBanner}>
            Vorschau — noch nicht mit echten Konten verbunden. Alles hier ist ein leerer Beispielzustand, keine echten
            Daten.{" "}
            <button type="button" className={styles.previewBackLink} onClick={() => setView("auth")}>
              Zurück zur Anmeldung
            </button>
          </p>

          <div className={styles.dashboardGrid} data-mobile-view={mobileShowList ? "list" : "detail"}>
            <nav className={styles.tabNav}>
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={activeTab === tab.id ? `${styles.tabButton} ${styles.tabButtonActive}` : styles.tabButton}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setMobileShowList(false);
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            <div className={styles.contentPane}>
              <button
                type="button"
                className={styles.mobileBack}
                onClick={() => setMobileShowList(true)}
              >
                ← Übersicht
              </button>

              {activeTab === "bestellungen" && (
                <div>
                  <h2 className={styles.panelTitle}>Bestellungen</h2>
                  <div className={styles.emptyState}>
                    <p className={styles.emptyTitle}>Noch keine Bestellungen.</p>
                    <p className={styles.emptyBody}>Sobald du bestellst, erscheinen Status und Verlauf hier.</p>
                    <Button href="/sortiment" variant="secondary" size={40} className={styles.emptyCta}>
                      Sträuße entdecken
                    </Button>
                  </div>
                </div>
              )}

              {activeTab === "abo" && (
                <div>
                  <h2 className={styles.panelTitle}>Abo verwalten</h2>
                  <div className={styles.emptyState}>
                    <p className={styles.emptyTitle}>Noch kein Abo aktiv.</p>
                    <p className={styles.emptyBody}>
                      Rhythmus, Größe und Lieferfenster lassen sich hier verwalten, sobald der Abo-Konfigurator
                      angebunden ist. [wird ergänzt]
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "adressen" && (
                <div>
                  <div className={styles.panelHead}>
                    <h2 className={styles.panelTitle}>Adressen</h2>
                    <Button
                      type="button"
                      variant="secondary"
                      size={40}
                      onClick={() => setAddressNoteOpen((open) => !open)}
                    >
                      Adresse hinzufügen
                    </Button>
                  </div>
                  {addressNoteOpen && (
                    <p className={styles.notice}>Adressverwaltung ist in dieser Vorschau noch nicht angebunden.</p>
                  )}
                  <div className={styles.emptyState}>
                    <p className={styles.emptyTitle}>Noch keine gespeicherte Adresse.</p>
                    <p className={styles.emptyBody}>Hinterlegte Lieferadressen erscheinen hier.</p>
                  </div>
                </div>
              )}

              {activeTab === "daten" && (
                <div>
                  <h2 className={styles.panelTitle}>Daten &amp; Zahlung</h2>
                  <form className={styles.form} onSubmit={handleDatenSubmit}>
                    <div className={styles.formGrid}>
                      <label className={styles.field}>
                        <span>Vorname</span>
                        <input type="text" className={styles.input} />
                      </label>
                      <label className={styles.field}>
                        <span>Nachname</span>
                        <input type="text" className={styles.input} />
                      </label>
                    </div>
                    <label className={styles.field}>
                      <span>E-Mail</span>
                      <input type="email" className={styles.input} />
                    </label>
                    <label className={styles.field}>
                      <span>Mobil, für die SMS vor der Lieferung</span>
                      <input type="tel" className={styles.input} />
                    </label>
                    <Button type="submit" size={48} className={styles.submitButton}>
                      Änderungen speichern
                    </Button>
                    {datenSubmitted && <p className={styles.notice}>{NOT_CONNECTED_NOTICE}</p>}
                  </form>

                  <p className={styles.subLabel}>Zahlungsart</p>
                  <div className={styles.emptyState}>
                    <p className={styles.emptyTitle}>Noch keine Zahlungsart hinterlegt.</p>
                  </div>

                  <p className={styles.subLabel}>Newsletter</p>
                  <label className={styles.checkboxRow}>
                    <input
                      type="checkbox"
                      checked={newsletter}
                      onChange={(event: ChangeEvent<HTMLInputElement>) => setNewsletter(event.target.checked)}
                      className={styles.checkbox}
                    />
                    <span>Einmal im Monat, was in der Werkstatt steht</span>
                  </label>
                  {newsletter && (
                    <p className={styles.previewFootnote}>
                      Nur als Vorschau lokal ausgewählt — ohne Konto wird das nicht gespeichert.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
