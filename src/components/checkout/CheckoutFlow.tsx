"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { applyVoucher } from "@/data/vouchers";
import CheckoutStepper from "./CheckoutStepper";
import CartStep from "./CartStep";
import DeliveryStep from "./DeliveryStep";
import CardStep from "./CardStep";
import PaymentStep from "./PaymentStep";
import ReviewStep from "./ReviewStep";
import ConfirmationStep from "./ConfirmationStep";
import StatusStep from "./StatusStep";
import { DELIVERY_FEE_CENTS, EMPTY_ADDRESS, type ConfirmedOrder, type OrderState } from "./types";

const INITIAL_ORDER: OrderState = {
  deliveryType: "lieferung",
  dayOffset: 0,
  window: null,
  address: EMPTY_ADDRESS,
  card: { motif: "ohne", message: "", anonymous: false },
  payment: "rechnung",
  billingSameAsDelivery: true,
  voucherCode: "",
  appliedVoucher: null,
  voucherError: null,
  agbAccepted: false,
};

function makeOrderNumber(): string {
  const year = new Date().getFullYear().toString().slice(-2);
  const digits = Math.floor(1000 + Math.random() * 9000);
  return `LV-${year}-${digits}`;
}

export default function CheckoutFlow() {
  const cart = useCart();
  const [step, setStep] = useState(0);
  const [maxReachedStep, setMaxReachedStep] = useState(0);
  const [order, setOrder] = useState<OrderState>(INITIAL_ORDER);
  const [confirmed, setConfirmed] = useState<ConfirmedOrder | null>(null);

  function updateOrder(patch: Partial<OrderState>) {
    setOrder((prev) => ({ ...prev, ...patch }));
  }

  function advanceTo(next: number) {
    setStep(next);
    setMaxReachedStep((m) => Math.max(m, next));
  }

  function handleStepperClick(target: number) {
    if (target <= maxReachedStep) setStep(target);
  }

  function handleSubmitOrder() {
    const deliveryFeeCents = order.deliveryType === "lieferung" ? DELIVERY_FEE_CENTS : 0;
    const discountCents = order.appliedVoucher ? applyVoucher(order.appliedVoucher, cart.subtotalCents, deliveryFeeCents) : 0;
    const totalCents = Math.max(0, cart.subtotalCents + deliveryFeeCents - discountCents);

    setConfirmed({
      orderNumber: makeOrderNumber(),
      placedAt: new Date().toISOString(),
      items: cart.items,
      subtotalCents: cart.subtotalCents,
      deliveryFeeCents,
      discountCents,
      totalCents,
      order,
    });
    cart.clear();
    advanceTo(5);
  }

  function handleRestart() {
    setOrder(INITIAL_ORDER);
    setConfirmed(null);
    setStep(0);
    setMaxReachedStep(0);
  }

  return (
    <div>
      <CheckoutStepper step={step} onStepClick={handleStepperClick} maxReachedStep={maxReachedStep} />

      {step === 0 && <CartStep onContinue={() => advanceTo(1)} />}
      {step === 1 && <DeliveryStep order={order} onChange={updateOrder} onContinue={() => advanceTo(2)} onBack={() => setStep(0)} />}
      {step === 2 && <CardStep order={order} onChange={updateOrder} onContinue={() => advanceTo(3)} onBack={() => setStep(1)} />}
      {step === 3 && <PaymentStep order={order} onChange={updateOrder} onContinue={() => advanceTo(4)} onBack={() => setStep(2)} />}
      {step === 4 && (
        <ReviewStep order={order} onChange={updateOrder} onEditStep={setStep} onSubmit={handleSubmitOrder} onBack={() => setStep(3)} />
      )}
      {step === 5 && confirmed && <ConfirmationStep confirmed={confirmed} onTrack={() => advanceTo(6)} />}
      {step === 6 && confirmed && <StatusStep confirmed={confirmed} onBackToCart={handleRestart} />}
    </div>
  );
}
