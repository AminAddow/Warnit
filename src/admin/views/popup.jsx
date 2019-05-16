import React from "react";
import { Modal, Paper } from "@material-ui/core";

const Popup = props => {
  return (
    <Modal open={props.modalOpen} onClose={props.modalClose}>
      <Paper className={props.classPaper} elevation={1}>
        {props.children}
      </Paper>
    </Modal>
  );
};

export default Popup;
