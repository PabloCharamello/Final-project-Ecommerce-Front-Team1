import { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../../components/Admin/Sidebar";

export default function AdminEditCategories() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [categories, setCategories] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formIsValid = nameValidation();
    if (!formIsValid) {
      return;
    }
    try {
      await axios({
        url: "/categories/",
        method: "POST",
        data: { name },
      });
      navigate("/admin/categories");
    } catch (error) {
      console.log(error);
    }
  };

  const nameValidation = () => {
    let formIsValid = true;
    for (const category of categories) {
      if (name === category.name) {
        formIsValid = false;
        setError("Category name already used");
      }
    }
    if (typeof name !== "undefined") {
      if (!name.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        setError("Category name can only have letters and numbers");
      }
    }
    if (name.length > 15) {
      formIsValid = false;
      setError("Name length must be less than 15 characters");
    }
    return formIsValid;
  };
  useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        url: "/categories/",
        method: "GET",
      });
      setCategories(response.data);
    };
    getCategories();
  }, []);

  if (!categories) {
    return <>Loading...</>;
  }

  return (
    <div className="d-flex align-items-center">
      <Sidebar />
      <Container className="d-flex flex-column align-items-center">
        <h2>Create Category</h2>
        <Form
          as="form"
          onSubmit={handleSubmit}
          className="text-start w-100"
          style={{ maxWidth: "500px" }}
        >
          <Form.Group className="mb-3 ">
            <Form.Label className="m-0 mt-2 mx-1" htmlFor="name">
              Name
            </Form.Label>
            <Form.Control
              type="name"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <p className="text-danger">{error}</p>
          <Button type="submit" variant="dark">
            New
          </Button>
          <Link to="/admin/categories">
            <Button variant="outline-dark" className=" ms-3">
              Cancel
            </Button>
          </Link>
        </Form>
      </Container>
    </div>
  );
}
