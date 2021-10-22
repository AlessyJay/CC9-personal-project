import React from "react";
import RegisterForm from "./RegisterForm";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <div className="background">
        <div className="container">
          <h1>GREENT</h1>
          <RegisterForm />
          <Link to="/">
            <button className="homeBtn">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
