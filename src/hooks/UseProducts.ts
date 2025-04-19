import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";

import {
  actGetProductsByCatPrefix,
  CleanUpProducts,
} from "@store/product/productSlice";
import { useEffect } from "react";
function UseProducts() {
    const params = useParams();
    const dispatch = useAppDispatch();
    const { loading, error, records } = useAppSelector((state) => state.products);
    const cartItems = useAppSelector((state) => state.cart.items);
    const wishListItemsId=useAppSelector((state)=>state.wishlist.itemsId)
    useEffect(() => {
      const promise=dispatch(actGetProductsByCatPrefix(params.prefix as string));
      return () => {
        promise.abort();
        dispatch(CleanUpProducts());
      };
    }, [dispatch, params]);
    const productsFullInfo = records.map((el) => ({
      ...el,
      quantity: cartItems[el.id] || 0,
      isLiked:wishListItemsId.includes(el.id)
    }));
  return (
    {productsFullInfo,loading,error,records,params}
  )
}

export default UseProducts