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
import HdHero from "../assets/img/ourProjectImages/HdHeroHome.jpg";

export default function Home() {
  return (
    <>
      <Navbar />
      <Row className="p-0 g-0 rowHero">
        <Col className="p-0">
          <Image fluid className={style.heroImg} src={HdHero} alt="presentation image" />
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
                <p>All our products have a 5-year guarantee</p>
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
      <section>
        <div className="container">
          <div className="row">
            <Col lg={3} className={style.tableSection}>
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
            </Col>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
