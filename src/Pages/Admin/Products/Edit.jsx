import { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function AdminEditProducts() {
  const navigate = useNavigate();
  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");
  const [featured, setFeatured] = useState("");
  const [designer, setDesigner] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [stock, setStock] = useState("");

  const getProductFromApi = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: "/products/" + productId,
      });
      console.log(result.data);
      setProduct(result.data);
      setName(result.data.name);
      setPrice(result.data.price);
      setShortDescription(result.data["short-description"]);
      setDescription(result.data.description);
      setDetails(result.data.details);
      setFeatured(result.data.featured);
      setDesigner(result.data.designer);
      setStock(result.data.stock);
      setImage1(result.data.images[0]);
      setImage2(result.data.images[1]);
      setImage3(result.data.images[2]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductFromApi();
    // eslint-disable-next-line
  }, [productId]);

  // const handleReset = () => {
  //   const [originalProduct, setOriginalProduct] = useState({

  //   })
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name,
        price: parseFloat(price),
        "short-description": shortDescription,
        description,
        details,
        featured,
        designer,
        stock: parseInt(stock),
        images: [image1, image2, image3],
      };
      await axios({
        method: "PATCH",
        url: "/products/" + productId,
        data,
      });
      navigate("/admin/products");
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line
  if (!product) {
    return <>Loading...</>;
  }
  return (
    <div className="container">
      <div className="Row ">
        <div className="Col p-5 d-flex justify-content-center">
          <Form as="form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 mt-5">
              <div className="card-body">
                <Form.Label className="m-0 mt-2 mx-1 " htmlFor="name">
                  Name
                </Form.Label>
                <Form.Control
                  className={` {style.registerForm} placeholder-wave`}
                  htmlFor="name"
                  id="name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                />
                <Form.Label className="m-0 mt-2 mx-1 " htmlFor="price">
                  Price
                </Form.Label>
                <Form.Control
                  className={` {style.registerForm} placeholder-wave`}
                  htmlFor="price"
                  id="price"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  value={price}
                />
                <Form.Label className="m-0 mt-2 mx-1 mt-4 mb-2" htmlFor="shortDescription">
                  Short Description
                </Form.Label>
                <textarea
                  className="mt-4 mb-2"
                  htmlFor="shortDescription"
                  id="shortDescription"
                  onChange={(e) => {
                    setShortDescription(e.target.value);
                  }}
                  value={shortDescription}
                />
                <Form.Label className="m-0 mt-2 mx-1 mt-4 mb-2" htmlFor="description">
                  Description
                </Form.Label>
                <textarea
                  className="mt-4 mb-2"
                  htmlFor="description"
                  id="description"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  value={description}
                />
                <Form.Label className="m-0 mt-2 mx-1 mt-4 mb-2" htmlFor="details">
                  Details
                </Form.Label>
                <textarea
                  className="mt-4 mb-2"
                  htmlFor="details"
                  id="details"
                  onChange={(e) => {
                    setDetails(e.target.value);
                  }}
                  value={details}
                />
                <Form.Label className="mx-1 mt-4 mb-1 " htmlFor="featured">
                  Featured
                </Form.Label>
                <select
                  className="mt-4 mb-2"
                  htmlFor="featured"
                  id="featured"
                  onChange={(e) => {
                    setFeatured(e.target.value);
                  }}
                  value={featured}
                >
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
                <Form.Label className="m-0 mt-2 mx-1 d-block" htmlFor="designer">
                  Designer
                </Form.Label>
                <Form.Control
                  className={` {style.registerForm} placeholder-wave`}
                  htmlFor="designer"
                  id="designer"
                  onChange={(e) => {
                    setDesigner(e.target.value);
                  }}
                  value={designer}
                />
                <Form.Label className="m-0 mt-2 mx-1 " htmlFor="stock">
                  Stock
                </Form.Label>
                <Form.Control
                  className={` {style.registerForm} placeholder-wave`}
                  htmlFor="stock"
                  id="stock"
                  onChange={(e) => {
                    setStock(e.target.value);
                  }}
                  value={stock}
                />
                <Form.Label className="m-0 mt-2 mx-1 " htmlFor="image1">
                  Image-1
                </Form.Label>
                <Form.Control
                  className={` {style.registerForm} placeholder-wave`}
                  htmlFor="image1"
                  id="image1"
                  onChange={(e) => {
                    setImage1(e.target.value);
                  }}
                  value={image1}
                />
                <Form.Label className="m-0 mt-2 mx-1 " htmlFor="image2">
                  Image-2
                </Form.Label>
                <Form.Control
                  className={` {style.registerForm} placeholder-wave`}
                  htmlFor="image2"
                  id="image2"
                  onChange={(e) => {
                    setImage2(e.target.value);
                  }}
                  value={image2}
                />
                <Form.Label className="m-0 mt-2 mx-1 " htmlFor="image3">
                  Image-3
                </Form.Label>
                <Form.Control
                  className={` {style.registerForm} placeholder-wave`}
                  htmlFor="image3"
                  id="image3"
                  onChange={(e) => {
                    setImage3(e.target.value);
                  }}
                  value={image3}
                />
                <Button as={Link} to="/admin/products" className="mt-4 mx-2">
                  Cancel
                </Button>
                <Button className="mt-4 mx-2" type="submit">
                  Update
                </Button>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
}
