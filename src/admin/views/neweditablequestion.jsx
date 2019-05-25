import React from "react";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = () => ({
  textfield: {
    width: "90%",
    height: "auto",
    margin: "0 auto"
  }
});

const NewEditableQuestion = props => {
  const { classes } = props;
  return (
    <TextField
      label={props.type}
      style={{ margin: 8 }}
      placeholder={props.defaultVal}
      multiline
      defaultValue={props.defaultVal}
      //helperText={"omhandler " + props.theme}
      fullWidth
      margin="normal"
      title={props.defaultVal}
      InputLabelProps={{
        shrink: true
      }}
      className={classes.textfield}
    />
  );
};
NewEditableQuestion.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(NewEditableQuestion);
