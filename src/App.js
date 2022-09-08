import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Category from "./Pages/Category";
import ShoppingCart from "./Pages/ShoppingCart";
import ChekOut from "./Pages/ChekOut";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/register" element={<Home />} />
        <Route path="/about-our-project" element={<Home />} />
        <Route path="/admin" element={<Home />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/chekout" element={<ChekOut />} />
      </Routes>
    </div>
  );
}

export default App;
