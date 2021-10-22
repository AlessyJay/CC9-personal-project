import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../style/loginStyle.css";
import axios from "axios";

function RegisterForm() {
  const [username, setUsername] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [tel, setTel] = useState(``);

  const register = (e) => {
    e.preventDefault();
    console.log(e);

    const formData = new FormData();
    formData.append(`username`, username);
    formData.append(`email`, email);
    formData.append(`password`, password);
    formData.append(`tel`, tel);
    axios(`http://localhost:8000/register`, { method: "POST", data: formData })
      .then(() => {
        console.log(`Successfully created!`);
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  return (
    <>
      <form onSubmit={(e) => register(e)}>
        <div className="loginForm">
          <h2>Register</h2>
          <div className="register">
            <div className="registerInput">
              <input
                type="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="registerInput">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="telephone"
                placeholder="Phone Number"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
            </div>
          </div>
          <hr
            style={{
              color: "white",
              width: "90%",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          />
          <button type="submit">Sign up</button>
          <p>
            <Link to="/login" style={{ color: "black" }}>
              Already have an account?
            </Link>
          </p>
          <p>@GREENT.inc 2021</p>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
