import React from "react";

function Page1({ children }) {
  return (
    <>
      <div className="bg1Section">
        <div className="background1" id="bg1">
          <div className="container">{children}</div>
        </div>
      </div>
    </>
  );
}

export default Page1;
