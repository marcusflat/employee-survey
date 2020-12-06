import React from "react";
import style from "./App.css";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { AuthProvider } from "./contexts/auth";
import { UserProvider } from "./contexts/user";
import Routes from "./routes";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0067AC",
    },
    secondary: {
      main: "#8DCDF0"
    }
  },
});

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <Routes /> 
        </ThemeProvider>
      </UserProvider>
    </AuthProvider>
    
  );
}

export default App;
