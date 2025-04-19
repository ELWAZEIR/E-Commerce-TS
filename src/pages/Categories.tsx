
import { Container } from "react-bootstrap";
import Loading from "@components/feedback/Loding";
import GridList from "@components/GridList/GridList";
import Category from "@components/eCommerce/Category/Category";
import { TCategory } from "@customTypes/category";
import Heading from "@components/common/heading/Heading";
import UseCategories from "@hooks/UseCategories";

const Categories = () => {
  const {error,loading,records}=UseCategories()
  return (
    <Container>
      <Heading title='categories'/>
      
      
      <Loading status={loading} error={error}>
      <GridList<TCategory> records={records} renderItem={(record)=><Category {...record}/>}/>
      </Loading>
    </Container>
  );
};

export default Categories;