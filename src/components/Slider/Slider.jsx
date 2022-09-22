import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/cartSlice";
import style from "./slider.module.css";

export default function Slider() {
  const dispatch = useDispatch();
  const params = useParams();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProductFromApi = async () => {
      const response = await axios({
        url: "/products/featured",
        method: "GET",
      });
      setProducts(response.data);
      console.log(response.data);
    };
    getProductFromApi();
  }, []);

  if (!products) {
    return <>Loading...</>;
  }

  // const handleAddToCart = () => {
  //   dispatch(addProductToCart({ ...product, quantity: 1 }));
  // };

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
            <div className={style.cardFeaturedProductsDiv}>
              <Image src={product.images[0]} className={style.cardFeaturedProducts} />
              <p>{products.name}</p>
            </div>
          );
        })}
      </Carousel>
    </>
  );
}
