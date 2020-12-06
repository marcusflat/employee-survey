import React, { useEffect, useState } from 'react';

import { Stepper, Toolbar, Question, Main } from "../../components";
import Buttons from './Buttons';
import api from "../../services";
import { useUser } from "../../contexts/user";

import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core";
import { Redirect, useHistory } from 'react-router-dom';



const useStyles = makeStyles({
  questions: {
    margin: '15px 0',
    flexGrow: '1',
    maxHeight: '350px'
  }
})

function Survey() {
  const classes = useStyles();

  const { userInfos, setUserInfos } = useUser();
  const history = useHistory();

  const [actualStep, setActualStep] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [stepComplete, setStepComplete] = useState({});
  const [formState, setFormState] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    api.get('/questions')
      .then(({data: { questions }}) => setQuestions(questions));
  }, []);

  const handleBack = () => {
    setStepComplete(prev => ({...prev, [questions[actualStep - 1].question]: false }));
    setActualStep(actualStep => actualStep - 1);
  }

  const handleNext = () => {
    setStepComplete(prev => ({...prev, [questions[actualStep].question]: true }));
    setActualStep(actualStep => actualStep + 1);
  }

  const handleFinish = () => {
    setStepComplete(prev => ({...prev, [questions[actualStep].question]: true }));
    setIsLoading(true);

    api.post('/answers', formState)
    .then(({status}) => {
      setUserInfos(userInfos => ({...userInfos, answered: true }));
      status === 200 && history.push('/survey/success');
    });
  }

  return (
    userInfos.answered 
    ? <Redirect to="/results"/> 
    : (
      <>
      <Toolbar />
      <Main>
        <Card>
          <Stepper 
            actualStep={actualStep}
            stepsLabels={questions}
            stepComplete={stepComplete}
          />
        </Card>
        <Card className={classes.questions}>
          <Question {...questions[actualStep]} setFormState={setFormState} formState={formState}/>
        </Card>
        <Buttons 
          isFirstStep={actualStep === 0}
          isLastStep={actualStep === questions.length - 1}
          handleBack={handleBack}
          handleNext={handleNext}
          handleFinish={handleFinish} 
          isValid={formState[questions[actualStep]?.id] ?? false}
          isLoading={isLoading}
        />
      </Main>
      </>
    )
  )
}

export default Survey;
