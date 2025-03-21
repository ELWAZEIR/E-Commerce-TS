import { TProduct } from "@customTypes/product"
import CartItem from "../CartItem/CartItem"

type CartItemListProps={products:TProduct[]}

function CartItemList({products}:CartItemListProps) {
    const renderList=products.map((product)=><CartItem key={product.id} {...product} />)
  return (
    <div>{renderList}</div>
  )
}

export default CartItemList