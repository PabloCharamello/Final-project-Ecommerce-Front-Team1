import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Row, Col, Image } from "react-bootstrap";
import Footer from "../components/Footer/Footer";
import style from "../styles/chekOut.module.css";
import Form from "react-bootstrap/Form";

export default function ChekOut() {
  return (
    <Row>
      <Col lg={8} className={style.registerFormDiv}>
        <div className="">
          <h4 className="mt-5">Shipping information</h4>
        </div>

        <Form.Group className="mb-3">
          <div className={style.registerForm}>
            <div className="d-block">
              <Form.Label htmlFor="firstname">Name:</Form.Label>
            </div>
            <Form.Control
              className={style.registerForm}
              put
              htmlFOR="firstname"
              id="firstname"
              placeholder="Enter your name"
            />
            <Form.Label htmlFor="lastname">Lastname: </Form.Label>
            <Form.Control put htmlFOR="lastname" id="lastname" placeholder="Enter your lastname" />
          </div>
          <Form.Label className="mt-3 mb-3">Select document type</Form.Label>
          <Form.Select className="mb-3">
            <option>Select document type</option>
            <option>Passport </option>
            <option>CI</option>
            <option>DNI</option>
          </Form.Select>
          <Form.Label htmlFor="adress1">Adress 1:</Form.Label>
          <Form.Control put htmlFOR="adress1" id="adress1" placeholder="Enter your first adress" />
          <Form.Label htmlFor="adress2">Adress 2:</Form.Label>
          <Form.Control put htmlFOR="adress2" id="adress2" placeholder="Enter your second adress" />
          <Form.Label htmlFor="country">Country:</Form.Label>
          <Form.Control put htmlFOR="country" id="country" placeholder="Enter your country" />
          <Form.Label htmlFor="city">City:</Form.Label>
          <Form.Control put htmlFOR="city" id="city" placeholder="Enter your city" />
          <Form.Label htmlFor="zipCode">Zip-code:</Form.Label>
          <Form.Control put htmlFOR="zipCode" id="zipCode" placeholder="Enter your zipCode" />
        </Form.Group>
      </Col>
      <Col lg={4}></Col>
    </Row>
  );
}
