import React from "react";

function Page2({ children }) {
  return (
    <>
      <div className="bg2Section">
        <div className="bg2Section">
          <div className="background2" id="bg2">
            <div className="container">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page2;
