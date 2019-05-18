import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";

const styles = {
  card: {
    margin: "10 auto"
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 80,
    height: 80
  },
  div: {
    padding: 10,
    height: "100%",
    width: "100vw"
  },
  cardcontent: {
    minHeight: 300,
    width: "auto"
  },
  test: {
    height: 800
  }
};

class Omoss extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.div}>
        <Grid container style={{ padding: 10 }} spacing={16}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h4">Om Warnit</Typography>
                <Typography variant="body1">
                  {" "}
                  Warnit er for deg som ønsker å melde, få råd eller kunnskap om
                  radikalisering og voldelig ekstremisme. Siden kan være nyttig
                  for eksempel for ansatte i kommuner, skoler, barnevern eller
                  politi, eller for andre som jobber med ungdom, foreldre og de
                  unge selv.
                </Typography>
                {/* <Typography variant="body1">Ønsker du å </Typography> */}
                <Typography variant="h6"> Ønsker du å </Typography>

                <Typography variant="body1">
                  {" "}
                  ✓ Kartlegge, analysere og dokumentere din bekymring i ett
                  system{" "}
                </Typography>
                <Typography variant="body1">
                  {" "}
                  ✓ Fokusere på kompetanseheving
                </Typography>
                <Typography variant="body1">
                  {" "}
                  ✓ Få bekreftet din bekymring knyttet til voksne og unge
                </Typography>
                <Typography variant="body1">
                  ✓ Få støtte i arbeidet for bedre samarbeid
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.cardcontent}>
              <CardContent>
                <Grid item container xs={12} spacing={8} justify="flex-start">
                  <Grid item container xs={12} sm={3} justify="center">
                    <Avatar
                      alt="Remy Sharp"
                      src="./1.JPG"
                      className={classes.bigAvatar}
                    />
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <Typography variant="h5">Mona Krahl</Typography>
                    <Typography variant="h6"> Daglig leder </Typography>
                    <Typography variant="body1">
                      {" "}
                      Utdannet sosionom og pedagogisk veileder fra UiA. Krahl
                      har erfaring fra arbeid med fosterhjem, psykiatrisk
                      døgnpost, arbeid med enslige mindreårige flyktninger og
                      asylsøkere samt erfaring fra NAV og frivillig sektor.
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.cardcontent}>
              <CardContent>
                <Grid container spacing={8}>
                  <Grid item container xs={12} sm={3} justify="center">
                    <Avatar
                      alt="Remy Sharp"
                      src="./2.JPG"
                      className={classes.bigAvatar}
                    />
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <Typography variant="h5">Perry Helmundsen</Typography>
                    <Typography variant="h6"> Styreleder </Typography>
                    <Typography variant="body1">
                      {" "}
                      Master innen pedagogikk og spesialpedagogikk.Tidligere
                      arbeidet som sosialfaglig koordinator ved Gateakademiet,
                      samt prosjektleder for Prosjekt 18+ ved politistasjonen i
                      Kristiansand. Helmundsen har jobbet med barn og ungdom
                      hele sin karriere.
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.cardcontent}>
              <CardContent>
                <Grid container spacing={8}>
                  <Grid item container xs={12} sm={3} justify="center">
                    <Avatar
                      alt="Remy Sharp"
                      src="./3.JPG"
                      className={classes.bigAvatar}
                    />
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <Typography variant="h5">
                      Tjeneste utviklet av Studentene ved USN Ringerike
                    </Typography>
                    <Typography variant="body1">
                      {" "}
                      Thor Eivind Skogstad Bakke, Haseeb Rana, Khalid Asefi,
                      Amin Dahir Addow{" "}
                    </Typography>
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

Omoss.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Omoss);
