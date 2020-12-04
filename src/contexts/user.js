import React, { createContext, useContext, useState} from "react";

const UserContext = createContext();

const UserProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfos, setUserInfos] = useState({});
  
  
  const setLoggedIn = (param = false) => { 
    setIsLoggedIn(param);
  }

  return (
    <UserContext.Provider
      value={{ userIsLogged: isLoggedIn, setUserLogged: setLoggedIn, setUserInfos, userInfos }}
      {...props}
    />
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
