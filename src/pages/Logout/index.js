import React, { useEffect } from "react";
import { useAuth } from "../../contexts/auth";
import { Redirect } from "react-router-dom";

const Logout = props => {
  const { setAuthTokens, setTokenIsValid } = useAuth();

  useEffect(() => {
    setAuthTokens();
    setTokenIsValid(false);
    // eslint-disable-next-line
  }, []);

  return <Redirect to="/login" />;
}

export default Logout;