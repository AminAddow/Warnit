import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./stylesheet/App.css";
import Workspace from "./default/workspace";
import Login from "./default/login";
import Home from "./default/home";
import Omoss from "./default/omoss";
import Dokumenter from "./default/dokumenter";
import Navbar from "./default/navigation/CustomNavbar";
import Muinavbar from "./default/navigation/mui-navbar";
import firebase from "./firebase";
import Questionset from "./default/questioning";

// Her kaller vi på Router som er i './components/shared/navigation/router'.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      user: ""
    };
  }

  componentDidMount() {
    const auth = firebase.auth();
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          user: user.uid
        });
      } else {
        this.setState({
          authenticated: false
        });
      }
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar
            user={this.state.user}
            authenticated={this.state.authenticated}
          />
          <Route exact path="/" component={Home} />
          <Route path="/Omoss" component={Omoss} />
          <Route
            user={this.state.user}
            authenticated={this.state.authenticated}
            path="/Workspace"
            component={Workspace}
          />
          <Route path="/Dokumenter" component={Dokumenter} />
          <Route path="/Questionset" component={Questionset} />
          <Route path="/Login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
