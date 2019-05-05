import React, { Component } from "react";
import { Typography } from "@material-ui/core";

class Omoss extends Component {
  render() {
    return (
      <div>
        <Typography variant="h3">Om Warnit</Typography>
        <Typography variant="body1">
          {" "}
          Warnit er for deg som ønsker å melde, få råd eller kunnskap om
          radikalisering og voldelig ekstremisme. Siden kan være nyttig for
          eksempel for ansatte i kommuner, skoler, barnevern eller politi, eller
          for andre som jobber med ungdom, foreldre og de unge selv.
        </Typography>

        <Typography variant="h5">Ønsker du å </Typography>
        <Typography variant="body1">
          {" "}
          ✓ Kartlegge, analysere og dokumentere din bekymring i ett system{" "}
        </Typography>
        <Typography variant="body1"> ✓ Fokusere på kompetanseheving</Typography>
        <Typography variant="body1">
          {" "}
          ✓ Få bekreftet din bekymring knyttet til voksne og unge
        </Typography>
        <Typography variant="body1">
          ✓ Få støtte i arbeidet for bedre samarbeid
        </Typography>
      </div>
    );
  }
}

export default Omoss;
