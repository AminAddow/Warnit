import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./stylesheet/App.css";
import Workspace from "./default/workspace";
import Login from "./default/login";
import Home from "./default/home";
import Omoss from "./default/omoss";
import Dokumenter from "./default/dokumenter";
import Navbar from "./default/navigation/CustomNavbar";
import firebase from "./firebase";
import NoMatch from "./default/404";
import Questionset from "./default/questioning";
import Footer from "./default/footer/main-footer";
import AdminPage from "./admin/adminpage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      uid: "",
      displayname: ""
    };
  }

  componentDidMount() {
    // Create connection to firebase/auth
    const auth = firebase.auth();
    // Check if user is logged in. If yes, set auth to true and get data
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          uid: user.uid,
          displayname: user.displayName
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
            user={this.state.uid}
            name={this.state.displayname}
            authenticated={this.state.authenticated}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Omoss" component={Omoss} />
            <Route
              user={this.state.uid}
              authenticated={this.state.authenticated}
              path="/Workspace"
              component={Workspace}
            />
            <Route path="/Dokumenter" component={Dokumenter} />
            <Route path="/Questionset" component={Questionset} />
            <Route path="/AdminPage" component={AdminPage} />
            <Route path="/Login" component={Login} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
