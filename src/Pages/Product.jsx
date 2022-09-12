import { useEffect, useState } from "react";
import style from "../styles/Product.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Row, Col, Image, Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/cart/cartSlice";

const priceFormatter = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "USD",
  currencyDisplay: "code",
  maximumFractionDigits: 0,
});

export default function Home() {
  const dispatch = useDispatch();
  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState(null);

  const getProductFromApi = async () => {
    const response = await axios({
      url: "/products/" + productId,
      method: "GET",
    });
    setProduct(response.data);
  };

  // eslint-disable-next-line
  useEffect(() => getProductFromApi, [productId]);

  if (!product) {
    return <>Loading...</>;
  }

  const handleAddToCart = () => {
    dispatch(addProductToCart(productId));
  };

  return (
    <>
      <Navbar />
      <Container fluid className="p-0">
        <Row className={`g-0`}>
          <Col
            lg={6}
            className={`${style.landing} d-flex flex-column justify-content-center align-items-center align-items-lg-end p-0 order-1 pe-lg-5`}
          >
            <div className="w-75">
              <h1 className="text-center text-lg-end">
                <span className="text-uppercase">{product.name}</span>{" "}
                <span className="fw-light fst-italic">by {product.designer}</span>
              </h1>
              <p className="text-center text-lg-end">{product["short-description"]}</p>
            </div>
            <Button
              variant="outline-dark"
              size="lg"
              className="rounded-pill px-5"
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
          </Col>
          <Col lg={6} className={`${style.landing} p-0 order-2 d-flex align-items-center`}>
            <Image fluid className={`${style.imageLanding}`} src={product.images[0]} />
          </Col>
          <Col
            lg={6}
            className={`${style.rowSec} d-flex flex-column justify-content-center align-items-end p-0 order-3`}
          >
            <div className="d-flex justify-content-end align-items-center">
              <span className="fst-italic fw-semibold fs-1">
                {priceFormatter.format(parseInt(product.price))}
              </span>
              <div className="d-flex flex-column w-50 mx-5">
                <h2 className="text-start fs-4">{product.name}</h2>
                <p className="text-start fw-light">{product.description}</p>
              </div>
            </div>
          </Col>
          <Col lg={6} className={`${style.rowSec} p-0 order-4`}>
            <Image className={`${style.imageSec}`} src={product.images[1]} />
          </Col>
          <Col lg={6} className={`${style.rowSec} p-0 order-last order-lg-5`}>
            <Image className={`${style.imageSec}`} src={product.images[2]} />
          </Col>
          <Col
            lg={6}
            className={`${style.rowSec} d-flex flex-column justify-content-center align-items-start p-0 order-5 order-lg-last`}
          >
            <div className="d-flex flex-column w-50 mx-5">
              <h2 className="text-start fs-4">Technical specifications:</h2>
              <p className="text-start fw-light">{product.details}</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
