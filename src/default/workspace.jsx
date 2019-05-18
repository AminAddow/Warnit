import React, { Component } from "react";
import firebase from "./../firebase";
import WorkspaceName from "./views/WorkspaceName";
import WorkspaceBoard from "./views/WorkspaceBoard";
import MyCases from "./views/myCases";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Grid from "@material-ui/core/Grid";

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
      show: false,
      name: ""
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    // Create connection to firebase/auth
    const auth = firebase.auth();

    // Get user data from auth
    auth.onAuthStateChanged(user => {
      if (user) {
        // Indicate that user is logged on by setting authenticated to true
        // Set state uid to auth uid (Not sure if this is needed at this scope)
        this.setState({
          authenticated: true,
          uid: user.uid,
          name: user.displayName
        });

        // If props are empty show modal (Window to retrive displayname from user).
        if (!this.state.name) {
          this.handleShow();
        }
      } else {
        // User is not authenticated. Set state to false
        this.setState({
          authenticated: false
        });
      }
    });
  }

  // Close modal window that collects displayname
  handleClose() {
    this.setState({ show: false });
  }

  // Close modal window that collects displayname
  handleShow() {
    this.setState({ show: true });
  }

  handleSubmit = event => {
    // Get user info
    var user = firebase.auth().currentUser;

    // Get react state name
    // This state name is not going to the DOM but just a place keeper until
    // We send it to props state
    let name = this.state.name;

    // Sets the value user has chosen to auth in firebase
    user
      .updateProfile({
        displayName: this.state.name
      })
      .then(function() {
        // Update successful.
      })
      .catch(function(error) {
        // An error happened.
        console.log(error);
      });

    this.handleClose();
    event.preventDefault();
  };

  //
  handleChange = event => {
    // Bind value provieded from user with state. This is dynamic.
    this.setState({
      [event.target.name]: event.target.value
    });
    event.preventDefault();
  };

  render() {
    let showModal = "";
    if (this.state.show) {
      showModal = (
        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Velg ditt brukernavn</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Du har ikke et registrert brukernavn</p>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>Brukernavn:</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Skriv her"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button variant="outline-primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>

          <Modal.Footer>Denne meldingen vises kun en gang</Modal.Footer>
        </Modal>
      );
    }

    return (
      <div>
        {this.state.authenticated ? (
          <Grid
            container
            spacing={8}
            style={{ paddingLeft: "10%", paddingRight: "10%", paddingTop: 30 }}
          >
            {showModal}
            <React.Fragment>
              <Grid item xs={12} style={{ padding: 10 }}>
                <WorkspaceName user={this.state.uid} />
              </Grid>
              <Grid item xs={12} md={7} style={{ padding: 10 }}>
                <WorkspaceBoard name={this.state.name} />
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
