import { createAsyncThunk } from "@reduxjs/toolkit";
import { TCategory } from "@types";
import axios from "axios";
import { axiosErrorHundelar } from "@utils";

type TResponse = TCategory[];

const actGetProductsByCatPrefix = createAsyncThunk(
  "categories/actGetProductsByCatPrefix",
  async (_, thunkAPI) => {
    const { rejectWithValue ,signal} = thunkAPI;
    try {
      const response = await axios.get<TResponse>("/categories",{signal});
      return response.data;
    } catch (error) {
     return rejectWithValue(axiosErrorHundelar(error))
    }
  }
);

export default actGetProductsByCatPrefix;