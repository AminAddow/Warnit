import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = {
  infocard: {
    marginTop: 50
  },
  cardbox: {
    //color: "red"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
  /* logo: {
    width: "auto",
    height: 100,
    margin: "0 auto",
    content: `url(${Logo})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"

    //filter: 'blur(1px)',
  } */
};

function TextCard(props) {
  const { classes } = props;

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.infocard}
    >
      <Grid item xs={11} sm={10} className={classes.cardbox}>
        <Card className={classes.card}>
          <CardContent>
            {/*<Grid item className={classes.logo} /> */}
            <Typography
              className={classes.title}
              gutterBottom
              style={{ padding: 10, fontSize: 18 }}
            >
              Warnit er en plattform man kan benytte dersom man mistanker
              radikalisering. Vi som samfunnets borgere må bidra og følge med på
              om vi står i fare. Ved hjelp av warnit spørsmålsett kan man
              besvare spørsmål, og deretter få råd og veiledning. Warnit er en
              del av Minos.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

TextCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextCard);
