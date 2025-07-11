import { memo } from "react";
import { Container } from "react-bootstrap";
import Loading from "@components/feedback/Loding";
import GridList from "@components/GridList/GridList";
import Product from "@components/eCommerce/product/Product";
import { TProduct } from "@types";
import Heading from "@components/common/heading/Heading";
import UseProducts from "@hooks/UseProducts";


const Products =memo( () => {
 
const {error,loading,productsFullInfo,params}=UseProducts()
  return (
    <Container>
        <Heading title={`${params.prefix} Products`}/>
      <Loading status={loading} error={error} type="product">
        <GridList<TProduct>
          records={productsFullInfo}
          renderItem={(record) => <Product {...record} />}
          emptyMessage="No Product found."
        />
      </Loading>
    </Container>
  );
});

export default Products;
