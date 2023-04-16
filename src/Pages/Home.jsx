import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Row, Col, Image, Container } from "react-bootstrap";
import style from "../styles/Home.module.css";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import Slider from "../components/Slider/Slider";
import { GiAirplaneDeparture } from "react-icons/gi";
import {
  Ri24HoursLine,
  RiCustomerService2Fill,
  RiHandHeartLine,
  RiSecurePaymentLine,
} from "react-icons/ri";
import { BsAward } from "react-icons/bs";

import HdHero from "../assets/img/ourProjectImages/HdHeroHome.avif";
import HdHeroWebP from "../assets/img/ourProjectImages/HdHeroHome.webp";
import AboutOurProject from "../components/AboutOurProject/AboutOurProject";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,

  offset: 120,
  duration: 400,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <AboutOurProject />
      <Row className="p-0 g-0 rowHero">
        <Col className="p-0">
          <picture className={`${style.pictureHero}`}>
            <source srcSet={HdHero} type="image/avif" />
            <img className={`${style.heroImg} mb-4 fluid`} src={HdHeroWebP} alt="hero" />
          </picture>
        </Col>
      </Row>
      <div className="container">
        <Row className="mt-5">
          <Col
            lg={2}
            xs={6}
            className="d-flex flex-direction-row justify-content-center align-items-start"
          >
            <div className="d-flex flex-column align-items-center justify-content-center">
              <GiAirplaneDeparture size="50px" className={style.customStroke} />
              <div className={style.weOfferDiv}>
                <p>International Shipping</p>
              </div>
            </div>
          </Col>
          <Col
            lg={2}
            xs={6}
            className="d-flex flex-direction-row justify-content-center align-items-start"
          >
            <div className="d-flex flex-column align-items-center justify-content-center">
              <RiCustomerService2Fill size="50px" className={style.customStroke} />
              <div className={style.weOfferDiv}>
                <p>Customer Service</p>
              </div>
            </div>
          </Col>
          <Col
            lg={2}
            xs={6}
            className="d-flex flex-direction-row justify-content-center align-items-start"
          >
            <div className="d-flex flex-column align-items-center justify-content-center">
              <Ri24HoursLine size="50px" className={style.customStroke} />
              <div className={style.weOfferDiv}>
                <p>Contact us 24 hours every day</p>
              </div>
            </div>
          </Col>
          <Col
            lg={2}
            xs={6}
            className="d-flex flex-direction-row justify-content-center align-items-start"
          >
            <div className="d-flex flex-column align-items-center justify-content-center">
              <BsAward size="50px" className={style.customStroke} />
              <div className={style.weOfferDiv}>
                <p>5-year product guarantee</p>
              </div>
            </div>
          </Col>
          <Col
            lg={2}
            xs={6}
            className="d-flex flex-direction-row justify-content-center align-items-start"
          >
            <div className="d-flex flex-column align-items-center justify-content-center">
              <RiHandHeartLine size="50px" className={style.customStroke} />
              <div className={style.weOfferDiv}>
                <p>Associated foundations </p>
              </div>
            </div>
          </Col>
          <Col
            lg={2}
            xs={6}
            className="d-flex flex-direction-row justify-content-center align-items-start"
          >
            <div className="d-flex flex-column align-items-center justify-content-center">
              <RiSecurePaymentLine size="50px" className={style.customStroke} />
              <div className={style.weOfferDiv}>
                <p>Secure Payment</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="container-lg grandContainer m-auto my-5">
        <Row className={style.cardsContainer}>
          <Col data-aos="fade-right" lg={4} className="p-2">
            <Link className="text-decoration-none" to="/category/armchairs">
              <Image
                className={style.categoryCardsImg}
                src="https://www.ikea.com/nl/en/images/products/strandmon-wing-chair-grann-bomstad-dark-brown__0998384_pe823015_s5.jpg?f=xl"
              />
            </Link>
            <p className={style.beds}>Armchairs</p>
          </Col>
          <Col data-aos="fade-up" lg={4} className="p-2">
            <Link className="text-decoration-none" to="/category/tables">
              <Image
                className={style.categoryCardsImg}
                src="https://www.ikea.com/nl/en/images/products/strandtorp-extendable-table-brown__0946320_ph172863_s5.jpg?f=xl"
              />
            </Link>
            <p className={style.beds}>Tables</p>
          </Col>
          <Col data-aos="fade-left" lg={4} className="p-2">
            <Link className="text-decoration-none" to="/category/sofas">
              <Image
                className={style.categoryCardsImg}
                src="https://www.ikea.com/nl/en/images/products/gronlid-corner-sofa-5-seat-w-chaise-longue-ljungen-medium-grey__0787563_pe763289_s5.jpg?f=xl"
              />
            </Link>
            <p className={style.beds}>Sofas</p>
          </Col>
        </Row>
        <Row className={style.cardsContainer}>
          <Col data-aos="fade-right" lg={4} className="p-2">
            <Link className="text-decoration-none" to="/category/beds">
              <Image
                className={style.categoryCardsImg}
                src="https://www.ikea.com/nl/en/images/products/lommedalen-divan-bed-vatnestrom-firm-tistedal-skiftebo-light-beige__0936887_pe793454_s5.jpg?f=xl"
              />
            </Link>
            <p className={style.beds}>Beds</p>
          </Col>
          <Col data-aos="fade-up" lg={4} className="p-2">
            <Link className="text-decoration-none" to="/category/lighting">
              <Image
                className={style.categoryCardsImg}
                src="https://www.ikea.com/nl/en/images/products/frihult-wall-lamp-stainless-steel-colour__1052390_pe846070_s5.jpg?f=xl"
              />
            </Link>
            <p className={style.beds}>Lighting</p>
          </Col>
          <Col data-aos="fade-left" lg={4} className="p-2">
            <Link className="text-decoration-none" to="/category/office">
              <Image
                className={style.categoryCardsImg}
                src="https://www.ikea.com/nl/en/images/products/trotten-cabinet-combination-anthracite__1038437_pe839676_s5.jpg?f=xl"
              />
            </Link>
            <p className={style.beds}>Office</p>
          </Col>
        </Row>
      </div>
      <div data-aos="fade-in" className={style.divSeparatorCategories}>
        <div className={style.divTitleSeparatorCategory}>
          <h2 className={style.titleFirstSeparator}>Design-forward lifestyle</h2>
        </div>
        <Image
          className={style.underHeroImg}
          src="https://porustudio.com/wp-content/uploads/dickson-center-table-3.jpg.webp"
        />
      </div>

      <Container className="mt-5 pt-5">
        <Slider />
      </Container>
      <Footer />
    </>
  );
}
