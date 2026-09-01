"use client";

import { useT } from "./LanguageProvider";

/**
 * Tiny translation helper for use inside Server Components (product,
 * occasion and shop pages are async Server Components and can't call the
 * `useT()` hook themselves). Renders the Ukrainian translation of a German
 * source string, falling back to the German original.
 *
 *   <T de="Häufige Fragen" />
 *
 * For element attributes (aria-label, placeholder, alt) this doesn't apply —
 * those live in client components that use `useT()` directly.
 */
export function T({ de }: { de: string }) {
  const t = useT();
  return <>{t(de)}</>;
}
