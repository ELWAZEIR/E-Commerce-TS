import { useAppDispatch, useAppSelector } from "@store/hooks"
import { actGetWishlist, CleanUpWishlistproductsFullInfo } from "@store/wishlist/wishlistSlice"
import { useEffect } from "react"
export default function UseWishlist() {
    const {error,loading,productsFullInfo}=useAppSelector((state)=>state.wishlist)
  const cartItems= useAppSelector((state)=>state.cart.items)
  const dispatch = useAppDispatch()
  useEffect(()=>{
   const promise= dispatch(actGetWishlist("productsFullInfo"))
    return ()=>{promise.abort()
      dispatch(CleanUpWishlistproductsFullInfo())
    }
  },[dispatch])

  const records = productsFullInfo.map((el) => ({
    ...el,
    quantity: cartItems[el.id] || 0,
    isLiked:true,
    isAuthenticated:true
  }));

  return (
   {records,loading,error}
  )
}
