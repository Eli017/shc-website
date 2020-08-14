import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "./styles/main.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import HonorsCollege from "./pages/HonorsCollege";
import Membership from "./pages/Membership";
import Events from "./pages/Events";
import CommunityEngagement from "./pages/CommunityEngagement";
import Officers from "./pages/Officers";
import Contact from "./pages/Contact";
import Page404 from "./pages/404";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/honors"} component={HonorsCollege} />
          <Route exact path={"/membership"} component={Membership} />
          <Route exact path={"/events"} component={Events} />
          <Route exact path={"/community"} component={CommunityEngagement} />
          <Route exact path={"/officers"} component={Officers} />
          <Route exact path={"/contact"} component={Contact} />
          <Route exact path={"/404"} component={Page404} />
          <Redirect from={"*"} to={"/404"} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
