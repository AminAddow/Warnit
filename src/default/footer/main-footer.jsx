import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { dark } from "@material-ui/core/styles/createPalette";

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: "#cccccc",
    border: 0,
    height: 200,
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
    background: "#666666",
    width: "100vw",
    position: "absolute",
    justify: "center",
    alignItems: "center",
    color: "white",
    bottom: 0
  }
});

function Footer(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={16}
        style={{
          paddingLeft: "10%",
          paddingRight: "10%",
          paddingTop: 30,
          paddingBottom: 20
        }}
      >
        <Grid
          container
          item
          md={6}
          xs={12}
          spacing={32}
          className={classes.item}
        >
          <Typography>
            Minos arbeider med å bedre psykisk helse hos barn og unge. Vi har
            utviklet et skybasert kartleggingsverktøy kalt Okei, med mål om å
            gjøre det enklere å fange opp og forebygge mobbing, omsorgssvikt og
            psykiske vansker hos barn og unge.
          </Typography>
        </Grid>
        <Grid item md={6} xs={12} className={classes.item}>
          <Typography variant="body2">
            Markensgate 8<br />
            Tlf: 407 01 100
            <br /> post@minos.no
            <br /> <a href="https://www.minos.no/">minos.no</a>
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.bottom}>
        <Grid item xs={12} className={classes.item}>
          <Typography variant="body2" className={classes.copyright}>
            2019 © Minos
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
export default withStyles(styles)(Footer);
