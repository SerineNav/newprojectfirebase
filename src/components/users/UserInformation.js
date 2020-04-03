import React from "react";
import { Card, ListGroup, Table } from "react-bootstrap";

function UserInformation(props) {
  const id = props.match.params.id;
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th># {id}</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>User Email</th>
            <th>Balance</th>
          </tr>
        </thead>
      </Table>
    </div>
  );
}

export default UserInformation;
