import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Row, Col, Image } from "react-bootstrap";
import style from "../styles/Home.module.css";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

import garanty from "../assets/svg/ofrecemos/ribbon-outline.svg";
import contactUs from "../assets/svg/ofrecemos/contactUs.svg";
import sendingAllWorld from "../assets/svg/ofrecemos/flight-takeoff-line.svg";
import weColaborate from "../assets/svg/ofrecemos/hand-heart-line.svg";
import customerService from "../assets/svg/ofrecemos/customer-service-2-fill.svg";
import securePayment from "../assets/svg/ofrecemos/secure-payment-line.svg";

export default function Home() {
  return (
    <>
      <Navbar />
      <Row className="p-0 g-0 rowHero">
        <Col className="p-0">
          <Image
            fluid
            className={style.heroImg}
            src="https://images.ligne-roset.com/cache/products/3400/panorama/p/r/prado_pano_1864x900.jpg"
            alt="presentation image"
          />
        </Col>
      </Row>
      <div className="container">
        <Row className="">
          <Col
            lg={2}
            xs={6}
            className="d-flex flex-direction-row justify-content-center align-items-center rowServicesIcons"
          >
            <div className="d-flex flex-column justify-content-center">
              <div>
                <img src={sendingAllWorld} className={style.weOffer} alt="" />
              </div>
              <div className={style.weOfferDiv}>
                <p>We do shipping to all the world</p>
              </div>
            </div>
          </Col>
          <Col
            lg={2}
            xs={6}
            className="d-flex flex-direction-row justify-content-center align-items-center rowServicesIcons"
          >
            <div className="d-flex flex-column justify-content-center">
              <div>
                <img src={customerService} className={style.weOffer} alt="" />
              </div>
              <div className={style.weOfferDiv}>
                <p>We have Customer Service</p>
              </div>
            </div>
          </Col>
          <Col
            lg={2}
            xs={6}
            className="d-flex flex-direction-row justify-content-center align-items-center"
          >
            <div className="d-flex flex-column justify-content-center">
              <div className="mt-4">
                <img src={garanty} className={style.weOffer} alt="" />
              </div>
              <div className={style.weOfferDiv}>
                <p>All our products have a 5-year guarantee.</p>
              </div>
            </div>
          </Col>
          <Col
            lg={2}
            xs={6}
            className="d-flex flex-direction-row justify-content-center align-items-center rowServicesIcons"
          >
            <div className="d-flex flex-column justify-content-center">
              <div>
                <img src={contactUs} className={style.weOffer} alt="" />
              </div>
              <div className={style.weOfferDiv}>
                <p>Contact us 24 hours every day</p>
              </div>
            </div>
          </Col>
          <Col
            lg={2}
            xs={6}
            className="d-flex flex-direction-row justify-content-center align-items-center"
          >
            <div className="d-flex flex-column justify-content-center mt-5">
              <div>
                <img src={weColaborate} className={style.weOffer} alt="" />
              </div>
              <div className={style.weOfferDiv}>
                <p>With each purchase you collaborate with associated foundations</p>
              </div>
            </div>
          </Col>
          <Col
            lg={2}
            xs={6}
            className="d-flex flex-direction-row justify-content-center align-items-center rowServicesIcons"
          >
            <div className="d-flex flex-column justify-content-center">
              <div>
                <img src={securePayment} className={style.weOffer} alt="" />
              </div>
              <div className={style.weOfferDiv}>
                <p>Your purchases are always protected</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="container-lg grandContainer m-auto my-5">
        <Row className={style.cardsContainer}>
          <Col lg={4} className="p-2">
            <Link className="text-decoration-none" to="/category/1">
              <Image
                className={style.categoryCardsImg}
                src="https://images.ligne-roset.com/cache/models/2676/iambiance1/1/0/1005ki_1848x1848.jpg"
              />
            </Link>
            <p className={style.beds}>Sofa chairs</p>
          </Col>
          <Col lg={4} className="p-2">
            <Link className="text-decoration-none" to="/category/1">
              <Image
                className={style.categoryCardsImg}
                src="https://images.ligne-roset.com/cache/models/2514/iambiance1/0/1/0105q_2000x2000.jpg"
              />
            </Link>
            <p className={style.beds}>Tables</p>
          </Col>
          <Col lg={4} className="p-2">
            <Link className="text-decoration-none" to="/category/1">
              <Image
                className={style.categoryCardsImg}
                src="https://images.ligne-roset.com/cache/models/2447/iambiance1/1/0/10004b_2000x2000.jpg"
              />
            </Link>
            <p className={style.beds}>Sofas</p>
          </Col>
        </Row>
        <Row className={style.cardsContainer}>
          <Col lg={4} className="p-2">
            <Link className="text-decoration-none" to="/category/1">
              <Image
                className={style.categoryCardsImg}
                src="https://images.ligne-roset.com/cache/models/1768/iambiance1/0/0/00tlu_c02_1848x1848.jpg"
              />
            </Link>
            <p className={style.beds}>Beds</p>
          </Col>
          <Col lg={4} className="p-2">
            <Link className="text-decoration-none" to="/category/1">
              <Image
                className={style.categoryCardsImg}
                src="https://images.ligne-roset.com/cache/models/2385/iambiance1/0/1/011v0_600x600.jpg"
              />
            </Link>
            <p className={style.beds}>Lighting</p>
          </Col>
          <Col lg={4} className="p-2">
            <Link className="text-decoration-none" to="/category/1">
              <Image
                className={style.categoryCardsImg}
                src="https://images.ligne-roset.com/cache/models/2748/iambiance1/1/0/1007dz_c01_600x600.jpg"
              />
            </Link>
            <p className={style.beds}>Office</p>
          </Col>
        </Row>
      </div>
      <div className={style.divSeparatorCategories}>
        <div className={style.divTitleSeparatorCategory}>
          <h2 className={style.titleFirsSeparator}>Design-forward lifestyle</h2>
        </div>
        <Image
          className={style.underHeroImg}
          src="https://porustudio.com/wp-content/uploads/dickson-center-table-3.jpg.webp"
        />
      </div>
      <section>
        <Image
          className={style.TableSectionImg}
          src="https://porustudio.com/wp-content/uploads/dickson-center-table-4.jpg.webp"
        />
      </section>

      <Footer />
    </>
  );
}
