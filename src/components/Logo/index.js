import React from 'react'
import KpisLogo from "../../logo.svg";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
    margin: theme.spacing(1),
  }
}));

function Logo(props) {
  const classes = useStyles();

  return (
    <div className={classes.logo}>
      <img src={KpisLogo} alt="KPIs Logo" />
    </div>
  )
}

export default Logo;
