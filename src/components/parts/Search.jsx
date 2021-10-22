import React from "react";

function Search({ handleChangeCurrency }) {
  return (
    <>
      <div className="search">
        <div className="currency">
          <select name="" id="cash" onChange={handleChangeCurrency}>
            <option value="GBP">£ GBP</option>
            <option value="USD">$ USD</option>
            <option value="EUR">€ EUR</option>
            <option value="AUD">$ AUD</option>
            <option value="CAD">$ CAD</option>
            <option value="CAD">zł PLN</option>
            <option value="CAD">zł THB</option>
          </select>
        </div>
        <h1>Search:</h1>
        <input type="search" className="lineSearch" placeholder="Search" />
      </div>
      <hr
        style={{ color: "black", border: "2px solid black", marginTop: "1%" }}
      />
    </>
  );
}

export default Search;
