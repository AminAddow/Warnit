import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  head: {
    fontSize: "1em",
    color: "white"
  }
});

class ResultTable extends Component {
  state = {
    answers: [],
    totalScore: 0,
    possibleScore: 0,
    advicedCourseOfAction: [],
    colorCode: "Grønn",
    isLoaded: false
  };

  componentDidMount() {
    let myScore = 0;
    let possibleScore = 0;
    let advicedCourseOfAction = [];
    let colorCode = "Grønn";
    this.props.answersSubmitted.map(item => {
      let data = item.split(",");
      let questionType = data[0];
      let questionValue = parseInt(data[1], 10); // parsing the value of the input given to a number
      //console.log("VALLL " + typeof questionValue);
      //calculate possible score by looking at what type of input was sent to this class and determine the possible score
      questionType === "theme" && questionValue > 0
        ? (possibleScore = [+possibleScore + 10])
        : questionType !== "theme" && (possibleScore = [+possibleScore + 1]);
      // calculate users total score
      myScore = [+myScore + questionValue];
    });
    // calculate user's percentage, round up to 2 decimals and multply by 100
    let userPercentage = (myScore / possibleScore).toFixed(2) * 100;

    // need a some type of list of actions for the user to make, can make use of a switch case here
    //console.log("UP --->" + userPercentage);

    /* currently this calculation is very simple only looks at a high level, 
    should implement finding score depending on precentage of theme and not of total*/
    switch (true) {
      case userPercentage <= 33:
        colorCode = "Grønn";
        advicedCourseOfAction = [
          "Grønt tiltak 1",
          "Grønt tiltak 2",
          "Grønt tiltak 3"
        ];
        break;
      case userPercentage > 33 && userPercentage <= 66:
        colorCode = "Gul";
        advicedCourseOfAction = [
          "Gult tiltak 1",
          "Gult tiltak 2",
          "Gult tiltak 3"
        ];
        break;
      case userPercentage > 66:
        colorCode = "Rød";
        advicedCourseOfAction = [
          "Rødt tiltak 1",
          "Rødt tiltak 2",
          "Rødt tiltak 3"
        ];
        break;
      default:
        advicedCourseOfAction = [
          "Standard tiltak 1",
          "Standard tiltak 2",
          "Standard tiltak 3"
        ];
        break;
    }

    return this.setState({
      advicedCourseOfAction: advicedCourseOfAction,
      colorCode: colorCode,
      isLoaded: true
    });
    // console.log("myScore --> " + myScore),
    //console.log("possScore --> " + possibleScore)
    /* based off the precentage found by doing totalScore/possiblescore we show what grade 
    it was given and actions the person needs to take*/
  }

  displayResultRows = this.props.answersSubmitted.map(item => {
    // the content of event.currentTarget.id = ("typeOfQuestion", "inputvalue"), this needs to be split up
    // could make this state instead of prop would be available for all future functions
    let data = item.split(",");
    let type = data[0]; // type of question
    let questionValue = data[1]; // value

    /*console.log(
      "The value of the Q: " + questionValue + " And the type of the Q: " + type
    );*/
    return (
      <TableRow>
        <TableCell>SPØRSMÅLTYPE: {type}</TableCell>
        <TableCell>SVAR {questionValue}</TableCell>
      </TableRow>
    );
  });

  displayAdvicedActionRows = () =>
    this.state.advicedCourseOfAction.map(item => {
      console.log(item);
      return <Typography variant="h4"> –>{item}</Typography>;
    });
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <h1>
            Basert på din besvarelse anbefales det å gjøre følgende tiltak:
          </h1>
          {this.displayAdvicedActionRows()}
        </Grid>
        <Grid item xs={12}>
          <h2> resultat basert på dine følgende svar</h2>
        </Grid>
        <Grid item xs={12}>
          <Table>
            <TableHead className={classes.head}>
              <TableRow>
                <TableCell>Spørsmål</TableCell>
                <TableCell>Svar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{this.displayResultRows}</TableBody>
          </Table>
        </Grid>
      </Grid>
    );
  }
}
ResultTable.propTypes = {
  classes: PropTypes.object.isRequired
};

const ResultTableWrapped = withStyles(styles)(ResultTable);
export default ResultTableWrapped;
