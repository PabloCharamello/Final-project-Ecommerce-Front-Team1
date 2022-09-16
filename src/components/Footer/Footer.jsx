import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";
import { SiFacebook } from "react-icons/si";
import { IoLogoInstagram } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <Container>
      <Row className={style.footerContainer}>
        <Col lg={3} md={6} xs={6}>
          <p className={style.hackDesignFooter}>Hack Design®</p>
          <p
            className={`${style.hackDesignParagraph} d-block text-decoration-none text-white mt-1`}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis eligendi officia
            eos assumenda maxime eveniet autem quo sequi iure iste.
          </p>
        </Col>
        <Col lg={3} md={6} xs={6}>
          <p className={style.footerTitles}>About Us</p>
          <Link
            to="#"
            className={`${style.footerLinkAbout} d-block text-decoration-none text-white mt-1`}
          >
            {"Our partners"}
          </Link>
          <Link
            to="#"
            className={`${style.footerLinkAbout} d-block text-decoration-none text-white mt-1`}
          >
            {"Associated Foundations"}
          </Link>
          <Link
            to="#"
            className={`${style.footerLinkAbout} d-block text-decoration-none text-white mt-1`}
          >
            {"Work with us"}
          </Link>
          <Link
            to="#"
            className={`${style.footerLinkAbout} d-block text-decoration-none text-white mt-1`}
          >
            {"Help & Contact"}
          </Link>
        </Col>
        <Col lg={3} md={6} xs={6}>
          <div className={style.footerTitles}>
            <p>Contact</p>
            <Link
              to="#"
              className={`${style.footerLinksContact} d-block text-decoration-none text-white mt-1`}
            >
              {"+598-2712 36 47"}
            </Link>
            <Link
              to="#"
              className={`${style.footerLinksContact} d-block text-decoration-none text-white mt-1`}
            >
              {"hackdesign@ha.dev"}
            </Link>
            <Link
              to="#"
              className={`${style.footerLinksContact} d-block text-decoration-none text-white mt-1`}
            >
              {"21 de Setiembre 3012 Montevideo"}
            </Link>
            <Link
              to="#"
              className={`${style.footerLinksContact} d-block text-decoration-none text-white mt-1`}
            ></Link>
          </div>
        </Col>
        <Col lg={3} md={6} xs={6}>
          <p className={style.footerTitles}>Social networks</p>
          <Link
            to="#"
            className={`${style.footerLinkSocialNet} d-block text-decoration-none text-white mt-1`}
          >
            <SiFacebook size="1.5rem" />
            {" Facebook"}
          </Link>
          <Link
            to="#"
            className={`${style.footerLinkSocialNet} d-block text-decoration-none text-white mt-1`}
          >
            <AiFillTwitterCircle size="1.75rem" />
            {" Twitter"}
          </Link>
          <Link
            to="#"
            className={`${style.footerLinkSocialNet} d-block text-decoration-none text-white mt-1`}
          >
            <FaLinkedin size="1.7rem" />
            {" LinkedIn"}
          </Link>
          <Link
            to="#"
            className={`${style.footerLinkSocialNet} d-block text-decoration-none text-white mt-1`}
          >
            <IoLogoInstagram size="2rem" />
            {"Instagram"}
          </Link>
        </Col>
        <hr />
        <p className="text-white">All rights reserved® 2022</p>
      </Row>
    </Container>
  );
}
