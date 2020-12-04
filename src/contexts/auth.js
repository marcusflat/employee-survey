import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../services";

const AuthContext = createContext();

const AuthProvider = props => {
  const existingTokens = localStorage.getItem("token");
  const [authToken, setAuthToken] = useState(() => existingTokens);
  const [tokenIsValid, setTokenIsValid] = useState(false);

  const setToken = (token = "") => {
    localStorage.setItem("token", token);
    setAuthToken(token);
    !token && setTokenIsValid(false);
  };

  useEffect(() => {
    async function verifyToken(token) {
      try {
        const { data: { isValid } } = await api.post('/auth/verify', null, {headers:{
          "Authorization" : `Bearer ${token}`
        }});
    
        setTokenIsValid(isValid ? true : false);
        if(!isValid) setToken();
        
      } catch (error) {
        setToken();
      }
    }
    verifyToken(existingTokens);
    // eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider
      value={{ authToken, setAuthTokens: setToken, setTokenIsValid, tokenIsValid }}
      {...props}
    />
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
