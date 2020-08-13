import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/main.scss";
import Header from "/components/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path={"/"} component={() => <Home />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
