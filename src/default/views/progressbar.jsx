import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";

/*function getStepContent(step) {
  switch (step) {
    case 0:
      return "Step 1: Question 1";
    case 1:
      return "Step 2: Question 2";
    case 2:
      return "Step 3: Question 3";
    default:
      return "Unknown step";
  }
}*/

//const totalSteps = () => getSteps().length;

//const isStepOptional = step => step === 1;
/*
handleNext = () => {
  let activeStep;

  if (this.isLastStep() && !this.allStepsCompleted()) {
    // It's the last step, but not all steps have been completed
    // find the first step that has been completed
    const steps = getSteps();
    activeStep = steps.findIndex((step, i) => !this.state.completed.has(i));
  } else {
    activeStep = this.state.activeStep + 1;
  }
  this.setState({
    activeStep
  });
};
*/
// creates a functional component due to this component not having any sort of state
const ProgressBar = props => {
  const getSteps = () => {
    return props.themes;
  };
  const steps = getSteps();
  return (
    <Stepper alternativeLabel nonLinear activeStep={props.activeStep}>
      {steps.map((label, index) => {
        const props = {};

        return (
          <Step key={label} {...props}>
            <StepButton>{label}</StepButton>
          </Step>
        );
      })}
    </Stepper>
  );
};

// define default values for the different props, as a safety in case of system failures?

export default ProgressBar;
