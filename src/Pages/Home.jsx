import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Row, Col, Image } from "react-bootstrap";
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

export default function Home() {
  return (
    <>
      <Navbar />
      <Row className="p-0 g-0 rowHero">
        <Col className="p-0">
          <picture>
            <source srcset={HdHero} type="image/avif" />
            <img className={`${style.heroImg} fluid`} src={HdHeroWebP} alt="hero" />
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
                <p>We do shipping to all the world</p>
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
                <p>We have Customer Service</p>
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
                <p>All our products have a 5-year guarantee</p>
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
              <RiHandHeartLine size="50px" className={style.customStroke} />
              <div className={style.weOfferDiv}>
                <p>With each purchase you collaborate with associated foundations</p>
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
                <p>Your purchases are always protected</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="container-lg grandContainer m-auto my-5">
        <Row className={style.cardsContainer}>
          <Col lg={4} className="p-2">
            <Link className="text-decoration-none" to="/category/armchairs">
              <Image
                className={style.categoryCardsImg}
                src="https://www.ikea.com/nl/en/images/products/strandmon-wing-chair-grann-bomstad-dark-brown__0998384_pe823015_s5.jpg?f=xl"
              />
            </Link>
            <p className={style.beds}>Armchairs</p>
          </Col>
          <Col lg={4} className="p-2">
            <Link className="text-decoration-none" to="/category/tables">
              <Image
                className={style.categoryCardsImg}
                src="https://www.ikea.com/nl/en/images/products/strandtorp-extendable-table-brown__0946320_ph172863_s5.jpg?f=xl"
              />
            </Link>
            <p className={style.beds}>Tables</p>
          </Col>
          <Col lg={4} className="p-2">
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
          <Col lg={4} className="p-2">
            <Link className="text-decoration-none" to="/category/beds">
              <Image
                className={style.categoryCardsImg}
                src="https://www.ikea.com/nl/en/images/products/lommedalen-divan-bed-vatnestrom-firm-tistedal-skiftebo-light-beige__0936887_pe793454_s5.jpg?f=xl"
              />
            </Link>
            <p className={style.beds}>Beds</p>
          </Col>
          <Col lg={4} className="p-2">
            <Link className="text-decoration-none" to="/category/lighting">
              <Image
                className={style.categoryCardsImg}
                src="https://www.ikea.com/nl/en/images/products/frihult-wall-lamp-stainless-steel-colour__1052390_pe846070_s5.jpg?f=xl"
              />
            </Link>
            <p className={style.beds}>Lighting</p>
          </Col>
          <Col lg={4} className="p-2">
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
      <div className={style.divSeparatorCategories}>
        <div className={style.divTitleSeparatorCategory}>
          <h2 className={style.titleFirstSeparator}>Design-forward lifestyle</h2>
        </div>
        <Image
          className={style.underHeroImg}
          src="https://porustudio.com/wp-content/uploads/dickson-center-table-3.jpg.webp"
        />
      </div>

      <div className="container">
        <Row>
          <Col>
            <Slider />
          </Col>

          {/* <Col lg={3} className={style.tableSection}>
            <div className={style.divCardsStylesTitles}>
              <h2 className={style.CardsStylesTitles}>Rustic</h2>
            </div>
            <Image
              className={style.TableSectionImg}
              src="https://c1.wallpaperflare.com/preview/793/775/760/vintage-interior-home-old.jpg"
            />
          </Col>
          <Col lg={3} className={style.tableSection}>
            <div className={style.divCardsStylesTitles}>
              <h2 className={style.CardsStylesTitles}>Colorful</h2>
            </div>
            <Image
              className={style.TableSectionImg}
              src="https://c4.wallpaperflare.com/wallpaper/917/933/286/design-style-room-interior-wallpaper-preview.jpg"
            />
          </Col>
          <Col lg={3} className={style.tableSection}>
            <div className={style.divCardsStylesTitles}>
              <h2 className={style.CardsStylesTitles}>Modern</h2>
            </div>
            <Image
              className={style.TableSectionImg}
              src="https://c1.wallpaperflare.com/preview/1002/272/31/architecture-building.jpg"
            />
          </Col>
          <Col lg={3} className={style.tableSection}>
            <div className={style.divCardsStylesTitles}>
              <h2 className={style.CardsStylesTitles}>Minimalist</h2>
            </div>
            <Image
              className={style.TableSectionImg}
              src="https://c0.wallpaperflare.com/preview/243/242/451/bed-bedroom-clean-clouds.jpg"
            />
          </Col> */}
        </Row>
      </div>
      <Footer />
    </>
  );
}
