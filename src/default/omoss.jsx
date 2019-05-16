import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    minWidth: 275,
  },
}
class Omoss extends Component {
  render() {
    const { classes } = props;
    return (
      <div>
      <Card className={classes.card} >
      <CardContent>
      <Grid item xs={12} style={{ padding: 100 }}>
      <Typography variant="h1">Om Warnit</Typography>
      <Typography variant="body1">
        {" "}
        Warnit er for deg som ønsker å melde, få råd eller kunnskap om
        radikalisering og voldelig ekstremisme. Siden kan være nyttig for
        eksempel for ansatte i kommuner, skoler, barnevern eller politi, eller
        for andre som jobber med ungdom, foreldre og de unge selv.
      </Typography>
      </Grid>
      //  <Typography variant="h1">Om Warnit</Typography>
      //   <p>
      //     {" "}
      //     Warnit er for deg som ønsker å melde, få råd eller kunnskap om
      //     radikalisering og voldelig ekstremisme. Siden kan være nyttig for
      //     eksempel for ansatte i kommuner, skoler, barnevern eller politi, eller
      //     for andre som jobber med ungdom, foreldre og de unge selv.
      // //  </p>
        <Typography variant="body1">Ønsker du å </Typography>
          <Typography variant="body1">
            {" "}
            ✓ Kartlegge, analysere og dokumentere din bekymring i ett system{" "}
          </Typography>
          <Typography variant="body1"> ✓ Fokusere på kompetanseheving</Typography>
          <Typography variant="body1"> ✓ Få bekreftet din bekymring knyttet til voksne og unge</Typography>
          <Typography variant="body1">✓ Få støtte i arbeidet for bedre samarbeid</Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Omoss);
