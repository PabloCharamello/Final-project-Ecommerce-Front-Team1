import { useState } from "react";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";
import Sidebar from "../../../components/Admin/Sidebar";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function AdminEditProduct() {
  const params = useParams();
  const adminId = params.id;
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(null);

  const getAdminFromApi = async () => {
    const response = await axios({
      url: "/admins/" + adminId,
      method: "GET",
    });
    setAdmin(response.data);
    setFirstname(response.data.firstname);
    setLastname(response.data.lastname);
    setEmail(response.data.email);
  };

  // eslint-disable-next-line
  useEffect(() => getAdminFromApi, [adminId]);

  if (!admin) {
    return <>Loading...</>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        firstname,
        lastname,
        email,
        password,
      };
      const response = await axios({
        url: "/admins/" + adminId,
        method: "PUT",
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
        <h2>Edit Administrator</h2>
        <Form
          as={"form"}
          onSubmit={handleSubmit}
          className="text-start w-100"
          style={{ maxWidth: "500px" }}
        >
          <Form.Group>
            <Form.Label htmlFor="firstname">First Name</Form.Label>
            <Form.Control
              type="text"
              id="firstname"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="lastname">Last Name</Form.Label>
            <Form.Control
              type="text"
              id="lastname"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="Email1">Email address</Form.Label>
            <Form.Control
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="Password">Password</Form.Label>
            <Form.Control
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" variant="dark" className="mt-3">
            Save
          </Button>
          <Link to="/admin/administrators">
            <Button variant="outline-dark" className="mt-3 ms-3">
              Cancel
            </Button>
          </Link>
        </Form>
      </Container>
    </div>
  );
}
