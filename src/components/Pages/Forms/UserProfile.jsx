import React from "react";
import europe from "../../../imgs/europe.jpeg";
import { Link } from "react-router-dom";

function UserProfile() {
  return (
    <div>
      <nav>
        <h1 style={{ fontSize: "78px", textAlign: "center" }}>GREENT</h1>
        <hr
          style={{
            width: "80%",
            border: "solid 1px black",
          }}
        />
      </nav>
      <div className="container">
        <div className="userList">
          <img src={europe} alt="user image" className="userImage" />
          <label className="labelName" htmlFor="#username">
            Username
          </label>
          <input className="inputText" type="text" id="username" />
          <label className="labelName" htmlFor="#email">
            Email
          </label>
          <input className="inputText" type="text" id="email" />
          <label className="labelName" htmlFor="#firstname">
            Firstname
          </label>
          <input className="inputText" type="text" id="firstname" />
          <label className="labelName" htmlFor="#lastname">
            Lastname
          </label>
          <input className="inputText" type="text" id="lastname" />
          <label className="labelName" htmlFor="#address">
            Address
          </label>
          <input className="inputText" type="text" id="address" />
          <div className="userBtn">
            <Link to="/">
              <button className="backHome" style={{ marginLeft: "30px" }}>
                Home
              </button>
            </Link>
            <button className="add" style={{ marginLeft: "30px" }}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
