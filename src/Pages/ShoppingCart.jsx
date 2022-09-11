import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Row, Col, Image, Button, Container } from "react-bootstrap";
import style from "../styles/ShoppingCart.module.css";
import { IoCaretForward, IoCaretBack, IoClose } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart, removeProductFromCart } from "../redux/cart/cartSlice";

export default function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState(null);

  // ya tengo todos los productos,
  //en el map ver si hacer un if en donde el usestate llamado products(este product es el que tengo guardado en la DB) donde tengo guardadas las imagenes
  //conincida su id con mi productlistId

  const getProductFromApi = async () => {
    const response = await axios({
      url: "/products/" + productId,
      method: "GET",
    });
    setProduct(response.data);
  };

  const handleAddToCart = () => {
    dispatch(addProductToCart(productId));
  };
  const { productList } = useSelector((state) => state.cart);

  const handleRemoveFromCart = (product) => {
    dispatch(removeProductFromCart(product));
  };
  //***********Si bien funciona agregar los items con las flechitas, no descuenta el total del precio, y tambien, el producto al sumar otro
  //con la flechita se agrega otro abajo, funciona mal************

  // const handleRemoveFromCart = () => {
  //   const product = product.find(product => productId === productId);
  //   if(productList.find(pdt => pdt.id === productId))
  //   dispatch(removeProductFromCart(productId));
  // }
  // };

  // eslint-disable-next-line
  useEffect(() => getProductFromApi, [productId]);
  console.log(cart);
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
                    {/* <IoClose className={`fs-4`} />
                    {product.id === productList.id && ( */}
                    <Image
                      fluid
                      className={style.productImage}
                      // {if() { VER COMO HACER, SI NO ANDA ACA PONERLO ARRIBA DE IMAGE
                      //   src={product.image}}
                      // }
                      src="https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue1_1500x1500.jpg"
                    />
                    {/* ) } */}

                    <span className="fw-bold text-black">PRADO </span>
                    <span className="fw-light fst-italic">$10,585</span>
                    <div className="d-flex align-items-center justify-content-center border px-5 py-3">
                      <span className="me-3">Quantity</span>
                      <IoCaretBack
                        className="fs-3 mx-2 opacity-50"
                        onClick={() => {
                          handleRemoveFromCart();
                        }}
                      />

                      <span className="fs-5">{cart.totalCount}</span>
                      <IoCaretForward
                        className="fs-3 mx-2 opacity-50"
                        onClick={() => {
                          handleAddToCart();
                        }}
                      />
                    </div>
                    <span className="fw-bold">{product.cartTotals}</span>
                  </div>
                </div>
              );
            })}

            {/* <div>
              <div
                className={`${style.gray} d-flex justify-content-between align-items-center py-3 border-bottom`}
              >
                <IoClose className={`fs-4`} />
                <Image
                  fluid
                  className={style.productImage}
                  src="https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue1_1500x1500.jpg"
                />
                <span className="fw-bold text-black">PRADO </span>
                <span className="fw-light fst-italic">$10,585</span>
                <div className="d-flex align-items-center justify-content-center border px-5 py-3">
                  <span className="me-3">Quantity</span>
                  <IoCaretBack className="fs-3 mx-2 opacity-50" />
                  <span className="fs-5">1</span>
                  <IoCaretForward className="fs-3 mx-2 opacity-50" />
                </div>
                <span className="fw-bold">$10,585</span>
              </div>
            </div>

            <div>
              <div
                className={`${style.gray} d-flex justify-content-between align-items-center my-3 py-3 border-bottom`}
              >
                <IoClose className="fs-4" />
                <Image
                  fluid
                  className={style.productImage}
                  src="https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue1_1500x1500.jpg"
                />
                <span className="fw-bold text-black">PRADO</span>
                <span className="fw-light fst-italic">$10,585</span>
                <div className="d-flex align-items-center justify-content-center border px-5 py-3">
                  <span className="me-3">Quantity</span>
                  <IoCaretBack className="fs-3 mx-2 opacity-50" />
                  <span className="fs-5">1</span>
                  <IoCaretForward className="fs-3 mx-2 opacity-50" />
                </div>
                <span className="fw-bold">$10,585</span>
              </div>
            </div>

            <div>
              <div
                className={`${style.gray} d-flex justify-content-between align-items-center my-3 py-3 border-bottom`}
              >
                <IoClose className="fs-4" />
                <Image
                  fluid
                  className={style.productImage}
                  src="https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue1_1500x1500.jpg"
                />
                <span className="fw-bold text-black">PRADO </span>
                <span className="fw-light fst-italic">$10,585</span>
                <div className="d-flex align-items-center justify-content-center border px-5 py-3">
                  <span className="me-3">Quantity</span>
                  <IoCaretBack className="fs-3 mx-2 opacity-50" />
                  <span className="fs-5">1</span>
                  <IoCaretForward className="fs-3 mx-2 opacity-50" />
                </div>
                <span className="fw-bold">$10,585</span>
              </div>
            </div> */}
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
