import Heading from "@components/common/heading/Heading"
import Loading from "@components/feedback/Loding";
import GridList from "@components/GridList/GridList";
import Product from "@components/eCommerce/product/Product";
import { TProduct } from "@customTypes/product";
import UseWishlist from "@hooks/UseWishlist";
function Wishlist() {
  
  const {error,loading,records}=UseWishlist()
  return (
    <div>
        <Heading title="Your Wishlist"/>
            
        <Loading status={loading} error={error}>
        <GridList<TProduct>
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </div>
  )
}

export default Wishlist