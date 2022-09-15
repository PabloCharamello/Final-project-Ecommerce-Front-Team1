import { BiLogOut, BiTable } from "react-icons/bi";
import { BsSpeedometer } from "react-icons/bs";
import { IoGrid, IoPeopleCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark position-sticky"
        style={{ width: "280px", height: "100vh" }}
      >
        <Link
          to="/admin"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">Hack Design</span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto text-start">
          <li>
            <Link to="/admin" className="nav-link text-white">
              <BsSpeedometer className="me-3" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/categories" className="nav-link text-white">
              <BiTable className="me-3" />
              Categories
            </Link>
          </li>
          <li>
            <Link to="/admin/products" className="nav-link text-white">
              <IoGrid className="me-3" />
              Products
            </Link>
          </li>
          <li>
            <Link to="/admin/administrators" className="nav-link text-white">
              <IoPeopleCircle className="me-3" />
              Administrators
            </Link>
          </li>
        </ul>
        <ul className="nav nav-pills flex-column text-start">
          <li>
            <Link to="#" className="nav-link text-white text-start">
              <BiLogOut className="me-3" />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
