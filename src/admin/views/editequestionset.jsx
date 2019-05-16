import React, { Component } from "react";
import { Grid, Typography, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Popup from "./popup";
import axios from "axios";
import NewEditableQuestion from "./neweditablequestion";
const styles = theme => ({
  dispTypo: {
    fontSize: 16,
    fontStyle: "italic"
  }
});

class EditQuestionset extends Component {
  state = {
    questionset: [],
    arrayQuestionID: [], // should contain the id of every single element loaded, element --> meaning a question and themes so that i can
    numberOfThemes: 0
  };

  async componentDidMount() {
    const response = await axios.get("./../questionset.json");
    this.setState(
      {
        questionset: response.data,
        numberOfThemes: response.data.length
      }
      //    () => console.log(this.state)
    );
  }

  loadQuestions = () => {
    let count = 0;
    const { questionset, numberOfThemes } = this.state;
    for (var j = 0; j < numberOfThemes; j++) {
      for (var i = 0; i < questionset[j].Questions.length; i++) {
        return (
          <NewEditableQuestion
            id={"randomid-" + count}
            defaultVal={questionset[j].Questions[i].Question}
          />
        );
      }
    }
  };

  render() {
    const {
      modalOpen,
      modalClose,
      classPaper,
      classTextfield,
      classes
    } = this.props;
    const { questionset, arrayQuestionID } = this.state;
    return (
      <Popup
        modalOpen={modalOpen}
        modalClose={modalClose}
        classPaper={classPaper}
        classTextfield={classTextfield}
      >
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Typography variant="display1" className={classes.dispTypo}>
              Endre det nåværende spørsmålssettet
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {this.loadQuestions()}
          </Grid>
        </Grid>
      </Popup>
    );
  }
}

export default withStyles(styles)(EditQuestionset);
