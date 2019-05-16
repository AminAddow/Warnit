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
          <Switch>
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
