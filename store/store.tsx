import cartReducer from "./CartSlice";
import { configureStore } from "@reduxjs/toolkit";
import ProductItemSlice from "./ProductItemSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        productItem : ProductItemSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;