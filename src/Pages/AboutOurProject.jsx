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

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

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
              <div data-aos="fade-up">
                <h1 className="mb-5 fw-bold">WHAT IS HACK DESIGN?</h1>
                <p className={style.paragraphPresentation}>
                  Hack Design is a project developed by 3 students from an ultra intensive Bootcamp
                  at Hack Academy. It was created over a period of three weeks as the final and
                  integrated project where all of the knowledge obtained during the course was put
                  into practice, adding up to more than 600 training hours in 3 months. It has been
                  an opportunity to learn about the phenomenal world of web development doing what
                  we love the most…CODING
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
                  Hack Academy is an institution founded in 2016, in Montevideo Uruguay, where they
                  train individuals for the preparation and insertion in the world of development.
                </p>
              </div>
            </Container>
          </div>
          <Container className="mb-5 pb-5">
            <Row className={`mt-5 pt-5 g-5`}>
              <h1 className="fw-bold">PLANNING</h1>
              <Col
                lg={6}
                className="d-flex justify-content-center align-items-center"
                data-aos="fade-right"
              >
                <div>
                  <Image
                    className={style.merImage}
                    fluid
                    src={require("../assets/img/ourProjectImages/erd.png")}
                    alt="Mer"
                  />
                </div>
              </Col>
              <Col lg={6} className="d-flex justify-content-center align-items-center ">
                <div>
                  <h3 className="text-start">1 - Design</h3>
                  <p className={style.paragraphMer}>
                    We desired an excellent visual content for our ecommerce, so we decided to
                    choose furniture. Due to the fact that we could not come across a reference page
                    that convinced us completely in order to replicate, we faced a risky and
                    challenging path using only a half-baked template. However, this has allowed us
                    to gain and develop our soft skills.
                  </p>
                  <h3 className="text-start">2 - Entity-Relationship Diagram</h3>
                  <p className={style.paragraphMer}>
                    The following step was to define the entity-relationship model, taking into
                    account certain factors such as saving the products of each order in JSON format
                    instead of it being connected, separing administrators from the users, amongst
                    others.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className={`mt-3 g-5 pb-5 mb-5`}>
              <Col lg={6} className="d-flex justify-content-center align-items-center ps-lg-4">
                <div>
                  <h3 className="text-start">3 - Team Organization</h3>
                  <p className={style.paragraphMer}>
                    In order to organize our ideas, we started off by using Figma which allowed us
                    to create the diagrams and visualize the grand scheme of the project. Next, we
                    used Trello to outline, assign and track each other's tasks. Finally, Discord
                    was the platform we used for constant communication and pair programming.
                  </p>
                  <h3 className="text-start">4 - Techonologies and Tools</h3>
                  <p className={style.paragraphMer}>
                    As a database we chose Mysql, since we understood that it adapted to our
                    application web model and was chosen by 46% of the programmers according to
                    StackOverflow.
                  </p>
                </div>
              </Col>
              <Col lg={6} className="d-flex justify-content-center align-items-center">
                <div
                  className="mb-3"
                  data-aos="fade-left"
                  data-aos-easing="ease-in-out"
                  data-aos-anchor-placement="top-center"
                >
                  <Image
                    className={style.merImage}
                    fluid
                    src={require("../assets/img/ourProjectImages/fsd.png")}
                    alt="Mer"
                  />
                </div>
              </Col>
            </Row>
          </Container>
          <div className={`${style.backgroundImageTech} py-5 mt-5`}>
            <Container>
              <Row
                className="mb-3"
                data-aos="fade-left"
                data-aos-easing="ease-in-out"
                data-aos-anchor-placement="top-center"
              >
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

                <div className={style.profileLinksDiv}>
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
                <div className={style.profileLinksDiv}>
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
                <div className={style.profileLinksDiv}>
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
