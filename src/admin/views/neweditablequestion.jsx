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
      id={props.id}
      label={props.type}
      style={{ margin: 8 }}
      placeholder={props.questionType}
      multiline
      defaultValue={props.defaultVal}
      //helperText="Full width!"
      fullWidth
      margin="normal"
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
