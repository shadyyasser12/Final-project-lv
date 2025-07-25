import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import ordersReducer from "../slices/ordersSlice";

export const store = configureStore({
  reducer: {
    Cart: cartReducer,
    Orders: ordersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
