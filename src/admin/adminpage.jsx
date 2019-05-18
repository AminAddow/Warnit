import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Grid,
  Divider,
  Button
  /*Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow*/
} from "@material-ui/core";
import Invite from "./views/invite";
import EditQuestionset from "./views/editequestionset";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  textField: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    left: "5",
    margin: "10 auto",
    width: "90%"
  },
  paper: {
    width: 500,
    margin: "15vh auto",
    minHeight: "20%",
    maxHeight: "60%",
    overflow: "auto",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit,
    outline: "none"
  },
  questionpaper: {
    minWidth: 400,
    maxWidth: 800,
    margin: "10vh auto",
    minHeight: "20vh",
    maxHeight: "70vh",
    overflow: "auto"
  },
  gridCon: {
    margin: "0 auto",
    width: "100vw"
  },
  typoDisplay: {
    fontSize: 16,
    height: 100
  },
  tablehead: {
    background: "grey",
    fontSize: 20
  },
  table: {
    width: "93vw"
  },
  displaymsg: {
    fontSize: 12,
    fontStyle: "italic"
  }
});

class AdminPage extends Component {
  state = {
    inviteModalOpen: false,
    editModalOpen: false
  };

  // modal functions for invite
  handleInviteModalOpen = () => {
    this.setState({ inviteModalOpen: true });
  };
  handleInviteModalClose = () => {
    this.setState({ inviteModalOpen: false });
  };
  // modal functions for click on questionset
  handleEditModalOpen = () => {
    this.setState({ editModalOpen: true });
  };
  handleEditModalClose = () => {
    this.setState({ editModalOpen: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={24} className={classes.gridCon}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.root}>
            <Typography variant="h5"> Inviter</Typography>
            <Divider />
            <Typography variant="body1" className={classes.typoDisplay}>
              Denne funksjonen tillater deg å invitere nye brukere som vil få
              administrator tilgang til nettstedet
            </Typography>
            <Button
              size="large"
              color="inherit"
              variant="outlined"
              fullWidth
              onClick={this.handleInviteModalOpen}
            >
              Inviter
            </Button>
            <Invite
              modalOpen={this.state.inviteModalOpen}
              classTextfield={classes.textField}
              modalClose={this.handleInviteModalClose}
              classPaper={classes.paper}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.root}>
            <Typography variant="h5"> Min Bruker</Typography>
            <Divider />
            <Typography variant="body1" className={classes.typoDisplay}>
              Denne funksjonen tillater deg å gjøre endringer på egen bruker ved
              å gi tilgang til egen brukeradministrasjon
            </Typography>
            <Button size="large" color="inherit" variant="outlined" fullWidth>
              Gå Til
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.root}>
            <Typography variant="h5"> Endre Spørsmålssett</Typography>
            <Divider />
            <Typography variant="body1" className={classes.typoDisplay}>
              Denne funksjonen tillater deg å holde spørsmålssettet oppdatert og
              relevant for brukere av systemet.
            </Typography>
            <Button
              size="large"
              color="inherit"
              variant="outlined"
              fullWidth
              onClick={this.handleEditModalOpen}
            >
              Endre
            </Button>

            <EditQuestionset
              modalOpen={this.state.editModalOpen}
              classTextfield={classes.textField}
              modalClose={this.handleEditModalClose}
              classPaper={classes.questionpaper}
            />
          </Paper>
        </Grid>
        {/*
          <Grid item xs={12}>
            <Paper className={classes.root}>
              <Typography variant="headline">
                Oversikt over invitasjoner og eksisterende brukere
              </Typography>
              <Typography variant="body1" className={classes.displaymsg}>
                Dette er bare for å vise
              </Typography>
              <Table className={classes.table}>
                <TableHead className={classes.tablehead}>
                  <TableRow>
                    <TableCell>Email</TableCell>
                    <TableCell>Sendt</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>test@minos.no</TableCell>
                    <TableCell>24/03-2019</TableCell>
                    <TableCell>Invitert</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        */}
      </Grid>
    );
  }
}

AdminPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdminPage);
