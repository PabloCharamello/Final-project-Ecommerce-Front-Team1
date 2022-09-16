import { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function AdminEditProducts() {
  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState(null);
  const getProductFromApi = async () => {
    const response = await axios({
      url: "/products/" + productId,
      method: "GET",
    });
    setProduct(response.data);
  };

  // eslint-disable-next-line
  useEffect(() => getProductFromApi, []);

  if (!product) {
    return <>Loading...</>;
  }

  return (
    <div className="container">
      <div className="Row ">
        <div className="Col p-5 d-flex justify-content-center">
          <Form.Group className="mb-3 mt-5 ">
            <div className="card-body">
              <Form.Label className="m-0 mt-2 mx-1 " htmlFor="name">
                Name
              </Form.Label>
              <Form.Control
                className={` {style.registerForm} placeholder-wave`}
                htmlFOR="name"
                id="name"
                value={product.name}
              />
              <Form.Label className="m-0 mt-2 mx-1 " htmlFor="price">
                Price
              </Form.Label>
              <Form.Control
                className={` {style.registerForm} placeholder-wave`}
                htmlFOR="price"
                id="price"
                value={product.price}
              />
              <Form.Label className="m-0 mt-2 mx-1 mt-4 mb-2" htmlFor="description">
                Description
              </Form.Label>
              <textarea
                className="mt-4 mb-2"
                htmlFOR="description"
                id="description"
                value={product.description}
              />
              <Form.Label className="mx-1 mt-4 mb-1 " htmlFor="featured">
                Featured
              </Form.Label>
              <select
                className="mt-4 mb-2"
                htmlFOR="featured"
                id="featured"
                value={product.featured}
              >
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
              <Form.Label className="m-0 mt-2 mx-1 d-block" htmlFor="designer">
                Designer
              </Form.Label>
              <Form.Control
                className={` {style.registerForm} placeholder-wave`}
                htmlFOR="designer"
                id="designer"
                value={product.designer}
              />
              <Form.Label className="m-0 mt-2 mx-1 " htmlFor="image1">
                Image-1
              </Form.Label>
              <Form.Control
                className={` {style.registerForm} placeholder-wave`}
                htmlFOR="image1"
                id="image1"
                value={product.images}
              />
              <Form.Label className="m-0 mt-2 mx-1 " htmlFor="image2">
                Image-2
              </Form.Label>
              <Form.Control
                className={` {style.registerForm} placeholder-wave`}
                htmlFOR="image2"
                id="image2"
                value={product.images}
              />
              <Form.Label className="m-0 mt-2 mx-1 " htmlFor="image3">
                Image-3
              </Form.Label>
              <Form.Control
                className={` {style.registerForm} placeholder-wave`}
                htmlFOR="image3"
                id="image3"
                value={product.images}
              />
              <Button className="mt-4 mx-2">Cancel</Button>
              <Button className="mt-4 mx-2">Apply</Button>
            </div>
          </Form.Group>
        </div>
      </div>
    </div>
  );
}
