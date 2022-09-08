import { OverlayTrigger, Popover, Form, Button } from "react-bootstrap";
import { BiUser } from "react-icons/bi";
import style from "./Login.module.css";

export default function Login() {
  return (
    <OverlayTrigger
      trigger="click"
      placement={"bottom"}
      rootClose="true"
      overlay={
        <Popover>
          <Popover.Body>
            <Form.Floating>
              <Form.Control type="email" />
              <label htmlFor="floatingInput">Email address</label>
            </Form.Floating>
            <Form.Floating className="mt-3">
              <Form.Control type="password" />
              <label htmlFor="floatingPassword">Password</label>
            </Form.Floating>
            <Button variant="dark" className="mt-3 px-5">
              Log in
            </Button>
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
