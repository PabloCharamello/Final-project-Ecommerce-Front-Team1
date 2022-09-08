import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    <Row className="m-1 p-1">
      <Col lg={4} className={style.logo}>
        <h1>Hack Design</h1>
      </Col>
      <Col lg={4}>
        <div className="d-flex">
          <span className={style.home}>HOME</span>
          <span className={style.categories}>CATEGORIES</span>
          <span className={style.aboutOurProject}>ABOUT OUR PROJECT</span>
        </div>
      </Col>
      <Col lg={4} className="">
        <div className={style.rightColNavbar}>
          <FaShoppingCart />
          <FaUserAlt />
        </div>
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
