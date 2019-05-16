import React, { Component } from "react";
import firebase from "./../firebase";
import WorkspaceName from "./views/WorkspaceName";
import WorkspaceBoard from "./views/WorkspaceBoard";
import MyCases from "./views/myCases";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { spacing } from "@material-ui/system";

// Workspace skal kun være tilgjengelig for brukere som er logget på.
// Den skal vise ha en Hei, Brukers navn.
// Beskrivelse av hva som skal skje i en workspace.
// Navnet på workspacet skal stå høyt i vinduet.
// En knapp til spørreskjema
// Liste over egne saker.

class Workspace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      uid: "",
      displayname: ""
    };
  }

  componentDidMount() {
    const auth = firebase.auth();
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          uid: user.uid,
          displayname: user.displayname
        });
      } else {
        this.setState({
          authenticated: false
        });
        console.log("Du er ikke logget inn!");
      }
    });
  }
  // style={{paddingLeft: "20%", paddingRight: "20%"}}

  render() {
    return (
      <div>
        {this.state.authenticated ? (
          <Grid
            container
            spacing={12}
            style={{ paddingLeft: "10%", paddingRight: "10%", paddingTop: 30 }}
          >
            <React.Fragment>
              <Grid item xs={12} style={{ padding: 10 }}>
                <WorkspaceName user={this.state.uid} />
              </Grid>
              <Grid item xs={12} md={7} style={{ padding: 10 }}>
                <WorkspaceBoard name={this.state.displayname} />
              </Grid>
              <Grid item xs={12} md={5} style={{ padding: 10 }}>
                <MyCases />
              </Grid>
            </React.Fragment>
          </Grid>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Workspace;
