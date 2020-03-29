import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function Home() {
  return (
    <div>
      <Nav className="justify-content-center" activeKey="/">
        <Nav.Item>
          <NavLink to="/home" className="nav-link text-white ml-5">
            Home
          </NavLink>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Home;
