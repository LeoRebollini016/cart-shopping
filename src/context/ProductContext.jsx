import React, { useEffect, createContext, useState } from "react";
export const ProductContext = createContext();
export function ProductProvider(props) {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((articulos) => setProductos(articulos));
  }, []);
  const getRandomProducts = (count) => {
    const randomProducts = [...productos].sort(() => 0.5 - Math.random());
    return randomProducts.slice(0, count);
  }
  return (
    <ProductContext.Provider value={{ productos, getRandomProducts }}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
