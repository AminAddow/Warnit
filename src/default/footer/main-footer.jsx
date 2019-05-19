import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
const styles = theme => ({
  root: {
    marginTop: 10
  },

  paper: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.light,
    border: 0,
    minHeight: 200,
    width: "fit-content",
    justify: "center",
    alignItems: "center"
  },

  /*bottom: {
    backgroundColor: theme.palette.primary.light,
    alignItems: "center",
    padding: 0
  },*/

  /*item: {
    justify: "center",
    alignItems: "center",
    padding: 0,
    width: "20"
  },*/

  copyright: {
    // removed position absolute
    padding: 10,
    backgroundColor: theme.palette.secondary.light
  },
  Content: {
    padding: "5px 30px"
  },
  links: {
    color: theme.palette.primary.dark,
  }
});

function Footer(props) {
  const { classes } = props;
  return (
    <Grid container item xs={12} sm={12} className={classes.root}>
      <Paper className={classes.paper} xs={12} sm={12} square={true}>
        <Grid item md={12} xs={12} className={classes.item}>
          <Typography
            align="center"
            color="secondary"
            className={classes.Content}
          >
            Illustrasjoner av{" "}
            <a
              className={classes.links}
              href="https://undraw.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              unDraw
            </a>
          </Typography>
        </Grid>

        <Grid item md={12} xs={12} className={classes.item}>
          <Typography
            align="center"
            className={classes.Content}
            color="secondary"
          >
            Banner av{" "}
            <a
              className={classes.links}
              rel="noopener noreferrer"
              target="_blank"
              href="https://unsplash.com/photos/luoaf3UV3HE"
            >
              Nick Scheerbart
            </a>
          </Typography>
        </Grid>

        <Grid item md={12} xs={12} className={classes.item}>
          <Typography
            align="center"
            color="secondary"
            className={classes.Content}
          >
            Icons made by{" "}
            <a
              className={classes.links}
              href="https://www.freepik.com/"
              title="Freepik"
              target="_blank"
              rel="noopener noreferrer"
            >
              Freepik
            </a>{" "}
            from{" "}
            <a
              className={classes.links}
              href="https://www.flaticon.com/"
              title="Flaticon"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.flaticon.com
            </a>{" "}
            is licensed by{" "}
            <a
              className={classes.links}
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC 3.0 BY
            </a>
          </Typography>
        </Grid>

        <Grid item md={12} xs={12} className={classes.item}>
          <Typography
            align="center"
            variant="body2"
            color="secondary"
            className={classes.Content}
          >
            Markensgate 8<br />
            Tlf: 407 01 100
            <br /> post@minos.no
            <br />{" "}
            <a
              className={classes.links}
              href="https://www.minos.no/"
              target="_blank"
              rel="noopener noreferrer"
            >
              minos.no
            </a>
          </Typography>
        </Grid>

        <Grid item xs={12} align="center" className={classes.copyright}>
          <Typography variant="body2" color="inherit">
            2019 © Minos
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
}
export default withStyles(styles)(Footer);
