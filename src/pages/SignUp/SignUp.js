import React, { useContext, useEffect, useState } from "react";
import { firestore, auth } from "firebase";
import * as styles from "./signUp.module.scss";
import MySHCLogo from "../../assets/icons/MySHC.png";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../App";

const SignUp = ({ history }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firebaseMessage, setFirebaseMessage] = useState(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext.loginSession !== null) {
      history.push("/accountDashboard");
    }
  });

  const addFirebaseUser = () => {
    const db = firestore();
    let userRef = db.collection("users");
    userRef
      .doc(email)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setFirebaseMessage("User Already Exists!");
        } else {
          userRef
            .doc(email)
            .set({
              email: email,
              name: name,
            })
            .then(() => {
              auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                  setFirebaseMessage("User Created Successfully!");
                  history.push("/signIn");
                })
                .catch((e) => {
                  setFirebaseMessage(e.message);
                });
            })
            .catch((e) => {
              setFirebaseMessage("Error Registering, Contact Admin");
              console.log(e.message);
            });
        }
      });
  };

  const checkRequiredFields = () => {
    if (email.length === 0) {
      setFirebaseMessage("Email is required");
      return false;
    } else if (name.length === 0) {
      setFirebaseMessage("Name is required");
      return false;
    } else if (password.length === 0) {
      setFirebaseMessage("Password is required");
      return false;
    } else if (confirmPassword !== password) {
      setFirebaseMessage("Passwords must match");
      return false;
    } else {
      return true;
    }
  };

  const submitForm = () => {
    if (checkRequiredFields() === false) {
      return;
    }
    if (!email.includes("@bsu.edu")) {
      setFirebaseMessage("Not a valid BSU email");
    } else {
      addFirebaseUser();
    }
  };

  return (
    <main className={styles.signUp}>
      {firebaseMessage && (
        <section className={styles.messageSection}>
          <h3 className={styles.message}>{firebaseMessage}</h3>
          <button onClick={() => setFirebaseMessage(null)}>X</button>
        </section>
      )}
      <section className={styles.signUpForm}>
        <img src={MySHCLogo} alt={"MySHC Logo"} title={"MySHC Logo"} className={styles.logo} />
        <form>
          <h1 className={styles.formTitle}>Sign Up</h1>
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
          <label htmlFor={"name"} className={styles.label}>
            * Name:
          </label>
          <input
            required={true}
            type={"text"}
            name={"name"}
            placeholder={"Charlie Cardinal"}
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          <label htmlFor={"confirmPassword"} className={styles.label}>
            * Confirm Password:
          </label>
          <input
            required={true}
            type={"password"}
            name={"confirmPassword"}
            className={styles.input}
            value={confirmPassword}
            placeholder={"ChirpChirp20!"}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type={"button"} className={styles.submit} onClick={() => submitForm()}>
            Submit
          </button>
          <p>Required Fields are Marked with *</p>
          <article className={styles.account}>
            <p>Have an Account?</p>
            <NavLink to={"/signIn"}>Sign-In Here</NavLink>
          </article>
        </form>
      </section>
    </main>
  );
};

export default SignUp;
