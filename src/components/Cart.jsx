import React, { useContext} from "react";
import CartContext from '../context/CartContext'
const Cart = () => {
  const { cart, deleteCart } = useContext(CartContext)
  if (cart.length === 0){
    return <h1 className="text-4xl font-bold text-center">El carrito esta vacio.</h1>
  }
  return (
    <>
    {console.log(cart)}
      <h1 className="p-4 font-bold text-2xl">Carrito</h1>
      <div className="grid grid-cols-1 gap-4">
      {cart.map((products) => (
        <div key={products.id} className="flex items-center border-2 border-gray-300 p-4 rounded-lg">
          <img alt={products.title} src={products.image} className="h-10 w-10 object-contain"></img>
          <h2>{products.title}</h2>
          <div className="text-right ml-auto">
          <span className="font-bold text-xl text-gray-900 block">US${products.price}</span>
          <button onClick={() => deleteCart(products.id)} className="p-2 border-2 border-black bg-red-600 text-white rounded mt-2 hover:bg-red-700 cursor-pointer">Quitar del carrito</button>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};
export default Cart;