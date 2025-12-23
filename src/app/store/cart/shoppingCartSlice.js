import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],         // { id, title, price, quantity, image }
  totalQuantity: 0,
  totalPrice: 0,
};

const shoppingCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += item.price;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(i => i.id === id);
      if (!existingItem) return;

      state.totalQuantity -= existingItem.quantity;
      state.totalPrice -= existingItem.price * existingItem.quantity;
      state.items = state.items.filter(i => i.id !== id);
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(i => i.id === id);
      if (!existingItem) return;

      existingItem.quantity -= 1;
      state.totalQuantity -= 1;
      state.totalPrice -= existingItem.price;

      if (existingItem.quantity <= 0) {
        state.items = state.items.filter(i => i.id !== id);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    }
  }
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
