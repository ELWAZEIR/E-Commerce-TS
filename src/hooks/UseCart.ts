import {
  actGetProductsByItems,
  cartItemChangeQuantity,
  cartItemRemove,
  cleanUpCartProductFullinfo,
} from "@store/Cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { resetOrderStatus } from "@store/orders/ordersSlice";
import { useCallback, useEffect } from "react";

export default function UseCart() {
  const placeOrderState = useAppSelector((state) => state.orders.looading);
  const { items, productsFullInfo, error, loading } = useAppSelector(
    (state) => state.cart
  );
  const userAccessToken = useAppSelector((state) => state.auth.accessToken);
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
    const promise = dispatch(actGetProductsByItems());
    return () => {
      promise.abort();
      dispatch(cleanUpCartProductFullinfo());
      dispatch(resetOrderStatus())
    };
  }, [dispatch]);

  const removeCartItem = useCallback((id: number) => {
    dispatch(cartItemRemove(id));
  }, []);
  return {
    loading,
    error,
    products,
    quantityChangeHandler,
    removeCartItem,
    userAccessToken,
    placeOrderState,
  };
}
