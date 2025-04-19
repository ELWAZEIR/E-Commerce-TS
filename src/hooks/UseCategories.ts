import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetCategories,
  cleanUpRecordsCategories,
} from "@store/categories/categoriesSlice";
function UseCategories() {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    const promise = dispatch(actGetCategories());

    return () => {
      promise.abort();
      dispatch(cleanUpRecordsCategories());
    };
  }, [dispatch]);
  return { loading, error, records };
}

export default UseCategories;
