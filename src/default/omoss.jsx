import React, { Component } from "react";
import { Typography } from "@material-ui/core";

class Omoss extends Component {
  render() {
    return (
      <div>
        <Typography variant="h1">Om Warnit</Typography>
        <p>
          {" "}
          Warnit er for deg som ønsker å melde, få råd eller kunnskap om
          radikalisering og voldelig ekstremisme. Siden kan være nyttig for
          eksempel for ansatte i kommuner, skoler, barnevern eller politi, eller
          for andre som jobber med ungdom, foreldre og de unge selv.
        </p>
        <Typography variant="body1">
          <h2>Ønsker du å </h2>
          <p>
            {" "}
            ✓ Kartlegge, analysere og dokumentere din bekymring i ett system{" "}
          </p>
          <p> ✓ Fokusere på kompetanseheving</p>
          <p> ✓ Få bekreftet din bekymring knyttet til voksne og unge</p>
          <p>✓ Få støtte i arbeidet for bedre samarbeid</p>
        </Typography>
      </div>
    );
  }
}

export default Omoss;
