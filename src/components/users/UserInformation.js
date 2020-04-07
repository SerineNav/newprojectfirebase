import React from "react";
import { Card, ListGroup, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

function UserInformation(props) {
  const { user, auth } = props;

  if (!auth.uid) return <Redirect to="/signin" />;
  console.log(props);
  if (user) {
    return (
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th># {user.id}</th>
              <th>{user.firstName}</th>
              <th>{user.lastName}</th>
              <th>{user.balance}</th>
              <th>{user.valuta}</th>
              <th>{user.email}</th>
            </tr>
          </thead>
        </Table>
      </div>
    );
  }
  return <div>No any user...</div>;
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.id;
  const users = state.firestore.data.clients;
  const user = users ? users[id] : null;
  return { user: user, auth: state.firebase.auth };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "clients",
    },
  ])
)(UserInformation);
