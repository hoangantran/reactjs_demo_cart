import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

export default function Header() {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink>
            <Link to="/">Home</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/products">Products</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <CartContext.Consumer>
              {({ cart }) => <Link to="/cart">Cart({cart.length})</Link>}
            </CartContext.Consumer>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}
