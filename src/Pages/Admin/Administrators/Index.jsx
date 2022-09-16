import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/Admin/Sidebar";
import { Card, Table, Container, Button } from "react-bootstrap";
import { BiEdit, BiTrash } from "react-icons/bi";
import { MdOutlineAddCircleOutline } from "react-icons/md";

export default function AdminAdministrators() {
  const [administrators, setAdministrators] = useState(null);
  const getAdministratorsFromApi = async () => {
    const response = await axios({
      url: "/admins/",
      method: "GET",
    });
    setAdministrators(response.data);
  };

  const handleDelete = async (adminId) => {
    const response = await axios({
      url: "/admins/" + adminId,
      method: "DELETE",
    });
    if (response.statusText === "OK") {
      setAdministrators(administrators.filter((admin) => admin.id !== adminId));
    }
  };

  // eslint-disable-next-line
  useEffect(() => getAdministratorsFromApi, []);

  if (!administrators) {
    return <>Loading...</>;
  }

  return (
    <div className="d-flex">
      <Sidebar />
      <main className="bg-surface-secondary w-100">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="pt-3">Administrators</h1>
            <Link to={"/admin/administrators/create"}>
              <Button className="bg-primary rounded-circle text-white d-flex p-2 border-0 me-3">
                <MdOutlineAddCircleOutline size="1.5rem" />
              </Button>
            </Link>
          </div>
          <Card className="mb-7">
            <Table hover responsive className="table-nowrap">
              <thead className="thead-light">
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {administrators.map((admin) => {
                  return (
                    <tr key={admin.id} className="align-middle">
                      <td className="fw-bold">{admin.firstname}</td>
                      <td>{admin.lastname}</td>
                      <td>{admin.email}</td>
                      <td className="d-flex justify-content-end align-items-center">
                        <Link to={"/admin/administrators/" + admin.id}>
                          <Button className="bg-info rounded-circle text-white d-flex p-2 border-0 me-3">
                            <BiEdit />
                          </Button>
                        </Link>
                        <Button
                          onClick={() => {
                            handleDelete(admin.id);
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
