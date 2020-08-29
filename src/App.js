import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { initializeApp } from "firebase";
import firebaseConfig from "./firebase";
import "./main.scss";
import Home from "./pages/Home/Home";
import HonorsCollege from "./pages/HonorsCollege/HonorsCollege";
import Membership from "./pages/Membership/Membership";
import Events from "./pages/Events/Events";
import Calendar from "./pages/Calendar/Calendar";
import CommunityEngagement from "./pages/CommunityEngagement/CommunityEngagement";
import Officers from "./pages/Officers/Officers";
import Contact from "./pages/Contact/Contact";
import Page404 from "./pages/404/404";
import { useModal } from "./contexts/useModal";
import SignUp from "./pages/SignUp/SignUp";

initializeApp(firebaseConfig);

const App = () => {
  const { modal } = useModal();

  return (
    <div className="App">
      <Router>
        {modal}
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/honors"} component={HonorsCollege} />
          <Route exact path={"/membership"} component={Membership} />
          <Route exact path={"/events"} component={Events} />
          <Route exact path={"/community"} component={CommunityEngagement} />
          <Route exact path={"/calendar"} component={Calendar} />
          <Route exact path={"/officers"} component={Officers} />
          <Route exact path={"/contact"} component={Contact} />
          <Route exact path={"/404"} component={Page404} />
          <Route exact path={"/signUp"} component={SignUp} />
          <Redirect from={"*"} to={"/404"} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
