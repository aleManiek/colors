import React, { useEffect } from "react";
import GlobalStyle from "./GlobalStyle";
import Welcome from "./pages/Welcome";
import Settings from "./pages/Settings";
import Game from "./pages/Game";
import Scores from "./pages/Scores";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    const resize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    resize();

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  });

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
          <Route path="/scores">
            <Scores />
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
