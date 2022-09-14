import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import Login from "../Login/Login";
import UserNavbar from "../UserNavbar/UserNavbar";
import CartPopup from "../CartPopup/CartPopup";
import { useSelector } from "react-redux";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function BasicExample() {
  const user = useSelector((state) => state.user);
  const [categories, setCategories] = useState(null);

  const getCategoriesFromApi = async () => {
    const response = await axios({
      url: "/categories/",
      method: "GET",
    });
    setCategories(response.data);
  };

  // eslint-disable-next-line
  useEffect(() => getCategoriesFromApi, []);

  return (
    <Navbar bg="light" sticky="top" expand="lg" className="px-lg-5">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className={style.logoNavbar}>
          Hack Design
        </Navbar.Brand>
        <img src="../../assets/img/logo.png" alt="" />
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mx-auto my-2 my-lg-0 justify-content-center">
            <Nav.Link as={Link} to="/">
              HOME
            </Nav.Link>
            <NavDropdown title="CATEGORIES">
              {categories &&
                categories.map((category) => {
                  return (
                    <NavDropdown.Item key={category.id} as={Link} to={"/category/" + category.slug}>
                      {category.name}
                    </NavDropdown.Item>
                  );
                })}
            </NavDropdown>
            <Nav.Link as={Link} to="#">
              OUR PROJECT
            </Nav.Link>
          </Nav>
          <div className="d-flex justify-content-center">
            <CartPopup />
            {user.token ? <UserNavbar /> : <Login />}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
