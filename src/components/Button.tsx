import Link from "next/link";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "onLavender" | "ghost";
type Size = 48 | 40 | 32;

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

/**
 * la Vanda button — variants and sizes from DESIGN-SYSTEM-RULES.md.
 * One primary button per view (design-system rule 7) — enforce that at the
 * call site, not here.
 *
 * An `href` starting with `#` is an in-page anchor and renders as a plain
 * <a>: next/link is for routes, and on a one-page site every CTA points at
 * a section of the page it's already on. Routes still go through next/link
 * so they pick up the basePath (CLAUDE.md §7).
 */
export default function Button({ variant = "primary", size = 48, className, ...props }: ButtonProps) {
  const classes = [styles.button, styles[variant], styles[`size${size}`], className].filter(Boolean).join(" ");

  if ("href" in props && props.href) {
    const { href, ...rest } = props;

    if (href.startsWith("#")) {
      return (
        <a href={href} className={classes} {...rest}>
          {props.children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...rest}>
        {props.children}
      </Link>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {buttonProps.children}
    </button>
  );
}
