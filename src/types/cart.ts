export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  selectedWeight: number;
}

export interface CartState {
  items: CartItem[];
}

export interface CartIdentifier {
  id: number;
  selectedWeight: number;
}