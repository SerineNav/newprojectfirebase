import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "./mt.png";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import LogOut from "./LogOut";
import SigninLinks from "../links/SigninLinks";
import SignoutLinks from "../links/SignoutLinks";
import { connect } from "react-redux";

function Navbarc(props) {
  const { auth } = props;
  console.log(auth);
  // const links = auth.uid ? <SigninLinks /> : <SignoutLinks />;
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
        <SigninLinks />
        <SignoutLinks />
        {/* {links} */}
        <LogOut />
      </Navbar>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(Navbarc);
