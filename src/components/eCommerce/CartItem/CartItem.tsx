import { Form, Button } from "react-bootstrap";
import styles from "./style.module.css";
import { TProduct } from "@customTypes/product";
import { memo } from "react";

const { cartItem, product, productImg, productInfo, cartItemSelection } =
  styles;
type cartItemProps = TProduct & {
  quantityChangeHandler: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
};

const CartItem =memo(({ img, price, title, max, quantity, removeCartItem,quantityChangeHandler,id}: cartItemProps) =>{
  const renderOptionQuantity = Array(max)
    .fill(0)
    .map((_, index) => {
      const quantity = ++index;
      return (
        <option value={quantity} key={quantity}>
          {quantity}
        </option>
      );
    });
    const changeQuantity=(event:React.ChangeEvent<HTMLSelectElement>)=>{
      const quantity=+event.target.value
      quantityChangeHandler(id,quantity)
    }
  return (
    <div className={cartItem}>
      <div className={product}>
        <div className={productImg}>
          <img src={img} alt={title} />
        </div>
        <div className={productInfo}>
          <h2>{title}</h2>
          <h3>{price.toFixed(2)} EGP</h3>
          <Button
            variant="secondary"
            style={{ color: "white", width: "100px" }}
            className="mt-auto"
            onClick={()=>removeCartItem(id)}
          >
            Remove
          </Button>
        </div>
      </div>
      <div className={cartItemSelection}>
        <span className="d-block mb-1">Quantity</span>
        <Form.Select value={quantity} onChange={changeQuantity}>{renderOptionQuantity}</Form.Select>
      </div>
    </div>
  );
})

export default CartItem;
