import { useState } from "react";
import "./App.css";
import Home from "./pages/home";
import AddProduct from "./pages/AddProduct";
import ProductDetailPage from "./pages/ProductDetailPage";
import Cart from "./pages/Cart";
import Layout from "./components/Layout";
import Checkout from "./pages/Checkout";
import { Routes, Route } from "react-router-dom";
import OrderSuccess from "./pages/OrderSuccess";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/addproduct" element={<AddProduct />}></Route>
        <Route path="/viewproduct/:id" element={<ProductDetailPage />}></Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/ordersuccess" element={<OrderSuccess />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
