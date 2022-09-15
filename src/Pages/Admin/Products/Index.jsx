import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/Admin/Sidebar";
import { Row, Col, Button } from "react-bootstrap";
import style from "./styles/index.module.css";
import { BsTrash } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { VscNewFolder } from "react-icons/vsc";

export default function AdminProducts() {
  const [products, setProducts] = useState(null);
  const getProductFromApi = async () => {
    const response = await axios({
      url: "/products/",
      method: "GET",
    });
    setProducts(response.data);
  };

  const handleDelete = async (productId) => {
    const response = await axios({
      url: "/products/" + productId,
      method: "DELETE",
    });
    if (response.statusText === "OK") {
      setProducts(products.filter((product) => product.id !== productId));
    }
  };

  const handleUpdate = async (productId) => {
    await axios({
      url: "/products/" + productId,
      method: "PUT",
    });
  };

  console.log(products);
  // eslint-disable-next-line
  useEffect(() => getProductFromApi, []);

  if (!products) {
    return <>Loading...</>;
  }

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="card-body">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Featured</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>{product.featured.toString()}</td>
                  <td>
                    <Link to={"/admin/products/" + product.id}>
                      <Button
                        className="mx-2"
                        onClick={() => {
                          handleUpdate(product.id);
                        }}
                      >
                        {" "}
                        Edit
                      </Button>
                    </Link>
                    <Button
                      onClick={() => {
                        handleDelete(product.id);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <div className="d-flex justify-content-end">
            <Link to="/admin/products/create/">
              <Button>New</Button>
            </Link>
          </div>
        </table>
      </div>
    </div>
  );
}
