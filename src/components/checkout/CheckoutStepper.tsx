"use client";

import styles from "./CheckoutStepper.module.css";

const STEPS = ["Korb", "1 Wann & wohin", "2 Karte & Gruß", "3 Zahlung", "Prüfen", "Bestätigung", "Status"];

/**
 * Mobile shows only 3 phases ("Wann & wohin" / "Gruß" / "Zahlung") per
 * "la Vanda Wireframes Mobile" — a simplified progress indicator, not a
 * different flow: every screen underneath still runs the same 7-step
 * CheckoutFlow state machine, one focused view at a time (which already
 * matches the wireframe's "ein Primary pro Ansicht" rule on its own).
 * Collapsing the two into one true 3-screen mobile flow would mean
 * duplicating each step's form fields into combined layouts; grouping
 * the indicator instead keeps one implementation for both breakpoints.
 */
const PHASES: { label: string; steps: number[] }[] = [
  { label: "Wann & wohin", steps: [0, 1] },
  { label: "Gruß", steps: [2] },
  { label: "Zahlung", steps: [3, 4, 5, 6] },
];

export default function CheckoutStepper({
  step,
  onStepClick,
  maxReachedStep,
}: {
  step: number;
  onStepClick: (step: number) => void;
  /** Steps beyond this haven't been reached yet and can't be jumped to directly. */
  maxReachedStep: number;
}) {
  const activePhase = PHASES.findIndex((p) => p.steps.includes(step));

  return (
    <>
      <div className={styles.row}>
        {STEPS.map((label, i) => {
          const reachable = i <= maxReachedStep;
          return (
            <div key={label} className={styles.item}>
              {i > 0 && <span className={styles.connector} />}
              <button
                type="button"
                className={i === step ? `${styles.pill} ${styles.pillActive}` : styles.pill}
                onClick={() => reachable && onStepClick(i)}
                disabled={!reachable}
                aria-current={i === step ? "step" : undefined}
              >
                {label}
              </button>
            </div>
          );
        })}
      </div>

      <div className={styles.mobileRow}>
        {PHASES.map((phase, i) => {
          const reachable = phase.steps.some((s) => s <= maxReachedStep);
          return (
            <div key={phase.label} className={styles.mobileItem}>
              {i > 0 && <span className={styles.connector} />}
              <button
                type="button"
                className={i === activePhase ? `${styles.mobilePill} ${styles.pillActive}` : styles.mobilePill}
                onClick={() => reachable && onStepClick(phase.steps[0])}
                disabled={!reachable}
              >
                {i + 1} {phase.label}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
