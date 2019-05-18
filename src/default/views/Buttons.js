import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Questionset from "./../questioning";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({

  div:{
   
  
  }
});


function Buttons(props) {
  const { classes, handleModalOpen, handleModalClose, stateModalOpen } = props;
  return (

      <div className={classes.div}>

      <Fab style={{marginTop: '-30px'}}
        variant="extended"
        size="large"
        color="primary"
        className={classes.fab}
        onClick={handleModalOpen}>
        Gjennomfør spørsmålskjema
      </Fab>

      <Questionset
        modalOpen={stateModalOpen}
        handleModalClose={handleModalClose}
      />
    

      </div>
  
    
  );
}

Buttons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Buttons);