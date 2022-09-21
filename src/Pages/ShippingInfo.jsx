import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Row, Col, Button } from "react-bootstrap";
import Footer from "../components/Footer/Footer";
import style from "../styles/ShippingInfo.module.css";
import Form from "react-bootstrap/Form";
import OrderSummary from "../components/OrderSummary/OrderSummary";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ShippingInfo() {
  const [addresses, setAddresses] = useState(null);
  const [address, setAddress] = useState(-1);
  const [addressData, setAddressData] = useState(null);

  // Inputs
  const [addressName, setAddressName] = useState("");
  const [street, setStreet] = useState("");
  const [corner, setCorner] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");

  const getAddressFromApi = async (id) => {
    const response = await axios({
      url: "/address/" + id,
      method: "GET",
    });
    setAddressData(response.data);
  };

  const handleAddressChange = (e) => {
    const value = e.target.value;
    setAddress(value);
    if (parseInt(value) === -1) {
      return;
    }
    getAddressFromApi(value);
  };

  const handleNewAddress = async (e) => {
    e.preventDefault();
    const data = {
      name: addressName,
      street,
      corner,
      zipcode,
      city,
      state,
      country,
      phone,
    };
    try {
      const response = await axios({
        url: "/address/",
        method: "POST",
        data,
      });
      setAddress(response.data.id);
    } catch (error) {}
  };

  useEffect(() => {
    const getAddressesFromApi = async () => {
      const response = await axios({
        url: "/address/",
        method: "GET",
      });
      setAddresses(response.data);
    };
    getAddressesFromApi();
  }, [address]);

  return (
    <>
      <Navbar />
      <div className="container">
        <Row className="m-0 g-0 p-0">
          <Col lg={8} className={style.registerFormDiv}>
            <div className="">
              <h4 className="">Shipping information</h4>
            </div>
            {!addresses ? (
              <>Loading...</>
            ) : (
              <Form.Select
                size="lg"
                className={`${style.selectAddress} mb-1 placeholder-wave`}
                value={address}
                onChange={handleAddressChange}
              >
                <option value={-1}>New address</option>
                {addresses.map((address) => {
                  return (
                    <option value={address.id} key={address.id}>
                      {address.name}
                    </option>
                  );
                })}
              </Form.Select>
            )}
            {parseInt(address) !== -1 ? (
              addressData && (
                <div className="text-start mt-3 ms-2">
                  <p>
                    <strong>Street: </strong> {addressData.street}
                  </p>
                  <p>
                    <strong>Corner: </strong> {addressData.corner}
                  </p>
                  <p>
                    <strong>Zipcode: </strong> {addressData.zipcode}
                  </p>
                  <p>
                    <strong>City: </strong> {addressData.city}
                  </p>
                  <p>
                    <strong>State: </strong> {addressData.state}
                  </p>
                  <p>
                    <strong>Country: </strong> {addressData.country}
                  </p>
                  <p>
                    <strong>Phone: </strong> {addressData.phone}
                  </p>
                </div>
              )
            ) : (
              <>
                <Form.Group as={"form"} className="mb-3" onSubmit={handleNewAddress}>
                  <Form.Label className="mt-1 mb-0" htmlFor="addressName">
                    Name for the address:
                  </Form.Label>
                  <Form.Control
                    className="mb-1 placeholder-wave"
                    htmlFor="addressName"
                    id="addressName"
                    value={addressName}
                    onChange={(e) => setAddressName(e.target.value)}
                    required
                  />
                  <Form.Label className="mt-1 mb-0" htmlFor="street">
                    Street:
                  </Form.Label>
                  <Form.Control
                    className="mb-1 placeholder-wave"
                    htmlFor="street"
                    id="street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    required
                  />
                  <Form.Label className="mt-1 mb-0" htmlFor="corner">
                    Corner:
                  </Form.Label>
                  <Form.Control
                    className="mb-1 placeholder-wave"
                    htmlFor="corner"
                    id="corner"
                    value={corner}
                    onChange={(e) => setCorner(e.target.value)}
                    required
                  />
                  <Form.Label className="mt-1 mb-0" htmlFor="city">
                    City:
                  </Form.Label>
                  <Form.Control
                    className="placeholder-wave"
                    htmlFor="city"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                  <Form.Label className="mt-1 mb-0" htmlFor="state">
                    State:
                  </Form.Label>
                  <Form.Control
                    className="placeholder-wave"
                    htmlFor="state"
                    id="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                  />
                  <Form.Label className="mb-0" htmlFor="country">
                    Country:
                  </Form.Label>
                  <Form.Control
                    className="placeholder-wave"
                    htmlFor="country"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  />
                  <Form.Label className="mt-1 mb-0" htmlFor="zipcode">
                    Zip-code:
                  </Form.Label>
                  <Form.Control
                    className="placeholder-wave"
                    htmlFor="zipcode"
                    id="zipcode"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                    required
                  />
                  <Form.Label className="mt-1 mb-0" htmlFor="phone">
                    Phone:
                  </Form.Label>
                  <Form.Control
                    className="placeholder-wave"
                    htmlFor="Phone"
                    id="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <Button type="submit" variant="dark" className="mt-3">
                    Save
                  </Button>
                </Form.Group>
              </>
            )}
          </Col>
          <Col lg={4}>
            <OrderSummary addressId={address} />
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
}
