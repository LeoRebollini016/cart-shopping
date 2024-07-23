import React, { useContext, useEffect, useState } from "react";
import { CartContext } from '../context/CartContext';
import { ProductContext } from "../context/ProductContext";
const ProductList = () => {
  const { productos } = useContext(ProductContext)
  const { cart, addCart, deleteCart } = useContext(CartContext);
 
  const IsInCart = (productId) => {
    return cart.some(product => product.id === productId);
  }
  return (
    <>
      <h1 className="p-4 text-2xl font-bold">Lista de productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="rounded-lg p-4 border-2 border-black m-2 gap-2 w-auto h-auto overflow-hidden flex flex-col"
          >
            <img
              className="h-48 w-full object-contain"
              alt={producto.title}
              src={producto.image}
            ></img>
            <div className="p-4 flex flex-col flex-grow">
              <h1 className="text-xl font-bold mb-2">{producto.title}</h1>
              <p className="text-sm line-clamp-3 hover:line-clamp-none justify-between flex-grow">
                {producto.description}
              </p>
              <span className="font-bold text-xl text-gray-900 block my-2">
                US${producto.price}
              </span>
              <button
                onClick={() => IsInCart(producto.id) ? deleteCart(producto.id) : addCart(producto)}
                className={`p-2 text-center float-right border-2 rounded border-black cursor-pointer hover:border-white hover:opacity-95 w-full ${IsInCart(producto.id) ?'bg-red-500' :'bg-green-600'}`}
              >
                {IsInCart(producto.id) ? "Eliminar del carrito" : "Añadir al carrito"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default ProductList;
