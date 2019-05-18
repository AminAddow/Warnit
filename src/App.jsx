import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./stylesheet/App.css";
import Workspace from "./default/workspace";
import Login from "./default/login";
import Home from "./default/home";
import Omoss from "./default/omoss";
import Ressurser from "./default/ressurser";
import Navbar from "./default/navigation/CustomNavbar";
import firebase from "./firebase";
import NoMatch from "./default/404";
import Footer from "./default/footer/main-footer";
import AdminPage from "./admin/adminpage";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

// Her kaller vi på Router som er i './components/shared/navigation/router'.
const styles = () => ({
  container: {
    minHeight: "100%",
    position: "relative",
    marginBottom: 0
  },
  body: {
    position: "relative",
    minHeight: "calc(100vh - 256px)",
    height: "100%"
  },
  footer: {
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
              <Navbar
                user={this.state.user}
                authenticated={this.state.authenticated}
              />
            </Grid>
            <Grid item xs={12} className={classes.body}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Omoss" component={Omoss} />
                <Route
                  user={this.state.user}
                  authenticated={this.state.authenticated}
                  path="/Workspace"
                  component={Workspace}
                />
                <Route path="/Ressurser" component={Ressurser} />
                <Route path="/AdminPage" component={AdminPage} />
                <Route path="/Login" component={Login} />
                <Route component={NoMatch} />
              </Switch>
            </Grid>
          </Router>
          <Grid item xs={12}>
            <Footer className={classes.footer} />
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
