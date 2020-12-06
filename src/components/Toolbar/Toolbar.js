import React from 'react';

import AppBar from "@material-ui/core/AppBar";
import ToolbarMUI from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Logo from "../Logo";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  grid: {
    position: 'relative'
  },
  name: {
    fontWeight: '700'
  },
  exit: {
    display: 'flex',
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: 'translateY(-50%)'
  }
});

function Toolbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <ToolbarMUI variant="dense">
        <Grid container direction="row" justify="center" wrap="nowrap" alignItems="center" className={classes.grid}>
          <Logo color="white"/>
          <Typography variant="h6" color="inherit" className={classes.name}>
            Key People Insights
          </Typography>
          <Link to="/logout" className={classes.exit}>
            <ExitToAppIcon htmlColor='#fff' />
          </Link>
        </Grid>
      </ToolbarMUI>
    </AppBar>
  )
}

export default Toolbar
