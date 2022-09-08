import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/categories/:id" element={<Home />} />
				<Route path="/product/:id" element={<Product />} />
				<Route path="/register" element={<Home />} />
				<Route path="/about-our-project" element={<Home />} />
				<Route path="/admin" element={<Home />} />
				<Route path="/cart" element={<Home />} />
				<Route path="/chekout" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
