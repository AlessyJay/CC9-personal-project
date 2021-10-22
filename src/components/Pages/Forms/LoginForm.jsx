import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { setToken } from "../../localStorage/localStorage";
import { AuthContext } from "../../authContext/AuthContext";
import "../../../style/loginStyle.css";
import jwtDecode from "jwt-decode";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const history = useHistory();

  console.log(email, password);

  const setUser = useContext(AuthContext);
  const login = async (e) => {
    try {
      e.preventDefault();
      const read = await axios.post(`http://localhost:8000/login`, {
        data: { email, password },
      });
      setToken(read.data.token);
      setUser(jwtDecode(read.data.token));
      history.push(`/`);
    } catch (err) {
      if ((err.response !== err.response.status) === 400) {
        setTimeout(
          () => alert(`Invalid email or password, please check again.`),
          8000
        );
      }
    }
  };
  return (
    <>
      <form onSubmit={login}>
        <div className="loginForm">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <hr
            style={{
              color: "white",
              width: "90%",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          />
          <button type="submit">Sign in</button>
          <p>
            <Link to="/register" style={{ color: "black" }}>
              Doesn't have an account?
            </Link>
          </p>
          <p>@GREENT.inc 2021</p>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
