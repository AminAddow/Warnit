import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";

const styles = {
  card: {
    margin: "10 auto"
  },
  link: {
    margin: "60px auto",
    color: "blue"
  },
  grid: {
    margin: 10,
    width: "auto"
  },
  bigAvatar: {
    margin: 10,
    width: 80,
    height: 80
  },
  div: {
    padding: 10,
    height: "auto",
    width: "100vw"
  },
  cardcontent: {
    minHeight: 200,
    height: 400,
    width: "auto"
  },
  test: {
    //minHeight: 500,
    height: 800
  }
};

class Ressurser extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.div}>
        <Grid container style={{ padding: 10 }} spacing={16}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h4">Ressurser og veildere</Typography>
                <Typography variant="body1">
                  {" "}
                  Her finner du en rekke ressurser som kan bidra med nyttig
                  informasjon om forebygging av radikalisering og voldelige
                  ekstremisme.
                </Typography>
                {/* <Typography variant="body1">Ønsker du å </Typography> */}
                <Typography variant="h6">
                  {" "}
                  Særlig er fokus på følgende tematikk:{" "}
                </Typography>

                <Typography variant="body1">
                  {" "}
                  ✓ Hvilke tiltak som kan være aktuelle må vurderes med
                  utgangspunkt i det enkelte individ, det vil si situasjonen,
                  gruppetilhørigheten og det sosiale miljøet. Ved iverksetting
                  av tiltak er det viktig å tenke helhetlig.{" "}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.cardcontent}>
              <CardContent>

                <Grid item container xs={12} spacing={8} justify="center">
                  <Grid item xs={12}>
                    <Typography variant="h5">
                      Forskningsrapport om høyreekstremisme i Norge
                    </Typography>
                  </Grid>
                  <Grid item container xs={12} justify="center">
                    <Grid item xs={4}>
                      <Link
                        href="https://lovdata.no/sok?q=radikalisering"
                        rel="noopener noreferrer"
                        target="_blank"
                        color="inherit"
                        className={classes.bigAvatar}
                      >
                        <Avatar
                          alt="Logo for link til lovdata"
                          src="./lovedata.png"
                          className={classes.bigAvatar}
                        />
                      </Link>
                    </Grid>
                    <Grid item xs={6}>
                      <Link
                        href="https://lovdata.no/sok?q=radikalisering"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Typography variant="body1" className={classes.link}>
                          Link til lovdata.no.
                        </Typography>
                      </Link>
                    </Grid>
                  </Grid>
                  <Grid item container xs={12} justify="center">
                    <Grid item xs={4}>
                      <Link
                        href="https://www.regjeringen.no/no/sub/radikalisering/aktuelt/id699413/"
                        color="inherit"
                        rel="noopener noreferrer"
                        target="_blank"
                        className={classes.bigAvatar}
                      >
                        <Avatar
                          alt="Logo for link til regjeringen"
                          src="./regjeringen.png"
                          className={classes.bigAvatar}
                        />
                      </Link>
                    </Grid>
                    <Grid item xs={6}>
                      <Link
                        href="https://www.regjeringen.no/no/sub/radikalisering/aktuelt/id699413/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Typography variant="body1" className={classes.link}>
                          Link til regjeringen.no.
                        </Typography>
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.cardcontent}>
              <CardContent>
                <Grid item container xs={12} spacing={8} justify="center">
                  <Grid item xs={12} md={6} lg={4}>
                    <Typography variant="h5">Veileder som PDF</Typography>
                  </Grid>
                  <Grid item container xs={12} justify="center">
                    <Grid item xs={4}>
                      <Link
                        href="https://www.regjeringen.no/no/sub/radikalisering/veileder/veileder-som-pdf/id2405821/"
                        className={classes.bigAvatar}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Avatar
                          alt="Link til regjeringen"
                          src="PDFIcon.svg"
                          className={classes.bigAvatar}
                        />
                      </Link>
                    </Grid>
                    <Grid item xs={6}>
                      <Link
                        href="https://www.regjeringen.no/no/sub/radikalisering/veileder/veileder-som-pdf/id2405821/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Typography variant="body1" className={classes.link}>
                          Link til PDF veileder.
                        </Typography>
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Ressurser.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Ressurser);
