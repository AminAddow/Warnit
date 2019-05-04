import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./stylesheet/App.css";
import Workspace from "./default/workspace";
import Login from "./default/login";
import Home from "./default/home";
import Omoss from "./default/omoss";
import Dokumenter from "./default/dokumenter";
import Questionset from "./default/questioning";
//import Navbar from "./components/shared/navigation/CustomNavbar";
import Muinavbar from "./default/navigation/mui-navbar";

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
