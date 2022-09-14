import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Category from "./Pages/Category";
import ShoppingCart from "./Pages/ShoppingCart";
import ShippingInfo from "./Pages/ShippingInfo";
import Register from "./Pages/Register";
import AboutOurProject from "./Pages/AboutOurProject";
import AdminProducts from "./Pages/Admin/Products/Index";
import axios from "axios";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);

  axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
  axios.defaults.headers.common["Authorization"] = "Bearer " + user.token;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:slug" element={<Category />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-our-project" element={<AboutOurProject />} />
        <Route path="/admin" element={<Home />} />
        <Route path="/admin/products/" element={<AdminProducts />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/shipping" element={<ShippingInfo />} />
      </Routes>
    </div>
  );
}

export default App;
