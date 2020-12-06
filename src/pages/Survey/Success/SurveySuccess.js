import React, { useState, useEffect } from 'react';
import { Main, Toolbar } from '../../../components';
import { makeStyles, Typography } from '@material-ui/core';
import { useHistory } from "react-router-dom";


function SurveySuccess() {
  const history = useHistory();
  const [counter, setCounter] = useState(5);

  useEffect(() => {

    if(counter === 0) history.push('/results');
    const timeOut = setTimeout(() => {
      
      setCounter(counter => counter - 1)
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    }
  }, [counter]);

  return (
    <>
      <Toolbar />
      <Main padding="40px 0 0">
        <Typography variant='h4' align="center">Obrigado pela sua resposta!</Typography>
        <Typography variant='h5' align="center">
          Você será redirecionado para a página de resultados em { counter } {`segundo${counter > 1 ? 's' : ''}`}
          </Typography>
      </Main>
    </>
  )
}

export default SurveySuccess
