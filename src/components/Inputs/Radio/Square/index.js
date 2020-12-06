import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl
} from "@material-ui/core";

import * as Styled from "./style";

const useStyles = makeStyles({
  FormControlLabelRoot: {
    margin: props => props.FormControlLabelRoot?.margin,
    "&:hover .MuiFormControlLabel-label": {
      color: "inherit"
    },
    "&$FormControlLabelDisabled:hover .MuiFormControlLabel-label": {
      color: "rgba(0,0,0,0.38)"
    }
  },
  FormControlLabelDisabled: {},
  InputLabel: {
    border: "2px solid #ABABAB",
    color: "rgba(0,0,0,0.65)",
    height: "32px",
    lineHeight: "32px",
    padding: "0 15px",
    margin: "-1px 0 0 -1px"
  },
  Input: {
    display: "none"
  },
  InputChecked: {
    "& ~ span": {
      color: "#fff",
      backgroundColor: "#8DCDF0",
      border: "2px solid #8DCDF0",
      position: "relative",
      "&::after": {
        content: '""',
        color: "transparent",
        position: "absolute",
        right: "-1px",
        width: "1px",
        height: "100%",
        backgroundColor: "#8DCDF0",
        display: "inline-block"
      }
    }
  },
  FormControl: {
    margin: props => props.FormControl?.margin
  },
  FormLabel: {
    margin: props => props.FormLabel?.margin
  },
  FormGroup: {
    justifyContent: 'center'
  }
});


function InputRadioSquare(props) {
  const classes = useStyles({
    FormControlLabelRoot: {
      margin: '10px'
    }
  });
  const { options, initialDescription, finalDescription, setFormState, formState, questionId } = props;

  const handleChange = (event) => {
    setFormState(prev => ({...prev, [questionId]: event.target.value}));
  };

  return (
    <Styled.Wrapper>
      <FormControl
        component="fieldset"
        className={classes.FormControl}
      >
        <RadioGroup className={classes.FormGroup} value={formState[questionId] ?? ''} onChange={handleChange} row>
          {options.map(([id, option]) => (
            <FormControlLabel
              classes={{
                label: classes.InputLabel,
                root: classes.FormControlLabelRoot
              }}
              value={id}
              control={
                <Radio
                  classes={{
                    root: classes.Input,
                    checked: classes.InputChecked
                  }}
                />
              }
              label={option}
              key={questionId + option}
            />
          ))}
        </RadioGroup>
        <Styled.DescriptionWrapper>
          <Styled.Description>
              {initialDescription}
          </Styled.Description>
          <Styled.Description>
              {finalDescription}
          </Styled.Description>
        </Styled.DescriptionWrapper>
        {/* {formHelperText && <FormHelperText>{formHelperText}</FormHelperText>} */}
      </FormControl>
    </Styled.Wrapper>
  )
}

export default InputRadioSquare
