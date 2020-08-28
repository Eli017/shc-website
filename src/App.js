import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "./main.scss";
import Header from "./components/Header/Header";
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
import Footer from "./components/Footer/Footer";

const App = () => {
  const { modal } = useModal();

  return (
    <div className="App">
      <Router>
        {modal}
        <Header />
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
          <Redirect from={"*"} to={"/404"} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
