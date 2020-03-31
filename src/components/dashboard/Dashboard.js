import React, { Component } from "react";
import UserList from "../users/UserList";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    console.log(this.props);
    const { users } = this.props;
    return (
      <div>
        <p>Dashboard</p>
        <UserList users={users} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return { users: state.users };
};
export default connect(mapStateToProps)(Dashboard);
