import Heading from "@components/common/heading/Heading"
import CartItem from "@components/eCommerce/CartItem/CartItem"
import CartSubtotalPrice from "@components/eCommerce/CartSubtotalPrice/CartSubtotalPrice"

function Cart() {
  return (
   <>
   <Heading>Cart</Heading>
   <CartItem/>
   <CartItem/>
   <CartItem/>
   <CartSubtotalPrice/>

   </>
  )
}

export default Cart