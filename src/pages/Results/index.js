import React, { useEffect, useState } from "react";
import { Card, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { Toolbar, Main, BarChart } from "../../components";
import api from "../../services";


const useStyles = makeStyles({
  container: {
    height: '100%'
  },
  row: {
    height: '50%'
  },
  section: {
    height: '100%'
  },
  subSection: {
    height: '100%'
  },
  title: {
    fontWeight: '700',
    marginTop: '10px'
  }
});

const Results = () => {
  const classes = useStyles();
  const [chartsData, setChartsData] = useState({});

  useEffect(() => {

    api.get('/answers')
      .then(({data}) => setChartsData(data));
  }, []);

  return (
    <>
      <Toolbar />
      <Main>
        <Container className={classes.container}>
          <Grid container direction="row"  spacing={2} className={classes.row}>
            {Object.values(chartsData).map(({ chartProps, data, title }) => (
              <Grid item lg={6} xs={12} className={classes.section} key={title}>
                <Card className={classes.subSection}>
                  <Typography variant="body1" align="center" className={classes.title}>{title}</Typography>
                  <BarChart 
                    data={data}
                    {...chartProps}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Main>
    </>
  )
  
}

export default Results