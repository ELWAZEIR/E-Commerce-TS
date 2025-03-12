import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { Container } from "react-bootstrap";
import Loading from "@components/feedback/Loding";
import GridList from "@components/GridList/GridList";
import Category from "@components/eCommerce/Category/Category";
import { TCategory } from "@customTypes/category";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);


  return (
    <Container>
      <Loading status={loading} error={error}>
      <GridList<TCategory> records={records} renderItem={(record)=><Category {...record}/>}/>
      </Loading>
    </Container>
  );
};

export default Categories;