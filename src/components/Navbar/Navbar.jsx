import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import Login from "../Login/Login";
import UserNavbar from "../UserNavbar/UserNavbar";
import CartPopup from "../CartPopup/CartPopup";
import { useSelector } from "react-redux";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function BasicExample() {
  const user = useSelector((state) => state.user);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const getCategoriesFromApi = async () => {
      const response = await axios({
        url: "/categories/",
        method: "GET",
      });
      setCategories(response.data);
    };
    getCategoriesFromApi();
  }, []);
  return (
    <>
      <Navbar sticky="top" expand="lg" className={`${style.background} px-lg-5`}>
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className={style.logoNavbar}>
            Hack Design
          </Navbar.Brand>
          <img src="../../assets/img/logo.png" alt="" />
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="mx-auto my-2 my-lg-0 justify-content-center">
              <Nav.Link as={Link} to="/" className="fw-bold text-black">
                HOME
              </Nav.Link>
              <NavDropdown
                title={<span className="fw-bold text-black my-auto">CATEGORIES</span>}
                className="mx-5"
              >
                {categories &&
                  categories.map((category) => {
                    return (
                      <NavDropdown.Item
                        key={category.id}
                        as={Link}
                        to={"/category/" + category.slug}
                      >
                        {category.name}
                      </NavDropdown.Item>
                    );
                  })}
              </NavDropdown>
              <Nav.Link as={Link} to="/about-our-project" className="fw-bold text-black">
                OUR PROJECT
              </Nav.Link>
              {/* <Link className={style.aboutProjectDiv} as={Link} to="/about-our-project">
                ABOUT OUR PROJECT
              </Link> */}
            </Nav>
            <div className="d-flex justify-content-center">
              <CartPopup />
              {user.token ? <UserNavbar /> : <Login />}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BasicExample;
