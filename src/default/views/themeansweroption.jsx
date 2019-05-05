import React, { Component } from "react";
import Slider from "@material-ui/lab/Slider";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    width: "80%",
    height: "auto",
    padding: 10,
    margin: "10%",
    overflow: "hidden"
  },
  button: {
    margin: theme.spacing.unit
  },
  slider: {
    height: 100,
    marginTop: 10
  },
  track: {
    height: 20,
    borderRadius: 100
  },
  thumb: {
    width: 30,
    height: 30
  },
  typoBorder: {
    border: "2px solid black",
    boxShadow: "2px 2px grey",
    borderRadius: 5,
    width: "fit-content",
    padding: 10,
    background: "dark",
    margin: "auto"
  },
  typography: {
    width: "fit-content"
  }
});

class SliderOption extends Component {
  state = { sliderVal: 5 };

  handleChange = (event, sliderVal) => {
    // need to pass this value to parent component upon confirmation from user
    this.setState({ sliderVal });
    //console.log("slider value", this.state.sliderVal);
  };

  render() {
    const { classes } = this.props;
    const { sliderVal } = this.state;
    const array = ["theme", sliderVal];
    return (
      <Grid
        container
        alignContent="center"
        spacing={24}
        className={classes.root}
      >
        <Grid item xs={12}>
          <Slider
            classes={{
              track: classes.track,
              thumb: classes.thumb
            }}
            value={sliderVal}
            min={0}
            max={10}
            step={1}
            onChange={this.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <div className={classes.typoBorder}>
            <Typography className={classes.typography} variant="h4">
              {this.state.sliderVal}
            </Typography>
          </div>
        </Grid>
        <Grid item align="center" xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            onClick={this.props.onSubmit}
            id={array}
          >
            Neste
          </Button>
        </Grid>
      </Grid>
    );
  }
}

SliderOption.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(SliderOption);
