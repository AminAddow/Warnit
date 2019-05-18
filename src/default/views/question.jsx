import React from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  typo: {
    padding: 15,
    fontSize: 18
  }
});
const Question = props => {
  const { classes } = props;
  return (
    <Typography variant="h6" className={classes.typo} align="center">
      {props.content}
    </Typography>
  );
};

export default withStyles(styles)(Question);
