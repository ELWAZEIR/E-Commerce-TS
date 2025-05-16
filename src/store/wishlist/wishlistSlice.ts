import { createSlice } from "@reduxjs/toolkit";
import actLikeToggle from "./act/actLikeToggle";
import actGetWishlist from "./act/actGetWishlist";
import { TLoading,TProduct,isString } from "@types";
import { authLogOut } from "@store/auth/AuthSlice";

interface Iwishlist {
  itemsId: number[];
  error: null | string;
  loading: TLoading;
  productsFullInfo: TProduct[];
}

const initialState: Iwishlist = {
  itemsId: [],
  productsFullInfo: [],
  error: null,
  loading: "idle",
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {CleanUpWishlistproductsFullInfo:(state)=>{
     state.productsFullInfo=[]
  }},
  extraReducers: (builder) => {
    builder.addCase(actLikeToggle.pending, (state) => {
      state.error = null;
    });

    builder.addCase(actLikeToggle.fulfilled, (state, action) => {
      if (action.payload.type === "add") {
        state.itemsId.push(action.payload.id);
      } else {
        state.itemsId = state.itemsId.filter((el) => el !== action.payload.id);
        state.productsFullInfo=state.productsFullInfo.filter((el)=>el.id !== action.payload.id)
      }
    });

    builder.addCase(actLikeToggle.rejected, (state, action) => {
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
    builder.addCase(authLogOut,(state)=>{
      state.itemsId=[]
      state.productsFullInfo=[]
    })

    builder.addCase(actGetWishlist.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });

    builder.addCase(actGetWishlist.fulfilled, (state, action) => {
      state.loading = "succeeded";
      if (action.payload.dataType === "ProductsFullInfo") {
        state.productsFullInfo = action.payload.data as TProduct[];
      } else if (action.payload.dataType === "productsIds") {
        state.itemsId = action.payload.data as number[];
      }
    });

    builder.addCase(actGetWishlist.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actLikeToggle, actGetWishlist };

export default wishlistSlice.reducer;
export const {CleanUpWishlistproductsFullInfo}= wishlistSlice.actions;
