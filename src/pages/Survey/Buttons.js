import React from 'react';

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { CircularProgress } from '@material-ui/core';

function Buttons(props) {
  const { isFirstStep, isLastStep, handleBack, handleNext, handleFinish, isValid, isLoading } = props;

  return (
    <Container>
      <Grid container justify="space-between">
        <Button disabled={isFirstStep || isLoading} onClick={handleBack}>
          Voltar
        </Button>
        {isLastStep ? (
          <Button
            disabled={!isValid || isLoading}
            variant="contained"
            color="primary"
            onClick={handleFinish}
          >
            {isLoading ?<CircularProgress size={25} /> : 'Concluir'}
          </Button>
        ) : (
          <Button
            disabled={!isValid}
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            Próximo
          </Button>
        )}
      </Grid>
    </Container>
  )
}

export default Buttons

