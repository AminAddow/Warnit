import React, { Component } from "react";
// import "./../../stylesheet/App.css";
import firebase from "./../../firebase";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Redirect } from "react-router-dom";

class LoginUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      redirect: false,
      authenticated: false,
      display: false,
      error: "",
      displayname: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this);
  }

  authWithEmailPassword(event) {
    const auth = firebase.auth();

    let email = this.state.email;
    let pass = this.state.pass;

    auth
      .signInWithEmailAndPassword(email, pass)
      .then(user => {
        var user = auth.currentUser;
      })
      .catch(error => {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;

        var feilen = "";
        switch (errorCode) {
          case "auth/user-not-found":
            feilen = "Bruker finnes ikke";
            break;

          case "auth/wrong-password":
            feilen = "Brukernavn eller Passord er feil";
            break;
        }

        if (feilen != "") {
          this.setState({
            error: feilen,
            display: true
          });
        }
      });

    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          redirect: true
        });
        // User is signed in.
        var email = user.email;
        var uid = user.uid;
      }
    });
    event.preventDefault();
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "pass" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/workspace" />;
    }
    return (
      <Col>
        <Card className="justify-content-center">
          <Card.Body>
            {this.state.display === true ? (
              <Alert variant="danger">
                <p>{this.state.error}</p>
              </Alert>
            ) : (
              <div />
            )}
            <Form
              onSubmit={event => {
                this.authWithEmailPassword(event);
              }}
              ref={form => {
                this.loginForm = form;
              }}
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Epost"
                  checked={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="pass"
                  placeholder="Password"
                  value={this.state.pass}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button variant="primary" value="log in" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default LoginUser;
