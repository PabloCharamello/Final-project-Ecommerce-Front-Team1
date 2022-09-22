import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";
import { ToastContainer, toast } from "react-toastify";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineInstagram,
} from "react-icons/ai";

const warnFunctionality = () => {
  toast.warn("This functionality was out of the scope of the project!", {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default function Footer() {
  return (
    <Container fluid className={style.footerContainer}>
      <Container>
        <Row>
          <Col lg={3} md={6} xs={12}>
            <div className="d-flex flex-column align-items-start">
              <p className={style.hackDesignFooter}>Hack Design®</p>
              <p
                className={`${style.hackDesignParagraph} d-block text-decoration-none text-white mt-1 w-75`}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis eligendi
                officia eos assumenda maxime eveniet autem quo sequi iure iste.
              </p>
            </div>
          </Col>
          <Col lg={3} md={6} xs={12}>
            <div className="d-flex flex-column align-items-center justify-content-center  ">
              <div>
                <p className={style.footerTitles}>About Us</p>
                <Link
                  to="#"
                  onClick={warnFunctionality}
                  className={`${style.footerLinkAbout} d-block text-decoration-none text-white mt-1`}
                >
                  {"Our partners"}
                </Link>
                <Link
                  to="#"
                  onClick={warnFunctionality}
                  className={`${style.footerLinkAbout} d-block text-decoration-none text-white mt-1`}
                >
                  {"Associated Foundations"}
                </Link>
                <Link
                  to="#"
                  onClick={warnFunctionality}
                  className={`${style.footerLinkAbout} d-block text-decoration-none text-white mt-1`}
                >
                  {"Work with us"}
                </Link>
                <Link
                  to="#"
                  onClick={warnFunctionality}
                  className={`${style.footerLinkAbout} d-block text-decoration-none text-white mt-1`}
                >
                  {"Help & Contact"}
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} xs={12}>
            <div className="d-flex flex-column align-items-center">
              <div className={style.footerTitles}>
                <p>Contact</p>
                <Link
                  to="#"
                  onClick={warnFunctionality}
                  className={`${style.footerLinksContact} d-block text-decoration-none text-white mt-1`}
                >
                  {"+598-2712 36 47"}
                </Link>
                <Link
                  to="#"
                  onClick={warnFunctionality}
                  className={`${style.footerLinksContact} d-block text-decoration-none text-white mt-1`}
                >
                  {"hackdesign@ha.dev"}
                </Link>
                <Link
                  to="#"
                  onClick={warnFunctionality}
                  className={`${style.footerLinksContact} d-block text-decoration-none text-white mt-1`}
                >
                  {"Av. Italia 3012 "}
                  <br />
                  {"Montevideo, Uruguay"}
                </Link>
                <Link
                  to="#"
                  onClick={warnFunctionality}
                  className={`${style.footerLinksContact} d-block text-decoration-none text-white mt-1`}
                ></Link>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} xs={12}>
            <div className="d-flex flex-column align-items-center">
              <p className={style.footerTitles}>Social networks</p>
              <div className="d-flex flex-column justify-content-start align-items-start">
                <Link
                  to="#"
                  onClick={warnFunctionality}
                  className={`${style.footerLinkSocialNet} d-block text-decoration-none text-white mt-1`}
                >
                  <AiFillFacebook size="1.75rem" />
                  {" Facebook"}
                </Link>
                <Link
                  to="#"
                  onClick={warnFunctionality}
                  className={`${style.footerLinkSocialNet} d-block text-decoration-none text-white mt-1`}
                >
                  <AiFillTwitterCircle size="1.75rem" />
                  {" Twitter"}
                </Link>
                <Link
                  to="#"
                  onClick={warnFunctionality}
                  className={`${style.footerLinkSocialNet} d-block text-decoration-none text-white mt-1`}
                >
                  <AiFillLinkedin size="1.75rem" />
                  {" LinkedIn"}
                </Link>
                <Link
                  to="#"
                  onClick={warnFunctionality}
                  className={`${style.footerLinkSocialNet} d-block text-decoration-none text-white mt-1`}
                >
                  <AiOutlineInstagram size="1.75rem" />
                  {" Instagram"}
                </Link>
              </div>
            </div>
          </Col>
          <hr />
          <p className={style.allRightsReserved}>All rights reserved® 2022</p>
        </Row>
      </Container>
      <ToastContainer />
    </Container>
  );
}
