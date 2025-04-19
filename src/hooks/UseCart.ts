import {
    actGetProductsByItems,
    cartItemChangeQuantity,
    cartItemRemove,
    cleanUpCartProductFullinfo,
  } from "@store/Cart/cartSlice";
  import { useAppDispatch, useAppSelector } from "@store/hooks";
  import { useCallback, useEffect } from "react";
  
export default function UseCart() {
    const { items, productsFullInfo, error, loading } = useAppSelector(
        (state) => state.cart
      );
      const dispatch = useAppDispatch();
      const products = productsFullInfo.map((el) => ({
        ...el,
        quantity: items[el.id],
      }));
    
      const quantityChangeHandler = useCallback(
        (id: number, quantity: number) => {
          dispatch(cartItemChangeQuantity({ id, quantity }));
        },
        [dispatch]
      );
    
      useEffect(() => {
       const promise= dispatch(actGetProductsByItems());
        return()=>{promise.abort()
          dispatch(cleanUpCartProductFullinfo())
        }
      }, [dispatch]);
    
      const removeCartItem = useCallback((id: number) => {
        dispatch(cartItemRemove(id));
      }, []);
  return (
    {loading,error,products,quantityChangeHandler,removeCartItem}
  )
}
