import { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";

import { Button } from "react-bootstrap";

export default function AdminCreateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");
  const [featured, setFeatured] = useState("");
  const [designer, setDesigner] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [stock, setStock] = useState("");
  const [shortDescription, setShortDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name,
        price: parseFloat(price),
        "short-description": shortDescription,
        description,
        details,
        featured,
        designer,
        stock: parseInt(stock),
        images: [image1, image2, image3],
      };
      await axios({
        url: "/products",
        method: "POST",
        data,
      });
    } catch {}
  };

  return (
    <div className="container">
      <div className="Row ">
        <div className="Col p-5 d-flex justify-content-center">
          <Form as="form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 mt-5">
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
                  value={name}
                />
                <Form.Label className="m-0 mt-2 mx-1 " htmlFor="price">
                  Price
                </Form.Label>
                <Form.Control
                  className={` {style.registerForm} placeholder-wave`}
                  htmlFor="price"
                  id="price"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  value={price}
                />
                <Form.Label className="m-0 mt-2 mx-1 mt-4 mb-2" htmlFor="shortDescription">
                  Short Description
                </Form.Label>
                <textarea
                  className="mt-4 mb-2"
                  htmlFor="shortDescription"
                  id="shortDescription"
                  onChange={(e) => {
                    setShortDescription(e.target.value);
                  }}
                  value={shortDescription}
                />
                <Form.Label className="m-0 mt-2 mx-1 mt-4 mb-2" htmlFor="description">
                  Description
                </Form.Label>
                <textarea
                  className="mt-4 mb-2"
                  htmlFor="description"
                  id="description"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  value={description}
                />
                <Form.Label className="m-0 mt-2 mx-1 mt-4 mb-2" htmlFor="details">
                  Details
                </Form.Label>
                <textarea
                  className="mt-4 mb-2"
                  htmlFor="details"
                  id="details"
                  onChange={(e) => {
                    setDetails(e.target.value);
                  }}
                  value={details}
                />
                <Form.Label className="mx-1 mt-4 mb-1 " htmlFor="featured">
                  Featured
                </Form.Label>
                <select
                  className="mt-4 mb-2"
                  htmlFor="featured"
                  id="featured"
                  onChange={(e) => {
                    setFeatured(e.target.value);
                  }}
                  value={featured}
                >
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
                  onChange={(e) => {
                    setDesigner(e.target.value);
                  }}
                  value={designer}
                />
                <Form.Label className="m-0 mt-2 mx-1 " htmlFor="stock">
                  Stock
                </Form.Label>
                <Form.Control
                  className={` {style.registerForm} placeholder-wave`}
                  htmlFor="stock"
                  id="stock"
                  onChange={(e) => {
                    setStock(e.target.value);
                  }}
                  value={stock}
                />
                <Form.Label className="m-0 mt-2 mx-1 " htmlFor="image1">
                  Image-1
                </Form.Label>
                <Form.Control
                  className={` {style.registerForm} placeholder-wave`}
                  htmlFor="image1"
                  id="image1"
                  onChange={(e) => {
                    setImage1(e.target.value);
                  }}
                  value={image1}
                />
                <Form.Label className="m-0 mt-2 mx-1 " htmlFor="image2">
                  Image-2
                </Form.Label>
                <Form.Control
                  className={` {style.registerForm} placeholder-wave`}
                  htmlFor="image2"
                  id="image2"
                  onChange={(e) => {
                    setImage2(e.target.value);
                  }}
                  value={image2}
                />
                <Form.Label className="m-0 mt-2 mx-1 " htmlFor="image3">
                  Image-3
                </Form.Label>
                <Form.Control
                  className={` {style.registerForm} placeholder-wave`}
                  htmlFor="image3"
                  id="image3"
                  onChange={(e) => {
                    setImage3(e.target.value);
                  }}
                  value={image3}
                />
                <Button className="mt-4 mx-2">Cancel</Button>
                <Button className="mt-4 mx-2" type="submit">
                  Apply
                </Button>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
}
