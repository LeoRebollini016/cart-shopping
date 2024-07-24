import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/Home";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart.jsx";

const AppRouter = () => {
  return (
      <Routes basename={process.env.PUBLIC_URL}>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Productos" element={<ProductList />} />
          <Route path="/Cart" element={<Cart />} />
      </Routes>
    );
    
};
export default AppRouter;
