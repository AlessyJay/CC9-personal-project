import React from "react";

function AdminNav() {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          flex: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: "72px" }}>GREENT</h1>
        <h1 style={{ fontSize: "34px" }}>Admin Site</h1>
      </nav>
    </div>
  );
}

export default AdminNav;
