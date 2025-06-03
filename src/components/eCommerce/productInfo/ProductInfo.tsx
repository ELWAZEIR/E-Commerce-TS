import styles from "./styles.module.css"
type productInfoProps = {
  title: string;
  price: number;
  img: string;
  style?:React.CSSProperties;
  children?: React.ReactNode;
  direction?: "row" | "column";
  quantity?: number;
};
const ProductInfo = ({children,direction="row",img,price,style,title,quantity}:productInfoProps) => {
  return  <div className={`${styles[`product-${direction}`]}`} style={style}>
  <div className={`${styles[`productImg-${direction}`]}`}>
    <img src={img} alt={title} width={120}height={150}/>
  </div>
  <div className={`${styles[`productInfo-${direction}`]}`}>
    <h2 title={title}>{title}</h2>
    <h3>{price.toFixed(2)} EGP</h3>
    {quantity && <h3>Quantity: {quantity}</h3>}
    {quantity && <h3>Total Price: {(quantity * price).toFixed(2)} EGP</h3>}
    {children}
  </div>
</div>
};

export default ProductInfo;
