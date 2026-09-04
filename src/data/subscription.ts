/**
 * Subscription ("Abo") options, shown as information only.
 *
 * The shop branch had a working configurator that priced a subscription
 * and put it in the cart. Here the same options are listed so a visitor
 * knows the service exists and what it costs — nothing is selectable,
 * because nothing can be bought.
 */

/** BACKEND — real rhythms/prices come from the product backend, not this array. */
export const SUBSCRIPTION_RHYTHMS: string[] = ["Wöchentlich", "14-tägig", "Monatlich"];

/** Prices in cents, matching the three sizes shown in the handoff. */
export const SUBSCRIPTION_SIZE_PRICES_CENTS: number[] = [2800, 4400, 7200];
