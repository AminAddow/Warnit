import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import Popup from "./popup";

const Invite = props => {
  return (
    <Popup
      modalOpen={props.modalOpen}
      modalClose={props.modalClose}
      classPaper={props.classPaper}
      classTextfield={props.classTextfield}
    >
      <form>
        <Grid container justify="center">
          <Grid item xs={12}>
            <label>Inviter nye administratorer gjennom E-post:</label>
          </Grid>
          <Grid item xs={12}>
            {/* after recognizing an email write it to state and then insert it into ahref tag surrounding button */}
            <TextField
              id="email-input"
              label="E-post adresser"
              placeholder="oppgi e-post adresser"
              multiline
              className={props.classTextfield}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid container item xs={12} justify="center">
            <a href="mailto:test?cc=person2&amp;subject=Invitasjon til å bli en del av Warnit.no&amp;body=Link to the registration page with valid code">
              <Button variant="contained" color="secondary" fullWidth>
                Send
              </Button>
            </a>
          </Grid>
        </Grid>
      </form>
    </Popup>
  );
};

export default Invite;
