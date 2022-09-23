import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Container, Accordion, Image, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { format, parseJSON } from "date-fns";
import style from "../styles/OrderHistory.module.css";
import AboutOurProject from "../components/AboutOurProject/AboutOurProject";

const priceFormatter = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function OrderHistory() {
  const [orders, setOrders] = useState(null);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getOrdersFromApi = async () => {
      const response = await axios({
        url: "/orders?userId=" + user.userId,
        method: "GET",
      });
      setOrders(response.data);
    };
    getOrdersFromApi();
  }, [user]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!orders) {
    return <>Loading...</>;
  }

  return (
    <>
      <AboutOurProject />
      <div className={`${style.orderHistory} d-flex flex-column justify-content-between`}>
        <Navbar />
        <Container>
          <h1 className="pt-4">Order History</h1>
          {orders.length === 0 ? (
            <h3>No orders to show yet</h3>
          ) : (
            <Accordion className={`py-5`}>
              {orders.map((order) => {
                return (
                  <Accordion.Item key={order.id} eventKey={order.id}>
                    <Accordion.Header className={style.accordionHeader}>
                      <div>
                        <p>
                          <strong className="mx-1">Date: </strong>
                          {format(parseJSON(order.createdAt), "MM/dd/yyyy - HH:m:s")}
                        </p>
                        <p>
                          <strong className="mx-1">Total:</strong>{" "}
                          {priceFormatter.format(order.total)}
                        </p>
                        <p>
                          <strong className="mx-1">Status:</strong> {order.status}
                        </p>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Row>
                        <Col lg={8}>
                          {order.cart.productsList.map((product) => {
                            return (
                              <div
                                key={product.id}
                                className={`d-flex justify-content-between align-items-center mt-2 pb-2 border-bottom`}
                              >
                                <Image fluid height="100px" width="100px" src={product.images[0]} />
                                <span className="fw-bold text-black">{product.name}</span>
                                <div>
                                  <span className="fw-light me-1">
                                    {priceFormatter.format(parseInt(product.price))}
                                  </span>
                                  <span className="fw-light fst-italic">x{product.quantity}</span>
                                </div>
                                <span className="me-1">
                                  {priceFormatter.format(
                                    parseInt(product.price * product.quantity),
                                  )}
                                </span>
                              </div>
                            );
                          })}
                        </Col>
                        <Col lg={4} className="border-start">
                          <h3 className="text-start">Ship to:</h3>
                          <div className="text-start mt-3 ms-2">
                            <p className="fw-bold">{order.address.name}</p>
                            <p>Street: {order.address.street}</p>
                            <p>Corner: {order.address.corner}</p>
                            <p>Zipcode: {order.address.zipcode}</p>
                            <p>City: {order.address.city}</p>
                            <p>State: {order.address.state}</p>
                            <p>Country: {order.address.country}</p>
                            <p>Phone: {order.address.phone}</p>
                          </div>
                        </Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          )}
        </Container>
        <Footer />
      </div>
    </>
  );
}
