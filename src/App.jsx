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
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

// Her kaller vi på Router som er i './components/shared/navigation/router'.
const styles = () => ({
  container: {
    minHeight: "100%",
    position: "relative"
  },
  body: {
    position: "relative",
    minHeight: "calc(100vh - 225px)",
    height: "99%"
  },
  footer: {
    height: 200,
    width: "100vw",
    bottom: 0
  }
});
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
    const { classes } = this.props;
    return (
      <div>
        <Grid container xs={12} className={classes.container}>
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
                <Route path="/Dokumenter" component={Dokumenter} />
                <Route path="/Questionset" component={Questionset} />
                <Route path="/AdminPage" component={AdminPage} />
                <Route path="/Login" component={Login} />
                <Route component={NoMatch} />
              </Switch>
            </Grid>
          </Router>
          <Grid container item xs={12} className={classes.footer}>
            <Footer />
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
