import type { Metadata } from "next";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

/**
 * Metadata stays German on purpose — it's evaluated on the server at
 * build time, so the client-side language switch can't reach it
 * (CLAUDE.md §4, "Known exception").
 */
export const metadata: Metadata = {
  title: "la Vanda — Blumenatelier Wiesbaden",
  description:
    "Blumenatelier an der Marktstraße 12 in Wiesbaden. Öffnungszeiten, Team, Workshops und Kontakt — Online-Bestellung noch nicht möglich.",
};

/**
 * Root layout for the landing branch.
 *
 * The shop layout wrapped everything in a CartProvider and a
 * MobileChromeProvider and mounted a bottom tab bar plus two full-screen
 * overlays. None of that applies to a single page with no cart: the only
 * global left is the language switch and the scroll-reveal wiring, and
 * the mobile menu now lives inside LandingHeader, which is the only
 * thing that opens it.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <LanguageProvider>
          {children}
          {/* Wires up scroll-reveal animations for the whole tree. */}
          <ScrollReveal />
        </LanguageProvider>
      </body>
    </html>
  );
}
