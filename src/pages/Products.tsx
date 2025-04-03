import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";

import { Container } from "react-bootstrap";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/product/productSlice";
import Loading from "@components/feedback/Loding";
import GridList from "@components/GridList/GridList";
import Product from "@components/eCommerce/product/Product";
import { TProduct } from "@customTypes/product";
import Heading from "@components/common/heading/Heading";


const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);
  const wishListItemsId=useAppSelector((state)=>state.wishlist.itemsId)
  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);
  const productsFullInfo = records.map((el) => ({
    ...el,
    quantity: cartItems[el.id] || 0,
    isLiked:wishListItemsId.includes(el.id)
  }));

  return (
    <Container>
        <Heading>
          <span className="text-capitalize">{params.prefix} Products</span> 
        </Heading>
      <Loading status={loading} error={error}>
        <GridList<TProduct>
          records={productsFullInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
