import React from "react";
import { useCart } from "../context/cartContext";

function CartItem({ item }) {
  const {
    incrementItem,
    decrementItem,
    removeItem,
  } = useCart();

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h3>{item.name}</h3>

        <p id={`cart-item-price-${item.id}`}>
          ₹{item.price}
        </p>
      </div>

      <div className="quantity-section">
        <button
          id={`decrement-btn-${item.id}`}
          onClick={() =>
            decrementItem(item.id)
          }
        >
          -
        </button>

        <span className="quantity">
          {item.quantity}
        </span>

        <button
          id={`increment-btn-${item.id}`}
          onClick={() =>
            incrementItem(item.id)
          }
        >
          +
        </button>
      </div>

      <div className="item-total">
        <span
          id={`cart-amount-${item.id}`}
        >
          ₹{item.price * item.quantity}
        </span>
      </div>

      <button
        className="remove-btn"
        onClick={() =>
          removeItem(item.id)
        }
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;