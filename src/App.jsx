import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./pages/Shop.jsx";
import Home from "./pages/Home.jsx";
import Categories from "./pages/Categories.jsx";
import Sale from "./pages/Sale.jsx";
import { Routes, Route } from "react-router-dom";

import "./index.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/sale" element={<Sale />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
