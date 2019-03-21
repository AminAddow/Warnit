import React, { Component } from 'react';
import './App.css';
import firebase from "./firebase";

const auth = firebase.auth();


class Login extends Component {
    constructor() {
      super();
    }
    render(){
        return(
            <div>Lets log in!</div>

        )
    }
}

// function createUser(user){
//     console.log(user);
//
//     auth.createUserWithEmailAndPassword(user.email, user.pass).catch(function(error) {
//       // Handle Errors here.
//       let errorCode = error.code;
//       let errorMessage = error.message;
//       // ...;
//       console.log("Code: ", errorCode);
//       console.log("Message: ", errorMessage);
//
//
// });
//
// return "ok";
// };



export default Login;
