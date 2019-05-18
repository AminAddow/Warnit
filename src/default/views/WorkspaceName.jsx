import React, { Component } from "react";
import firebase from "./../../firebase";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class WorkspaceName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kommune: "Loading"
    };
  }

  componentDidMount() {
    const db = firebase.firestore();
    var col = db.collection("workspaces");
    var query = col.where("brukere", "array-contains", this.props.user);

    var id = "";
    query.get().then(snapshot => {
      snapshot.docs.forEach(doc => {
        id = doc.id;
      });
      this.setState({
        kommune: id
      });
    });
  }

  render() {
    return (
      <div>
        <Card>
          <CardContent>
            <Typography variant="title">{this.state.kommune}</Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default WorkspaceName;
