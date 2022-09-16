import axios from "axios";
import { useState, useEffect } from "react";
import { Row, Col, Card, Table, Container } from "react-bootstrap";
import { BiCreditCard, BiDownArrowCircle, BiUpArrowCircle } from "react-icons/bi";
import { HiCursorClick, HiShoppingBag } from "react-icons/hi";
import { MdOutlineCreditScore } from "react-icons/md";
import { format, parseJSON } from "date-fns";
import Sidebar from "../../components/Admin/Sidebar";

const priceFormatter = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function AdminInex() {
  const [orders, setOrders] = useState(null);
  const getOrdersFromApi = async () => {
    const response = await axios({
      url: "/orders/",
      method: "GET",
    });
    setOrders(response.data);
  };

  // eslint-disable-next-line
  useEffect(() => getOrdersFromApi, []);

  if (!orders) {
    return <>Loading...</>;
  }

  return (
    <div className="d-flex">
      <Sidebar />
      <main className="bg-surface-secondary w-100">
        <Container>
          <h1 className="pt-3">Dashboard</h1>
          <Row className="g-6 mb-6 py-4">
            <Col xl={3} sm={6}>
              <Card className="">
                <Card.Body>
                  <Row>
                    <Col className="text-start">
                      <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                        Income
                      </span>
                      <span className="h3 font-bold mb-0">$75,090</span>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-end">
                      <div className="bg-primary p-3 rounded-circle text-white">
                        <BiCreditCard size={"1.5rem"} />
                      </div>
                    </Col>
                  </Row>
                  <div className="mt-2 mb-0 text-sm">
                    <span className="badge badge-pill bg-success text-white me-2 d-inline-flex align-items-center">
                      <BiUpArrowCircle className="me-1" />
                      13%
                    </span>
                    <span className="text-nowrap text-xs text-muted">Since last month</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} sm={6}>
              <Card className="">
                <Card.Body>
                  <Row>
                    <Col className="text-start">
                      <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                        Sales
                      </span>
                      <span className="h3 font-bold mb-0">15</span>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-end">
                      <div className="bg-success p-3 rounded-circle text-white">
                        <HiShoppingBag size={"1.5rem"} />
                      </div>
                    </Col>
                  </Row>
                  <div className="mt-2 mb-0 text-sm">
                    <span className="badge badge-pill bg-success text-white me-2 d-inline-flex align-items-center">
                      <BiUpArrowCircle className="me-1" />
                      30%
                    </span>
                    <span className="text-nowrap text-xs text-muted">Since last month</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} sm={6}>
              <Card className="">
                <Card.Body>
                  <Row>
                    <Col className="text-start">
                      <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                        Convertion Rate
                      </span>
                      <span className="h3 font-bold mb-0">2.49</span>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-end">
                      <div className="bg-info p-3 rounded-circle text-white">
                        <MdOutlineCreditScore size={"1.5rem"} />
                      </div>
                    </Col>
                  </Row>
                  <div className="mt-2 mb-0 text-sm">
                    <span className="badge badge-pill bg-success text-white me-2 d-inline-flex align-items-center">
                      <BiUpArrowCircle className="me-1" />
                      84.7%
                    </span>
                    <span className="text-nowrap text-xs text-muted">Since last month</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} sm={6}>
              <Card className="">
                <Card.Body>
                  <Row>
                    <Col className="text-start">
                      <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                        Sessions
                      </span>
                      <span className="h3 font-bold mb-0">1767</span>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-end">
                      <div className="bg-secondary p-3 rounded-circle text-white">
                        <HiCursorClick size={"1.5rem"} />
                      </div>
                    </Col>
                  </Row>
                  <div className="mt-2 mb-0 text-sm">
                    <span className="badge badge-pill bg-danger text-white me-2 d-inline-flex align-items-center">
                      <BiDownArrowCircle className="me-1" />
                      84.7%
                    </span>
                    <span className="text-nowrap text-xs text-muted">Since last month</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Card className="mb-7">
            <Card.Header>
              <h5 className="mb-0">Orders</h5>
            </Card.Header>
            <Table hover responsive className="table-nowrap">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Total</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => {
                  return (
                    <tr key={order.id}>
                      <td>
                        {order.user.firstname} {order.user.lastname}
                      </td>
                      <td>{format(parseJSON(order.createdAt), "MM/dd/yyyy - HH:m:s")}</td>
                      <td>{priceFormatter.format(order.total)}</td>
                      <td>{order.status}</td>
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

export default AdminInex;
