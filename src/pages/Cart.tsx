import Heading from "@components/common/heading/Heading";
import CartItemList from "@components/eCommerce/cartItemList/CartItemList";
import CartSubtotalPrice from "@components/eCommerce/CartSubtotalPrice/CartSubtotalPrice";
import Loading from "@components/feedback/Loding";
import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";
import UseCart from "@hooks/UseCart";

function Cart() {
  const {loading,error,products,quantityChangeHandler,removeCartItem,userAccessToken}=UseCart()

  return (
    <>
      <Heading title='Cart'/>
      <Loading status={loading} error={error} type="cart">
        {products.length? <>
        <CartItemList 
          products={products}
          quantityChangeHandler={quantityChangeHandler}
          removeCartItem={removeCartItem}
        />
        <CartSubtotalPrice products={products} userAccessToken={userAccessToken}/></>:(
          <LottieHandler message="Your cart is empty" type="error"/>
        )}
        
      </Loading>
    </>
  );
}

export default Cart;
