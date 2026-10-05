import React from "react";

import Navbar from "./Navbar";
import Cart from "./Cart";
import "../styles/App.css";

function App() {
  return (
    <div id="main">
      <Navbar />

      <main className="main-content">
        <h1>Shopping Cart</h1>

        <Cart />
      </main>
    </div>
  );
}

export default App;