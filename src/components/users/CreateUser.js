import React, { Component } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { createUser } from "../../actions/userAction";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class CreateUser extends Component {
  state = {
    firstName: "",
    lastName: " ",
    email: " ",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.createUser(this.state);
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div style={{ width: "600px", marginTop: "25px", marginLeft: "30px" }}>
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
                  required
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
                  required
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Row>
              <Form.Label column lg={2}>
                Balance
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={this.handleChange}
                  type="number"
                  id="balance"
                  placeholder="balance"
                  required
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Row>
              <Form.Label column lg={2}>
                Valuta
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={this.handleChange}
                  type="text"
                  id="valuta"
                  placeholder="valuta"
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
                  required
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

const mapStateToProps = (state) => {
  console.log(state);
  return { auth: state.firebase.auth };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(createUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
