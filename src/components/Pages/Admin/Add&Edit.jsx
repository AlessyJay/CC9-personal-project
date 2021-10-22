import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminNav from "./AdminNav";
import axios from "axios";
import Cards from "../../parts/Cards";

function Add() {
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      const read = await axios.get(`http://localhost:8000/product`);
      setList(read.data.List);
    };
    fetch();
  }, []);
  return (
    <>
      <AdminNav />
      <div className="container">
        <div
          className="edit-btn-function"
          style={{
            display: "flex",
            flex: "auto",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <label htmlFor="#checkEdit" style={{ fontSize: "34px" }}>
            {edit ? "Disable" : "Enable"} Editing
          </label>
          <input
            className={`color ${edit ? "blue" : "red"}`}
            onClick={() => (edit == false ? setEdit(true) : setEdit(false))}
            type="checkbox"
            id="checkEdit"
          />
        </div>
        <div className="itemList">
          {list?.map((item) => (
            <Cards key={item.id} item={item} edit={edit} />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/add">
            <button className="add">Add</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Add;
