import React, { Component } from "react";
import UserList from "../users/UserList";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends Component {
  render() {
    console.log(this.props);
    const { users } = this.props;
    return (
      <div>
        <p>Dashboard</p>
        <Table striped bordered hover variant="secondary">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Balance</th>
              <th>Email</th>
            </tr>
          </thead>
        </Table>
        <UserList users={users} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return { users: state.firestore.ordered.users };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "users"
    }
  ])
)(Dashboard);
