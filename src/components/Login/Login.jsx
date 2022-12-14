import axios from "axios";
import { useState } from "react";
import { OverlayTrigger, Popover, Form, Button } from "react-bootstrap";
import { BiUser } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../../redux/user/userSlice";
import style from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidCredentials, setInvalidCredentials] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const apiCall = await axios({
        url: "tokens/",
        method: "POST",
        data: {
          email,
          password,
        },
      });
      dispatch(setUser(apiCall.data));
    } catch (error) {
      setInvalidCredentials(error.response.data.error);
    }
  };
  return (
    <OverlayTrigger
      trigger="click"
      placement={"bottom"}
      rootClose="true"
      overlay={
        <Popover>
          <Popover.Body>
            <Form onSubmit={handleLogin}>
              <Form.Floating>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email address</label>
              </Form.Floating>
              <Form.Floating className="mt-3">
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
              </Form.Floating>
              <Link to="/register" className="text-decoration-none fs-6 d-block">
                Don't have an account yet? Sign up!
              </Link>
              <p className="mt-3 fw-bold">{invalidCredentials}</p>
              <Button type="submit" variant="dark" className="px-5">
                Log in
              </Button>
            </Form>
          </Popover.Body>
        </Popover>
      }
    >
      <button className={`${style.button} d-flex align-items-center border-0 bg-transparent`}>
        <BiUser className="me-2 fs-5" /> <span className="fw-bold">LOGIN</span>
      </button>
    </OverlayTrigger>
  );
}
