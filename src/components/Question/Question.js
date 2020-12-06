import React from 'react';
import Typography from "@material-ui/core/Typography";
import ComponentType from "./ComponentType";
import * as Styled from "./style";

function Question(props) {
  const { id: questionId, question, type, childProps, options, setFormState, formState } = props;
  
  return (
    question ? (
      <Styled.Container>
        <Typography variant='h5'>{question}</Typography>
        <ComponentType 
          type={type} 
          {...childProps} 
          options={options} 
          setFormState={setFormState} 
          formState={formState} 
          questionId={questionId} />
      </Styled.Container>
    ) : <div></div>
  )
}

export default Question
