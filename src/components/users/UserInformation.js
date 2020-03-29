import React from "react";
import { Card, ListGroup } from "react-bootstrap";

function UserInformation(props) {
  const id = props.match.params.id;
  return (
    <div>
      <Card
        style={{
          width: "18rem",
          marginLeft: "25 px",
          marginTop: "25 px"
        }}
      >
        <Card.Header>User- {id}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>User firstName</ListGroup.Item>
          <ListGroup.Item>User lastName</ListGroup.Item>
          <ListGroup.Item>User email</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default UserInformation;
