import React, { Component } from "react";
import LoginUser from "./views/loginUser";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

// Login page with call on one component. LoginUser
class Login extends Component {
  render() {
    return (
      <div>
        <Container fluid className="d-flex">
          <Row className="mt-5 mx-auto">
            <LoginUser />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
