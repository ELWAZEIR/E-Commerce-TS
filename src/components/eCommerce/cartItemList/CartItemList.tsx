import { TProduct } from "@types";
import CartItem from "../CartItem/CartItem";

type CartItemListProps = {
  products: TProduct[];
  quantityChangeHandler: (id: number, quantity: number) => void;
  removeCartItem:(id:number)=>void
};

function CartItemList({ products, quantityChangeHandler ,removeCartItem}: CartItemListProps) {
  const renderList = products.map((product) => (
    <CartItem
      key={product.id}
      {...product}
      quantityChangeHandler={quantityChangeHandler}
      removeCartItem={removeCartItem}
    />
  ));
  return <div>{renderList}</div>;
}

export default CartItemList;
