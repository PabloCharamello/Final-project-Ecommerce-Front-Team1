import Navbar from "../components/Navbar/Navbar";
import { Row, Col, Image } from "react-bootstrap";
import style from "../styles/AboutOurProyect.module.css";
import Footer from "../components/Footer/Footer";
import { TbBrandJavascript } from "react-icons/tb";
import { BiGitBranch } from "react-icons/bi";
import { SiRedux, SiExpress, SiMysql } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { BsBootstrap } from "react-icons/bs";
import { FiTrello } from "react-icons/fi";
import { FaFigma } from "react-icons/fa";

export default function AboutOurProject() {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-0 m-0">
        <Row className="p-0">
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
          <Col lg={6} className={style.divMer}>
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
        <Row>
          <Col lg={6} className={style.divMer}>
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
        <Row className="mt-5">
          <div>
            <h3>Tecnologías</h3>
          </div>
          <Col lg={3} md={6} xs={6}>
            <div className={style.tecnologiesUp}>
              <SiMysql size="3rem" />
              <p>MySQL</p>
            </div>
            <div>
              <DiNodejs size="3rem" />
              <p>NodeJS</p>
            </div>
          </Col>
          <Col lg={3} md={6} xs={6}>
            <div className={style.tecnologiesUp}>
              <GrReactjs size="3rem" />
              <p>React.js</p>
            </div>
            <div>
              <SiExpress size="3rem" />
              <p>Express.js</p>
            </div>
          </Col>
          <Col lg={3} md={6} xs={6}>
            <div className={style.tecnologiesUp}>
              <BiGitBranch size="3rem" />
              <p>Git</p>
            </div>
            <div>
              <SiRedux size="3rem" />
              <p>Redux + RTK</p>
            </div>
          </Col>
          <Col lg={3} md={6} xs={6} className="p-0 m-0">
            <div className={style.tecnologiesUp}>
              <TbBrandJavascript size="3rem" />
              <p>JavaScript</p>
            </div>
            <div>
              <BsBootstrap size="3rem" />
              <p>Bootstrap</p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <div>
            <h3>Herramientas</h3>
          </div>
          <Col lg={3} md={6} xs={6}>
            <div className={style.tecnologiesUp}>
              <SiMysql size="3rem" />
              <p>GitHub</p>
            </div>
            <div>
              <FiTrello size="3rem" />
              <p>Trello</p>
            </div>
          </Col>
          <Col lg={3} md={6} xs={6}>
            <div className={style.tecnologiesUp}>
              <FaFigma size="3rem" />
              <p>Figma</p>
            </div>
            <div>
              <SiExpress size="3rem" />
              <p>Express.js</p>
            </div>
          </Col>
          <Col lg={3} md={6} xs={6}>
            <div className={style.tecnologiesUp}>
              <BiGitBranch size="3rem" />
              <p>Git</p>
            </div>
            <div>
              <SiRedux size="3rem" />
              <p>Redux + RTK</p>
            </div>
          </Col>
          <Col lg={3} md={6} xs={6} className="p-0 m-0">
            <div className={style.tecnologiesUp}>
              <TbBrandJavascript size="3rem" />
              <p>JavaScript</p>
            </div>
            <div>
              <BsBootstrap size="3rem" />
              <p>Bootstrap</p>
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
