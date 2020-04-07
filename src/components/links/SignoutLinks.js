import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function SignoutLinks() {
  return (
    <div>
      <Nav className="mr-auto">
        <NavLink to="/home" className="nav-link text-white ml-5">
          Home
        </NavLink>
        <NavLink to="/create" className="nav-link text-white ml-5">
          User
        </NavLink>
        <NavLink
          to="/logout"
          style={{
            textDecoration: "none",
            color: "#800000",
            fontWeight: "bold",
            marginLeft: "25px",
            marginTop: "7px",
          }}
        >
          LogOut
        </NavLink>
      </Nav>
    </div>
  );
}

export default SignoutLinks;
