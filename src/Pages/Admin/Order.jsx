import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row, Image, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Admin/Sidebar";

const priceFormatter = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function Order() {
  const params = useParams();
  const orderId = params.id;
  const [order, setOrder] = useState(null);

  const getOrder = async () => {
    try {
      const response = await axios({
        url: "/orders/" + orderId,
        method: "GET",
      });
      setOrder(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line
  useEffect(() => getOrder, [orderId]);

  if (!order) {
    return <>Loading...</>;
  }
  return (
    <div className="d-flex">
      <Sidebar />
      <Container>
        <h1>Order</h1>
        <h3>
          ID: <span className="fw-normal">{order.id}</span>
        </h3>
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
                    {priceFormatter.format(parseInt(product.price * product.quantity))}
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
      </Container>
    </div>
  );
}
