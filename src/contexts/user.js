import React, { createContext, useContext, useState, useEffect} from "react";
import { parseJwt } from "../helpers";
import { useAuth } from "./auth";
import api from "../services";

const UserContext = createContext();

const UserProvider = (props) => {
  const [userInfos, setUserInfos] = useState({});
  const { authToken } = useAuth();

  useEffect(() => {
    if(!authToken) return;

    const tokenInfos = parseJwt(authToken);
    setUserInfos(prev => ({...prev, ...tokenInfos}));

    api.get('/user/infos')
      .then(({ data }) => setUserInfos(prev => ({...prev, ...data})))
  }, [authToken]);
  
  
  

  return (
    <UserContext.Provider
      value={{ setUserInfos, userInfos }}
      {...props}
    />
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
