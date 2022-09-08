import { OverlayTrigger, Popover, Image, Button } from "react-bootstrap";
import { BiShoppingBag } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
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
            <div className="d-flex flex-column align-items-center">
              <div>
                <div
                  className={`d-flex justify-content-between align-items-center mt-2 pb-2 border-bottom`}
                >
                  <Image
                    fluid
                    className={style.productImage}
                    src="https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue1_1500x1500.jpg"
                  />
                  <div className="d-flex flex-column mx-3">
                    <span className="fw-bold text-black">PRADO </span>
                    <div>
                      <span className="fw-light me-1">$10,585</span>
                      <span className="fw-light fst-italic">x1</span>
                    </div>
                  </div>
                  <IoClose className={`fs-4`} />
                </div>
                <div
                  className={`d-flex justify-content-between align-items-center mt-2 pb-2 border-bottom`}
                >
                  <Image
                    fluid
                    className={style.productImage}
                    src="https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue1_1500x1500.jpg"
                  />
                  <div className="d-flex flex-column mx-3">
                    <span className="fw-bold text-black">PRADO </span>
                    <div>
                      <span className="fw-light me-1">$10,585</span>
                      <span className="fw-light fst-italic">x1</span>
                    </div>
                  </div>
                  <IoClose className={`fs-4`} />
                </div>
              </div>
              <Button variant="dark" className="mt-3 px-3">
                VIEW CART
              </Button>
            </div>
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
