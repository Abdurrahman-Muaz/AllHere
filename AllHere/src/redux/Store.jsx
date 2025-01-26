import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./CategorySlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productSlice,
    carts: cartSlice,
  },
});
