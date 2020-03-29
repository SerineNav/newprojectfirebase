import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function SignUp() {
  return (
    <div>
      <Nav className="justify-content-center" activeKey="/">
        <Nav.Item>
          <NavLink to="/signup" className="nav-link text-white ml-5">
            SignUp
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/signin" className="nav-link text-white ml-5 ">
            SignIn
          </NavLink>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default SignUp;
