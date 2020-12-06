import React from 'react'
import KpisLogoBlue from "../../logo.svg";
import KpisLogoWhite from "../../logo-white.svg";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
    margin: theme.spacing(1),
  }
}));

function Logo(props) {
  const classes = useStyles();
  const { color = 'blue' } = props;

  const isBlue = color === 'blue';

  return (
    <div className={classes.logo}>
      <img src={isBlue ? KpisLogoBlue : KpisLogoWhite} alt="KPIs Logo" />
    </div>
  )
}

export default Logo;
