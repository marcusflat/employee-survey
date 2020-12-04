import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;
  const { authToken } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        authToken ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { referer: props.location } }}
          />
        )
      }
    />
  );
};


export default PrivateRoute;