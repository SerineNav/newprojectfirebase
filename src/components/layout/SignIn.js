import React, { Component } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { signIn } from "../../actions/autActions";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signIn(this.state);
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div style={{ width: "600px", marginTop: "25px", marginLeft: "25px" }}>
        <Form onSubmit={this.handleSubmit}>
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
                  required
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <br />
          <Button type="submit" variant="danger">
            Log In
          </Button>
        </Form>
        <div
          style={{
            width: "600px",
            marginTop: "25px",
            marginLeft: "25px",
            textAlign: "center",
          }}
        >
          {authError ? <p>{authError}</p> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (fields) => dispatch(signIn(fields)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
