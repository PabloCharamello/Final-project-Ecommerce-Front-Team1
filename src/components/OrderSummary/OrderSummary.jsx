import { Button, Col } from "react-bootstrap";
import style from "./orderSummary.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { clearCart } from "../../redux/cart/cartSlice";

export default function OrderSummary({ addressId }) {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispath = useDispatch();
  const handlePurchase = async () => {
    if (parseInt(addressId) === -1) {
      return;
    }
    const data = {
      addressId,
      cart,
      payment: "Paypal",
    };
    try {
      await axios({
        url: "/orders/",
        method: "POST",
        data,
      });
      dispath(clearCart());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

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
        <Button
          className={`${style.checkoutButton} ${
            parseInt(addressId) === -1 && style.checkoutButtonDisabled
          }`}
          onClick={handlePurchase}
          disabled={parseInt(addressId) !== -1 ? false : true}
        >
          PURCHASE
        </Button>
      </div>
    </Col>
  );
}
