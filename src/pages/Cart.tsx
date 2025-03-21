import Heading from "@components/common/heading/Heading"
import CartItemList from "@components/eCommerce/cartItemList/cartItemList"
import CartSubtotalPrice from "@components/eCommerce/CartSubtotalPrice/CartSubtotalPrice"
import Loading from "@components/feedback/Loding"
import { actGetProductsByItems } from "@store/Cart/cartSlice"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { useEffect } from "react"

function Cart() {
  const {items,productsFullInfo,error,loading}=useAppSelector((state)=>state.cart)
  const dispatch=useAppDispatch()
const products=productsFullInfo.map((el)=>({
  ...el,
  quantity:items[el.id]
}))


  useEffect(()=>{
    dispatch(actGetProductsByItems())
  },[dispatch])

  return (
   <>
   <Heading>Cart</Heading>
   <Loading status={loading} error={error}>
  <CartItemList products={products}/>
   <CartSubtotalPrice/>
    </Loading>
   </>
  )
}

export default Cart