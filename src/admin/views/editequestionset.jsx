import React, { Component } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Popup from "./popup";
import axios from "axios";
import NewEditableQuestion from "./neweditablequestion";
import Loader from "./../../default/views/loader";
const styles = theme => ({
  dispTypo: {
    fontSize: 16,
    fontStyle: "italic"
  },
  button: {
    margin: "0 auto",
    maxWidth: "98%"
  }
});

class EditQuestionset extends Component {
  state = {
    isLoaded: false,
    questionset: [], // contains the data from the json file
    arrayQuestions: [], // should contain the id of every single element loaded, element -->
    numberOfThemes: 0, // total number of themes for questionset
    numberOfQuestions: 0, // number of question for the current theme
    currentTheme: 0,
    currentQuestion: 0,
    questionsLoaded: false,
    themeLoaded: false
  };

  async componentDidMount() {
    const response = await axios.get("./../questionset.json");
    this.setState({
      questionset: response.data,
      numberOfThemes: response.data.length,
      numberOfQuestions:
        response.data[this.state.currentTheme].Questions.length,
      isLoaded: true
    });
  }

  componentDidUpdate() {
    //console.log(this.state);
  }

  loadQuestion = () => {
    const {
      currentTheme,
      questionset,
      arrayQuestions,
      questionsLoaded,
      themeLoaded
    } = this.state;

    /* loop over the questionset and for each theme print out 
    themequestion and the following sub questions  before moving on to the next theme
    checks, need to do: -- if currentTheme < number of Themes and 
    currentquestion < numberofQuestions otherwise we are done printing*/
    let subquestions = [];

    questionset[currentTheme].Questions.map(item => {
      subquestions = subquestions.concat(item.Question + ";-- Normal");
    });
    !themeLoaded
      ? this.setState({
          arrayQuestions: arrayQuestions.concat(
            questionset[currentTheme].ThemeQuestion + ";-- Tema"
          ),
          themeLoaded: true
        })
      : !questionsLoaded
      ? this.setState({
          arrayQuestions: arrayQuestions.concat(subquestions),
          questionsLoaded: true
        })
      : //if questionsLoaded == true then we go to the next theme and reset questionsLoaded and themeLoaded
        this.setState({
          currentTheme: currentTheme + 1,
          numberOfQuestions: questionset[currentTheme].Questions.length,
          questionsLoaded: false,
          themeLoaded: false
        });
  };
  loadSubQuestion = question => (
    <NewEditableQuestion
      id={"themeid-" + this.state.currentTheme}
      questionType={"Normal spørsmål"}
      defaultVal={question}
    />
  );
  render() {
    const {
      modalOpen,
      modalClose,
      classPaper,
      classTextfield,
      classes
    } = this.props;
    const {
      isLoaded,
      arrayQuestions,
      numberOfThemes,
      currentTheme
    } = this.state;
    return (
      <div>
        {isLoaded ? (
          (currentTheme < numberOfThemes && this.loadQuestion(),
          (
            <Popup
              modalOpen={modalOpen}
              modalClose={modalClose}
              classPaper={classPaper}
              classTextfield={classTextfield}
            >
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <Typography variant="body1" className={classes.dispTypo}>
                    Endre det nåværende spørsmålssettet
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  {arrayQuestions.map(item => {
                    let data = item.split(";--");
                    let type = data[1]; // type of question
                    let questionValue = data[0]; // value
                    //console.log("type " + type);
                    //console.log("value " + questionValue);

                    return (
                      <NewEditableQuestion
                        id={"themeid-" + this.state.currentTheme}
                        questionType={type}
                        type={type}
                        defaultVal={questionValue}
                      />
                    );
                  })}
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  sm={8}
                  md={6}
                  lg={4}
                  className={classes.button}
                >
                  <Button
                    color="primary"
                    variant="outlined"
                    size="large"
                    jusify="center"
                    fullWidth
                  >
                    Lagre endringer
                  </Button>
                </Grid>
              </Grid>
            </Popup>
          ))
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

export default withStyles(styles)(EditQuestionset);
