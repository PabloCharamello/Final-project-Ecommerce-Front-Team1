import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import Login from "../Login/Login";
import CartPopup from "../CartPopup/CartPopup";

export default function Navbar() {
  return (
    <div className={style.navbar}>
      <div className="px-3">
        <Row className="m-1 p-1">
          <Col lg={3} className={style.logo}>
            <Link to="/" className="text-decoration-none text-black">
              <h1 className={style.logo}>Hack Design</h1>
            </Link>
          </Col>
          <Col lg={6}>
            <div>
              <ul className="d-flex justify-content-center align-items-center m-0 p-0">
                <Link to="/" className="text-decoration-none text-black">
                  <li className={style.navLinks}>HOME</li>
                </Link>
                <Link to="#" className="text-decoration-none text-black">
                  <li className={style.navLinks}>CATEGORIES</li>
                </Link>
                <Link to="#" className="text-decoration-none text-black">
                  <li className={style.navLinks}>OUR PROJECT</li>
                </Link>
              </ul>
            </div>
          </Col>
          <Col lg={3} className="d-flex justify-content-end align-items-center">
            <CartPopup />
            <Login />
          </Col>
        </Row>
      </div>
    </div>
  );
}
