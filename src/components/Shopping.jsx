import axios from "axios";
import React, { useState, useEffect } from "react";
import Cards from "./parts/Cards";
import CartIcon from "./parts/CartIcon";
import DetailsBeforeCards from "./parts/DetailsBeforeCards";
import Search from "./parts/Search";

function Shopping({ handleChangeCurrency, currency }) {
  const [list, setList] = useState([]);
  console.log(list);

  useEffect(() => {
    const getList = async () => {
      try {
        const read = await axios.get("http://localhost:8000");
        console.log(`This is read`, read);
        setList(read.data.List);
      } catch (err) {
        console.dir(err);
      }
    };
    getList();
  }, []);

  return (
    <>
      <CartIcon />
      <Search handleChangeCurrency={handleChangeCurrency} />
      <DetailsBeforeCards />
      {list?.map((item) => (
        <Cards key={item.id} item={item} />
      ))}
    </>
  );
}

export default Shopping;
