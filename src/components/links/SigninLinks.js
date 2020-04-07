import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function SigninLinks() {
  return (
    <div>
      <Nav className="mr-auto">
        <NavLink to="/signup" className="nav-link text-white ml-5 ">
          SignUp
        </NavLink>
        <NavLink to="/signin" className="nav-link text-white ml-5 ">
          SignIn
        </NavLink>
      </Nav>
    </div>
  );
}

export default SigninLinks;
