import React from "react";
import style from "../styles/Category.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Row, Col, Image, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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

export default function Category() {
  const dispatch = useDispatch();
  const params = useParams();
  const categorySlug = params.slug;
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const getCategoryFromApi = async (slug) => {
      const response = await axios({
        url: "/categories/" + slug,
        method: "GET",
      });
      setCategory(response.data);
    };
    getCategoryFromApi(categorySlug);
  }, [categorySlug]);

  if (!category) {
    return <p>Loading...</p>;
  }

  const handleAddToCart = (product) => {
    dispatch(addProductToCart({ ...product, quantity: 1 }));
  };

  return (
    <>
      <Navbar />
      <Container className={`mb-5`}>
        <h1 className="mb-5 mt-2">{category.name}</h1>
        <Row>
          {category.products.map((product) => {
            return (
              <Col
                key={product.id}
                lg={6}
                className={`${style.product} d-flex flex-column justify-content-center align-items-center align-items-lg-center p-0 order-1`}
              >
                <Link to={"/product/" + product.slug}>
                  <Image fluid className={`${style.imageProduct} mb-2`} src={product.images[0]} />
                </Link>
                <h2 className="text-start fs-4">{product.name}</h2>
                <span className="fs-6 mb-2">{priceFormatter.format(product.price)}</span>
                <Button
                  variant="outline-dark"
                  size="sm"
                  className="float-lg-end rounded-pill mb-5"
                  onClick={() => {
                    handleAddToCart(product);
                  }}
                >
                  ADD TO CART
                </Button>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Footer />
    </>
  );
}
