import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: "#cccccc",
    border: 0,
    minHeight: 200,
    width: "100vw",
    justify: "center",
    alignItems: "center"
  },

  bottom: {
    background: "#666666",
    alignItems: "center"
  },

  item: {
    justify: "center",
    alignItems: "center",
    padding: 0,
    width: 20
  },

  copyright: {
    padding: 5,
    justify: "center",
    alignItems: "center",
    color: "white"
  }
});

function Footer(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={12}
        style={{
          paddingLeft: "10%",
          paddingRight: "10%",
          paddingTop: 30,
          paddingBottom: 20
        }}
        className={classes.root}
      >
        <Grid item sm={6} xs={12} className={classes.item}>
          <Typography>
            Minos arbeider med å bedre psykisk helse hos barn og unge. Vi har
            utviklet et skybasert kartleggingsverktøy kalt Okei, med mål om å
            gjøre det enklere å fange opp og forebygge mobbing, omsorgssvikt og
            psykiske vansker hos barn og unge.
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12} spacing={16} className={classes.item}>
          <Typography>
            Markensgate 8 Tlf: 407 01 100 / post@minos.no / minos.no
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.bottom}>
        <Grid item xs={12} className={classes.item}>
          <Typography className={classes.copyright}>2019 © Minos</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
export default withStyles(styles)(Footer);
