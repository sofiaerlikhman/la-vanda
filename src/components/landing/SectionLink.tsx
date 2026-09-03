"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * A link to one of the landing page's sections, from anywhere on the site.
 *
 * On the landing page itself a bare `#blumen` is right: no routing, and
 * the browser's own smooth scroll handles it. On the legal pages that
 * fragment points at nothing, so the same nav has to route home first —
 * through next/link, which is what applies the basePath (CLAUDE.md §7).
 * Without this the header's nav is a set of dead links on /impressum,
 * /datenschutz and /barrierefreiheit.
 */
export default function SectionLink({
  hash,
  className,
  onClick,
  children,
}: {
  /** Fragment including the "#", e.g. "#blumen". */
  hash: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  // usePathname() reports the route without the basePath, so the landing
  // page is plain "/" here even though it is served from /la-vanda/.
  const onLandingPage = usePathname() === "/";

  if (onLandingPage) {
    return (
      <a href={hash} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={`/${hash}`} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
