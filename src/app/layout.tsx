import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";
import { MobileChromeProvider } from "@/context/MobileChromeContext";
import MobileTabBar from "@/components/mobile/MobileTabBar";
import MobileMenuOverlay from "@/components/mobile/MobileMenuOverlay";
import MobileSearchOverlay from "@/components/mobile/MobileSearchOverlay";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

export const metadata: Metadata = {
  title: "la Vanda — Blumenatelier Wiesbaden",
  description:
    "Ein Laden, der liefert. Heute gebunden, heute bei dir — Sträuße, Pflanzen und Abos aus Wiesbaden, geliefert von eigenen Fahrern.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <CartProvider>
          <MobileChromeProvider>
            {children}
            {/* Mobile-only global chrome (hidden ≥768px via CSS) — mounted once
                here so every page gets the bottom tab bar and full-screen
                menu/search overlays without per-page wiring. */}
            <MobileTabBar />
            <MobileMenuOverlay />
            <MobileSearchOverlay />
            {/* Wires up scroll-reveal animations for the whole tree. */}
            <ScrollReveal />
          </MobileChromeProvider>
        </CartProvider>
      </body>
    </html>
  );
}
