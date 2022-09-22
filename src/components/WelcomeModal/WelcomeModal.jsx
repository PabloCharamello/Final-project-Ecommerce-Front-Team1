import axios from "axios";
import { useState } from "react";
import { Button, Col, Modal, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function WelcomeModal() {
  const [show, setShow] = useState(true);
  const [isReseting, setIsReseting] = useState(false);

  const handleClose = () => setShow(false);
  const handleReset = async () => {
    setIsReseting(true);
    try {
      await axios({
        url: "/database/reset",
        method: "POST",
      });
      toast.success("Database was reset!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.log(error);
    }
    setIsReseting(false);
  };
  return (
    <Modal size="lg" show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
      <Modal.Header closeButton>
        <Modal.Title>Hack Design</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Welcome to our e-commerce website! Hack Design was created as the final project of Hack
          Academy's Coding Bootcamp. It was developed in 3 weeks by 3 students.
        </p>
        <Row>
          <h4>Testing credentials:</h4>
          <Col sm={6}>
            <h5>Customer:</h5>
            <p>
              <strong>Email:</strong> user@user.com
            </p>
            <p>
              <strong>Password:</strong> user
            </p>
          </Col>
          <Col sm={6}>
            <h5>Admin:</h5>
            <p>
              <strong>Email:</strong> admin@admin
            </p>
            <p>
              <strong>Password:</strong> admin
            </p>
          </Col>
          <h4>Important note:</h4>
          <p>
            For a better experience, we recommend resetting the database before navigating the
            website.
          </p>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => handleReset()}>
          {isReseting && <Spinner animation="border" size="sm" className="me-2" />}
          {isReseting ? "Resetting..." : "Reset Database"}
        </Button>
        <Link to="/about-our-project">
          <Button variant="primary" onClick={handleClose}>
            About our Project
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}
