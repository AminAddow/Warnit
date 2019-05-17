import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const styles = theme => ({
  paper: {
    position: "absolute",
    top: "10%",
    left: "10%",
    width: "80%",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 4,
    outline: "none"
  }
});

const Loader = props => {
  const { classes } = props;
  return (
    <Paper className={classes.paper}>
      <Grid container justify="center">
        <CircularProgress disableShrink />
      </Grid>
    </Paper>
  );
};

Loader.propTypes = {
  classes: PropTypes.object.isRequired
};

const LoaderWrapped = withStyles(styles)(Loader);
export default LoaderWrapped;
