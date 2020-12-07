import React, { useState, useEffect } from "react";
import { FormLogin } from "../../components";
import { useIsFirstRender, useLogin } from "../../hooks";

const Login = (props) => {
  const [formState, setFormState] = useState({});
  const [formError, setFormError] = useState("");
  const isFirstRender = useIsFirstRender();
  const referer = props.location?.state?.referer || "/survey";
  const { login } = useLogin(referer, setFormError);

  useEffect(() => {
    let isSubscribed = true;
    if (isFirstRender) return;

    login(formState, isSubscribed);

    return () => isSubscribed = false;
      // eslint-disable-next-line
  }, [formState]);

  return <FormLogin formError={formError} setFormState={setFormState} />;
};

export default Login;


