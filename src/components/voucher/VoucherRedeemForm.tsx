"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Button from "@/components/Button";
import { redeemVoucher, type Voucher } from "@/data/vouchers";
import { useT } from "@/i18n/LanguageProvider";
import styles from "./VoucherRedeemForm.module.css";

/**
 * "Guthaben prüfen" reuses the same demo code list Checkout's "Gutschein
 * einlösen" field validates against (src/data/vouchers.ts — WILLKOMMEN10,
 * LIEFERFREI). Those are marketing discount codes, not real stored-value
 * gift-card balances — there's no backend yet to look up an actually
 * purchased voucher's remaining balance — but it's the closest real check
 * available, and behaves like a genuine lookup rather than a decorative
 * form. Swap for a real `/api/vouchers/:code` balance lookup once one
 * exists.
 */
export default function VoucherRedeemForm() {
  const t = useT();
  const [code, setCode] = useState("");
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState<Voucher | null | undefined>(undefined);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!code.trim()) return;
    setChecking(true);
    const voucher = await redeemVoucher(code);
    setResult(voucher);
    setChecking(false);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setCode(event.target.value);
    setResult(undefined);
  }

  return (
    <div>
      <form className={styles.row} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={t("Gutscheincode")}
          value={code}
          onChange={handleChange}
          className={styles.input}
          aria-label={t("Gutscheincode")}
        />
        <Button variant="secondary" type="submit" className={styles.submitButton} disabled={checking}>
          {t("Guthaben prüfen")}
        </Button>
      </form>
      {result === null && <p className={styles.error}>{t("Code nicht gefunden — bitte im Laden nachfragen.")}</p>}
      {result && (
        <p className={styles.ok}>
          „{result.code}“ {t("erkannt")} — {t(result.description)}.
        </p>
      )}
    </div>
  );
}
