import Navbar from "../components/Navbar/Navbar";
import { Row, Col, Image } from "react-bootstrap";
import style from "../styles/AboutOurProyect.module.css";
import Footer from "../components/Footer/Footer";
import { TbBrandJavascript, TbH3 } from "react-icons/tb";
import { BiGitBranch } from "react-icons/bi";
import { SiRedux, SiExpress, SiMysql, SiSupabase } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { BsBootstrap } from "react-icons/bs";
import { FiTrello } from "react-icons/fi";
import { FaFigma } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";
import { TbBrandDiscord } from "react-icons/tb";
import hackDesignImage from "../assets/img/ourProjectImages/HackDsn1.jpg";
import { Animator, ScrollContainer, ScrollPage, MoveOut, Fade, batch } from "react-scroll-motion";

export default function AboutOurProject() {
  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <Row className="p-0">
          <Col className="g-0 p-0">
            <Image className={style.heroImage} fluid src={hackDesignImage} alt="presentation" />
            {/* <div className={style.heroParagraphDiv}>
              <p className={style.heroParagraph}>About our Proyect</p>
            </div> */}
          </Col>
        </Row>
        <div className="container">
          <ScrollContainer>
            <ScrollPage page={0}>
              <Animator animation={batch(MoveOut(-30, 500), Fade(0, 10))}>
                <Row className={`{style.divMer} `}>
                  <Col lg={6}>
                    <div>
                      <div>
                        <Image
                          // className={style.merImage}
                          fluid
                          src={require("../assets/img/ourProjectImages/webConstructionGrey.jpg")}
                          alt="presentation"
                        />
                      </div>
                    </div>
                  </Col>

                  <Col lg={6} className="d-flex justify-content-center align-items-center">
                    <div>
                      <h3 className={style.titleSection}>What is Hack Design?</h3>
                      <p className={style.paragraphPresentation}>
                        Hack Design es un proyecto desarrollado por 3 estudiantes de un Bootcamp
                        ultra intensivo en Hack Academy realizado en un lapso de 3 semanas como
                        proyecto final e integrador donde se pusieron en práctica todos los
                        conocimientos adquiridos durante el período del curso ascendiendo a un total
                        de más de 600 horas de capacitación en 3 meses. <br /> Una oportunidad para
                        aprender sobre el maravilloso mundo del desarrollo web haciendo lo que más
                        nos gusta... CODEAR!
                      </p>
                    </div>
                  </Col>
                </Row>
              </Animator>
            </ScrollPage>
          </ScrollContainer>
          <Row className={`{style.divMer}`}>
            <Col lg={6} className="">
              <div className="d-flex align-items-center justify-content-center">
                <Image
                  className={style.hackLogo}
                  fluid
                  src={require("../assets/img/ourProjectImages/hack.jpg")}
                  alt="hack logo"
                />
              </div>
            </Col>
            <Col lg={6} className="d-flex justify-content-center align-items-center">
              <div>
                <h3 className="text-start">Hack Academy</h3>
                <p className="text-start">
                  Hack academy es una institución que se fundó en 2016 situada en Montevideo-Uruguay
                  donde se brindan capacitaciones ideadas para la preparación e inserción de sus
                  alumnos en el mundo del desarrollo.
                </p>
                <a
                  href="https://ha.dev/"
                  className="hackAcademyLnk flex-start d-flex text-decoration-none fs-6"
                >
                  ha.dev
                </a>
              </div>
            </Col>
          </Row>

          <Row className={`{style.divMer} mt-5 pt-2`}>
            <Col lg={6} className="d-flex justify-content-center align-items-center">
              <div>
                <h3 className="text-start">Entity-Relations Diagram</h3>
                <p className={style.paragraphMer}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque fuga ex tempore
                  odio minus laboriosam optio. Tempora accusamus asperiores officia, molestiae
                  facere debitis illum optio?
                </p>
                <h3 className="text-start">Planning and Strategy</h3>
                <p className={style.paragraphMer}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque fuga ex tempore
                  odio minus laboriosam optio. Tempora accusamus asperiores officia, molestiae
                  facere debitis illum optio?
                </p>
              </div>
            </Col>
            <Col lg={6} className="d-flex justify-content-center align-items-center">
              <div>
                <Image
                  className={style.merImage}
                  fluid
                  src={require("../assets/img/ourProjectImages/mer.png")}
                  alt="Mer"
                />
              </div>
            </Col>
          </Row>
          <Row className={`{style.divMer} mt-5 pt-5`}>
            <Col lg={6} className="d-flex justify-content-center align-items-center">
              <div>
                <Image
                  className={style.merImage}
                  fluid
                  src={require("../assets/img/ourProjectImages/mer.png")}
                  alt="Mer"
                />
              </div>
            </Col>
            <Col lg={6} className="d-flex justify-content-center align-items-center">
              <div>
                <h3 className="text-start">Team Organization</h3>
                <p className={style.paragraphMer}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque fuga ex tempore
                  odio minus laboriosam optio. Tempora accusamus asperiores officia, molestiae
                  facere debitis illum optio?
                </p>
                <h3 className="text-start">????</h3>
                <p className={style.paragraphMer}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque fuga ex tempore
                  odio minus laboriosam optio. Tempora accusamus asperiores officia, molestiae
                  facere debitis illum optio?
                </p>
              </div>
            </Col>
          </Row>
          {/* <Row className={`{style.divMer}`}>
            <Col lg={12}>
              <p className={style.titleSection}>Un toque de color...</p>
              <div className="mt-2">
                <Image
                  className={style.pcColorful}
                  fluid
                  src={require("../assets/img/ourProjectImages/pcConTransparencia1.jpg")}
                  alt="presentation image"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div>
                <p className={style.paragraphColorSec}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque fuga ex tempore
                  odio minus laboriosam optio. Tempora accusamus asperiores officia, molestiae
                  facere debitis illum optio? Quisquam provident eius quam a similique ipsum cumque,
                  ut explicabo optio exercitationem facere dolore velit? Ipsa doloribus quis
                  necessitatibus! Ex nihil aliquid nostrum consequatur asperiores aspernatur a sed
                  accusantium molestiae, laborum reprehenderit sit aperiam maxime! Doloremque, omnis
                  similique dignissimos pariatur quasi sed harum ad mollitia blanditiis distinctio
                  ut veritatis esse tempora nam impedit quis? Saepe?
                </p>
              </div>
            </Col>
          </Row> */}
          <div className="container">
            <Row className="mt-5">
              <div className="mb-5">
                <h3>Technologies</h3>
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
            <Row className="mt-5 d-flex justify-content-center">
              <div className="mb-5">
                <h3>Tools</h3>
              </div>
              <Col lg={2} md={6} xs={6}>
                <div className={style.tecnologiesUp}>
                  <FaFigma size="3rem" />
                  <p>Figma</p>
                </div>
              </Col>
              <Col lg={2} md={6} xs={6}>
                <div className={style.tecnologiesUp}>
                  <ImGithub size="3rem" />
                  <p>GitHub</p>
                </div>
              </Col>
              <Col lg={2} md={6} xs={6}>
                <div>
                  <FiTrello size="3rem" />
                  <p>Trello</p>
                </div>
              </Col>
              <Col lg={2} md={6} xs={6}>
                <div>
                  <SiSupabase size="3rem" />
                  <p>Supabase</p>
                </div>
              </Col>
              <Col lg={2} md={6} xs={6}>
                <div>
                  <TbBrandDiscord size="3rem" />
                  <p>Discord</p>
                </div>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center mb-5 mt-5">
              <Col lg={12}>
                <div className="mt-5 mb-5">
                  <h2 className={style.developerTeamTitle}>Development Team</h2>
                </div>
              </Col>
              <Col lg={3} md={6}>
                <div className={style.ourPhotosDiv}>
                  <img
                    className={style.ourPhotos}
                    fluid
                    src={require("../assets/img/ourPhotos/sebastian.jpeg")}
                    alt="presentation"
                  />
                  <div className="paragraphProfileNamesDiv">
                    <p className={style.ourNames}>Sebastián Guadalupe</p>
                  </div>
                </div>
                <div>
                  <a
                    className={style.profilesLinks}
                    href="https://www.linkedin.com/in/sebastianguadalupe/"
                  >
                    <AiOutlineLinkedin className="me-1" size="1.47rem" />
                    LinkedIn
                  </a>
                  <a href="https://github.com/SebastianGuadalupe" className={style.profilesLinks}>
                    <ImGithub className="me-1" size="1.3rem" />
                    GitHub
                  </a>
                </div>
              </Col>
              <Col lg={3} md={6}>
                <div className={style.ourPhotosDiv}>
                  <img
                    className={style.ourPhotos}
                    fluid
                    src={require("../assets/img/ourPhotos/pablo.png")}
                    alt="presentation"
                  />
                  <div className="paragraphProfileNamesDiv">
                    <p className={style.ourNames}>Pablo Charamello</p>
                  </div>
                </div>
                <div>
                  <a
                    className={style.profilesLinks}
                    href="https://www.linkedin.com/in/pablocharamello"
                  >
                    <AiOutlineLinkedin className="me-1" size="1.47rem" />
                    LinkedIn
                  </a>
                  <a
                    className={style.profilesLinks}
                    href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BjFsVoSGdT6C5yWXzUHNpuw%3D%3D"
                  >
                    <ImGithub className="me-1" size="1.3rem" />
                    GitHub
                  </a>
                </div>
              </Col>
              <Col lg={3} md={6}>
                <div className={style.ourPhotosDiv}>
                  <img
                    className={style.ourPhotos}
                    fluid
                    src={require("../assets/img/ourPhotos/juan.jpeg")}
                    alt="presentation"
                  />
                  <div className="paragraphProfileNamesDiv">
                    <p className={style.ourNames}>Juan Zubillaga</p>
                  </div>
                </div>
                <div>
                  <a className={style.profilesLinks} href="https://github.com/JuanZubillaga">
                    <AiOutlineLinkedin size="1.47rem" className="me-1" />
                    LinkedIn
                  </a>
                  <a className={style.profilesLinks} href="https://github.com/JuanZubillaga">
                    <ImGithub className="me-1" size="1.3rem" />
                    GitHub
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
