import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import WelcomeToWorkspace from './workspace.js';
import Login from './login.js';
import firebase from "./firebase";

// const db = firebase.firestore();

// function getNew() {
//      db.collection("react")
//         .doc("fart")
//         .get()
//         .then(doc => {
//           if (!doc.exists) {
//             console.log("No such document!");
//           } else {
//             console.log("Document data:", doc.get("speed"));
//           }
//         })
//         .catch(err => {
//           console.log("Error getting document", err);
//         });
//     };

function Index() {
    return <h2>Home</h2>;
}

function Authentication() {
    return <Login />
}
function Workspace() {
    return <WelcomeToWorkspace />
}

function Omoss() {
    return <h2>Om oss</h2>;
}

function Dokumenter() {
    return <h2>Dokumenter</h2>;
}

function AppRouter(){
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/workspace">Workspace</Link>
                        </li>
                        <li>
                            <Link to="/omoss">Om oss</Link>
                        </li>
                        <li>
                            <Link to="/dokumenter">Dokumenter</Link>
                        </li>
                    </ul>
                </nav>
                <Route path="/" exact component={Index} />
                <Route path="/workspace" exact component={Workspace} />
                <Route path="/authentication" component={Authentication} />
                <Route path="/omoss" component={Omoss} />
                <Route path="/dokumenter" component={Dokumenter} />
            </div>
        </Router>
    )
}

// function PrivateRoute( {component: Component, ...rest }){
//     return (
//         <h2>Private Rout</h2>
//         <Route {...rest} render={props => loginStatus.loggedIn ? (
//             <Component {...props} />
//         ) : (
//             <Redirect to={{pathname:"/authentication",
//                             state: { from: props.location }
//                         }}
//         )}
//     )}

export default AppRouter;
