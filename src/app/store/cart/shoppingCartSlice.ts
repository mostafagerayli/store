import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartIdentifier, CartItem, CartState } from "@/types/cart";
import { RootState } from "../index";

const initialState: CartState = {
  items: [],
};

const shoppingCartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;

      if (!item.price) return;

      const existingItem = state.items.find(
        (i) =>
          i.id === item.id &&
          i.selectedWeight === item.selectedWeight
      );

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(
        (i) => i.id === action.payload
      );

      if (!item) return;

      item.quantity -= 1;

      if (item.quantity <= 0) {
        state.items = state.items.filter(
          (i) => i.id !== action.payload
        );
      }
    },

increaseQuantity: (
  state,
  action: PayloadAction<CartIdentifier>
) => {
  const item = state.items.find(
    (i) =>
      i.id === action.payload.id &&
      i.selectedWeight === action.payload.selectedWeight
  );

  if (!item) return;

  item.quantity++;
},

    clearCart: (state) => {
      state.items = [];
    },

    hydrateCart: (
      state,
      action: PayloadAction<CartState>
    ) => {
      state.items = action.payload.items;
    },
  },
});

export const selectCartItems = (state: RootState) =>
  state.cart.items;

export const selectCartQuantity = (state: RootState) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);

export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

export default shoppingCartSlice.reducer;

export const {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  clearCart,
  hydrateCart,
} = shoppingCartSlice.actions;