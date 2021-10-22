import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="navBar">
        <h1>GREENT</h1>
        <div className="menu">
          <h3 className="btn btn-home">
            <Link to="/">Home</Link>
          </h3>
          <h3 className="btn btn-shop">
            <a href="#shop">Shop</a>
          </h3>
          <h3 className="btn btn-contact">
            <a href="#contactUs">Contact us</a>
          </h3>
          <h3 className="btn btn-login">
            <Link to="/login">Login</Link>
          </h3>
        </div>
      </nav>
    </>
  );
}

export default Nav;
