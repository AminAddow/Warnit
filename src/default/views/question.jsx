import React from "react";
import { Typography } from "@material-ui/core";

const Question = props => {
  return (
    <Typography variant="h5" align="center">
      {props.content}
    </Typography>
  );
};

export default Question;
