import styles from "./style.module.css";
import { TProduct } from "@customTypes/product";
import { addToCart } from "@store/Cart/cartSlice";
import { memo, useEffect, useState } from "react";
import Like from "@assets/svg/like.svg?react";
import LikeFill from "@assets/svg/likeFill.svg?react";
import { Button, Spinner } from "react-bootstrap";

import { actLikeToggle } from "@store/wishlist/wishlistSlice";
import { useAppDispatch } from "@store/hooks";
const { product, productImg, maximumNotice, wishlistBtn } = styles;
const Product = memo(
  ({ id, title, img, price, max, quantity, isLiked }: TProduct) => {
    const dispatch = useAppDispatch();
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const currentRemainingQuantity = max - (quantity ?? 0);
    const quantityReachedToMax = currentRemainingQuantity === 0 ? true : false;
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      if (!isBtnDisabled) {
        return;
      }
      const debounce = setTimeout(() => {
        setIsBtnDisabled(false);
      }, 300);
      return () => clearTimeout(debounce);
    }, [isBtnDisabled]);

    const addToCartHandler = () => {
      dispatch(addToCart(id));
      setIsBtnDisabled(true);
    };

    const likeToggleHandler = () => {
      if (!isLoading) {  //This condition does not allow me to send too many requests.
        setIsLoading(true);
        dispatch(actLikeToggle(id))
          .unwrap()
          .then(() => setIsLoading(false))
          .catch(() => setIsLoading(false));
      }
    };

    return (
      <div className={product}>
        <div className={wishlistBtn} onClick={likeToggleHandler}>
          {isLoading ? (
            <Spinner animation="border" size="sm" variant="primary" />
          ) : isLiked ? (
            <LikeFill />
          ) : (
            <Like />
          )}
        </div>
        <div className={productImg}>
          <img src={img} alt={title} />
        </div>
        <h2>{title}</h2>
        <h3>{price.toFixed(2)} EGP</h3>
        <p className={maximumNotice}>
          {quantityReachedToMax
            ? "You reach to the limit"
            : `you can add ${currentRemainingQuantity} item(s)`}
        </p>
        <Button
          variant="info"
          style={{ color: "white" }}
          onClick={addToCartHandler}
          disabled={isBtnDisabled || quantityReachedToMax}
        >
          {isBtnDisabled ? (
            <Spinner animation="grow" size="sm" />
          ) : (
            "Add to cart"
          )}
        </Button>
      </div>
    );
  }
);
export default Product;
