import { Col, Image } from "react-bootstrap";
import style from "./orderSummary.module.css";

export default function OrderSummary() {
  return (
    <Col className="p-5">
      <h4>Order Summary</h4>
      <p>Article:</p>
      <p>Quantity:</p>
    </Col>
  );
}
