import React, { Component } from "react";
// MUI
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Modal from "@material-ui/core/Modal";
import axios from "axios";
// functional components
import ProgressBar from "./views/progressbar";
import Question from "./views/question";
import AnswerOption from "./views/normalansweroption";
import SliderOption from "./views/themeansweroption";
import Loader from "./views/loader";
import ResultTable from "./views/resulttable";

const styles = theme => ({
  root: {
    width: "80%"
  },
  paper: {
    position: "absolute",
    top: "10%",
    left: "10%",
    width: "80%",
    minHeight: "20%",
    maxHeight: "80%",
    overflow: "auto",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit,
    outline: "none"
  }
});

class Questionset extends Component {
  state = {
    modalOpen: true,
    isLoaded: false,
    activeStep: 0,
    content: [], // contains the entire json file with questions and questionthemes
    currentQuestionSetLength: 0, // number of questions for a single theme, should be updated after prior theme questoins are completed
    currentQuestion: 0,
    themes: [], // this will be sent to the progress bar as a prop,
    completedThemeQuestion: false,
    completedSteps: [], // should contain the headings of each theme after they are completed
    completedQuestions: [] // should contain id of which question was answered (including theme question)
  };

  /* make use of asyn/await syntax rather than using "then" syntax which is a "promise"
 reason for doing this is due to async/await syntax is easier to understand and less code*/
  async componentDidMount() {
    const response = await axios.get("./questionset.json");

    this.setState({
      content: response.data,
      themes: response.data.map(item => item.Theme).concat("Resultat"),
      currentQuestionSetLength:
        response.data[this.state.completedSteps.length].Questions.length,
      isLoaded: true
    });
  }

  // handle modal event
  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  handleNextTheme = () => {
    this.setState({
      // add the completed theme to the array before going to next theme
      completedSteps: this.state.completedSteps.concat(
        this.state.content[this.state.activeStep].Theme
      ),
      activeStep: this.state.activeStep + 1
    });
  };

  // handeling state change when user clicks a answer option
  handleUpdateOnThemeCompletion = () => {
    // common for both cases
    this.handleNextTheme();

    let updateCompletedSteps = this.state.completedSteps.length + 1; // to shorten code where we are able to
    /* if it is the laste question concerning a theme, check whether there is more 
      themes with questions. if so, update status and go on to next theme question
      otherwise we are printing the result to the user */
    // used to get the next set of questions
    this.state.completedSteps.length + 1 < this.state.themes.length - 1 &&
      this.setState({
        completedThemeQuestion: false, // on completion of theme this is reset and theme question is displayed
        currentQuestion: 0,
        // current question length will not get updated before exiting this call
        currentQuestionSetLength: this.state.content[updateCompletedSteps]
          .Questions.length
      });
  };

  handleAnswerSubmit = event => {
    /*on receiving changes/answers from sub class(answerOption) component 
    handleAnswerSubmit is called from sub components onClick function*/
    // common for both case
    this.setState({
      completedQuestions: this.state.completedQuestions.concat(
        event.currentTarget.id
      )
    });
    // the content of event.currentTarget.id = ("typeOfQuestion", "inputvalue"), this needs to be split up
    let data = event.currentTarget.id.split(",");
    let type = data[0];
    let questionValue = data[1];
    /*console.log(
      "The value of the Q: " + questionValue + " And the type of the Q: " + type
    );
    console.log(
      "statement " +
        (!this.state.completedThemeQuestion && questionValue === "0")
    );*/

    /* if the theme question havent been answered and the value of the answer on the themeQuestion is equal to 0
    then skip to next theme otherwise check */
    // nested ternary operators
    !this.state.completedThemeQuestion && questionValue === "0"
      ? this.handleUpdateOnThemeCompletion()
      : // check if theme question has been completed for current step
      !this.state.completedThemeQuestion
      ? this.setState({
          // need to update currentQuestionSetLength
          completedThemeQuestion: true,
          currentQuestionSetLength: this.state.content[
            this.state.completedSteps.length
          ].Questions.length
        })
      : this.state.currentQuestion + 1 < this.state.currentQuestionSetLength
      ? // we add 1 to currentQuestion since its starting point is 0
        this.setState({
          //setting next question
          currentQuestion: this.state.currentQuestion + 1
        })
      : this.handleUpdateOnThemeCompletion();
  };

  contentQuestion = () => {
    const { completedSteps, content, currentQuestion } = this.state;
    return (
      <div>
        <Question
          content={
            content[completedSteps.length].Questions[currentQuestion].Question
          }
        />
        <AnswerOption
          classes={this.props.classes.root}
          onSubmit={this.handleAnswerSubmit}
        />
      </div>
    );
  };

  contentThemeQuestion = () => {
    const { completedSteps, content, currentQuestion } = this.state;
    return (
      <div>
        <Question content={content[completedSteps.length].ThemeQuestion} />
        <SliderOption onSubmit={this.handleAnswerSubmit} />
      </div>
    );
  };
  componentDidUpdate() {
    // just to make sure the update went through we make use of this component as a test)
    //this.state.isLoaded ? console.log(this.state) : console.log("not updated");
  }

  render() {
    // start by making it easier for ourselves by making code less repetetive
    const { classes } = this.props;
    const {
      modalOpen,
      activeStep,
      completedSteps,
      completedQuestions,
      completedThemeQuestion,
      content,
      currentQuestion,
      currentQuestionSetLength,
      themes,
      isLoaded
    } = this.state;

    return (
      <div>
        {isLoaded ? (
          /* Use of ternery operator to be sure that the content is loaded
            into state before proceeding to make use of it through props, this
            also avoids causing any undefined variables to pop up*/
          <div classes={classes.root}>
            <Grid container justify="center" spacing={16}>
              {/* instead of this button, pass a button as prop to this component */}
              <Button onClick={this.handleOpen} justify="center">
                open popup
              </Button>
            </Grid>
            <Grid item>
              <Modal open={modalOpen} onClose={this.handleClose}>
                <Paper className={classes.paper} elevation={1}>
                  <ProgressBar themes={themes} activeStep={activeStep} />
                  <Divider variant="middle" />
                  {// if there is no data registered, we display first theme question
                  !completedThemeQuestion && activeStep + 1 < themes.length ? (
                    this.contentThemeQuestion()
                  ) : activeStep + 1 < themes.length ? (
                    /* need the user to answer theme question before moving on to contentQuestions*/

                    this.contentQuestion()
                  ) : (
                    <ResultTable
                      answersSubmitted={this.state.completedQuestions}
                    />
                  )}
                  <Divider variant="middle" />
                </Paper>
              </Modal>
            </Grid>
          </div>
        ) : (
          <Grid container justify="center">
            <Loader modalOpen={this.state.modalOpen} />
          </Grid>
        )}
      </div>
    );
  }
}
Questionset.propTypes = {
  classes: PropTypes.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
const QuestionsetWrapped = withStyles(styles)(Questionset);
export default QuestionsetWrapped;
