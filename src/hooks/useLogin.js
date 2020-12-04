import { useEffect } from "react";

import { useAuth } from "../contexts/auth";
import { useUser } from "../contexts/user";

import { useHistory } from "react-router-dom";
import { parseJwt } from "../helpers";
import api from "../services";

export const useLogin = (referer, setFormError) => {
  const fetcher = (loginInfo) => api.post("/auth/login", loginInfo);

  const { setAuthTokens, tokenIsValid, setTokenIsValid } = useAuth();
  const { setUserInfos } = useUser();
  const history = useHistory();

  const login = async (requestBody) => {
    try {
      const res = await fetcher(requestBody);
      const { token } = res.data;
        const { name, id: userId } = parseJwt(token);

        setFormError("");
        setAuthTokens(token);
        setTokenIsValid(true);
        setUserInfos({
          name,
          userId
        })

    } catch (error) {
      if (error.response) {
        setFormError("O usuário e/ou a senha estão incorretos");
        return;
      }
      if (error.request)
        setFormError("Parece que ocorreu um erro, tente novamente!");
    }


  }

  useEffect(() => {
    if (tokenIsValid) history.push(referer);
  }, [tokenIsValid])


  return { login }
  
};
