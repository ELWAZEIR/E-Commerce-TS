import Logo from "@assets/svg/cart.svg?react";

import styles from "./styles.module.css";
import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/Cart/selectors";
const { basketContainer, basketQuantity } = styles;

const HeaderBasket = () => {
  const cartItems = useAppSelector(getCartTotalQuantitySelector);
console.log("from HeaderBasket");

  


  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={basketQuantity}>{cartItems}</div>
    </div>
  );
};

export default HeaderBasket;
