import React from "react";
import { Card, ListGroup } from "react-bootstrap";

function UserContent({ user }) {
  return (
    <div>
      <Card
        style={{ width: "18rem", marginLeft: "25px", marginBottom: "20px" }}
      >
        <Card.Header>User ID</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>{user.firstName}</ListGroup.Item>
          <ListGroup.Item>{user.lastName}</ListGroup.Item>
          <ListGroup.Item>{user.email}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default UserContent;
