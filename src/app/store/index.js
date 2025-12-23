const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cart/shoppingCartSlice";

export const store = configureStore({
    reducer:{
        cart: cartReducer,
    }
})