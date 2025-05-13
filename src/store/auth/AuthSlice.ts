import { createSlice } from "@reduxjs/toolkit";
import { isString, TLoading } from "@types";
import actAuthRegister from "./act/actAuthRegister";
import actAuthLogin from "./act/actAuthLogin";
interface IAuthState {
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
  } | null;
  accessToken: string | null;
  loading: TLoading;
  error: string | null;
}

const initialState: IAuthState = {
  user: null,
  accessToken: null,
  loading: "idle",
  error: null,
};
const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    resetUi: (state) => {
      state.loading = "idle";
      state.error = null;
    },
    authLogOut:(state)=>{
      state.accessToken=null,
      state.user=null
    }
  },
  extraReducers: (builder) => {
    //register
    builder.addCase(actAuthRegister.pending, (state) => {
      state.error = null;
      state.loading = "pending";
    });
    builder.addCase(actAuthRegister.fulfilled, (state) => {
      state.loading = "succeeded";
    });
    builder.addCase(actAuthRegister.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });

    //login
    builder.addCase(actAuthLogin.pending, (state) => {
      state.error = null;
      state.loading = "pending";
    });
    builder.addCase(actAuthLogin.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    });
    builder.addCase(actAuthLogin.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});
export { actAuthRegister, actAuthLogin };
 export const {resetUi,authLogOut} = authSlice.actions
export default authSlice.reducer;
