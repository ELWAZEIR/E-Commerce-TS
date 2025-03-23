import { TProduct } from "@customTypes/product";
import styles from "./styles.module.css";

type cartSubtotalPriceProps={products:TProduct[]}
const CartSubtotalPrice = ({products} :cartSubtotalPriceProps) => {

  const subTotal=products.reduce((accumulator,el)=>{
    const price=el.price
    const quantity=el.quantity
    if (quantity && typeof quantity === "number") {
      return accumulator + price * quantity
    }else return accumulator 
  },0)

  return (
    <div className={styles.container}>
      <span>Subtotal:</span>
      <span>{subTotal.toFixed(2)} EGP</span>
    </div>
  );
};

export default CartSubtotalPrice;