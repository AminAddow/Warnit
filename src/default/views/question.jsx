import React from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  typo: {
    fontSize: 22,
    fontStyle: "oblique"
  }
});
const Question = props => {
  const { classes } = props;
  return (
    <Typography variant="display2" className={classes.typo} align="center">
      {props.content}
    </Typography>
  );
};

export default withStyles(styles)(Question);
