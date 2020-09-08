import React, { useContext, useEffect, useState } from "react";
import * as styles from "./signIn.module.scss";
import MySHCLogo from "../../assets/icons/MySHC.png";
import { NavLink } from "react-router-dom";
import { firestore, auth } from "firebase";
import { AuthContext } from "../../App";

const SignIn = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firebaseMessage, setFirebaseMessage] = useState(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext.loginSession !== null) {
      history.push("/accountDashboard");
    }
  });

  const checkRequiredFields = () => {
    if (email.length === 0) {
      setFirebaseMessage("Email is required");
      return false;
    } else if (password.length === 0) {
      setFirebaseMessage("Password is required");
      return false;
    } else {
      return true;
    }
  };

  const grabUserByEmail = (email) => {
    const db = firestore();
    let userRef = db.collection("users").doc(email);
    userRef.get().then(function (doc) {
      if (doc.exists) {
        console.log(doc.data());
        let document = doc.data();
        authContext.setLoginSession(document);
        history.push("/accountDashboard");
      } else {
        console.log("User not found!");
      }
    });
  };

  const logInUser = () => {
    const firebaseAuth = auth();
    firebaseAuth.setPersistence(auth.Auth.Persistence.SESSION).then(() => {
      firebaseAuth
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          if (res.user) {
            grabUserByEmail(res.user.email);
          }
        })
        .catch((e) => {
          setFirebaseMessage(e.message);
        });
    });
  };

  const submitForm = () => {
    if (checkRequiredFields() === false) {
      return;
    }
    if (!email.includes("@bsu.edu")) {
      setFirebaseMessage("Not a valid BSU email");
    } else {
      logInUser();
    }
  };

  return (
    <main className={styles.signIn}>
      {firebaseMessage && (
        <section className={styles.messageSection}>
          <h3 className={styles.message}>{firebaseMessage}</h3>
          <button onClick={() => setFirebaseMessage(null)}>X</button>
        </section>
      )}
      <section className={styles.signInForm}>
        <img src={MySHCLogo} alt={"MySHC Logo"} title={"MySHC Logo"} className={styles.logo} />
        <form>
          <h1 className={styles.formTitle}>Sign In</h1>
          <label htmlFor={"email"} className={styles.label}>
            * BSU Email:
          </label>
          <input
            required={true}
            type={"email"}
            name={"email"}
            placeholder={"ccardinal@bsu.edu"}
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor={"password"} className={styles.label}>
            * Password:
          </label>
          <input
            required={true}
            type={"password"}
            name={"password"}
            className={styles.input}
            value={password}
            placeholder={"ChirpChirp20!"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type={"button"} className={styles.submit} onClick={() => submitForm()}>
            Submit
          </button>
          <p>Required Fields are Marked with *</p>
        </form>
        <article className={styles.account}>
          <p>Don't have an Account?</p>
          <NavLink to={"/signUp"}>Register Here</NavLink>
        </article>
      </section>
    </main>
  );
};

export default SignIn;
