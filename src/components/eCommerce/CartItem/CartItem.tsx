import { Form, Button } from "react-bootstrap";
import styles from "./style.module.css";

const { cartItem, product, productImg, productInfo, cartItemSelection } =
  styles;
function CartItem() {
  return (
    <div className={cartItem}>
    <div className={product}>
      <div className={productImg}>
        <img src='' alt='hh' />
      </div>
      <div className={productInfo}>
        <h2>title</h2>
        <h3>price EGP</h3>
        <Button
          variant="secondary"
          style={{ color: "white", width: "100px" }}
          className="mt-auto"
        >
          Remove
        </Button>
      </div>
    </div>
    <div className={cartItemSelection}>
      <span className="d-block mb-1">Quantity</span>
      <Form.Select >
      </Form.Select>
    </div>
  </div>

  )
}

export default CartItem