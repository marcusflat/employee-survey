import React, { useState, useEffect } from "react";
import { FormRegistration } from "../../components";
import { useIsFirstRender, useLogin } from "../../hooks";
import api from "../../services";

const Registration = props => {
  const [formState, setFormState] = useState({});
  const [formError, setFormError] = useState("");
  const isFirstRender = useIsFirstRender();
  const fetcher = (loginInfo, url) => api.post(url, loginInfo);
  const referer = props.location?.state?.referer || "/survey";
  const { login } = useLogin(referer, setFormError);

  useEffect(() => {
    if (isFirstRender) return;
    
    fetcher(formState, "/user")
      .then(async (res) => {
        const { email, password } = formState;

        login({ email, password });

      })
      .catch((error) => {
        if (error.response) {
          const { data: { error: apiError } } = error.response;
          setFormError(apiError.message);
          return;
        }
        if (error.request)
          setFormError("Parece que ocorreu um erro, tente novamente!");
      });
      // eslint-disable-next-line
  }, [formState]);
  
  // if (tokenIsValid) return <Redirect to={referer} />;

  return <FormRegistration formError={formError} setFormState={setFormState} />;
}

export default Registration