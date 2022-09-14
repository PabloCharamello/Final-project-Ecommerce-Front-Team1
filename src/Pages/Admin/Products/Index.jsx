import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function AdminProducts() {
  const [products, setProducts] = useState(null);
  const user = useSelector((state) => state.user);
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
    const response = await axios({
      url: "/products/" + productId,
      method: "PATCH",
    });
  };

  console.log(products);
  // eslint-disable-next-line
  useEffect(() => getProductFromApi, []);

  if (!products) {
    return <>Loading...</>;
  }

  return (
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
                  <button
                    onClick={() => {
                      handleUpdate(product.id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(product.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
