import Heading from "@components/common/heading/Heading";
import CartItemList from "@components/eCommerce/cartItemList/CartItemList";
import CartSubtotalPrice from "@components/eCommerce/CartSubtotalPrice/CartSubtotalPrice";
import Loading from "@components/feedback/Loding";
import UseCart from "@hooks/UseCart";

function Cart() {
  const {loading,error,products,quantityChangeHandler,removeCartItem}=UseCart()

  return (
    <>
      <Heading title='Cart'/>
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
