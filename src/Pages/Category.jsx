import React from "react";
import style from "../styles/Category.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Row, Col, Image, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Category() {
  return (
    <>
      <Navbar />
      <Container className={`mb-5`}>
        <h1 className="mb-5 mt-2">Sofas</h1>
        <Row>
          <Col
            lg={6}
            className={`${style.product} d-flex flex-column justify-content-center align-items-center align-items-lg-center p-0 order-1`}
          >
            <Link to="/product/1">
              <Image
                fluid
                className={`${style.imageProduct} mb-2`}
                src="https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue1_1500x1500.jpg"
              />
            </Link>
            <h2 className="text-start fs-4">PRADO</h2>
            <span className="fst-italic fs-6 mb-2">USD 10,585</span>
            <Button variant="outline-dark" size="sm" className="float-lg-end rounded-pill mb-5">
              ADD TO CART
            </Button>
          </Col>
          <Col
            lg={6}
            className={`${style.product} d-flex flex-column justify-content-center align-items-center align-items-lg-center p-0 order-1`}
          >
            <Link to="/product/1">
              <Image
                fluid
                className={`${style.imageProduct} mb-2`}
                src="https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue1_1500x1500.jpg"
              />
            </Link>
            <h2 className="text-start fs-4">PRADO</h2>
            <span className="fst-italic fs-6 mb-2">USD 10,585</span>
            <Button variant="outline-dark" size="sm" className="float-lg-end rounded-pill mb-5">
              ADD TO CART
            </Button>
          </Col>
          <Col
            lg={6}
            className={`${style.product} d-flex flex-column justify-content-center align-items-center align-items-lg-center p-0 order-1`}
          >
            <Link to="/product/1">
              <Image
                fluid
                className={`${style.imageProduct} mb-2`}
                src="https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue1_1500x1500.jpg"
              />
            </Link>
            <h2 className="text-start fs-4">PRADO</h2>
            <span className="fst-italic fs-6 mb-2">USD 10,585</span>
            <Button variant="outline-dark" size="sm" className="float-lg-end rounded-pill mb-5">
              ADD TO CART
            </Button>
          </Col>
          <Col
            lg={6}
            className={`${style.product} d-flex flex-column justify-content-center align-items-center align-items-lg-center p-0 order-1`}
          >
            <Link to="/product/1">
              <Image
                fluid
                className={`${style.imageProduct} mb-2`}
                src="https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue1_1500x1500.jpg"
              />
            </Link>
            <h2 className="text-start fs-4">PRADO</h2>
            <span className="fst-italic fs-6 mb-2">USD 10,585</span>
            <Button variant="outline-dark" size="sm" className="float-lg-end rounded-pill mb-5">
              ADD TO CART
            </Button>
          </Col>
          <Col
            lg={6}
            className={`${style.product} d-flex flex-column justify-content-center align-items-center align-items-lg-center p-0 order-1`}
          >
            <Link to="/product/1">
              <Image
                fluid
                className={`${style.imageProduct} mb-2`}
                src="https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue1_1500x1500.jpg"
              />
            </Link>
            <h2 className="text-start fs-4">PRADO</h2>
            <span className="fst-italic fs-6 mb-2">USD 10,585</span>
            <Button variant="outline-dark" size="sm" className="float-lg-end rounded-pill mb-5">
              ADD TO CART
            </Button>
          </Col>
          <Col
            lg={6}
            className={`${style.product} d-flex flex-column justify-content-center align-items-center align-items-lg-center p-0 order-1`}
          >
            <Link to="/product/1">
              <Image
                fluid
                className={`${style.imageProduct} mb-2`}
                src="https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue1_1500x1500.jpg"
              />
            </Link>
            <h2 className="text-start fs-4">PRADO</h2>
            <span className="fst-italic fs-6 mb-2">USD 10,585</span>
            <Button variant="outline-dark" size="sm" className="float-lg-end rounded-pill mb-5">
              ADD TO CART
            </Button>
          </Col>
          <Col
            lg={6}
            className={`${style.product} d-flex flex-column justify-content-center align-items-center align-items-lg-center p-0 order-1`}
          >
            <Link to="/product/1">
              <Image
                fluid
                className={`${style.imageProduct} mb-2`}
                src="https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue1_1500x1500.jpg"
              />
            </Link>
            <h2 className="text-start fs-4">PRADO</h2>
            <span className="fst-italic fs-6 mb-2">USD 10,585</span>
            <Button variant="outline-dark" size="sm" className="float-lg-end rounded-pill mb-5">
              ADD TO CART
            </Button>
          </Col>
          <Col
            lg={6}
            className={`${style.product} d-flex flex-column justify-content-center align-items-center align-items-lg-center p-0 order-1`}
          >
            <Link to="/product/1">
              <Image
                fluid
                className={`${style.imageProduct} mb-2`}
                src="https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue1_1500x1500.jpg"
              />
            </Link>
            <h2 className="text-start fs-4">PRADO</h2>
            <span className="fst-italic fs-6 mb-2">USD 10,585</span>
            <Button variant="outline-dark" size="sm" className="float-lg-end rounded-pill mb-5">
              ADD TO CART
            </Button>
          </Col>
          <Col
            lg={6}
            className={`${style.product} d-flex flex-column justify-content-center align-items-center align-items-lg-center p-0 order-1`}
          >
            <Link to="/product/1">
              <Image
                fluid
                className={`${style.imageProduct} mb-2`}
                src="https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue1_1500x1500.jpg"
              />
            </Link>
            <h2 className="text-start fs-4">PRADO</h2>
            <span className="fst-italic fs-6 mb-2">USD 10,585</span>
            <Button variant="outline-dark" size="sm" className="float-lg-end rounded-pill mb-5">
              ADD TO CART
            </Button>
          </Col>
          <Col
            lg={6}
            className={`${style.product} d-flex flex-column justify-content-center align-items-center align-items-lg-center p-0 order-1`}
          >
            <Link to="/product/1">
              <Image
                fluid
                className={`${style.imageProduct} mb-2`}
                src="https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue1_1500x1500.jpg"
              />
            </Link>
            <h2 className="text-start fs-4">PRADO</h2>
            <span className="fst-italic fs-6 mb-2">USD 10,585</span>
            <Button variant="outline-dark" size="sm" className="float-lg-end rounded-pill mb-5">
              ADD TO CART
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
