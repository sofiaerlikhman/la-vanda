"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Progressive-enhancement scroll reveals.
 *
 * Watches every `[data-reveal]` / `[data-reveal-group]` element and adds
 * `is-visible` the first time it scrolls into view; the actual fade + rise
 * lives in globals.css. Elements reveal once and stay put — we never re-hide
 * on scroll-out, so nothing flickers as the customer moves around the page.
 *
 * Mounted once in the root layout. `usePathname` re-runs the scan after every
 * client-side navigation so freshly rendered pages get wired up too.
 *
 * Safety: the hidden starting state in CSS only applies when scripting is
 * enabled AND reduced motion is off, so if this component never runs (or the
 * user prefers reduced motion) content is simply shown — never stuck hidden.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      "[data-reveal]:not(.is-visible), [data-reveal-group]:not(.is-visible)",
    );
    if (elements.length === 0) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      // No animation wanted (or possible) — make sure everything is shown.
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        }
      },
      // Trigger a touch before the element is fully on screen so it's already
      // settled by the time it reaches comfortable reading position.
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
