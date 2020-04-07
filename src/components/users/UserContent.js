import React from "react";
import { Card, ListGroup, Table } from "react-bootstrap";

function UserContent({ user }) {
  return (
    <div>
      <Table striped bordered hover>
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

export default UserContent;
