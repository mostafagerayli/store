import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // { id, title, price, quantity, image }
  totalQuantity: 0,
  totalPrice: 0,
};

const shoppingCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      if (!item.price) return; // 🔥 جلوگیری از خراب شدن state

      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id: item.id,
          name: item.name,
          price: Number(item.price) || 0,
          image: item.image,
          quantity: 1,
        });
      }

      state.totalQuantity += 1;
      state.totalPrice += Number(item.price) || 0;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((i) => i.id === id);
      if (!existingItem) return;

      state.totalQuantity -= existingItem.quantity;
      state.totalPrice -= existingItem.price * existingItem.quantity;
      state.items = state.items.filter((i) => i.id !== id);
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((i) => i.id === id);
      if (!existingItem) return;

      existingItem.quantity -= 1;
      state.totalQuantity -= 1;
      state.totalPrice -= existingItem.price;

      if (existingItem.quantity <= 0) {
        state.items = state.items.filter((i) => i.id !== id);
      }
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((i) => i.id === id);
      if (!existingItem) return;

      existingItem.quantity += 1;
      state.totalQuantity += 1;
      state.totalPrice += existingItem.price;

      if (existingItem.quantity <= 0) {
        state.items = state.items.filter((i) => i.id !== id);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  clearCart,
  increaseQuantity,
} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
