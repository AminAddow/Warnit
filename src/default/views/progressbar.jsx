import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

// creates a functional component due to this component not having any sort of state
const ProgressBar = props => {
  const getSteps = () => {
    return props.themes;
  };
  const steps = getSteps();
  return (
    <Stepper alternativeLabel nonLinear activeStep={props.activeStep}>
      {steps.map(label => {
        const props = {};

        return (
          <Step key={label} {...props}>
            <StepLabel>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

// define default values for the different props, as a safety in case of system failures?

export default ProgressBar;
