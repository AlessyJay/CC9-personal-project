import React from "react";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="background">
        <div className="container">
          <h1>GREENT</h1>
          <LoginForm />
          <Link to="/">
            <button className="homeBtn">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
