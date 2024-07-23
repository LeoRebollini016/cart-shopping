import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider(props) {
  const [cart, setCart] = useState([]);
  function addCart(product) {
    setCart((Cart) => [...Cart, {
      title: product.title,
      id: product.id,
      description: product.description,
      image: product.image,
      price: product.price
    }]);
  }
  function deleteCart(cartId) {
    setCart(cart.filter((cart) => cart.id !== cartId))
  }
  
  return (
    <CartContext.Provider value={{ cart, addCart, deleteCart }}>
      {props.children}
    </CartContext.Provider>
  );
}
export default CartContext;