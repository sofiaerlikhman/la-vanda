import type { ReactNode } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import styles from "./LegalPage.module.css";

type Props = {
  /** Page heading, also used as the trailing breadcrumb label. */
  title: string;
  /** Short lead sentence under the title. Optional — most legal pages don't need one. */
  lead?: string;
  /** "Stand …" label shown above the title. Defaults to today's date pattern used across the handoff. */
  updatedLabel?: string;
  children: ReactNode;
};

/**
 * Shared shell for the legally-required text pages (Impressum, AGB,
 * Datenschutz, Widerruf, Barrierefreiheit). Handles breadcrumb, title,
 * the "not legal advice" notice, and prose typography for the section
 * content passed in as children — the pages themselves only supply copy.
 */
export default function LegalPage({ title, lead, updatedLabel = "Stand 31. August 2026", children }: Props) {
  return (
    <div className={styles.page}>
      <Breadcrumb items={[{ label: "Start", href: "/" }, { label: title }]} />

      <p className={styles.meta}>{updatedLabel}</p>
      <h1 className={styles.title}>{title}</h1>
      {lead && <p className={styles.lead}>{lead}</p>}

      <div className={styles.notice}>
        <p>
          <strong>Rechtlicher Hinweis:</strong> Diese Seite enthält Platzhalter und ersetzt keine anwaltliche Prüfung.
          Vor Veröffentlichung von einer Rechtsanwältin/einem Rechtsanwalt prüfen lassen.
        </p>
      </div>

      <article className={styles.content}>{children}</article>
    </div>
  );
}
