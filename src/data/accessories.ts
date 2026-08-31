export type Accessory = {
  id: string;
  name: string;
  priceCents: number;
  image: string;
};

/**
 * "Passt dazu" cross-sell items shown on the product detail page.
 * These aren't full Products — no delivery window, no size options, no
 * category — so they get their own small type instead of forcing them into
 * the Product shape. Content is from la Vanda Produkt.dc.html; once a real
 * accessories catalog exists in the backend this becomes another data-layer
 * function (e.g. `getAccessories(productId)`), same pattern as products.ts.
 */
export const ACCESSORIES: Accessory[] = [
  { id: "vase-klar", name: "Vase Klar", priceCents: 2400, image: "Vase, klar, quadratisch" },
  { id: "gruszkarte", name: "Grußkarte", priceCents: 350, image: "Grußkarte, quadratisch" },
  { id: "frischmittel", name: "Frischmittel", priceCents: 200, image: "Frischmittel, quadratisch" },
  { id: "vase-steingut", name: "Vase Steingut", priceCents: 3800, image: "Vase, Steingut, quadratisch" },
];

export async function getAccessories(): Promise<Accessory[]> {
  return ACCESSORIES;
}
