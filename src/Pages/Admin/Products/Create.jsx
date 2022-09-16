import { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";

export default function AdminCreateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [featured, setFeatured] = useState("");
  const [designer, setDesigner] = useState("");
  console.log(name);
  // const getProductFromApi = async () => {
  //   const response = await axios({
  //     url: "/products/create/",
  //     method: "POST",
  //   });
  // };

  // const handleSubmit = async () => {
  //   try {
  //     const data = {
  //       firstname,
  //       lastname,
  //       email,
  //       password,
  //     };

  return (
    <div className="container">
      <div className="Row ">
        <div className="Col p-5 d-flex justify-content-center">
          <Form>
            <Form.Group
              className="mb-3 mt-5"
              // onSubmit={(e) => {
              //   handleSubmit();
              //   e.preventDefault();
              // }}
            >
              <div className="card-body">
                <Form.Label className="m-0 mt-2 mx-1 " htmlFor="name">
                  Name
                </Form.Label>
                <Form.Control
                  className={` {style.registerForm} placeholder-wave`}
                  htmlFor="name"
                  id="name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <Form.Label className="m-0 mt-2 mx-1 " htmlFor="price">
                  Price
                </Form.Label>
                <Form.Control
                  className={` {style.registerForm} placeholder-wave`}
                  htmlFor="price"
                  id="price"
                />
                <Form.Label className="m-0 mt-2 mx-1 mt-4 mb-2" htmlFor="description">
                  Description
                </Form.Label>
                <textarea className="mt-4 mb-2" htmlFor="description" id="description" />
                <Form.Label className="mx-1 mt-4 mb-1 " htmlFor="featured">
                  Featured
                </Form.Label>
                <select className="mt-4 mb-2" htmlFor="featured" id="featured">
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
                <Form.Label className="m-0 mt-2 mx-1 d-block" htmlFor="designer">
                  Designer
                </Form.Label>
                <Form.Control
                  className={` {style.registerForm} placeholder-wave`}
                  htmlFor="designer"
                  id="designer"
                />
                <Form.Label className="m-0 mt-2 mx-1 " htmlFor="image1">
                  Image-1
                </Form.Label>
                <Form.Control
                  className={` {style.registerForm} placeholder-wave`}
                  htmlFor="image1"
                  id="image1"
                />
                <Form.Label className="m-0 mt-2 mx-1 " htmlFor="image2">
                  Image-2
                </Form.Label>
                <Form.Control
                  className={` {style.registerForm} placeholder-wave`}
                  htmlFor="image2"
                  id="image2"
                />
                <Form.Label className="m-0 mt-2 mx-1 " htmlFor="image3">
                  Image-3
                </Form.Label>
                <Form.Control
                  className={` {style.registerForm} placeholder-wave`}
                  htmlFor="image3"
                  id="image3"
                />
                <Button className="mt-4 mx-2">Cancel</Button>
                <Button className="mt-4 mx-2">Apply</Button>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
}
