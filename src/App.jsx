import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./stylesheet/App.css";
import Workspace from "./components/shared/workspace";
import Login from "./components/shared/login";
import Home from "./components/shared/home";
import Omoss from "./components/shared/omoss";
import Dokumenter from "./components/shared/dokumenter";
import Questionset from "./components/questioning";
//import Navbar from "./components/shared/navigation/CustomNavbar";
import Muinavbar from "./components/shared/navigation/mui-navbar";

// Her kaller vi på Router som er i './components/shared/navigation/router'.

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Muinavbar />
          <Route exact path="/" component={Home} />
          <Route path="/Omoss" component={Omoss} />
          <Route path="/Workspace" component={Workspace} />
          <Route path="/Dokumenter" component={Dokumenter} />
          <Route path="/Questionset" component={Questionset} />
          <Route path="/Login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
