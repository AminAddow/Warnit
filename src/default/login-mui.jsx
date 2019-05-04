import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import "./../stylesheet/App.css";
import firebase from "./../firebase";

const auth = firebase.auth();

function createUser(user) {
  console.log(user);

  auth
    .createUserWithEmailAndPassword(user.email, user.pass)
    .catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // ...;
      console.log("Code: ", errorCode);
      console.log("Message: ", errorMessage);
    });

  return "ok";
}

class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <TextField
              id="email-input"
              label="E-post"
              type="email"
              autoComplete="current-password"
              margin="normal"
            />
            <TextField
              id="password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
