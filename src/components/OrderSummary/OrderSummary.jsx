import { Col } from "react-bootstrap";
import style from "./orderSummary.module.css";
import { Link } from "react-router-dom";

export default function OrderSummary() {
  return (
    <Col className="px-5 mt-4 cartTotals">
      <div className={`${style.cartTotals} d-flex flex-column`}>
        <h2 className="mb-3">CART TOTALS</h2>
        <div>
          <span className="me-3">SUBTOTAL</span>
          <span className="fw-light">$31,755</span>
        </div>
        <div className="border-bottom pb-4 bg-gray">
          <span className="me-3">SHIPPING</span>
          <span className="fw-light">Free</span>
        </div>
        <div className="pt-4 checkoutButton">
          <span className="me-5 fs-3">TOTAL</span>
          <span className="fw-bold fs-3">$31,755</span>
        </div>
        <Link to="#" className={style.checkoutButton}>
          PROCEED TO PAYMENT
        </Link>
      </div>
    </Col>
  );
}
