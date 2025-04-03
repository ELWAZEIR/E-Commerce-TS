import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "@customTypes/product";
const actGetWishlist = createAsyncThunk('wishlist/actGetWishlist',async(_,thunAPI)=>{
    type TResponse=TProduct[]
    const {rejectWithValue,fulfillWithValue}=thunAPI

    try {
        const userWishlist=await axios.get<{productId:number}[]>("/wishlist?userId=1")
        if (!userWishlist.data.length) {
            return fulfillWithValue([])
        }
        const concatenatedItemsId=userWishlist.data.map((el)=>`id=${el.productId}`).join('&')
        const response =await axios.get<TResponse>(`/products?${concatenatedItemsId}`)
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.message||error.response?.data.message)
        }else{
            return rejectWithValue("An unexpected error")
        }
    }
})
export default actGetWishlist;