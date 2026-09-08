import { CartItem } from "@/types/cart";

interface Product {
  id: number;
  price_per_kg: number;
}

export function syncCartPrices(
  cartItems: CartItem[],
  products: Product[],
): CartItem[] {
  return cartItems.map((item) => {
    const product = products.find(
      (product) => product.id === item.id,
    );

    if (!product) {
      return item;
    }

    const newPrice =
      (product.price_per_kg * item.selectedWeight) / 1000;

    return {
      ...item,
      price: newPrice,
    };
  });
}