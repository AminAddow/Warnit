import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {
  UndrawConnectedWorld,
  UndrawCommunity,
  UndrawTrueFriends
} from "react-undraw";
const styles = theme => ({
  infocard: {
    marginTop: 50
  },
  paperGrid: {
    margin: theme.spacing.unit * 2
    /*padding: theme.spacing.unit */
  },
  paper: {
    padding: theme.spacing.unit * 2
  },
  heading: {
    marginTop: "10px"
  },
  body: {
    marginTop: "10px"
  }
});

const InfoCard = props => {
  const { classes } = props;
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.infocard}
      background-color="#FFF07C"
    >
      <Grid
        sm={5}
        xs={11}
        md={3}
        container
        item
        className={classes.paperGrid}
        wrap="nowrap"
      >
        <Paper elevation={2} className={classes.paper}>
          <Grid container item justify="center">
            <Grid container item style={{ padding: 20 }}>
              <UndrawConnectedWorld
                primaryColor="#5DD39E"
                height="125px"
                name="Connected World"
              />
            </Grid>
            <Typography className={classes.heading} variant="h4">
              Verden
            </Typography>
            <Typography className={classes.body} variant="body1" align="center">
              Samhold og fellesskap gjør verden et bedre sted å leve i. Det er
              viktig at vi har respekt for hverandre og er aktivt medlemer av
              samfunnet.
            </Typography>
          </Grid>
        </Paper>
      </Grid>
      <Grid
        sm={5}
        xs={11}
        md={3}
        container
        item
        className={classes.paperGrid}
        wrap="nowrap"
      >
        <Paper elevation={2} className={classes.paper}>
          <Grid container item justify="center">
            <Grid container style={{ padding: 20 }}>
              <UndrawCommunity
                primaryColor="#97EAD2"
                height="125px"
                name="Community"
              />
            </Grid>
            <Typography className={classes.heading} variant="h4">
              Samfunn
            </Typography>
            <Typography className={classes.body} variant="body1" align="center">
              Enkelt Individet er viktig i samfunnet. Du er en del av samfunnet
              - et samfunn som gir deg rettigheter og muligheter, men også
              plikter.
            </Typography>
          </Grid>
        </Paper>
      </Grid>

      <Grid
        sm={8}
        xs={11}
        md={3}
        container
        item
        className={classes.paperGrid}
        wrap="nowrap"
      >
        <Paper elevation={2} className={classes.paper}>
          <Grid container item justify="center">
            <Grid container item style={{ padding: 20 }}>
              <UndrawTrueFriends
                primaryColor="#97EAD2"
                height="125px"
                name="Childhood"
              />
            </Grid>
            <Typography className={classes.heading} variant="h4">
              Barndom
            </Typography>
            <Typography className={classes.body} variant="body1" align="center">
              Vi ønsker alle det samme for våre barn. Vi vil at de skal vokse
              opp for å elske og bli elsket. Vi vil at barna skal følge sine
              drømmer.{" "}
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
InfoCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InfoCard);
