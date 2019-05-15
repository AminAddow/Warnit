import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
//import Click from '../images/Click';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit ,
  },
});


function Buttons(props) {
  const { classes } = props;
  return (

      <div>
      <Fab variant="extended" color="primary" className={classes.fab}>
      
     
    
          Ønsker du å svare på spørsmålskjema? 
        
      </Fab>
      <div>
        <p>hello, this is updated AGAINN!!!</p>
        <h1>YEET</h1>
      </div>
      </div>
  
    
  );
}

Buttons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Buttons);