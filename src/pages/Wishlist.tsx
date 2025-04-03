import Heading from "@components/common/heading/Heading"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { actGetWishlist, productsFullInfoClenUp } from "@store/wishlist/wishlistSlice"
import { useEffect } from "react"
import Loading from "@components/feedback/Loding";
import GridList from "@components/GridList/GridList";
import Product from "@components/eCommerce/product/Product";
import { TProduct } from "@customTypes/product";
function Wishlist() {
  const {error,loading,productsFullInfo}=useAppSelector((state)=>state.wishlist)
  const cartItems= useAppSelector((state)=>state.cart.items)
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(actGetWishlist())
    return ()=>{
      dispatch(productsFullInfoClenUp())
    }
  },[dispatch])

  const records = productsFullInfo.map((el) => ({
    ...el,
    quantity: cartItems[el.id] || 0,
    isLiked:true
  }));

  return (
    <div>
        <Heading>
            Your Wishlist
        </Heading>
        <Loading status={loading} error={error}>
        <GridList<TProduct>
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </div>
  )
}

export default Wishlist