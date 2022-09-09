import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Row, Col } from "react-bootstrap";
import Footer from "../components/Footer/Footer";
import style from "../styles/ShippingInfo.module.css";
import Form from "react-bootstrap/Form";
import OrderSummary from "../components/OrderSummary/OrderSummary";

export default function ShippingInfo() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Row className="m-0 g-0 p-0">
          <Col lg={8} className={style.registerFormDiv}>
            <div className="">
              <h4 className="">Shipping information</h4>
            </div>

            <Form.Group className="mb-3">
              <div className={style.registerForm}>
                <div>
                  <Form.Label className="m-0 mb-0 mx-1 " htmlFor="firstname">
                    Name:
                  </Form.Label>
                </div>
                <Form.Control
                  className={` {style.registerForm} placeholder-wave`}
                  put
                  htmlFOR="firstname"
                  id="firstname"
                  placeholder="Enter your name"
                />
                <div>
                  <Form.Label className="mx-1 mb-0" htmlFor="lastname">
                    Lastname:{" "}
                  </Form.Label>
                </div>
                <Form.Control
                  className="placeholder-wave"
                  put
                  htmlFOR="lastname"
                  id="lastname"
                  placeholder="Enter your lastname"
                />
              </div>
              <Form.Label className=" mb-0">Select document type</Form.Label>
              <Form.Select className="mb-0 mt-1 placeholder-wave registerForm fomrOption">
                <option>Select document type</option>
                <option>Passport </option>
                <option>CI</option>
                <option>DNI</option>
              </Form.Select>
              <Form.Label className="mt-1 mb-0" htmlFor="adress1">
                Adress 1:
              </Form.Label>
              <Form.Control
                className="mb-1 placeholder-wave"
                put
                htmlFOR="adress1"
                id="adress1"
                placeholder="Enter your first adress"
              />
              <Form.Label className="mt-1 mb-0" htmlFor="adress2">
                Adress 2:
              </Form.Label>
              <Form.Control
                className="mb-1 placeholder-wave"
                put
                htmlFOR="adress2"
                id="adress2"
                placeholder="Enter your second adress"
              />
              <Form.Label className="mb-0" htmlFor="country">
                Country:
              </Form.Label>
              <Form.Control
                className="placeholder-wave"
                put
                htmlFOR="country"
                id="country"
                placeholder="Enter your country"
              />
              <Form.Label className="mt-1 mb-0" htmlFor="city">
                City:
              </Form.Label>
              <Form.Control
                className="placeholder-wave"
                put
                htmlFOR="city"
                id="city"
                placeholder="Enter your city"
              />
              <Form.Label className="mt-1 mb-0" htmlFor="zipCode">
                Zip-code:
              </Form.Label>
              <Form.Control
                className="placeholder-wave"
                put
                htmlFOR="zipCode"
                id="zipCode"
                placeholder="Enter your zipCode"
              />
              <Form.Label className="mt-1 mb-0" htmlFor="phone">
                Phone:
              </Form.Label>
              <Form.Control
                className="placeholder-wave"
                put
                htmlFOR="Phone"
                id="Phone"
                placeholder="Enter your phone"
              />
            </Form.Group>
          </Col>
          <Col lg={4}>
            <OrderSummary />
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
}
