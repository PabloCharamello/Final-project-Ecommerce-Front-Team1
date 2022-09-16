import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../../components/Admin/Sidebar";
import { Card, Table, Container, Button } from "react-bootstrap";
import { BiEdit, BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdOutlineAddCircleOutline } from "react-icons/md";

export default function Categories() {
  const [categories, setCategories] = useState(null);

  const getCategories = async () => {
    const response = await axios({
      url: "/categories/",
      method: "GET",
    });
    setCategories(response.data);
  };

  const handleUpdate = async (categoryId) => {};

  const handleDelete = async (categoryId) => {
    await axios({
      url: "/categories/" + categoryId,
      method: "DELETE",
    });
  };

  // eslint-disable-next-line
  useEffect(() => getCategories, []);

  if (!categories) {
    return <>Loading...</>;
  }

  return (
    <div className="d-flex">
      <Sidebar />
      <main className="bg-surface-secondary w-100">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="pt-3">Categories</h1>
            <Link to={"/admin/categories/create"}>
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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => {
                  return (
                    <tr key={category.id} className="align-middle">
                      <td>{category.name}</td>
                      <td className="d-flex justify-content-end align-items-center">
                        <Link to={"/admin/categories/" + category.id}>
                          <Button
                            onClick={() => {
                              handleUpdate(category.id);
                            }}
                            className="bg-info rounded-circle text-white d-flex p-2 border-0 me-3"
                          >
                            <BiEdit />
                          </Button>
                        </Link>
                        <Button
                          onClick={() => {
                            handleDelete(category.id);
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
