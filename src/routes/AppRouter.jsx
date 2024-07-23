import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart.jsx";

const AppRouter = () => {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Productos" element={<ProductList />} />
          <Route path="/Cart" element={<Cart />} />
      </Routes>
    );
    
};
export default AppRouter;
