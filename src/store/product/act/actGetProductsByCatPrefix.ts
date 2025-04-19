import { createAsyncThunk } from "@reduxjs/toolkit";
import { TProduct } from "@types";
import axios from "axios";
import { axiosErrorHundelar } from "@utils";

type TResponse = TProduct[];

const actGetProductsByCatPrefix = createAsyncThunk(
  "products/actGetProductsByCatPrefix",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue ,signal} = thunkAPI;
    try {
      const response = await axios.get<TResponse>(
        `/products?cat_prefix=${prefix}`,{signal}
      );
      return response.data;
    } catch (error) {
      
        return rejectWithValue(axiosErrorHundelar(error))
      
    }
  }
);

export default actGetProductsByCatPrefix;