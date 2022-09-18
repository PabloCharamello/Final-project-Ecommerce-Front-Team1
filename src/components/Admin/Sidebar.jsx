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
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/">
              <CDBSidebarMenuItem icon="tachometer-alt">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/admin/categories">
              <CDBSidebarMenuItem icon="sitemap">Categories</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/admin/products">
              <CDBSidebarMenuItem icon="couch">Products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/admin/administrators">
              <CDBSidebarMenuItem icon="users-cog">Administrators</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter>
          <CDBSidebarMenuItem onClick={handleLogout} icon="sign-out-alt" className="mb-3">
            Log out
          </CDBSidebarMenuItem>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}
