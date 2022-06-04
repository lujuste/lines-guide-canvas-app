import React from "react";
import { CustomThemeProvider } from "./hooks/theme";
import RoutesApp from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./shared/styles/global";
import AppProvider from "./hooks";

function App() {
  return (
    <Router>
      <AppProvider>
        <GlobalStyle />
        <RoutesApp />
      </AppProvider>
    </Router>
  );
}

export default App;
