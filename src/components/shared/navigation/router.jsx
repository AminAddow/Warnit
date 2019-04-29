import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
// import "./stylesheet/App.css";
import Workspace from "./../workspace";
import Login from "./../login";
import Home from "./../home";
import Omoss from "./../omoss";
import Dokumenter from "./../dokumenter";
import Questionset from "./../questioning";
// import AppAppBar from './components/shared/navigation/AppAppBar.js';

// Dette er router componentet. Denne er flyttet fra root (App.js) ettersom den ikke trenger å være der.
// -----------------------------------------------------------------------------------------------------

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

function AppRouter() {
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
            <li>
              <Link to="/questioning">Spørsmålssett</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/workspace" exact component={Workspace} />
        <Route path="/authentication" exact component={Login} />
        <Route path="/omoss" exact component={Omoss} />
        <Route path="/dokumenter" exact component={Dokumenter} />
        <Route path="/questioning" exact component={Questionset} />
      </div>
    </Router>
  );
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
