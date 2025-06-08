import Heading from "@components/common/heading/Heading";
import ProductInfo from "@components/eCommerce/productInfo/ProductInfo";
import Loading from "@components/feedback/Loding";
import UseOrders from "@hooks/UseOrders";
import { Modal, Table } from "react-bootstrap";

function Orders() {
 const {orderList, error, looading, showModal, selectedProduct, viweDetailsHandler, closeModalHandler} = UseOrders();

  return (
    <>
     <Modal show={showModal} onHide={closeModalHandler}>

        <Modal.Header closeButton>
          <Modal.Title>Products Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct.map((el) => (
            <ProductInfo
              key={el.id}
              title={el.title}
              img={el.img}
              price={el.price}
              quantity={el.quantity}
              direction="column"
              style={{ marginBottom: "10px" }}
            />
          ))}
        </Modal.Body>
      </Modal>

      <Heading title="My Orders" />
      <Loading status={looading} error={error} type="table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Items</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((order) => (
              <tr key={order.id}>
                <td>#{order.id}</td>
                <td>
                  {order.items.length}
                  {" / "}{" "}
                  <span
                  onClick={() => viweDetailsHandler(order.id)}
                    style={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      color: "blue"
                    }}
                  >
                    Product Details
                  </span>
                </td>
                <td>
                  {!isNaN(Number(order.subTotal ?? order.total))
                    ? `$${Number(order.subTotal ?? order.total).toFixed(2)}`
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Loading>
    </>
  );
}

export default Orders;
