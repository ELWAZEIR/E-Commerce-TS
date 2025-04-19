import Logo from "@assets/svg/wishList.svg?react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
type HeaderCounterProps = {
  title: string;
  to: string;
  totalQuantity: number;
  svgIcon: React.ReactNode;
};
const { container, totalNum, pumpAnimate, iconWrapper } = styles;

const HeaderCounter = ({
  title,
  svgIcon,
  to,
  totalQuantity,
}: HeaderCounterProps) => {
  const [isAnimate, setIsAnimate] = useState(false);
  const quantityStyle = `${totalNum} ${isAnimate ? pumpAnimate : ""}`;
  const navigat = useNavigate();
  useEffect(() => {
    if (!totalQuantity) {
      return;
    }
    setIsAnimate(true);
    const debunce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);
    return () => clearTimeout(debunce);
  }, [totalQuantity]);

  return (
    // <Link to="/cart" style={{textDecoration:"none" , color:'black'}}>
    <div className={container} onClick={() => navigat(to)}>
      <div className={iconWrapper}>
        {svgIcon}
        {totalQuantity > 0 && (
          <div className={quantityStyle}>{totalQuantity}</div>
        )}
      </div>
      <h3>{title}</h3>
    </div>
    // </Link>
  );
};

export default HeaderCounter;
