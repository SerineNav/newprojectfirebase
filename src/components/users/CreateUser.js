import React, { Component } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

export default class CreateUser extends Component {
  state = {
    firstName: "",
    lastName: " ",
    email: " "
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    return (
      <div style={{ width: "600px", marginTop: "25px", marginLeft: "25px" }}>
        <h2>Create new user</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Row>
              <Form.Label column lg={2}>
                FirstName
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={this.handleChange}
                  type="text"
                  id="firstName"
                  placeholder="firstName"
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Row>
              <Form.Label column lg={2}>
                LastName
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={this.handleChange}
                  type="text"
                  id="lastName"
                  placeholder="lastName"
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Row>
              <Form.Label column lg={2}>
                LastName
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={this.handleChange}
                  type="email"
                  id="email"
                  placeholder="Email"
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <br />
          <Button type="submit" variant="danger">
            Create
          </Button>
        </Form>
      </div>
    );
  }
}
