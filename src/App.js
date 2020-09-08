import React, { useEffect, useState } from "react";
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
import SignIn from "./pages/SignIn/SignIn";

const firebaseDebugConfig = {
  apiKey: "AIzaSyCP1SnQDaHgxNFp07PKV6-Ji4qw5rXhrqY",
  authDomain: "shc-website-b093e.firebaseapp.com",
  databaseURL: "https://shc-website-b093e.firebaseio.com",
  projectId: "shc-website-b093e",
  storageBucket: "shc-website-b093e.appspot.com",
  messagingSenderId: "585652791539",
  appId: "1:585652791539:web:343aac84ccc5f851d8ef86",
  measurementId: "G-9CZHQBB0MM",
};

initializeApp(firebaseDebugConfig);

export const AuthContext = React.createContext(null);

const App = () => {
  const [loginSession, setLoginSession] = useState(null);

  const getFirebaseSession = () => {
    const user = window.sessionStorage.getItem(`firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`);
    return user ? setLoginSession(user) : null;
  };

  useEffect(() => {
    getFirebaseSession();
  });

  const { modal } = useModal();

  return (
    <div className="App">
      <AuthContext.Provider value={{ loginSession, setLoginSession }}>
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
            <Route exact path={"/signIn"} component={SignIn} />
            <Route exact path={"/signUp"} component={SignUp} />
            <Redirect from={"*"} to={"/404"} />
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
