import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/Admin/Sidebar";
import { Card, Table, Container, Button } from "react-bootstrap";
import { BiEdit, BiTrash } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import swal from "sweetalert";

const priceFormatter = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

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

  const modalConfirmation = (productId) => {
    swal({
      title: "Delete?",
      text: "Are you sure want delete this product?",
      icon: "warning",
      buttons: ["No", "Yes"],
    }).then((resYes) => {
      if (resYes) {
        swal({ text: "The product was deleted", icon: "success" });
        handleDelete(productId);
      }
    });
  };

  const handleUpdate = async (productId) => {
    await axios({
      url: "/products/" + productId,
      method: "PUT",
    });
  };

  // eslint-disable-next-line
  useEffect(() => getProductFromApi, []);

  if (!products) {
    return <>Loading...</>;
  }

  return (
    <div className="d-flex">
      <Sidebar />
      <main className="bg-surface-secondary w-100">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="pt-3">Products</h1>
            <Link to={"/admin/products/create"}>
              <Button className="bg-primary rounded-circle text-white d-flex p-2 border-0 me-3">
                <MdOutlineAddCircleOutline size="1.5rem" />
              </Button>
            </Link>
          </div>
          <Card className="mb-7">
            <Table hover responsive className="table-nowrap">
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Featured</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  return (
                    <tr key={product.id} className="align-middle">
                      <td className="fw-bold">{product.name}</td>
                      <td>{priceFormatter.format(product.price)}</td>
                      <td>{product.stock}</td>
                      <td>{product.featured && <AiFillStar />}</td>
                      <td className="d-flex justify-content-end align-items-center">
                        <Link to={"/admin/products/" + product.id}>
                          <Button
                            onClick={() => {
                              handleUpdate(product.id);
                            }}
                            className="bg-info rounded-circle text-white d-flex p-2 border-0 me-3"
                          >
                            <BiEdit />
                          </Button>
                        </Link>
                        <Button
                          onClick={() => {
                            modalConfirmation(product.id);
                          }}
                          className="bg-danger rounded-circle text-white d-flex p-2 border-0 me-3"
                        >
                          <BiTrash />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card>
        </Container>
      </main>
    </div>
  );
}
