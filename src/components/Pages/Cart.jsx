import React, { useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <div class="backgroundCart">
        <div class="container">
          <div class="header">
            <h1 class="cart">Cart</h1>
            <h3 class="con continued">
              <Link to="/" style={{ color: "black" }}>
                Continue shopping
              </Link>
            </h3>
          </div>
          <div class="list">
            <h1>Your cart is empty</h1>
          </div>
          <hr />
          <div class="total">
            <h1>Total: </h1>
            <h2>£0.00</h2>
          </div>
          <div class="proceed">
            <button id="checkout">
              <Link to="/checkout">Checkout</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
