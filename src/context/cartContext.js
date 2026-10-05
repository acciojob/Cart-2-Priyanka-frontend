import React, {
  createContext,
  useContext,
  useReducer,
} from "react";

import products from "../data/products";

const CartContext = createContext();

const initialState = {
  cart: products.map((product) => ({
    ...product,
    quantity: 1,
  })),
};

function cartReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        ),
      };

    case "DECREMENT":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.id !== action.payload
        ),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  const incrementItem = (id) => {
    dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  const decrementItem = (id) => {
    dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const totalItems = state.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = state.cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        totalItems,
        totalAmount,
        incrementItem,
        decrementItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}