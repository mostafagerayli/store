const WEIGHT_PRICE_PERCENT = {
  250: 10,
  500: 5,
  1000: 0,
} as const;


export function calculateProductPrice(
  pricePerKg: number,
  weight: number,
  quantity: number = 1
) {

  const percent =
    WEIGHT_PRICE_PERCENT[
      weight as keyof typeof WEIGHT_PRICE_PERCENT
    ] ?? 0;


  const basePrice =
    (pricePerKg * weight * quantity) / 1000;


  const finalPrice =
    basePrice + (basePrice * percent) / 100;


  return Math.round(finalPrice);
}