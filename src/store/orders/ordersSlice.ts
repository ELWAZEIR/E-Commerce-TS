import { createSlice } from "@reduxjs/toolkit";
import { isString, TLoading, TOrderItem } from "@types";
import actPlaceOrder from "./act/actPlaceOrder";

interface IOrderSlice  {
    orderList:TOrderItem[],
    error:string|null,
    looading:TLoading,
}

const initialState: IOrderSlice= {
    orderList: [],
    error: null,
    looading:"idle",
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(actPlaceOrder.pending,(state)=>{
      state.looading="pending",
      state.error=null
    })
    builder.addCase(actPlaceOrder.fulfilled,(state)=>{
      state.looading="succeeded"
    })
    builder.addCase(actPlaceOrder.rejected,(state,action)=>{
      state.looading="failed"
      if (isString(action.payload)){
        state.error=action.payload 
      }
    })
  }
})

export default ordersSlice.reducer;