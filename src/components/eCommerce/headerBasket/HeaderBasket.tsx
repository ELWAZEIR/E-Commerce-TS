import Logo from "@assets/svg/cart.svg?react";

import styles from "./styles.module.css";
import { useAppSelector } from "@store/hooks";
const { basketContainer, basketQuantity } = styles;

const HeaderBasket = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  const totalQuantity = Object.values(cartItems).reduce((a, b) => {
    return a + b;
  }, 0);
  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={basketQuantity}>{totalQuantity}</div>
    </div>
  );
};

export default HeaderBasket;
