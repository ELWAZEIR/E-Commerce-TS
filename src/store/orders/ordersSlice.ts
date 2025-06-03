import { createSlice } from "@reduxjs/toolkit";
import { isString, TLoading, TOrderItem } from "@types";
import actPlaceOrder from "./act/actPlaceOrder";
import actGetOrder from "./act/actGetOrder";

interface IOrderSlice {
  orderList: TOrderItem[];
  error: string | null;
  looading: TLoading;
}

const initialState: IOrderSlice = {
  orderList: [],
  error: null,
  looading: "idle",
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    resetOrderStatus: (state) => {
      state.looading = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actPlaceOrder.pending, (state) => {
      (state.looading = "pending"), (state.error = null);
    });
    builder.addCase(actPlaceOrder.fulfilled, (state) => {
      state.looading = "succeeded";
    });
    builder.addCase(actPlaceOrder.rejected, (state, action) => {
      state.looading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });

    builder.addCase(actGetOrder.pending, (state) => {
      (state.looading = "pending"), (state.error = null);
    });
    builder.addCase(actGetOrder.fulfilled, (state, action) => {
      state.looading = "succeeded";
      state.orderList = action.payload;
    });
    builder.addCase(actGetOrder.rejected, (state, action) => {
      state.looading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actPlaceOrder, actGetOrder };
export const { resetOrderStatus } = ordersSlice.actions;
export default ordersSlice.reducer;
