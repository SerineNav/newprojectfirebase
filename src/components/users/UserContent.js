import React from "react";
import { Card, ListGroup } from "react-bootstrap";

function UserContent() {
  return (
    <div>
      <Card
        style={{ width: "18rem", marginLeft: "25px", marginBottom: "20px" }}
      >
        <Card.Header>User ID</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>User firstName</ListGroup.Item>
          <ListGroup.Item>User lastName</ListGroup.Item>
          <ListGroup.Item>User email</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default UserContent;
