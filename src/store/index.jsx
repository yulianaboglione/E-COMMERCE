import { configureStore } from "@reduxjs/toolkit";
import setCart from "./slices/cart.slice";
import isLoadingSlice from "./slices/isLoading.slice";
import productsSlice from "./slices/products.slice";
import setPurchases from "./slices/Purchases.slice";

export default configureStore({
  reducer: {
    isLoading: isLoadingSlice,
    products: productsSlice,
    purchases: setPurchases,
    cart: setCart,
  },
});
