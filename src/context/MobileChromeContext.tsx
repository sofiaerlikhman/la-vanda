"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type MobileChromeContextValue = {
  menuOpen: boolean;
  searchOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
  openSearch: () => void;
  closeSearch: () => void;
};

const MobileChromeContext = createContext<MobileChromeContextValue | null>(null);

/**
 * Coordinates the two mobile-only full-screen overlays (hamburger menu,
 * search) so the header's icons and the bottom tab bar's "Suche" tab —
 * two separate components — can open/close the same overlay instance
 * mounted once in the root layout. Opening one always closes the other.
 */
export function MobileChromeProvider({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  function openMenu() {
    setSearchOpen(false);
    setMenuOpen(true);
  }
  function closeMenu() {
    setMenuOpen(false);
  }
  function toggleMenu() {
    setSearchOpen(false);
    setMenuOpen((v) => !v);
  }
  function openSearch() {
    setMenuOpen(false);
    setSearchOpen(true);
  }
  function closeSearch() {
    setSearchOpen(false);
  }

  return (
    <MobileChromeContext.Provider
      value={{ menuOpen, searchOpen, openMenu, closeMenu, toggleMenu, openSearch, closeSearch }}
    >
      {children}
    </MobileChromeContext.Provider>
  );
}

export function useMobileChrome(): MobileChromeContextValue {
  const ctx = useContext(MobileChromeContext);
  if (!ctx) {
    throw new Error("useMobileChrome must be used within a MobileChromeProvider (see src/app/layout.tsx)");
  }
  return ctx;
}
