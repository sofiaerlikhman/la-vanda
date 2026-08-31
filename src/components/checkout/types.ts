import type { DeliveryWindowId } from "@/data/delivery";
import type { Voucher } from "@/data/vouchers";
import type { CartItem } from "@/context/CartContext";

export type DeliveryType = "lieferung" | "abholung";

export type AddressForm = {
  firstName: string;
  lastName: string;
  street: string;
  postalCode: string;
  city: string;
  email: string;
  phone: string;
  ifNoAnswer: string;
};

export const EMPTY_ADDRESS: AddressForm = {
  firstName: "",
  lastName: "",
  street: "",
  postalCode: "",
  city: "",
  email: "",
  phone: "",
  ifNoAnswer: "Bei Nachbarn abgeben",
};

export type CardForm = {
  motif: string;
  message: string;
  anonymous: boolean;
};

export type PaymentMethod = "rechnung" | "sepa" | "kreditkarte" | "paypal" | "abholung";

export const PAYMENT_LABELS: Record<PaymentMethod, string> = {
  rechnung: "Rechnung, zahlbar in 14 Tagen",
  sepa: "SEPA-Lastschrift",
  kreditkarte: "Kreditkarte",
  paypal: "PayPal",
  abholung: "Bei Abholung im Laden zahlen",
};

export type OrderState = {
  deliveryType: DeliveryType;
  dayOffset: number;
  window: DeliveryWindowId | null;
  address: AddressForm;
  card: CardForm;
  payment: PaymentMethod;
  billingSameAsDelivery: boolean;
  voucherCode: string;
  appliedVoucher: Voucher | null;
  voucherError: string | null;
  agbAccepted: boolean;
};

export const DELIVERY_FEE_CENTS = 590;

export type ConfirmedOrder = {
  orderNumber: string;
  placedAt: string;
  items: CartItem[];
  subtotalCents: number;
  deliveryFeeCents: number;
  discountCents: number;
  totalCents: number;
  order: OrderState;
};

export function formatCents(cents: number): string {
  const euros = (cents / 100).toFixed(2).replace(".", ",");
  return `${euros} €`;
}
