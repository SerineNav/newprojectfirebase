import React, { Component } from "react";
import UserList from "../users/UserList";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    console.log(this.props);
    const { users, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div style={{ width: "800px", marginTop: "25px", marginLeft: "100px" }}>
        <p>Dashboard</p>
        <Table striped bordered hover variant="secondary">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Balance</th>
              <th>Valuta</th>
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
  return { users: state.firestore.ordered.users, auth: state.firebase.auth };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "users",
    },
  ])
)(Dashboard);
