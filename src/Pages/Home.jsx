import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Row, Col, Image } from "react-bootstrap";
import style from "../styles/home.module.css";
import Footer from "../components/Footer/Footer";

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
          <p className={style.elegantDesign}>Diseños elegantes</p>
          <p className={style.mekeItHappend}>Hacemos realidad</p>
          <p className={style.yourDreams}>tus sueños</p>
        </Col>
      </Row>

      <div className="container grandContainer my-5">
        <Row className={style.cardsContainer}>
          <Col lg={4} className="p-2">
            <Image
              className={style.categoryCardsImg}
              src="https://images.ligne-roset.com/cache/models/2676/iambiance1/1/0/1005ki_1848x1848.jpg"
            />
            <p className={style.beds}>Sillones</p>
          </Col>
          <Col lg={4} className="p-2">
            <Image
              className={style.categoryCardsImg}
              src="https://images.ligne-roset.com/cache/models/2514/iambiance1/0/1/0105q_2000x2000.jpg"
            />
            <p className={style.beds}>Mesas</p>
          </Col>
          <Col lg={4} className="p-2">
            <Image
              className={style.categoryCardsImg}
              src="https://images.ligne-roset.com/cache/models/2447/iambiance1/1/0/10004b_2000x2000.jpg"
            />
            <p className={style.beds}>Sofas</p>
          </Col>
        </Row>
        <Row className={style.cardsContainer}>
          <Col lg={4} className="p-2">
            <Image
              className={style.categoryCardsImg}
              src="https://images.ligne-roset.com/cache/models/1768/iambiance1/0/0/00tlu_c02_1848x1848.jpg"
            />
            <p className={style.beds}>Camas</p>
          </Col>
          <Col lg={4} className="p-2">
            <Image
              className={style.categoryCardsImg}
              src="https://images.ligne-roset.com/cache/models/2385/iambiance1/0/1/011v0_600x600.jpg"
            />{" "}
            <p className={style.beds}>Iluminación</p>
          </Col>
          <Col lg={4} className="p-2">
            <Image
              className={style.categoryCardsImg}
              src="https://images.ligne-roset.com/cache/models/2748/iambiance1/1/0/1007dz_c01_600x600.jpg"
            />
            <p className={style.beds}>Oficina</p>
          </Col>
        </Row>
      </div>
      <div>
        <h2 className={style.titleFirsSeparator}>Un mundo en decoración</h2>
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
