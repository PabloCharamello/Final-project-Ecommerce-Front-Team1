import { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/Admin/Sidebar";
import { useEffect } from "react";

export default function AdminCreateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");
  const [featured, setFeatured] = useState(0);
  const [designer, setDesigner] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [stock, setStock] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [categories, setCategories] = useState(null);
  const [categoryId, setCategoryId] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name,
        price,
        "short-description": shortDescription,
        description,
        details,
        featured,
        designer,
        categoryId,
        stock,
        images: [image1, image2, image3],
      };
      if (categoryId === "") {
        setError("You need to specify a category");
        return;
      }
      await axios({
        url: "/products",
        method: "POST",
        data,
      });
      navigate("/admin/products");
    } catch (error) {
      console.log(error);
    }
  };

  const getCategoriesFromApi = async () => {
    const response = await axios({
      url: "/categories",
      method: "GET",
    });
    setCategories(response.data);
  };
  useEffect(() => {
    getCategoriesFromApi();
  }, []);
  if (!categories) {
    return <>Loading...</>;
  }

  return (
    <>
      <div className="d-flex align-items-center">
        <Sidebar />
        <Container className="Row ">
          <h2>Create Product</h2>
          <Form as="form" onSubmit={handleSubmit} className="text-start">
            <Form.Group className="mb-3">
              <Row className="card-body d-flex justify-content-center">
                <Col lg={5}>
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
                  <Form.Label className="mx-1 mb-0 mt-2" htmlFor="shortDescription">
                    Short Description
                  </Form.Label>
                  <Form.Control
                    className=""
                    htmlFor="shortDescription"
                    id="shortDescription"
                    onChange={(e) => {
                      setShortDescription(e.target.value);
                    }}
                    value={shortDescription}
                  />
                  <Form.Label className="mx-1 mb-0 mt-2" htmlFor="description">
                    Description
                  </Form.Label>
                  <Form.Control
                    className="mb-0 m-0"
                    htmlFor="description"
                    id="description"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    value={description}
                  />
                  <Form.Label className="m-0 mt-2 mx-1" htmlFor="details">
                    Details
                  </Form.Label>
                  <Form.Control
                    className=""
                    htmlFor="details"
                    id="details"
                    onChange={(e) => {
                      setDetails(e.target.value);
                    }}
                    value={details}
                  />
                  <Form.Label className="mx-1 mt-4 mb-1 " htmlFor="category">
                    Category
                  </Form.Label>
                  <select
                    className="mt-2 mb-2 rounded-2"
                    htmlFor="category"
                    id="category"
                    onChange={(e) => {
                      setCategoryId(e.target.value);
                    }}
                    value={categoryId}
                  >
                    <option value="">-</option>
                    {categories.map((category) => {
                      return (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      );
                    })}
                  </select>
                  <Form.Label className="mx-1 mt-4 mb-1 " htmlFor="featured">
                    Featured
                  </Form.Label>
                  <select
                    className="mt-2 mb-2 rounded-2"
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
                </Col>
                <Col lg={5}>
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
                    type="file"
                    onChange={(e) => {
                      console.log(e.files[0]);
                      setImage1(e.files[0]);
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
                    type="file"
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
                    type="file"
                    onChange={(e) => {
                      setImage3(e.target.value);
                    }}
                    value={image3}
                  />
                  <p className="ms-1 text-danger fs-5">{error}</p>
                  <Button variant="dark" className="mt-3" type="submit">
                    New
                  </Button>
                  <Button
                    as={Link}
                    to="/admin/products"
                    variant="outline-dark"
                    className="mt-3 ms-3"
                  >
                    Cancel
                  </Button>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Container>
      </div>
    </>
  );
}
