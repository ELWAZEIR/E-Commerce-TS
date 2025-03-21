
import { Button ,Spinner} from "react-bootstrap";
import styles from "./style.module.css";
import { TProduct } from "@customTypes/product";
import { useDispatch } from "react-redux";
import { addToCart } from "@store/Cart/cartSlice";
import { memo, useEffect, useState } from "react";
const { product, productImg ,maximumNotice} = styles;

const Product = memo(({id,title,img,price,max,quantity}:TProduct) => {
const dispatch=useDispatch();
const [isBtnDisabled,setIsBtnDisabled]=useState(false)

const currentreminigQuantity= max - (quantity ?? 0)
const quantityReachedToMax=currentreminigQuantity === 0? true:false

useEffect(()=>{
  if (!isBtnDisabled) {
    return
  }
  const debounce=setTimeout(()=>{setIsBtnDisabled(false)},300)
  return ()=>clearTimeout(debounce)
},[isBtnDisabled])

const addToCartHandler=()=>{
  dispatch(addToCart(id))
  setIsBtnDisabled(true)
}

  return (
    <div className={product}>
      <div className={productImg}>
        <img
          src={img}
          alt={title}
        />
      </div>
      <h2>{title}</h2>
      <h3>{price.toFixed(2)} EGP</h3>
      <p className={maximumNotice}>{quantityReachedToMax?"You reach to the limit":`you can add ${currentreminigQuantity} item(s)`}</p>
      <Button variant="info" style={{ color: "white" }} onClick={addToCartHandler} disabled={isBtnDisabled||quantityReachedToMax}>
        {isBtnDisabled?<Spinner animation="grow"  size="sm"/>:"Add to cart"}
      </Button>
    </div>
  );
});
export default Product;