import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import Login from "../Login/Login";
import CartPopup from "../CartPopup/CartPopup";

export default function Navbar() {
  return (
    <Row className="m-1 p-1">
      <Col lg={3} className={style.logo}>
        <h1 className={style.logo}>Hack Design</h1>
      </Col>
      <Col lg={6}>
        <div>
          <ul className="d-flex justify-content-center align-items-center m-0">
            <li className={style.navLinks}>HOME</li>
            <li className={style.navLinks}>CATEGORIES</li>
            <li className={style.navLinks}>ABOUT OUR PROJECT</li>
          </ul>
        </div>
      </Col>
      <Col lg={3} className="d-flex justify-content-end align-items-center">
        <CartPopup />
        <Login />
      </Col>
    </Row>
  );
}

// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

// function CollapsibleExample() {
//   return (
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//       <Container>
//         <Navbar.Brand href="#home">HACK DESIGN</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">HOME</Nav.Link>
//             <Nav.Link href="#about">ABOUT OUR PROJECT</Nav.Link>
//             <NavDropdown title="CATEGORIES" id="collasible-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Sillones</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">Mesas</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Sillas</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.4">Camas</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.5">Iluminacion</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.6">Oficina</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//           <Nav>
//             <Nav.Link href="#cart">CART</Nav.Link>
//             <Nav.Link eventKey={2} href="#memes">
//               LOGIN
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default CollapsibleExample;
