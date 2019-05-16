import React from "react";
import { TextField } from "@material-ui/core";

const NewEditableQuestion = props => {
  return (
    <TextField
      id={props.id}
      label="Tema Spørsmål"
      style={{ margin: 8 }}
      placeholder="SPØRSMÅL NUMMERO UNO"
      defaultValue={props.defaultVal}
      helperText="Full width!"
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true
      }}
    />
  );
};

export default NewEditableQuestion;
