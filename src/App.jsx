import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import asyncComponent from "./default/asynccomponent";


import firebase from "./firebase";

import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import "./stylesheet/App.css";

const AsyncNavbar = asyncComponent(() => import("./default/navigation/CustomNavbar"));
const AsyncWorkspace = asyncComponent(() => import("./default/workspace"));
const AsyncLogin = asyncComponent(() => import("./default/login"));
const AsyncHome = asyncComponent(() => import("./default/home"));
const AsyncOmoss = asyncComponent(() => import("./default/omoss"));
const AsyncRessurser = asyncComponent(() => import("./default/ressurser"));
const AsyncNoMatch = asyncComponent(() => import("./default/404"));
const AsyncAdminPage = asyncComponent(() => import("./admin/adminpage"));
const AsyncFooter = asyncComponent(() => import("./default/footer/main-footer"));



// Her kaller vi på Router som er i './components/shared/navigation/router'.
const styles = () => ({
  container: {
    minHeight: "100vh",
    position: "relative",
    marginBottom: 0
  },
  body: {
    position: "relative",
    minHeight: "calc(100vh - 295px)",
    height: "100%"
  },
  footer: {
    height: "100%",
    width: "100vw",
    bottom: 0
  }
});

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
    const { classes } = this.props;
    return (
      <div>
        <Grid container item xs={12} className={classes.container}>
          <Router>
            <Grid item xs={12}>
              <AsyncNavbar
                user={this.state.user}
                authenticated={this.state.authenticated}
              />
            </Grid>
            <Grid item xs={12} className={classes.body}>
              <Switch>
                <Route exact path="/" component={AsyncHome} />
                <Route path="/Omoss" component={AsyncOmoss} />
                <Route
                  user={this.state.user}
                  authenticated={this.state.authenticated}
                  path="/Workspace"
                  component={AsyncWorkspace}
                />
                <Route path="/Ressurser" component={AsyncRessurser} />
                <Route path="/AdminPage" component={AsyncAdminPage} />
                <Route path="/Login" component={AsyncLogin} />
                <Route component={AsyncNoMatch} />
              </Switch>
            </Grid>
          </Router>
          <Grid item xs={12}>
            <AsyncFooter className={classes.footer} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
