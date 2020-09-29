import React, { useContext, useEffect, useState } from "react";
import * as styles from "./accountDashboard.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { AuthContext } from "../../App";
import { firestore } from "firebase";

const AccountDashboard = ({ history }) => {
  const authContext = useContext(AuthContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (authContext.loginSession === null) {
      history.push("/signIn");
    } else {
      grabFirebaseUser();
    }
  });

  const grabFirebaseUser = () => {
    const db = firestore();
    let userRef = db.collection("users");
    let loginSession = JSON.parse(authContext.loginSession);
    userRef
      .doc(loginSession.email ? loginSession.email : "null")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setUser(doc.data());
        } else {
          setUser(loginSession.email ? loginSession.email : "null");
        }
      });
  };

  return (
    <React.Fragment>
      <Header />
      <main className={styles.accountDashboard}>
        <p>Welcome {user?.name ?? ""}, this part of the site is under construction.</p>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default AccountDashboard;
