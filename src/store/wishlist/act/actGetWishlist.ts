import { createAsyncThunk } from "@reduxjs/toolkit";
import { TProduct } from "@types";
import axios from "axios";
import { axiosErrorHundelar } from "@utils";
const actGetWishlist = createAsyncThunk('wishlist/actGetWishlist',async(_,thunAPI)=>{
    type TResponse=TProduct[]
    const {rejectWithValue,fulfillWithValue,signal}=thunAPI

    try {
        const userWishlist=await axios.get<{productId:number}[]>("/wishlist?userId=1",{signal})
        if (!userWishlist.data.length) {
            return fulfillWithValue([])
        }
        const concatenatedItemsId=userWishlist.data.map((el)=>`id=${el.productId}`).join('&')
        const response =await axios.get<TResponse>(`/products?${concatenatedItemsId}`)
        return response.data
    } catch (error) {
     return  rejectWithValue(axiosErrorHundelar(error))
    }
})
export default actGetWishlist;