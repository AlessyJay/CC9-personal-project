import "../../style/cartStyle.css";
import React from "react";
import { Link } from "react-router-dom";

function CartIcon() {
  return (
    <>
      <div className="cart">
        <Link to="/cart">
          <img
            src="https://image.flaticon.com/icons/png/512/2169/2169831.png"
            alt=""
          />
        </Link>
      </div>
    </>
  );
}

export default CartIcon;
