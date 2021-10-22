import React, { useState } from "react";
import AdminNav from "./AdminNav";
import axios from "axios";

function AddForm() {
  const [name, setName] = useState(``);
  const [description, setDescription] = useState(``);
  const [price, setPrice] = useState(``);
  const [picture, setPicture] = useState(``);

  const post = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(`name`, name);
    formData.append(`description`, description);
    formData.append(`price`, price);
    formData.append(`picture`, picture);
    try {
      const create = await axios.post(`http://localhost:8000/create`, {
        data: formData,
      });
      console.log(`Successfully created!`);
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <>
      <AdminNav />
      <div className="container">
        <div className="formControl">
          <form onSubmit={post}>
            <div
              className="left"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <input
                className="insert"
                type="text"
                placeholder="Continent"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="insert"
                type="file"
                value={picture}
                onChange={(e) => setPicture(e.target.value)}
              />
              <input
                className="insert"
                type="Price"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="right">
              <div className="des">
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <button className="createBtn" type="submit">
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddForm;
