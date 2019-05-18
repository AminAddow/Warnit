import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class WorkspaceBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card style={{ height: 250 }}>
          <CardContent>
            <Typography gutterBottom variant="h6">
              Hei <b>{this.props.name}</b>
            </Typography>
            <Typography variant="h6">
              Velkommen til ditt workspace. Her har du mulighet til å opprette
              nye saker, se tidligere saker og se meldinger som berører ditt
              område.
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default WorkspaceBoard;
