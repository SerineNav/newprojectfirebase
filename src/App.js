import React, { Component } from "react";
import Navbarc from "./components/layout/Navbarc";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import UserInformation from "./components/users/UserInformation";
import CreateUser from "./components/users/CreateUser";
import SignIn from "./components/layout/SignIn";
import SignUp from "./components/layout/SignUp";
import LogOut from "./components/layout/LogOut";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbarc />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/user/:id" component={UserInformation} />
            <Route path="/create" component={CreateUser} />
            <Route path="/logout" component={LogOut} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </div>
      </Router>
    );
  }
}
