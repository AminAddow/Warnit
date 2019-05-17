import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
    infocard: {
        marginTop: "15px",
      

    },
  cardbox: {
      //color: "red"
      
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function TextCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid  container direction="row" justify="center" alignItems="center" className={classes.infocard} >
    <Grid item xs={11} sm={10} className={classes.cardbox}>
    <Card className={classes.card} >
      <CardContent>
        <Typography className={classes.title}  gutterBottom>
        Warnit er et nettside som man kan får råd og veiledning, når man er bekymret for noen eller har mistanke om radikalisering. Ved hjelp av gjennomføring av spørsmål settet kan man få råd og veiledning om bestemte subjektet.  Warnit er en  del av Minos.
        </Typography>
      
        <Typography className={classes.pos} >
          adjective
        </Typography>
        <Typography component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
  );
}

TextCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextCard);