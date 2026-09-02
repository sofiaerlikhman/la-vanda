"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { uk } from "./translations";
import { en } from "./en";

export type Lang = "de" | "uk" | "en";

/** Per-language dictionaries. German is the source language, so it has none. */
const DICTIONARIES: Record<Exclude<Lang, "de">, Record<string, string>> = { uk, en };

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Translate a German source string; returns it unchanged in German mode
   *  or when the active language has no entry for it. */
  t: (de: string) => string;
};

const STORAGE_KEY = "lv-lang";

const LanguageContext = createContext<LanguageContextValue>({
  lang: "de",
  setLang: () => {},
  t: (de) => de,
});

/**
 * Client-side language switch. German is the default (and what the static
 * HTML is prerendered in); a returning visitor who chose Ukrainian is moved
 * over on the client after hydration. Choice is remembered in localStorage.
 *
 * We deliberately keep German as the SSR default rather than guessing from
 * navigator.language, so the prerendered content and first paint always match
 * and there's no locale flash for first-time (German) visitors.
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");

  // Restore the saved choice once, on the client.
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "uk" || stored === "de" || stored === "en") setLangState(stored);
    } catch {
      /* localStorage unavailable (private mode etc.) — stay on default */
    }
  }, []);

  // Keep <html lang> in sync for accessibility and correct hyphenation.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore persistence failure */
    }
  }, []);

  const t = useCallback((de: string) => (lang === "de" ? de : DICTIONARIES[lang][de] ?? de), [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLang = () => useContext(LanguageContext);
/** Convenience hook for components that only need the translate function. */
export const useT = () => useContext(LanguageContext).t;
