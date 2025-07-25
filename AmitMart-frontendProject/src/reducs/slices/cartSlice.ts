import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../Types"; 
export type CartItem = Product & { quantity: number };

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    decrement: (state, action: PayloadAction<Product>) => {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        if (existing.quantity > 1) {
          existing.quantity -= 1;
        } else {
          return state.filter((item) => item.id !== action.payload.id);
        }
      }
    },
    remove: (state, action: PayloadAction<Product>) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    clear: () => {
      return [];
    },
  },
});

export const { add, decrement, remove, clear } = cartSlice.actions;
export default cartSlice.reducer;
