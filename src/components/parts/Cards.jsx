import React, { useState } from "react";
import calCurrency from "../../services/currency";
import { Link } from "react-router-dom";

function Cards(props) {
  const {
    item: { name, description, price, picture },
    edit,
  } = props;
  const [currency, setCurrency] = useState(`GBP`);

  const handleEdit = () => {
    {
      <div>
        <form>
          <h1>Name</h1>
          <h1>description</h1>
        </form>
      </div>;
    }
  };

  return (
    <>
      <div className="cards" /*id="allCards"*/>
        <div
          className={`card`}
          style={{ backgroundImage: picture }} /*id="Africa"*/
        >
          <h2
            style={{ textAlign: "center", fontWeight: "700", fontSize: "38px" }}
          >
            {name}
          </h2>
          <img src={picture} alt={name} />
          <hr style={{ color: "black", width: "80%" }} />
          <p>{description}</p>
          <hr style={{ color: "black", width: "80%" }} />
          <div className="buyAdd">
            {edit ? (
              <Link to="/editProduct">
                <button className="detailBtn">Edit</button>
              </Link>
            ) : (
              <Link to="/productDetail">
                <button className="detailBtn">More Detail</button>
              </Link>
            )}

            <hr style={{ color: "black" }} />
            <button>Buy</button>
            <button>Cart</button>
          </div>
          <hr style={{ color: "black", width: "80%" }} />
          <div className="price">
            <h1>
              From:{" "}
              <span id="priceAfrica">{calCurrency[currency](+price)}</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
