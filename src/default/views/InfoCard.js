import React, { Component} from 'react';
import Banner from './Banner';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
//import DarkAlley from '../images/alley';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
    infocard: {
        marginTop: "10px"
        
        
        
    },
    paperGrid: {
        margin: theme.spacing.unit * 5,
        /*padding: theme.spacing.unit */

    },
    paper: {
        padding: theme.spacing.unit *2
    }
})

const InfoCard =(props) => {
    const { classes } = props;
        return(
            <Grid sm={6} container direction="row" justify="center" alignItems="center" className={classes.infocard} style={{border: '3px solid blue'}}>
                
                    <Grid sm={2} xs={6} container item className={classes.paperGrid} wrap="nowrap">
                        <Paper elevation={2} className={classes.paper}>
                        <Grid container item justify="center" alignItems="center">
                           
                        </Grid>
                        <Typography variant="h2">Box 1</Typography>
                        </Paper>
                    </Grid>

                    <Grid sm={2} xs={6} container item className={classes.paperGrid} wrap="nowrap">
                        <Paper elevation={2} className={classes.paper}>
                        <Grid container item justify="center" alignItems="center">
                           
                        
                        <Typography variant="h2">Box 2</Typography>
                        <Typography variant="p">Føler du at personen er radikalisert?  </Typography>
                        </Grid>
                        </Paper>
                    </Grid>

                    <Grid sm={2} xs={6} container item className={classes.paperGrid} wrap="nowrap">
                        <Paper elevation={2} className={classes.paper}>
                        <Grid container item justify="center" alignItems="center">
                           
                        </Grid>
                        <Typography variant="h2">Box 3</Typography>
                        </Paper>
                    </Grid>
             
            </Grid>
        );
}
InfoCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoCard);