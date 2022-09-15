import { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
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

  const handleUpdate = async (productId) => {
    const response = await axios({
      url: "/products/" + productId,
      method: "PATCH",
    });
  };

  // eslint-disable-next-line
  useEffect(() => getProductFromApi, []);

  if (!product) {
    return <>Loading...</>;
  }

  return (
    <Form.Group className="mb-3">
      <div className="card-body">
        <table>
          <thead>
            <tr>
              <th>
                <Form.Label className="m-0 mb-0 mx-1 " htmlFor="name">
                  {" "}
                  Name{" "}
                </Form.Label>
              </th>
              {/* <th>Stock</th> */}
              <th>
                {" "}
                <Form.Label className="m-0 mb-0 mx-1 " htmlFor="price">
                  {" "}
                  Price{" "}
                </Form.Label>
              </th>
              <th>
                {" "}
                <Form.Label className="m-0 mb-0 mx-1 " htmlFor="description">
                  {" "}
                  Description{" "}
                </Form.Label>
              </th>
              <th>
                {" "}
                <Form.Label className="m-0 mb-0 mx-1 " htmlFor="featured">
                  {" "}
                  Featured{" "}
                </Form.Label>
              </th>
              <th>
                {" "}
                <Form.Label className="m-0 mb-0 mx-1 " htmlFor="designer">
                  {" "}
                  Designer{" "}
                </Form.Label>
              </th>

              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <Form.Control
                  className={` {style.registerForm} placeholder-wave`}
                  put
                  htmlFOR="name"
                  id="name"
                  value={product.name}
                />
              </td>
              <td>
                <Form.Control
                  className={` {style.registerForm} placeholder-wave`}
                  put
                  htmlFOR="price"
                  id="price"
                  placeholder="product price here"
                />
              </td>
              <td>
                <textarea
                  className={` {style.registerForm} placeholder-wave`}
                  put
                  htmlFOR="description"
                  id="description"
                  placeholder="product description here"
                />
              </td>
              <td>
                <select
                  className={` {style.registerForm} placeholder-wave`}
                  put
                  htmlFOR="featured"
                  id="featured"
                  placeholder="featured or not"
                >
                  <option value="1">Yes</option>
                  <option value="0">Not</option>
                </select>
              </td>
              <Form.Control
                className={` {style.registerForm} placeholder-wave`}
                put
                htmlFOR="designer"
                id="designer"
                placeholder="product designer here"
              />
            </tr>
            {/* <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.featured.toString()}</td>
              <td>
                <button
                  onClick={() => {
                    handleUpdate(product.id);
                  }}
                >
                  Edit
                </button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </Form.Group>
  );
}
