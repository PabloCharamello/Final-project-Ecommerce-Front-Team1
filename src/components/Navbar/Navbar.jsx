import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import Login from "../Login/Login";
import CartPopup from "../CartPopup/CartPopup";
import { useSelector, useDispatch } from "react-redux";
import { unsetUser } from "../../redux/user/userSlice";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(unsetUser());
  };

  return (
    <Navbar bg="light" expand="lg" className={style.navbar}>
      <Container>
        <Col lg={3}>
          <Link to="/" className="text-decoration-none text-black">
            <h1 className={style.logo}>Hack Design</h1>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Col>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={style.navLinkGeneral}>
            {/* <div className={style.divUsername}>
              <Button as={Link} to="#" className={style.logoutNav} onClick={handleLogout}>
              LOGOUT
              </Button>
              <p className={style.usernameNav}>{username}</p>
              </div>
              <div className={style.divUsername}>
              <Button as={Link} to="#" className={style.logoutNav} onClick={handleLogout}>
              LOGOUT
              </Button>
              <p className={style.usernameNav}>{username}</p>
            </div> */}
            <Col lg={6}>
              <ul className={style.ulLinks}>
                <Link to="/" className="text-decoration-none text-black">
                  <li className={style.navLinks}>HOME</li>
                </Link>
                <Link to="#" className="text-decoration-none text-black">
                  <li className={style.navLinks}>CATEGORIES</li>
                </Link>
                <Link to="#" className="text-decoration-none text-black">
                  <li className={style.navLinks}>OUR PROJECT</li>
                </Link>
                <Col lg={3} className="d-flex justify-content-end align-items-center mx-5">
                  <CartPopup />
                  <Login />
                </Col>
              </ul>
            </Col>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

// export default function Navbar() {
//   const dispatch = useDispatch();
//   const { username } = useSelector((state) => state.user);

//   const handleLogout = () => {
//     dispatch(unsetUser());
//   };

//   return (
//     <Navbar>
//       <div className={style.navbar}>
//         <div className="px-3">
//           <Row className="m-1 p-1">
//             <Col lg={3} className={style.logo}>
//               <div className={style.divUsername}>
//                 <Button as={Link} to="#" className={style.logoutNav} onClick={handleLogout}>
//                   LOGOUT
//                 </Button>
//                 <p className={style.usernameNav}>{username}</p>
//               </div>
//               <Link to="/" className="text-decoration-none text-black">
//                 <h1 className={style.logo}>Hack Design</h1>
//               </Link>
//             </Col>
//             <Col lg={6}>
//               <div>
//                 <ul className="d-flex justify-content-center align-items-center m-0 p-0">
//                   <Link to="/" className="text-decoration-none text-black">
//                     <li className={style.navLinks}>HOME</li>
//                   </Link>
//                   <Link to="#" className="text-decoration-none text-black">
//                     <li className={style.navLinks}>CATEGORIES</li>
//                   </Link>
//                   <Link to="#" className="text-decoration-none text-black">
//                     <li className={style.navLinks}>OUR PROJECT</li>
//                   </Link>
//                 </ul>
//               </div>
//             </Col>
//             <Col lg={3} className="d-flex justify-content-end align-items-center">
//               <CartPopup />
//               <Login />
//             </Col>
//           </Row>
//         </div>
//       </div>
//     </Navbar>
//   );
// }
