import React from "react";
import Bannerpic from "./images/banner.JPEGXR";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const bannerStyle = {
  width: "100%",
  height: "80vh",
  backgroundImage: `url(${Bannerpic})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"

  //filter: 'blur(1px)',
};

const Banner = props => {
  return (
    <Grid
      container
      item
      style={bannerStyle}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} align="center" style={{ marginTop: "40px" }}>
        <Typography xs={12} color="inherit" variant="h3">
          Ikke vær redd, <br /> si ifra
        </Typography>
      </Grid>
      <Grid item align="center">
        {props.children}
      </Grid>
    </Grid>
  );
};

export default Banner;
