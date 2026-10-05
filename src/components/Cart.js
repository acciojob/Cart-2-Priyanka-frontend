import React from "react";
import { useCart } from "../context/cartContext";
import CartItem from "./cartItem";

function Cart() {
  const {
    cart,
    totalAmount,
    clearCart,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Cart is currently empty</h2>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div
        id="cart-items-list"
        className="cart-items-list"
      >
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))}
      </div>

      <div className="cart-footer">
        <div className="total-section">
          <span>Total Amount</span>

          <strong id="cart-total-amount">
            ₹{totalAmount}
          </strong>
        </div>

        <button
          id="clear-all-cart"
          className="clear-cart-btn"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;