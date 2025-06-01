import styles from "./style.module.css";
import { addToCart } from "@store/Cart/cartSlice";
import { memo, useEffect, useState } from "react";
import Like from "@assets/svg/like.svg?react";
import LikeFill from "@assets/svg/likeFill.svg?react";
import { Button, Modal, Spinner } from "react-bootstrap";
import { actLikeToggle } from "@store/wishlist/wishlistSlice";
import { useAppDispatch } from "@store/hooks";
import { TProduct } from "@types";
import ProductInfo from "../productInfo/productInfo";
const { maximumNotice, wishlistBtn } = styles;
const Product = memo(
  ({ id, title, img, price, max, quantity, isLiked,isAuthenticated }: TProduct) => {
    const dispatch = useAppDispatch();
    const [showModal, setShowModal] = useState(false);
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
      if (isAuthenticated) {
          if (!isLoading) {  //This condition does not allow me to send too many requests.
            setIsLoading(true);
            dispatch(actLikeToggle(id))
              .unwrap()
              .then(() => setIsLoading(false))
              .catch(() => setIsLoading(false));
          }
        } else {
          setShowModal(true);
        }
    };

    return (
      <> <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Login Required</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        You need to login first to add this item to your wishlist.
      </Modal.Body>
    </Modal>
     
      <ProductInfo title={title}img={img} price={price}>
        <div className={wishlistBtn} onClick={likeToggleHandler}>
          {isLoading ? (
            <Spinner animation="border" size="sm" variant="primary" />
          ) : isLiked ? (
            <LikeFill />
          ) : (
            <Like />
          )}
        </div>
        
        <p className={maximumNotice}>
          {quantityReachedToMax
            ? "You reach to the limit"
            : `you can add ${currentRemainingQuantity} item(s)`}
        </p>
        <Button
          variant="info"
          style={{ color: "white" ,width:"100%"}}
          onClick={addToCartHandler}
          disabled={isBtnDisabled || quantityReachedToMax}
        >
          {isBtnDisabled ? (
            <Spinner animation="grow" size="sm" />
          ) : (
            "Add to cart"
          )}
        </Button>
      </ProductInfo> </>
    );
  }
);
export default Product;
