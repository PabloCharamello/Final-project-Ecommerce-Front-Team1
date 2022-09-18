import { OverlayTrigger, Popover, Image, Button } from "react-bootstrap";
import { BiShoppingBag } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeProductFromCart } from "../../redux/cart/cartSlice";
import style from "./CartPopup.module.css";
import swal from "sweetalert";

const priceFormatter = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function CartPopup() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeProductFromCart(id));
  };

  const modalConfirmation = (productId) => {
    swal({
      title: "Delete?",
      text: "Are you sure want delete this product?",
      icon: "warning",
      buttons: ["No", "Yes"],
    }).then((resYes) => {
      if (resYes) {
        swal({ text: "The product was deleted", icon: "success" });
        handleRemoveFromCart(productId);
      }
    });
  };

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
                {cart.productsList.map((product) => {
                  return (
                    <div
                      key={product.id}
                      className={`d-flex justify-content-between align-items-center mt-2 pb-2 border-bottom`}
                    >
                      <Image fluid className={style.productImage} src={product.images[0]} />
                      <div className="d-flex flex-column mx-3">
                        <span className="fw-bold text-black">{product.name}</span>
                        <div>
                          <span className="fw-light me-1">
                            {priceFormatter.format(parseInt(product.price))}
                          </span>
                          <span className="fw-light fst-italic">x{product.quantity}</span>
                        </div>
                      </div>
                      <IoClose
                        className={`fs-4 cursor-pointer`}
                        onClick={() => modalConfirmation(product.id)}
                      />
                    </div>
                  );
                })}
              </div>
              <span className="fs-5 mt-2">{priceFormatter.format(parseInt(31755))}</span>
              <Button
                to="/cart"
                as={Link}
                variant="dark"
                className={`${style.buttonPopup} mt-1 px-3`}
              >
                VIEW CART
              </Button>
            </div>
          </Popover.Body>
        </Popover>
      }
    >
      <button className={`${style.button} d-flex align-items-center border-0 bg-transparent me-3`}>
        <BiShoppingBag className="me-2 fs-5" /> <span className="fw-bold">CART </span>
        <span className="me-2">({cart.totalCount})</span>
      </button>
    </OverlayTrigger>
  );
}
