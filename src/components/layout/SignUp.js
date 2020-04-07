import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Form, Col, Row, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { signUp } from "../../actions/autActions";
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  state = {
    firstName: " ",
    lastName: " ",
    email: "",
    password: "",
    confirmPassword: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div style={{ width: "600px", marginTop: "25px", marginLeft: "25px" }}>
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
                Email
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={this.handleChange}
                  type="email"
                  id="email"
                  placeholder="email"
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Row>
              <Form.Label column lg={2}>
                Password
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={this.handleChange}
                  type="password"
                  id="password"
                  placeholder="password"
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Row>
              <Form.Label column lg={2}>
                Confirm password
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={this.handleChange}
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm password"
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <br />
          <Button type="submit" variant="danger">
            Sign Up
          </Button>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return { auth: state.firebase.auth, authError: state.auth.authError };
};
const mapDisputchToProps = (dipatch) => {
  return {
    signUp: (newUser) => dipatch(signUp(newUser)),
  };
};
export default connect(mapStateToProps, mapDisputchToProps)(SignUp);
