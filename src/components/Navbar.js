import React from "react";
import { useCart } from "../context/cartContext";

function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        🛒 My Cart
      </div>

      <div className="navbar-cart">
        <span className="cart-icon">🛒</span>

        <span id="nav-cart-item-count">
          {totalItems}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;