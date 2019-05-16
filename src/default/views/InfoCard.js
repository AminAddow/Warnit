import React, { Component } from "react";
import Banner from "./Banner";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as Logo } from "./images/community.svg";

import { UndrawCoding } from "react-undraw";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const styles = theme => ({
  infocard: {
    marginTop: "10px"
  },
  paperGrid: {
    margin: theme.spacing.unit * 2
    /*padding: theme.spacing.unit */
  },
  paper: {
    padding: theme.spacing.unit * 2
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
      style={{ border: "3px solid blue" }}
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
          <Grid
            container
            item
            justify="center"
            style={{ border: "3px solid blue" }}
          >
            <Grid container item style={{ border: "3px solid blue" }}>
              <UndrawCoding height="100" />
            </Grid>
            <Typography variant="h4">Box 1</Typography>
            <Typography variant="body1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
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
          <Grid
            container
            item
            justify="center"
            style={{ border: "3px solid blue" }}
          >
            <Grid container item style={{ border: "3px solid blue" }}>
              <UndrawCoding height={100} />
            </Grid>
            <Typography variant="h4">Box 2</Typography>
            <Typography variant="body1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
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
          <Grid
            container
            item
            justify="center"
            style={{ border: "3px solid blue" }}
          >
            <Grid container item style={{ border: "3px solid blue" }}>
              <UndrawCoding height={100} />
            </Grid>
            <Typography variant="h4">Box 3</Typography>
            <Typography variant="body1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
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
