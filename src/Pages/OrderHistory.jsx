import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Container, Accordion } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const dateFormatter = new Intl.DateTimeFormat("en-GB");

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
  console.log(orders[0]["product-list"]);

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
                  Order ID: {order.id} | Date: {order.createdAt} | Total: {order.total}
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
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
