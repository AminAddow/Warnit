import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';


const styles = theme =>  ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
      margin: theme.spacing.unit,
  },
  login: {
      justifyContent: 'end',
  }
});


function Navbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Typography component={Link} to="/" variant="h4" size="Large" color="inherit" className="classes.button">
                Warnit
            </Typography>
            {/* {this.props.authenticated ? (
                  <Button className={classes.button}  component={Link} size="small" to="/Workspace" color="inherit">Workspace</Button>
              ) : (
                  <div></div>
              )} */}
                  <Button className={classes.button}  component={Link} size="small" to="/Dokumenter" color="inherit">Dokumenter</Button>
                  <Button className={classes.button}  component={Link} size="small" to="/Omoss" color="inherit">Omoss</Button>
                  <Button component={Link} to="/Login" color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
