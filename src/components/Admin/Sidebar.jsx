import { BiLogOut, BiTable } from "react-icons/bi";
import { BsSpeedometer } from "react-icons/bs";
import { IoGrid, IoPeopleCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { unsetUser } from "../../redux/user/userSlice";

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    dispatch(unsetUser());
    navigate("/");
  };
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}>
      <CDBSidebar textColor="#fff" className="bg-dark">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <Link
            to="/admin"
            className="text-decoration-none logoSidebar"
            style={{ color: "inherit" }}
          >
            Hack Design
          </Link>

          {/* <Link
            to="/admin"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span className="fs-4 logoSidebar">Hack Design</span>
          </Link> */}
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/categories" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Categories</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/products" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/administrators" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Administrators</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <ul className="nav nav-pills flex-column text-start m-auto">
            <li>
              <button onClick={handleLogout} className="m-auto nav-link text-white text-start">
                <BiLogOut className="me-3" />
                Logout
              </button>
            </li>
          </ul>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>

    // Dejo el sidebar anterior en caso quieran volver a usarlo.
    // <>
    //   <div
    //     className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark position-sticky top-0"
    //     style={{ width: "280px", height: "100vh" }}
    //   >
    //     <Link
    //       to="/admin"
    //       className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
    //     >
    //       <span className="fs-4 logoSidebar">Hack Design</span>
    //     </Link>
    //     <hr />

    //     <ul className="nav nav-pills flex-column mb-auto text-start">
    //       <li>
    //         <Link to="/admin" className="nav-link text-white">
    //           <BsSpeedometer className="me-3" />
    //           Dashboard
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/admin/categories" className="nav-link text-white">
    //           <BiTable className="me-3" />
    //           Categories
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/admin/products" className="nav-link text-white">
    //           <IoGrid className="me-3" />
    //           Products
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/admin/administrators" className="nav-link text-white">
    //           <IoPeopleCircle className="me-3" />
    //           Administrators
    //         </Link>
    //       </li>
    //     </ul>
    //     <ul className="nav nav-pills flex-column text-start">
    //       <li>
    //         <button onClick={handleLogout} className="nav-link text-white text-start">
    //           <BiLogOut className="me-3" />
    //           Logout
    //         </button>
    //       </li>
    //     </ul>
    //   </div>
    // </>
  );
}
