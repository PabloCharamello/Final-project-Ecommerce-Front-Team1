import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Category from "./Pages/Category";
import ShoppingCart from "./Pages/ShoppingCart";
import ShippingInfo from "./Pages/ShippingInfo";
import Register from "./Pages/Register";
import AboutOurProject from "./Pages/AboutOurProject";
import OrderHistory from "./Pages/OrderHistory";

import AdminInex from "./Pages/Admin/Index";
import AdminProducts from "./Pages/Admin/Products/Index";
import AdminCreateProduct from "./Pages/Admin/Products/Create";
import AdminEditProducts from "./Pages/Admin/Products/Edit";
import AdminAdministrators from "./Pages/Admin/Administrators/Index";
import AdminCreateAdministrators from "./Pages/Admin/Administrators/Create";
import AdminEditAdministrators from "./Pages/Admin/Administrators/Edit";
import AdminCategories from "./Pages/Admin/Categories/Index";
import AdminCreateCategories from "./Pages/Admin/Categories/Create";
import AdminEditCategories from "./Pages/Admin/Categories/Edit";

function App() {
  const user = useSelector((state) => state.user);

  axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
  axios.defaults.headers.common["Authorization"] = "Bearer " + user.token;

  return (
    <div className="App">
      <Routes>
        <Route
          element={
            <ProtectedRoute
              isAllowed={!user.token || (user.token && !user.isAdmin)}
              redirectPath="/admin"
            />
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/category/:slug" element={<Category />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about-our-project" element={<AboutOurProject />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={user.token && !user.isAdmin} />}>
          <Route path="/shipping" element={<ShippingInfo />} />
          <Route path="/order-history" element={<OrderHistory />} />
        </Route>

        <Route element={<ProtectedRoute isAllowed={user.token && user.isAdmin} />}>
          <Route path="/admin/" element={<AdminInex />} />
          <Route path="/admin/products/" element={<AdminProducts />} />
          <Route path="/admin/products/create/" element={<AdminCreateProduct />} />
          <Route path="/admin/products/:id" element={<AdminEditProducts />} />
          <Route path="/admin/categories/" element={<AdminCategories />} />
          <Route path="/admin/categories/create" element={<AdminCreateCategories />} />
          <Route path="/admin/categories/:id" element={<AdminEditCategories />} />
          <Route path="/admin/administrators/" element={<AdminAdministrators />} />
          <Route path="/admin/administrators/create" element={<AdminCreateAdministrators />} />
          <Route path="/admin/administrators/:id" element={<AdminEditAdministrators />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
