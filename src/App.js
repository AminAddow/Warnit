import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "./firebase";

const db = firebase.firestore();

function getNew() {
     db.collection("react")
        .doc("fart")
        .get()
        .then(doc => {
          if (!doc.exists) {
            console.log("No such document!");
          } else {
            console.log("Document data:", doc.get("speed"));
          }
        })
        .catch(err => {
          console.log("Error getting document", err);
        });
    };

class App extends Component {
  constructor() {
    super();
    this.state = { speed: 10 };
  }

  componentDidMount() {
      getNew();
      this.setState({ speed : 13})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/*  <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Reacten
          </a> */}

          {/* <div>Lets make this application</div> */}
          <div>{this.state.speed}</div>
        </header>
      </div>
    );
  }
}

export default App;
