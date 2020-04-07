import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { logOut } from "../../actions/autActions";
import { connect } from "react-redux";

function SignoutLinks(props) {
  return (
    <div>
      <Nav className="mr-auto">
        <NavLink to="/home" className="nav-link text-white ml-5">
          Home
        </NavLink>
        <NavLink to="/create" className="nav-link text-white ml-5">
          User
        </NavLink>
        <a
          onClick={props.logOut}
          style={{
            textDecoration: "none",
            color: "#800000",
            fontWeight: "bold",
            marginLeft: "25px",
            marginTop: "7px",
            cursor: "pointer",
          }}
        >
          LogOut
        </a>
      </Nav>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut()),
  };
};
export default connect(null, mapDispatchToProps)(SignoutLinks);
