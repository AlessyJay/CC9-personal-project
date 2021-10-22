import axios from "axios";
import React, { useState, useEffect } from "react";
import AdminNav from "../Admin/AdminNav";
import nature from "../../../imgs/nature.jpeg";

function CustomerList() {
  const [list, setList] = useState([]);
  console.log(list);
  useEffect(() => {
    const getCustomer = async () => {
      const read = await axios.get(`http://localhost:8000/user`);
      setList(read.data.List);
    };
    getCustomer();
  }, []);
  return (
    <>
      <AdminNav />
      <div className="container">
        <hr style={{ border: "solid 1px black" }} />
        {list?.map((item) => (
          <div className="List">
            <img className="imageUser" src={nature} alt="" />
            <div className="userDetail">
              <h2>Firstname: {item.firstname}</h2>
              <h2>Lastname: {item.lastname}</h2>
              <h2>username: {item.username}</h2>
              <h2>email: {item.email}</h2>
              <h2>tel: {item.tel}</h2>
              <div>
                <hr style={{ height: "100%" }} />
              </div>
              <div className="buyMethod">
                <h3>Payment Method: </h3>
                <h3>Location: </h3>
                <h3>Paid: </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CustomerList;
