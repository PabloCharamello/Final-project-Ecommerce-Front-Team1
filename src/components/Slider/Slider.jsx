import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/cartSlice";
import { Row, Col, Image, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "./slider.module.css";

const priceFormatter = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "USD",
  currencyDisplay: "code",
  maximumFractionDigits: 0,
});

export default function Slider() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProductFromApi = async () => {
      const response = await axios({
        url: "/products/featured",
        method: "GET",
      });
      setProducts(response.data);
    };
    getProductFromApi();
  }, []);

  if (!products) {
    return <>Loading...</>;
  }

  const handleAddToCart = () => {
    dispatch(addProductToCart({ ...products, quantity: 1 }));
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel responsive={responsive}>
        {products.map((product) => {
          return (
            <div key={product.id} className={style.cardFeaturedProductsDiv}>
              {/* <Image src={product.images[0]} className={style.cardFeaturedProducts} /> */}
              <Link to={"/product/" + product.id}>
                <Image fluid className={style.imageProduct} src={product.images[0]} />
              </Link>
              <p className="text-center fs-4">{product.name}</p>
              <span className="fs-6 mb-2">{priceFormatter.format(product.price)}</span>
              <Button
                variant="outline-dark"
                size="sm"
                className="ms-2 rounded-pill"
                onClick={() => {
                  handleAddToCart(products);
                }}
              >
                ADD TO CART
              </Button>
            </div>
          );
        })}
      </Carousel>
    </>
  );
}
