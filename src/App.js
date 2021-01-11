import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./pages/Products";
import Cart from "./pages/Cart";
import CartProvider from "./components/CartProvider";

export default function App() {
  const index = () => <h2>Home</h2>;

  return (
    <CartProvider>
      <Router>
        <Header />
        <Route path="/" exact component={index} />
        <Route path="/products" component={Product} />
        <Route path="/cart" component={Cart} />
      </Router>
    </CartProvider>
  );
}
