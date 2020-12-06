import React from 'react';


import StepperMui from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

function Stepper(props) {
  const { stepsLabels, actualStep, stepComplete } = props;

  return (
    <StepperMui activeStep={actualStep} alternativeLabel>
      {stepsLabels && stepsLabels.map(({ question }) => (
        <Step
          key={question}
          completed={stepComplete[question]}
          data-testid={question}
        >
          <StepLabel></StepLabel>
        </Step>
      ))}
    </StepperMui>
    
  )
}

export default Stepper
