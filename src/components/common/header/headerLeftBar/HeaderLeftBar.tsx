import HeaderCounter from "../headerCounter/HeaderCounter";
import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/Cart/selectors";
import WishlistIcon from "@assets/svg/wishList.svg?react"
import CarttIcon from "@assets/svg/cart.svg?react"
import styles from "./headerLeftBar.module.css"
export default function HeaderLeftBar() {
    const {headerLeftBar}=styles
    const totalQuantityWishlist=useAppSelector((state)=>state.wishlist.itemsId.length)
    const totalQuantityCart=useAppSelector(getCartTotalQuantitySelector)
  return (
    <div className={headerLeftBar}>
        <HeaderCounter title="wishlist" to="wishlist" svgIcon={<WishlistIcon/>} totalQuantity={totalQuantityWishlist}/>
        <HeaderCounter title="Cart" to="Cart" svgIcon={<CarttIcon/>} totalQuantity={totalQuantityCart}/>
        </div>
  )
}
