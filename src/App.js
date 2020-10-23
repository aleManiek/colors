import React from "react";
import GlobalStyle from "./GlobalStyle";
import Welcome from "./pages/Welcome";
import Settings from "./pages/Settings";
import Game from "./pages/Game";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="wrapper">
        <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route>
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
