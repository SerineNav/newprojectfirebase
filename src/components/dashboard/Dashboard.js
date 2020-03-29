import React, { Component } from "react";
import UserList from "../users/UserList";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <p>Dashboard</p>
        <UserList />
      </div>
    );
  }
}
