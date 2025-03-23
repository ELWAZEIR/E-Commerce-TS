import Logo from "@assets/svg/wishList.svg?react";
import styles from "./styles.module.css";
import { useAppSelector } from "@store/hooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const { container, totalNum, pumpAnimate,iconWrapper } = styles;

const HeaderWishList = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const quantityStyle = `${totalNum} ${isAnimate ? pumpAnimate : ""}`;
  const TotalQuantity = 0;
  const navigat=useNavigate()
  useEffect(() => {
    if (!TotalQuantity) { return } 
    setIsAnimate(true);
    const debunce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);
    return () => clearTimeout(debunce);
  }, [TotalQuantity]);

  return (
      // <Link to="/cart" style={{textDecoration:"none" , color:'black'}}>
    <div className={container} onClick={()=>navigat("/cart")}>
      <div className={iconWrapper}>
      <Logo title="basket icon" />
      {TotalQuantity>0&&<div className={quantityStyle}>{TotalQuantity}</div>}
      </div>
     <h3>WishList</h3>
    </div>
      // </Link>
  );
};

export default HeaderWishList;
