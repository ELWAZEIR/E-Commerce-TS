import Heading from "@components/common/heading/Heading";
import CartItemList from "@components/eCommerce/cartItemList/cartItemList";
import CartSubtotalPrice from "@components/eCommerce/CartSubtotalPrice/CartSubtotalPrice";
import Loading from "@components/feedback/Loding";
import {
  actGetProductsByItems,
  cartItemChangeQuantity,
  cartItemRemove,
} from "@store/Cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useCallback, useEffect } from "react";

function Cart() {
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
    dispatch(actGetProductsByItems());
  }, [dispatch]);

  const removeCartItem = useCallback((id: number) => {
    dispatch(cartItemRemove(id));
  }, []);

  return (
    <>
      <Heading>Cart</Heading>
      <Loading status={loading} error={error}>
        {products.length? <><CartItemList
          products={products}
          quantityChangeHandler={quantityChangeHandler}
          removeCartItem={removeCartItem}
        />
        <CartSubtotalPrice products={products} /></>:"Your Cart Is Empty"}
        
      </Loading>
    </>
  );
}

export default Cart;
