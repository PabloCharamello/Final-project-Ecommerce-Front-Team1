import Navbar from "../components/Navbar/Navbar";
import { Row, Col, Image, Container } from "react-bootstrap";
import style from "../styles/AboutOurProject.module.css";
import Footer from "../components/Footer/Footer";
import { TbBrandJavascript } from "react-icons/tb";
import { BiGitBranch } from "react-icons/bi";
import { SiRedux, SiExpress, SiMysql, SiSupabase } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { BsBootstrap } from "react-icons/bs";
import { FiTrello } from "react-icons/fi";
import { FaFigma } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";
import { TbBrandDiscord, TbBrandVercel } from "react-icons/tb";
import { useEffect } from "react";

export default function AboutOurProject() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={`${style.ourProject} d-flex flex-column justify-content-between`}>
        <Navbar />
        <Container fluid={"xs"} className="p-0">
          <div className={`${style.backgroundImageTech} py-5`}>
            <Container>
              <div className="mb-3">
                <h1 className="mb-5 fw-bold">WHAT IS HACK DESIGN?</h1>
                <p className={style.paragraphPresentation}>
                  Hack Design es un proyecto desarrollado por 3 estudiantes de un Bootcamp ultra
                  intensivo en Hack Academy realizado en un lapso de 3 semanas como proyecto final e
                  integrador donde se pusieron en práctica todos los conocimientos adquiridos
                  durante el período del curso ascendiendo a un total de más de 600 horas de
                  capacitación en 3 meses. Una oportunidad para aprender sobre el maravilloso mundo
                  del desarrollo web haciendo lo que más nos gusta... CODEAR!
                </p>
              </div>
              <div>
                <a
                  href="https://ha.dev/"
                  className="hackAcademyLnk text-black text-decoration-none fs-6 ms-5"
                >
                  <div className={`${style.haLink} text-start d-flex align-items-center mb-3`}>
                    <Image
                      src={require("../assets/img/ourProjectImages/hack.jpg")}
                      className="d-inline me-3"
                      width="40px"
                    />
                    <h2 className="text-start d-inline m-0">Hack Academy</h2>
                  </div>
                </a>
                <p className="text-start">
                  Hack academy es una institución que se fundó en 2016 en Montevideo, Uruguay
                  especializada en cursos de programación ideados para la preparación e inserción de
                  sus alumnos en el mundo laboral IT.
                </p>
              </div>
            </Container>
          </div>
          <Container className="mb-5 pb-5">
            <Row className={`mt-5 pt-5 g-5`}>
              <h1 className="fw-bold">PLANNING</h1>
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
              <Col lg={6} className="d-flex justify-content-center align-items-center ">
                <div>
                  <h3 className="text-start">1 - Design</h3>
                  <p className={style.paragraphMer}>
                    Queríamos buen contenido visual para nuestro ecommerce, por eso elegimos
                    muebles. No encontramos una página de referencia que nos convenciera para
                    replicar. Tomamos un camino que nos llevó el doble de trabajo con mayor riesgo,
                    seguir un template a medias, pero pudimos verle el lado positivo, como por
                    ejemplo desarrollar nuestras habilidades blandas.
                  </p>
                  <h3 className="text-start">2 - Entity-Relations Diagram</h3>
                  <p className={style.paragraphMer}>
                    El siguiente paso fue definir el modelo entidad-relacion, tomando decisiones
                    como que los productos de cada orden se guarden en formato JSON en lugar de ser
                    una relacion, separar los administradores de los usuarios, entre muchas otras
                    cosas.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className={`mt-3 g-5 pb-5 mb-5`}>
              <Col lg={6} className="d-flex justify-content-center align-items-center ps-lg-4">
                <div>
                  <h3 className="text-start">3 - Team Organization</h3>
                  <p className={style.paragraphMer}>
                    Para organizarnos decidimos usar Figma, permitiendonos hacer diagramas y ver el
                    gran esquema del proyecto. Despues utilizamos Trello para delinear, asignar y
                    seguir tareas individuales. Y Discord para la comunicación constante y pair
                    programming.
                  </p>
                  <h3 className="text-start">4 - Techonologies and Tools</h3>
                  <p className={style.paragraphMer}>
                    Cómo base de datos elegimos Mysql ya que entendíamos que se adaptaba a nuestro
                    modelo de applicación web, siendo además la elegida por el 46% de los
                    programdores según StackOverflow.
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
          </Container>
          <div className={`${style.backgroundImageTech} py-5 mt-5`}>
            <Container>
              <Row className="">
                <div className="mb-5">
                  <h1 className="fw-bold">TECHNOLOGIES</h1>
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
                  <h1 className="fw-bold">TOOLS</h1>
                </div>
                <Col lg={2} md={6} xs={6}>
                  <div className={style.tecnologiesUp}>
                    <FaFigma size="3rem" />
                    <p className="mb-0">Figma</p>
                  </div>
                </Col>
                <Col lg={2} md={6} xs={6}>
                  <div className={style.tecnologiesUp}>
                    <ImGithub size="3rem" />
                    <p className="mb-0">GitHub</p>
                  </div>
                </Col>
                <Col lg={2} md={6} xs={6}>
                  <div>
                    <FiTrello size="3rem" />
                    <p className="mb-0">Trello</p>
                  </div>
                </Col>
                <Col lg={2} md={6} xs={6}>
                  <div>
                    <SiSupabase size="3rem" />
                    <p className="mb-0">Supabase</p>
                  </div>
                </Col>
                <Col lg={2} md={6} xs={6}>
                  <div>
                    <TbBrandDiscord size="3rem" />
                    <p className="mb-0">Discord</p>
                  </div>
                </Col>
                <Col lg={2} md={6} xs={6}>
                  <div>
                    <TbBrandVercel size="3rem" />
                    <p className="mb-0">Vercel</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <Container>
            <Row className="d-flex justify-content-center mb-5 mt-5">
              <Col lg={12}>
                <div className="mt-5 mb-5">
                  <h1 className={`${style.titles} fw-bold`}>DEVELOPMENT TEAM</h1>
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
                  <div className="paragraphProfileNamesDiv">
                    <p className="mt-1 mb-1">Full Stack Developer Jr.</p>
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
                  <div className="paragraphProfileNamesDiv">
                    <p className="mt-1 mb-1">Full Stack Developer Jr.</p>
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
                  <div className="paragraphProfileNamesDiv">
                    <p className="mt-1 mb-1">Full Stack Developer Jr.</p>
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
          </Container>
        </Container>
      </div>
      <Footer />
    </>
  );
}
