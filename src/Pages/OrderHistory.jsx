import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Container, Accordion } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { format, parseJSON } from "date-fns";

const priceFormatter = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function OrderHistory() {
  const [orders, setOrders] = useState(null);
  const user = useSelector((state) => state.user);

  const getOrdersFromApi = async () => {
    const response = await axios({
      url: "/orders?userId=" + user.userId,
      method: "GET",
    });
    setOrders(response.data);
  };

  // eslint-disable-next-line
  useEffect(() => getOrdersFromApi, [user]);

  if (!orders) {
    return <>Loading...</>;
  }

  return (
    <>
      <Navbar />
      <Container>
        <h1 className="pt-5">Order History</h1>
        <Accordion className="py-5">
          {orders.map((order) => {
            return (
              <Accordion.Item key={order.id} eventKey={order.id}>
                <Accordion.Header>
                  Date: {format(parseJSON(order.createdAt), "MM/dd/yyyy - HH:m:s")} | Total:{" "}
                  {priceFormatter.format(order.total)} | Status: {order.status}
                </Accordion.Header>
                <Accordion.Body>
                  {order.cart.productsList.map((product) => {
                    return (
                      <div key={product.id}>
                        {product.name} x{product.quantity} -{" "}
                        {priceFormatter.format(product.price * product.quantity)}
                      </div>
                    );
                  })}
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </Container>
      <Footer />
    </>
  );
}
