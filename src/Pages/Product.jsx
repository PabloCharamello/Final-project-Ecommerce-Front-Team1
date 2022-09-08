import React from "react";
import style from "./Product.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Row, Col, Image, Button, Container } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container fluid className="p-0">
        <Row className={`g-0`}>
          <Col
            lg={6}
            className={`${style.landing} d-flex flex-column justify-content-center align-items-center align-items-lg-end p-0 order-1`}
          >
            <div className="w-75">
              <h1 className="text-center text-lg-end">
                PRADO <span className="fw-light fst-italic">by Christian Werner</span>
              </h1>
              <p className="text-center text-lg-end">
                Prado has first and foremost been designed based on the study of lifestyles and
                human nature
              </p>
              <div className="w-100">
                <Button variant="outline-dark" size="lg" className="float-lg-end rounded-pill px-5">
                  Buy
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={6} className={`${style.landing} p-0 order-2 d-flex align-items-center`}>
            <Image
              fluid
              className={`${style.imageLanding}`}
              src="https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue1_1500x1500.jpg"
            />
          </Col>
          <Col
            lg={6}
            className={`${style.rowSec} d-flex flex-column justify-content-center align-items-end p-0 order-3`}
          >
            <div className="d-flex justify-content-end align-items-center">
              <span className="fst-italic fw-semibold fs-1">USD 10,585</span>
              <div className="d-flex flex-column w-50 mx-5">
                <h2 className="text-start fs-4">Prado</h2>
                <p className="text-start fw-light">
                  Typically the design process surrounding a new sofa is heavily focused on
                  aesthetic research. Prado represents a departure from this school of thought
                  completely.
                </p>
                <p className="text-start fw-light">
                  Prado has first and foremost been designed based on the study of lifestyles and
                  human nature. We find the same inspirations in Prado that brought us Smala in the
                  earlier part of this century.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} className={`${style.rowSec} p-0 order-4`}>
            <Image
              className={`${style.imageSec}`}
              src="https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue3_1500x1500.jpg"
            />
          </Col>
          <Col lg={6} className={`${style.rowSec} p-0 order-last order-lg-5`}>
            <Image
              className={`${style.imageSec}`}
              src="https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue8_1500x1500.jpg"
            />
          </Col>
          <Col
            lg={6}
            className={`${style.rowSec} d-flex flex-column justify-content-center align-items-start p-0 order-5 order-lg-last`}
          >
            <div className="d-flex flex-column w-50 mx-5">
              <h2 className="text-start fs-4">Comfort and aesthetic</h2>
              <p className="text-start fw-light">
                Prado consists of a vast bench seat (available in two sizes: 100*200 cm; 39 3/8'' x
                78 3/4'' and 120*240 cm; 47 1/4'' x 94 1/2'') that can be combined and adjusted as
                desired and onto which back cushions may be placed at will, so that one can sit or
                lie down as they wish.
              </p>
              <p className="text-start fw-light">
                It offers complete freedom as these cushions, weighted and equipped with a non-slip
                system, do not need to be rested against or attached to any object for support.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
