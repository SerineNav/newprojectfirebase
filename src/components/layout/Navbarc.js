import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "./mt.png";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import SignUp from "./SignUp";
import LogOut from "./LogOut";

function Navbarc() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Link className="navbar-brand text-white text-uppercase " to="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {"  "}
          Matadors
        </Link>
        <Home />
        <User />
        <SignUp />
        <LogOut />
      </Navbar>
    </div>
  );
}

export default Navbarc;
