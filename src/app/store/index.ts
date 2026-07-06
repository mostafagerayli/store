import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/shoppingCartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Type های اصلی Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;