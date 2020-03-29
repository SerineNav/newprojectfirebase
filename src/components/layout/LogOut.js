import React from "react";
import { NavLink } from "react-router-dom";

function LogOut() {
  return (
    <div>
      <NavLink
        to="/logout"
        style={{
          textDecoration: "none",
          color: "#800000",
          fontWeight: "bold",
          marginLeft: "5px"
        }}
      >
        LogOut
      </NavLink>
    </div>
  );
}

export default LogOut;
