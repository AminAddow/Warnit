import React from "react";
import { Modal, Paper, Grid } from "@material-ui/core";

const Popup = props => (
  <Grid container item xs={12} justify="center">
    <Grid container item xs={12} sm={10} md={8} lg={6}>
      <Modal open={props.modalOpen} onClose={props.modalClose}>
        <Paper className={props.classPaper} elevation={1}>
          {props.children}
        </Paper>
      </Modal>
    </Grid>
  </Grid>
);

export default Popup;
