import { createContext, useState, useEffect } from "react";
import axios from "axios";

const MixedFunction = createContext();

const MixedFunctionProvider = () => {
  const [list, setList] = useState([]);
  const [add, setAdd] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const read = await axios.get(`http://localhost:8000/product`);
      setList(read.data.List);
    };
    fetch();
  }, []);

  function Add(product) {
    const index = list.findIndex((item) => item.id === product.id);
    const newCart = [...list];
    if (index > -1) {
      newCart[index] = { ...newCart[index], amount: newCart[index].amount + 1 };
    }
    newCart.push({ ...product, amount: 1 });
    setAdd(newCart);
  }
};

export { MixedFunction, MixedFunctionProvider };
