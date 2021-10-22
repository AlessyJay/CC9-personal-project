import React from "react";

function Page3({ children }) {
  const activate = (e) => {
    const style = {
      transition: "400ms",
    };
    e.target = style;
  };

  return (
    <>
      <div className="background3" id="shop" onMouseOver={activate}>
        <div className="container">{children}</div>
      </div>
    </>
  );
}

export default Page3;
