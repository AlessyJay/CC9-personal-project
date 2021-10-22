import React from "react";
import { Link } from "react-router-dom";
import AdminNav from "./AdminNav";

function Admin() {
  return (
    <div className="admin-bg">
      <AdminNav />
      <div className="container">
        <div className="align-btn">
          <Link to="/addAndEdit">
            <button className="add">Add new product</button>
          </Link>
          <Link to="/customer">
            <button className="add">View customer</button>
          </Link>
          <Link to="/">
            <button className="backHome">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Admin;
