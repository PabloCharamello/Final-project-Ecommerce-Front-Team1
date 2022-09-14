import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminProducts() {
  const [products, setProducts] = useState(null);

  const getProductFromApi = async () => {
    const response = await axios({
      url: "/products/",
      method: "GET",
    });
    setProducts(response.data);
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
