
import { Container } from "react-bootstrap";
import Loading from "@components/feedback/Loding";
import GridList from "@components/GridList/GridList";
import Category from "@components/eCommerce/Category/Category";
import Heading from "@components/common/heading/Heading";
import UseCategories from "@hooks/UseCategories";
import { TCategory } from "@types";

const Categories = () => {
  const {error,loading,records}=UseCategories()
  return (
    <Container>
      <Heading title='categories'/>
      
      
      <Loading status={loading} error={error} type="category">
      <GridList<TCategory> records={records} renderItem={(record)=><Category {...record}/>} emptyMessage="No categories found."/>
      </Loading>
    </Container>
  );
};

export default Categories;