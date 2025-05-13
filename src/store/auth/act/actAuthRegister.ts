import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHundelar from "@utils/axiosErrorHundelar";
import axios from "axios";

type TFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const actAuthRegister = createAsyncThunk(
  "auth/actAuthRegister",
  async (formData:TFormData, thuk) => {
    const {rejectWithValue}=thuk
    try {
        const res=await axios.post("/register",formData)
        return res.data
    } catch (error) {
        rejectWithValue(axiosErrorHundelar(error))
    }
  }
);

export default actAuthRegister