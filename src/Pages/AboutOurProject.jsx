import Navbar from "../components/Navbar/Navbar";
import { Row, Col, Image, Container } from "react-bootstrap";
import style from "../styles/AboutOurProyect.module.css";
import Footer from "../components/Footer/Footer";

export default function AboutOurProject() {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-0 m-0 g-0">
        <Row>
          <Col className="g-0 p-0">
            <div className={style.heroDivImage}>
              <Image
                className={style.heroImage}
                fluid
                src="https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw46f7c3f9/images/productsets/1544033.jpg?sw=2000"
                alt="presentation image"
              />
            </div>
            <div className={style.heroParagraphDiv}>
              <p className={style.heroParagraph}>About our Proyect</p>
            </div>
          </Col>
        </Row>

        <Row className={`{style.divMer} g-0 p-0`}>
          <Col lg={6} className={`{style.leftColMer} p-0 g-0`}>
            <div>
              <div>
                <Image
                  className={style.merImage}
                  fluid
                  src="https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw46f7c3f9/images/productsets/1544033.jpg?sw=2000"
                  alt="presentation image"
                />
              </div>
            </div>
          </Col>
          <Col lg={6} className="p-0 g-0">
            <div>
              <p className={style.paragraphMer}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque fuga ex tempore
                odio minus laboriosam optio. Tempora accusamus asperiores officia, molestiae facere
                debitis illum optio? Quisquam provident eius quam a similique ipsum cumque, ut
                explicabo optio exercitationem facere dolore velit? Ipsa doloribus quis
                necessitatibus! Ex nihil aliquid nostrum consequatur asperiores aspernatur a sed
                accusantium molestiae, laborum reprehenderit sit aperiam maxime! Doloremque, omnis
                similique dignissimos pariatur quasi sed harum ad mollitia blanditiis distinctio ut
                veritatis esse tempora nam impedit quis? Saepe?
              </p>
            </div>
          </Col>
        </Row>
        <Row className={style.divMer}>
          <Col lg={6}>
            <div>
              <p className={style.paragraphMer}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque fuga ex tempore
                odio minus laboriosam optio. Tempora accusamus asperiores officia, molestiae facere
                debitis illum optio? Quisquam provident eius quam a similique ipsum cumque, ut
                explicabo optio exercitationem facere dolore velit? Ipsa doloribus quis
                necessitatibus! Ex nihil aliquid nostrum consequatur asperiores aspernatur a sed
                accusantium molestiae, laborum reprehenderit sit aperiam maxime! Doloremque, omnis
                similique dignissimos pariatur quasi sed harum ad mollitia blanditiis distinctio ut
                veritatis esse tempora nam impedit quis? Saepe?
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div>
              <div>
                <Image
                  className={style.merImage}
                  fluid
                  src="https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw46f7c3f9/images/productsets/1544033.jpg?sw=2000"
                  alt="presentation image"
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <div>
            <h3>Tecnologías</h3>
          </div>
          <Col lg={3}>
            <div className={style.tecnologiesUp}>
              <p>MySQL</p>
              <p>NodeJS</p>
            </div>
          </Col>
          <Col lg={3}>
            <div>
              <p>React.js</p>
              <p>Express.js</p>
            </div>
          </Col>
          <Col lg={3}>
            <div className={style.tecnologiesUp}>
              <p>GitHub</p>
              <p>NodeJS</p>
            </div>
          </Col>
          <Col lg={3}>
            <div>
              <p>JavaScrip</p>
              <p>Express.js</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <h2>Nosotros</h2>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
}
