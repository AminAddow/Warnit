import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
const styles = theme => ({
  root: {
    flexGrow: 1,
    background: "#cccccc",
    border: 0,
    minHeight: 200,
    width: "fit-content",
    justify: "center",
    alignItems: "center"
  },

  bottom: {
    background: "#666666",
    alignItems: "center",
    padding: 0
  },

  item: {
    justify: "center",
    alignItems: "center",
    padding: 0,
    width: "20"
  },

  copyright: {
    padding: 10,
    margin: 0,
    background: "#666666",
    width: "100vw",
    position: "absolute",
    color: "white",
    bottom: 0
  },
  Content: {
    padding: "5px 30px"
  }
});

function Footer(props) {
  const { classes } = props;
  return (

    <Grid container>
      <Paper className={classes.root}>
        <Grid item md={6} xs={12} className={classes.item}>
          <Typography className={classes.Content}>
            Minos arbeider med å bedre psykisk helse hos barn og unge. Vi har
            utviklet et skybasert kartleggingsverktøy kalt Okei, med mål om å
            gjøre det enklere å fange opp og forebygge mobbing, omsorgssvikt og
            psykiske vansker hos barn og unge.
          </Typography>
        </Grid>
        <Grid item md={6} xs={12} className={classes.item}>
          <Typography variant="body2" className={classes.Content}>
            Markensgate 8<br />
            Tlf: 407 01 100
            <br /> post@minos.no
            <br /> <a href="https://www.minos.no/">minos.no</a>
          </Typography>
        </Grid>

        <Grid item xs={12} className={classes.bottom}>
          <Grid item xs={12} className={classes.copyright}>
            <Typography variant="body2">2019 © Minos</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
export default withStyles(styles)(Footer);
