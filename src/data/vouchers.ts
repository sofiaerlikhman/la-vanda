export type Voucher = {
  code: string;
  type: "percent" | "fixed";
  value: number; // percent (0–100) or cents, depending on `type`
  description: string;
};

/**
 * Hardcoded demo voucher codes so the Checkout "Gutschein einlösen" field
 * does something real instead of being decorative. There's no voucher
 * backend yet — replace this lookup with a real `/api/vouchers/:code` call
 * (and real issuance from the Gutschein page) once one exists.
 */
const VOUCHERS: Voucher[] = [
  { code: "WILLKOMMEN10", type: "percent", value: 10, description: "10 % Rabatt" },
  { code: "LIEFERFREI", type: "fixed", value: 590, description: "Lieferung geschenkt" },
];

export async function redeemVoucher(code: string): Promise<Voucher | null> {
  const normalized = code.trim().toUpperCase();
  return VOUCHERS.find((v) => v.code === normalized) ?? null;
}

export function applyVoucher(voucher: Voucher, subtotalCents: number, deliveryFeeCents: number): number {
  if (voucher.type === "fixed") {
    return Math.min(voucher.value, subtotalCents + deliveryFeeCents);
  }
  return Math.round((subtotalCents * voucher.value) / 100);
}
