import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetOrder, resetOrderStatus } from "@store/orders/ordersSlice";
import { TProduct } from "@types";
function UseOrders() {

 const { orderList, error, looading } = useAppSelector((state) => state.orders);

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<TProduct[]>([]);

  const dispatch = useAppDispatch();
  useEffect(() => {
    const promise=dispatch(actGetOrder());
    return ()=>{
      promise.abort(); // Clean up the request on component unmount
      dispatch(resetOrderStatus())
    }
  }, [dispatch]);

  const viweDetailsHandler=(id:number)=>{
    const productDetails=orderList.find((order)=>order.id === id)
    const items = productDetails?.items || [];
    setSelectedProduct((prv)=>[...prv,...items]);
    setShowModal(true);
  }
  const closeModalHandler = () => {
    setShowModal(false);
    setSelectedProduct([]); // Clear selected products when closing the modal
  }


  return (
   {orderList, error, looading, showModal, selectedProduct, viweDetailsHandler, closeModalHandler}
  )
}

export default UseOrders