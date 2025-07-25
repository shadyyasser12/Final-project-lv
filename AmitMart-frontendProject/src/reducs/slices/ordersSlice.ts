import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../../reducs/Types";

const initialState: Order[] = [];

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    
    placeOrder: (state, action: PayloadAction<Order>) => {
      state.push(action.payload);
    },

   
    removeOrder: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
  },
});


export const { placeOrder, removeOrder } = ordersSlice.actions;


export default ordersSlice.reducer;
