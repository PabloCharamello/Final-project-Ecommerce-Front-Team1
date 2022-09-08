import React from "react";
import style from "./Product.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Row, Col, Image, Button } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Navbar />
      <Row>
        <Col lg={6}></Col>
        <Col lg={6}></Col>
        <Col lg={6}></Col>
        <Col lg={6}></Col>
        <Col lg={6}></Col>
        <Col lg={6}></Col>
        <Col lg={6}></Col>
        <Col lg={6}></Col>
      </Row>
      <Footer />
    </>
  );
}
