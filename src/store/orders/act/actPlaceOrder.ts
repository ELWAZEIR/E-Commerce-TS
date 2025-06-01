import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import axiosErrorHandler from "@utils/axiosErrorHundelar";
import axios from "axios";

const actPlaceOrder=createAsyncThunk("orders/actPlaceOrder",async(subtotal:number,thunkAPI)=>{
    const {rejectWithValue,getState}=thunkAPI
    const {auth,cart}=getState() as RootState
    const orderItems =cart.productsFullInfo.map((el)=>({
        id:el.id,
        price:el.price,
        title:el.title,
        img:el.img,
        quantity:cart.items[el.id],
    })) 
    try {
        const res=await axios.post("/orders",{
        userId:auth.user?.id,
        items:orderItems,
        total:subtotal })
        return res.data
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error))
    }

})
export default actPlaceOrder