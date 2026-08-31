"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type CartItemKind = "product" | "accessory" | "extra";

export type CartItem = {
  /** Stable per line — same id + add again increments quantity instead of duplicating. */
  id: string;
  kind: CartItemKind;
  name: string;
  priceCents: number;
  quantity: number;
  image: string;
  /** e.g. "Größe mittel" or a delivery-window label — shown under the name. */
  meta?: string;
  /** Present for kind "product" — links the line back to its detail page. */
  slug?: string;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  hasItem: (id: string) => boolean;
  clear: () => void;
  totalQuantity: number;
  subtotalCents: number;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "lv-cart-v1";

/**
 * Client-side cart, persisted to localStorage. There's no backend order
 * system yet (see README → "Backend & Inventar") — this is real state that
 * actually flows from "In den Korb" through to Checkout, but it lives only
 * in this browser. Swap the localStorage read/write for a `/api/cart` call
 * (or a server session) once a backend exists; every component that calls
 * `useCart()` stays the same either way.
 */
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // Corrupt or inaccessible storage — start from an empty cart rather than throwing.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage full/blocked — cart still works for this page load, just won't persist.
    }
  }, [items, hydrated]);

  function addItem(item: Omit<CartItem, "quantity">, quantity = 1) {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i));
      }
      return [...prev, { ...item, quantity }];
    });
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function setQuantity(id: string, quantity: number) {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity } : i)));
  }

  function hasItem(id: string) {
    return items.some((i) => i.id === id);
  }

  function clear() {
    setItems([]);
  }

  const totalQuantity = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items]);
  const subtotalCents = useMemo(() => items.reduce((sum, i) => sum + i.priceCents * i.quantity, 0), [items]);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, setQuantity, hasItem, clear, totalQuantity, subtotalCents }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider (see src/app/layout.tsx)");
  }
  return ctx;
}
