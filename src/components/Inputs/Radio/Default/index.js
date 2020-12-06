import React from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginTop: '20px'
  }
});

function InputRadioDefault({options, setFormState, formState, questionId}) {
  const classes = useStyles();

  const handleChange = (event) => {
    setFormState(prev => ({...prev, [questionId]: event.target.value}));
  };
  
  return (
    <FormControl component="fieldset" classes={classes}>
      <RadioGroup aria-label="gender" name="gender1" value={formState[questionId] ?? ''} onChange={handleChange}>
        {options.map(([id, option]) => 
          <FormControlLabel key={questionId + option} value={id} control={<Radio />} label={option} />)}  
      </RadioGroup>
    </FormControl>
  )
}

export default InputRadioDefault