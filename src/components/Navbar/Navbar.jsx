import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import Login from "../Login/Login";
import CartPopup from "../CartPopup/CartPopup";
import { useSelector, useDispatch } from "react-redux";
import { unsetUser } from "../../redux/user/userSlice";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function BasicExample() {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(unsetUser());
  };

  return (
    <Navbar bg="light" sticky="top" expand="lg" className="px-lg-5">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="fw-bold ">
          Hack Design
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mx-auto my-2 my-lg-0 justify-content-center">
            <Nav.Link as={Link} to="/">
              HOME
            </Nav.Link>
            <NavDropdown title="CATEGORIES">
              <NavDropdown.Item as={Link} to="/category/1">
                Sofa chairs
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/1">
                Tables
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/1">
                Sofas
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/1">
                Beds
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/1">
                Lighting
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/1">
                Office
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="#" disabled>
              OUR PROJECT
            </Nav.Link>
          </Nav>
          <div className="d-flex justify-content-center">
            <CartPopup />
            <Login />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
