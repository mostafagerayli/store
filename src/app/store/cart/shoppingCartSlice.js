import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // { id, name, price, quantity, image, selectedWeight }
};

const shoppingCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      if (!item.price) return;

      const existingItem = state.items.find(
        (i) =>
          i.id === item.id &&
          i.selectedWeight === item.selectedWeight
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id: item.id,
          name: item.name,
          image: item.image,
          selectedWeight: item.selectedWeight,
          price: Number(item.price),
          quantity: item.quantity || 1,
        });
      }
    },

    removeFromCart: (state, action) => {
      const id = action.payload;

      state.items = state.items.filter((i) => i.id !== id);
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;

      const existingItem = state.items.find((i) => i.id === id);
      if (!existingItem) return;

      existingItem.quantity -= 1;

      if (existingItem.quantity <= 0) {
        state.items = state.items.filter((i) => i.id !== id);
      }
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;

      const existingItem = state.items.find((i) => i.id === id);
      if (!existingItem) return;

      existingItem.quantity += 1;
    },

    clearCart: (state) => {
      state.items = [];
    },

    hydrateCart: (state, action) => {
      // فقط items رو جایگزین کن (نه کل state)
      state.items = action.payload?.items || [];
    },
  },
});

export default shoppingCartSlice.reducer;

export const {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  clearCart,
  hydrateCart,
} = shoppingCartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectCartQuantity = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);

export const selectCartTotal = (state) =>
  state.cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );