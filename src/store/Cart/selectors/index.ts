import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store";



const getCartTotalQuantitySelector=createSelector((state:RootState)=>state.cart.items,(items)=>{
    const totalQuantity = Object.values(items).reduce((a, b) => {
        return a + b;
      }, 0);return totalQuantity
}
)

export {getCartTotalQuantitySelector}
