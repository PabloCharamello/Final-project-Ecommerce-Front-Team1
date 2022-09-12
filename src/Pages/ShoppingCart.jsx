import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Row, Col, Image, Button, Container } from "react-bootstrap";
import style from "../styles/ShoppingCart.module.css";
import { IoCaretForward, IoCaretBack, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addProductToCart,
  minusProductFromCart,
  removeProductFromCart,
} from "../redux/cart/cartSlice";

export default function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addProductToCart(product));
  };

  const handleMinusFromCart = (id) => {
    dispatch(minusProductFromCart(id));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeProductFromCart(id));
  };

  const priceFormatter = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
  return (
    <>
      <Navbar />
      <Container>
        <Row className="mb-5">
          <h1 className="fw-3 mb-3">SHOPPING CART</h1>
          <Col lg={8} className="pe-5">
            {cart.productsList.map((product) => {
              return (
                <div key={product.id}>
                  <div
                    className={`${style.gray} d-flex justify-content-between align-items-center py-3 border-bottom`}
                  >
                    <IoClose
                      role="button"
                      className={`fs-4 cursor-pointer`}
                      onClick={() => handleRemoveFromCart(product.id)}
                    />
                    <Image fluid className={style.productImage} src={product.images[0]} />

                    <span className="fw-bold text-black">{product.name}</span>
                    <span className="fw-light fst-italic">
                      {priceFormatter.format(parseInt(product.price))}
                    </span>
                    <div className="d-flex align-items-center justify-content-center border px-5 py-3">
                      <span className="me-3">Quantity</span>
                      <IoCaretBack
                        role="button"
                        className="fs-3 mx-2 opacity-50"
                        onClick={() => {
                          handleMinusFromCart(product.id);
                        }}
                      />

                      <span className="fs-5">{product.count}</span>
                      <IoCaretForward
                        role="button"
                        className="fs-3 mx-2 opacity-50"
                        onClick={() => {
                          handleAddToCart(product);
                        }}
                      />
                    </div>
                    <span className="fw-bold">
                      {priceFormatter.format(parseInt(product.price * product.count))}
                    </span>
                  </div>
                </div>
              );
            })}
          </Col>
          <Col lg={4} className="ps-5">
            <div className={`${style.cartTotals} d-flex flex-column mt-3`}>
              <h2 className="mb-3">CART TOTALS</h2>
              <div>
                <span className="me-3">SUBTOTAL</span>
                <span className="fw-light">$31,755</span>
              </div>
              <div className="border-bottom pb-4 bg-gray">
                <span className="me-3">SHIPPING</span>
                <span className="fw-light">Free</span>
              </div>
              <div className="pt-4">
                <span className="me-5 fs-3">TOTAL</span>
                <span className="fw-bold fs-3">$31,755</span>
                <div className="d-flex justify-content-center">
                  <Button as={Link} to="/shipping" variant="dark" className={style.checkoutButton}>
                    PROCEED TO CHECKOUT
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
