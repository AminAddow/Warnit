import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

/* create a functional component out of this as it is just a presentational view
but we need to call a function from parent component
 and props only allow us to send values down in the hierarchy.
 therefor we pass the function we originally wanted to call as a prop to 
 this component which will handle the event and in turn call the actuall callback*/
const AnswerOption = props => {
  return (
    <List xs={4} component="nav">
      <ListItem button onClick={props.onSubmit} id={["normal", 1]}>
        <ListItemText inset primary="Ja" />
      </ListItem>
      <ListItem button onClick={props.onSubmit} id={["normal", -1]}>
        <ListItemText inset primary="Nei" />
      </ListItem>
      <ListItem button onClick={props.onSubmit} id={["normal", 0]}>
        <ListItemText inset primary="Vet ikke" />
      </ListItem>
    </List>
  );
};

export default AnswerOption;
