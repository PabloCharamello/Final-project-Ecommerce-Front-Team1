import { useEffect, useState } from "react";
import axios from "axios";

export default function Categories() {
  const [categories, setCategories] = useState(null);

  const getCategories = async () => {
    const response = await axios({
      url: "/categories/",
      method: "GET",
    });
    setCategories(response.data);
  };

  const handleDelete = async (categoryId) => {
    const response = await axios({
      url: "/categories/" + categoryId,
      method: "DELETE",
    });
  };

  console.log(categories);
  // eslint-disable-next-line
  useEffect(() => getCategories, []);

  if (!categories) {
    return <>Loading...</>;
  }

  return (
    <div className="card-body">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => {
            return (
              <tr key={category.id}>
                <td>{category.name}</td>
                <td>
                  <button>Edit</button>
                  <button
                    onClick={() => {
                      handleDelete(category.id);
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
