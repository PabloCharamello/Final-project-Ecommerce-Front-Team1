import axios from "axios";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/user/userSlice";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      firstname.trim() === "" &&
      lastname.trim() === "" &&
      email.trim() === "" &&
      phone.trim() === "" &&
      password.trim() === ""
    ) {
      return setError("There is an empty field!");
    }
    try {
      await axios({
        url: "users/",
        method: "POST",
        data: {
          firstname,
          lastname,
          email,
          phone,
          password,
        },
      });

      const login = await axios(
        {
          url: "users/token/",
          method: "POST",
          data: {
            email,
            password,
          },
        },
        navigate("/"),
      );
      dispatch(setUser(login.data));
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <>
      <Navbar />
      <Container className="d-flex justify-content-center mt-4 mt-lg-0 pb-lg-5 align-items-lg-center min-vh-100">
        <Form
          as="form"
          className="w-100 d-flex flex-column justify-content-start"
          style={{ maxWidth: "30rem" }}
          onSubmit={(e) => handleSubmit(e)}
        >
          <Form.Label className="text-start ms-1" htmlFor="firstname">
            Firstname:
          </Form.Label>
          <Form.Control
            as="input"
            id="firstname"
            name="firstname"
            className="mb-2"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />

          <Form.Label className="text-start ms-1" htmlFor="lastname">
            Lastname:
          </Form.Label>
          <Form.Control
            as="input"
            id="lastname"
            name="lastname"
            className="mb-2"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />

          <Form.Label className="text-start ms-1" htmlFor="email">
            E-mail:
          </Form.Label>
          <Form.Control
            as="input"
            type="email"
            placeholder="user@mail.com"
            id="email"
            name="email"
            className="mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Form.Label className="text-start ms-1" htmlFor="phone">
            Phone number (9 digits):
          </Form.Label>
          <Form.Control
            as="input"
            type="tel"
            pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
            placeholder="099123456"
            id="phone"
            name="phone"
            className="mb-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <Form.Label className="text-start ms-1" htmlFor="password">
            Password:
          </Form.Label>
          <Form.Control
            as="input"
            type="password"
            id="password"
            name="password"
            className="mb-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p className="fw-bold">{error}</p>

          <Button as="button" type="submit" variant="dark">
            Register
          </Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
