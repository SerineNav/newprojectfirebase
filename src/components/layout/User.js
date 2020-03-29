import React from "react";
import { NavLink } from "react-router-dom";

export default function User() {
  return (
    <div>
      <NavLink to="/create" className="nav-link text-white ml-5">
        User
      </NavLink>
    </div>
  );
}
