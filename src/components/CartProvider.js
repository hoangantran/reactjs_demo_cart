import React, { useState, useEffect } from "react";
import CartContext from "../context/CartContext";

localStorage.setItem("cart", JSON.stringify([]));
export default function CartProvider(props) {
  const data = localStorage.getItem("cart");
  const [cart, setCart] = useState(JSON.parse(data));

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  
  function addToCart(product) {
    setCart(cart.concat(product));
    console.log(cart);
  }

  return (
    <CartContext.Provider value={{ cart: cart, addToCart: addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
}