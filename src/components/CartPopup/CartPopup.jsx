import axios from "axios";
import { useEffect, useState } from "react";
import { OverlayTrigger, Popover, Image, Button } from "react-bootstrap";
import { BiShoppingBag } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./CartPopup.module.css";

const getProductFromApi = async (id) => {
  const response = await axios({
    url: "/products/" + id,
    method: "GET",
  });
  const data = await response.data;
  return data;
};

const priceFormatter = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function CartPopup() {
  const cart = useSelector((state) => state.cart);
  const [productList, setProductList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    cart.productsList.map((productInCart) => {
      const index = productList.findIndex((product) => product.id === productInCart.id);
      if (index !== -1) {
        setProductList(
          productList.map((item) => {
            return item.id !== productInCart.id
              ? item
              : {
                  ...item,
                  count: item.count + 1,
                };
          }),
        );
        setTotalPrice((total) => total + parseInt(productList[index].price));
      } else {
        getProductFromApi(productInCart.id).then((data) => {
          setProductList([
            ...productList,
            {
              id: productInCart.id,
              name: data.name,
              price: data.price,
              image: data.images[0],
              count: 1,
            },
          ]);
          setTotalPrice((total) => total + parseInt(data.price));
        });
      }
    });
  }, [cart]);

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
                {productList.map((product) => {
                  return (
                    <div
                      key={product.id}
                      className={`d-flex justify-content-between align-items-center mt-2 pb-2 border-bottom`}
                    >
                      <Image fluid className={style.productImage} src={product.image} />
                      <div className="d-flex flex-column mx-3">
                        <span className="fw-bold text-black">{product.name}</span>
                        <div>
                          <span className="fw-light me-1">
                            {priceFormatter.format(parseInt(product.price))}
                          </span>
                          <span className="fw-light fst-italic">x{product.count}</span>
                        </div>
                      </div>
                      <IoClose className={`fs-4`} />
                    </div>
                  );
                })}
              </div>
              <span className="fs-5 mt-2">{priceFormatter.format(parseInt(totalPrice))}</span>
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
