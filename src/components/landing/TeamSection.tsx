"use client";

import ImagePlaceholder from "@/components/ImagePlaceholder";
import { useT } from "@/i18n/LanguageProvider";
import type { TeamMember } from "@/data/atelier";
import styles from "./TeamSection.module.css";

/**
 * Who works there. Names and roles come from the handoff; the portraits
 * are still placeholders (see BACKEND.md — photography).
 */
export default function TeamSection({ team }: { team: TeamMember[] }) {
  const t = useT();

  return (
    <section className={styles.section}>
      <h2 className={styles.title} data-reveal>
        {t("Wer bindet")}
      </h2>
      <div className={styles.grid} data-reveal-group>
        {team.map((member) => (
          <article key={member.name} className={styles.card}>
            <div className={styles.imageWrap}>
              <ImagePlaceholder label={t("Porträt, Hochformat")} />
            </div>
            <div className={styles.body}>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{t(member.role)}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
