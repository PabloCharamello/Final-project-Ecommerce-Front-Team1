import { OverlayTrigger, Popover, Form, CloseButton, Button } from "react-bootstrap";
import { BiShoppingBag } from "react-icons/bi";
import style from "./CartPopup.module.css";

export default function CartPopup() {
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
      <button className={`${style.button} d-flex align-items-center border-0 bg-transparent me-5`}>
        <BiShoppingBag className="me-2 fs-5" /> <span className="fw-bold me-2">CART</span>
        <span>($31,755)</span>
      </button>
    </OverlayTrigger>
  );
}
