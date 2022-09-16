import { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../../../components/Admin/Sidebar";

export default function AdminEditCategories() {
  const params = useParams();
  const categoryId = params.id;
  const [name, setName] = useState("");

  const getCategory = async () => {
    const response = await axios({
      url: "/categories/" + categoryId,
      method: "GET",
    });
  };

  // eslint-disable-next-line
  useEffect(() => getCategory, [categoryId]);

  if (!category) {
    return <>Loading...</>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name,
      };
      const response = await axios({
        url: "/categories/" + categoryId,
        method: "POST",
        data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="d-flex align-items-center">
      <Sidebar />
      <Container className="d-flex flex-column align-items-center">
        <h2>Edit Category</h2>
        <Form
          as={"form"}
          onSubmit={handleSubmit}
          className="text-start w-100"
          style={{ maxWidth: "500px" }}
        >
          <Form.Group className="mb-3 mt-5 ">
            <Form.Label className="m-0 mt-2 mx-1 " htmlFor="name">
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
          <Link to="/admin/categories">
            <Button type="submit" className="mt-4 mx-2">
              Cancel
            </Button>
          </Link>
          <Button className="mt-4 mx-2">Apply</Button>
        </Form>
      </Container>
    </div>
  );
}
